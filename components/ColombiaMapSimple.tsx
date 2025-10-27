"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ColombiaMapProps {
  onDepartmentClick?: (departmentName: string) => void;
}

// Función para calcular el centroide de un path SVG
function getPathCentroid(path: SVGPathElement): { x: number; y: number } {
  const bbox = path.getBBox();
  return {
    x: bbox.x + bbox.width / 2,
    y: bbox.y + bbox.height / 2,
  };
}

// Función para calcular el centroide de un polígono GeoJSON
function getPolygonCentroid(coordinates: number[][][]): { lon: number; lat: number } {
  let totalX = 0;
  let totalY = 0;
  let pointCount = 0;

  coordinates[0].forEach(([lon, lat]) => {
    totalX += lon;
    totalY += lat;
    pointCount++;
  });

  return {
    lon: totalX / pointCount,
    lat: totalY / pointCount,
  };
}

// Función para verificar si un punto está dentro de un polígono (ray casting algorithm)
function pointInPolygon(point: { x: number; y: number }, polygon: number[][]): boolean {
  let inside = false;
  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][0];
    const yi = polygon[i][1];
    const xj = polygon[j][0];
    const yj = polygon[j][1];

    const intersect = ((yi > point.y) !== (yj > point.y)) &&
      (point.x < (xj - xi) * (point.y - yi) / (yj - yi) + xi);

    if (intersect) inside = !inside;
  }
  return inside;
}

// Cargar nombres de departamentos del GeoJSON
async function loadDepartmentMapping() {
  try {
    const response = await fetch("/colombia-geo.json");
    const geoData = await response.json();

    // Crear un mapa con centroides y coordenadas completas
    const departments = geoData.features.map((feature: any) => ({
      name: feature.properties.NOMBRE_DPT,
      centroid: getPolygonCentroid(feature.geometry.coordinates),
      coordinates: feature.geometry.coordinates[0], // Polígono exterior
    }));

    return departments;
  } catch (error) {
    console.error("Error loading GeoJSON:", error);
    return [];
  }
}

