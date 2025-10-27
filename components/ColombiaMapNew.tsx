"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface Department {
  name: string;
  path: string;
}

interface ColombiaMapProps {
  onDepartmentClick?: (departmentName: string) => void;
}

export default function ColombiaMapNew({ onDepartmentClick }: ColombiaMapProps) {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);
  const [departments, setDepartments] = useState<Department[]>([]);
  const [viewBox, setViewBox] = useState("0 0 800 1000");

  useEffect(() => {
    // Cargar el GeoJSON
    console.log("Intentando cargar mapa...");
    fetch("/colombia-geo.json")
      .then((res) => {
        console.log("Respuesta recibida:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Datos cargados, features:", data.features.length);

        // Primero calcular el bounding box de TODAS las coordenadas
        let minX = Infinity,
          minY = Infinity,
          maxX = -Infinity,
          maxY = -Infinity;

        // Primera pasada: calcular bounding box global
        data.features.forEach((feature: any) => {
          const coords = feature.geometry.coordinates[0];
          coords.forEach((coord: number[]) => {
            const [lng, lat] = coord;
            minX = Math.min(minX, lng);
            maxX = Math.max(maxX, lng);
            minY = Math.min(minY, lat);
            maxY = Math.max(maxY, lat);
          });
        });

        console.log("Bounding box:", { minX, maxX, minY, maxY });

        // Calcular escala para que el mapa tenga un tamaño razonable
        const scale = 100;
        const width = (maxX - minX) * scale;
        const height = (maxY - minY) * scale;

        console.log("ViewBox size:", { width, height });

        // Segunda pasada: convertir todas las coordenadas usando el mismo bounding box
        const depts: Department[] = data.features.map((feature: any) => {
          const coords = feature.geometry.coordinates[0];

          // Convertir coordenadas geográficas a path SVG
          const pathData = coords
            .map((coord: number[], i: number) => {
              const [lng, lat] = coord;
              // Escalar y invertir Y (las coordenadas geográficas tienen Y invertido)
              const x = (lng - minX) * scale;
              const y = (maxY - lat) * scale;
              return `${i === 0 ? "M" : "L"} ${x},${y}`;
            })
            .join(" ") + " Z";

          return {
            name: feature.properties.NOMBRE_DPT,
            path: pathData,
          };
        });

        console.log("Departamentos procesados:", depts.length);
        setDepartments(depts);
        setViewBox(`0 0 ${width} ${height}`);
      })
      .catch((error) => console.error("Error loading map:", error));
  }, []);

  if (departments.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-aico-green font-semibold">Cargando mapa...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <svg
        viewBox={viewBox}
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Definiciones */}
        <defs>
          <filter id="dropShadow">
            <feDropShadow dx="0" dy="2" stdDeviation="4" floodOpacity="0.4"/>
          </filter>

          <linearGradient id="countryBg" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="100%" stopColor="#fde68a" />
          </linearGradient>
        </defs>

        {/* Departamentos */}
        {departments.map((dept) => (
          <g
            key={dept.name}
            onMouseEnter={() => setHoveredDept(dept.name)}
            onMouseLeave={() => setHoveredDept(null)}
            onClick={() => onDepartmentClick?.(dept.name)}
            style={{ cursor: "pointer" }}
          >
            <motion.path
              d={dept.path}
              fill={hoveredDept === dept.name ? "#1b7a3e" : "#fef3c7"}
              stroke="#1a1a1a"
              strokeWidth="1"
              filter={hoveredDept === dept.name ? "url(#dropShadow)" : ""}
              initial={{ opacity: 0.7 }}
              animate={{
                opacity: hoveredDept === dept.name ? 1 : 0.85,
                scale: hoveredDept === dept.name ? 1.02 : 1,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
                duration: 0.2,
              }}
              style={{
                transformOrigin: "center",
                transformBox: "fill-box",
              }}
            />
          </g>
        ))}
      </svg>

      {/* Tooltip flotante */}
      {hoveredDept && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border-2 border-aico-green"
        >
          <p className="text-base font-bold text-aico-black">
            {hoveredDept}
          </p>
          <p className="text-xs text-aico-green mt-1">Click para más información</p>
        </motion.div>
      )}
    </div>
  );
}
