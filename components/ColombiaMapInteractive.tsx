"use client";

import { motion } from "framer-motion";
import { useState, useEffect, useRef } from "react";

interface ColombiaMapProps {
  onDepartmentClick?: (departmentName: string) => void;
}

export default function ColombiaMapInteractive({ onDepartmentClick }: ColombiaMapProps) {
  const [hoveredDept, setHoveredDept] = useState<string | null>(null);
  const [svgContent, setSvgContent] = useState<string>("");
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Cargar el SVG
    fetch("/colombia_departments.svg")
      .then((res) => res.text())
      .then((svgText) => {
        setSvgContent(svgText);
      })
      .catch((error) => console.error("Error loading SVG:", error));
  }, []);

  useEffect(() => {
    if (!svgContent || !svgContainerRef.current) return;

    const container = svgContainerRef.current;
    const svgElement = container.querySelector("svg");
    if (!svgElement) return;

    // Asegurar que el SVG se ajuste al contenedor
    svgElement.setAttribute("width", "100%");
    svgElement.setAttribute("height", "100%");
    svgElement.style.maxWidth = "100%";
    svgElement.style.maxHeight = "100%";
    svgElement.style.objectFit = "contain";

    // Obtener todos los paths del SVG (cada uno representa un departamento)
    const paths = svgElement.querySelectorAll("path");

    console.log(`Found ${paths.length} paths in SVG`);

    paths.forEach((path, index) => {
      // Establecer estilo inicial
      path.setAttribute("fill", "#fef3c7");
      path.setAttribute("stroke", "#1a1a1a");
      path.setAttribute("stroke-width", "1.5");
      path.style.cursor = "pointer";
      path.style.transition = "all 0.2s ease";

      // Agregar eventos de hover
      const handleMouseEnter = () => {
        path.setAttribute("fill", "#1b7a3e");
        path.setAttribute("stroke-width", "2");
        path.style.filter = "drop-shadow(0 4px 6px rgba(0, 0, 0, 0.3))";
        setHoveredDept(`Departamento ${index + 1}`);
        console.log(`Hover on department ${index + 1}`);
      };

      const handleMouseLeave = () => {
        path.setAttribute("fill", "#fef3c7");
        path.setAttribute("stroke-width", "1.5");
        path.style.filter = "none";
        setHoveredDept(null);
      };

      const handleClick = () => {
        onDepartmentClick?.(`Departamento ${index + 1}`);
        console.log(`Clicked on department ${index + 1}`);
      };

      path.addEventListener("mouseenter", handleMouseEnter);
      path.addEventListener("mouseleave", handleMouseLeave);
      path.addEventListener("click", handleClick);
    });
  }, [svgContent, onDepartmentClick]);

  if (!svgContent) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-aico-green font-semibold">Cargando mapa...</div>
      </div>
    );
  }

  return (
    <div className="relative w-full h-full">
      <motion.div
        ref={svgContainerRef}
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full h-full"
        dangerouslySetInnerHTML={{ __html: svgContent }}
      />

      {/* Tooltip flotante */}
      {hoveredDept && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.8, y: 10 }}
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white/95 backdrop-blur-sm px-6 py-3 rounded-xl shadow-xl border-2 border-aico-green pointer-events-none z-10"
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