export default function ColombiaMapSimple({ onDepartmentClick }: ColombiaMapProps) {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);
  const [isInteractive, setIsInteractive] = useState(false);
  const objectRef = useRef<HTMLObjectElement>(null);

  useEffect(() => {
    if (!objectRef.current) return;

    const handleLoad = async () => {
      try {
        // Cargar los centroides de los departamentos del GeoJSON
        const departmentCentroids = await loadDepartmentMapping();
        console.log("Loaded departments:", departmentCentroids.map((d: any) => d.name));

        const svgDoc = objectRef.current?.contentDocument;
        if (!svgDoc) {
          console.log("No se pudo acceder al SVG");
          return;
        }

        const svgElement = svgDoc.querySelector("svg");
        if (svgElement) {
          // Asegurar que el SVG use todo el espacio disponible
          svgElement.setAttribute("width", "100%");
          svgElement.setAttribute("height", "100%");
          svgElement.style.display = "block";

          // El SVG original es 734x939 (más alto que ancho)
          // Establecer viewBox si no existe
          if (!svgElement.getAttribute("viewBox")) {
            svgElement.setAttribute("viewBox", "0 0 734.80591 939.71912");
          }

          // meet = todo el contenido visible, centrado
          svgElement.setAttribute("preserveAspectRatio", "xMidYMid meet");
        }

        const paths = svgDoc.querySelectorAll("path");
        console.log(`Found ${paths.length} paths`);

        // Obtener las dimensiones del viewBox para normalizar coordenadas
        const viewBox = svgElement?.getAttribute("viewBox")?.split(" ");
        const svgWidth = parseFloat(viewBox?.[2] || "734.80591");
        const svgHeight = parseFloat(viewBox?.[3] || "939.71912");

        // Calcular los límites geográficos de Colombia (aproximados)
        const geoMinLon = -79.0;  // Extremo oeste
        const geoMaxLon = -66.8;  // Extremo este
        const geoMinLat = -4.2;   // Extremo sur
        const geoMaxLat = 13.5;   // Extremo norte

        // Función para convertir coordenadas geográficas a coordenadas SVG
        const geoToSvg = (lon: number, lat: number) => {
          const x = ((lon - geoMinLon) / (geoMaxLon - geoMinLon)) * svgWidth;
          const y = svgHeight - ((lat - geoMinLat) / (geoMaxLat - geoMinLat)) * svgHeight;
          return { x, y };
        };

        // Crear un mapa de paths agrupados por departamento basado en proximidad
        const pathToDepartment = new Map<SVGPathElement, string>();

        // Convertir las coordenadas geográficas a SVG para cada departamento
        const departmentsWithSvgCoords = departmentCentroids.map((dept: any) => ({
          ...dept,
          svgPolygon: dept.coordinates.map(([lon, lat]: number[]) => {
            const coords = geoToSvg(lon, lat);
            return [coords.x, coords.y];
          }),
        }));

        paths.forEach((path) => {
          const pathCentroid = getPathCentroid(path);

          // Primero intentar encontrar si el centroide está dentro de algún polígono
          let foundDept = null;
          for (const dept of departmentsWithSvgCoords) {
            if (pointInPolygon(pathCentroid, dept.svgPolygon)) {
              foundDept = dept;
              break;
            }
          }

          // Si no está dentro de ningún polígono, usar el departamento más cercano
          if (!foundDept) {
            let closestDept = departmentsWithSvgCoords[0];
            let minDistance = Infinity;

            departmentsWithSvgCoords.forEach((dept: any) => {
              const svgCoords = geoToSvg(dept.centroid.lon, dept.centroid.lat);
              const distance = Math.sqrt(
                Math.pow(pathCentroid.x - svgCoords.x, 2) +
                Math.pow(pathCentroid.y - svgCoords.y, 2)
              );

              if (distance < minDistance) {
                minDistance = distance;
                closestDept = dept;
              }
            });

            foundDept = closestDept;
          }

          pathToDepartment.set(path, foundDept.name);
        });

        // Aplicar estilos y eventos a los paths
        paths.forEach((path) => {
          // Estilo inicial
          path.setAttribute("fill", "#fef3c7");
          path.setAttribute("stroke", "#1a1a1a");
          path.setAttribute("stroke-width", "1.5");
          path.style.cursor = "pointer";
          path.style.transition = "all 0.2s ease";

          const deptName = pathToDepartment.get(path) || "Departamento desconocido";

          // Eventos
          path.addEventListener("mouseenter", () => {
            path.setAttribute("fill", "#1b7a3e");
            path.setAttribute("stroke-width", "2.5");
            setHoveredDept(deptName);
          });

          path.addEventListener("mouseleave", () => {
            path.setAttribute("fill", "#fef3c7");
            path.setAttribute("stroke-width", "1.5");
            setHoveredDept(null);
          });

          path.addEventListener("click", () => {
            console.log(`Clicked on: ${deptName}`);
            onDepartmentClick?.(deptName);
          });
        });

        console.log("Department mapping completed:", pathToDepartment.size, "paths mapped");
        setIsInteractive(true);
      } catch (error) {
        console.error("Error making map interactive:", error);
      }
    };

    objectRef.current.addEventListener("load", handleLoad);

    return () => {
      objectRef.current?.removeEventListener("load", handleLoad);
    };
  }, [onDepartmentClick]);

  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full flex items-center justify-center"
      >
        <object
          ref={objectRef}
          data="/colombia_departments.svg"
          type="image/svg+xml"
          className="w-full h-full"
          style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }}
        >
          {/* Fallback si el object no funciona */}
          <img
            src="/colombia_departments.svg"
            alt="Mapa de Colombia por departamentos"
            className="w-full h-full object-contain"
          />
        </object>
      </motion.div>

      {/* Tooltip flotante */}
      {hoveredDept && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border-2 border-aico-green pointer-events-none"
        >
          <p className="text-base font-bold text-aico-black">
            {hoveredDept}
          </p>
          <p className="text-xs text-aico-green mt-1">Click para más información</p>
        </motion.div>
      )}

      {/* Indicador de estado */}
      {!isInteractive && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-lg text-xs font-semibold"
        >
          Cargando interactividad...
        </motion.div>
      )}
    </div>
  );
}
