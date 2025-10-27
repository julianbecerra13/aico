"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface SideImagesProps {
  side: "left" | "right";
}

export default function SideImages({ side }: SideImagesProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Colores de AICO para mostrar
  const colors = [
    { bg: "bg-gradient-to-br from-aico-green to-aico-green/80", name: "Verde AICO" },
    { bg: "bg-gradient-to-br from-aico-red to-aico-red/80", name: "Rojo AICO" },
    { bg: "bg-gradient-to-br from-aico-black to-gray-700", name: "Negro AICO" },
    { bg: "bg-gradient-to-br from-aico-green/80 to-aico-red/80", name: "Verde-Rojo" },
  ];

  const positions = [0, 1, 2, 3]; // 4 posiciones verticales

  // Cambiar color cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % colors.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [colors.length]);

  return (
    <div
      className={`fixed ${
        side === "left" ? "left-12" : "right-12"
      } top-32 bottom-32 flex flex-col justify-between gap-6 w-32 z-40 hidden xl:flex`}
    >
      {positions.map((position) => (
        <div
          key={position}
          className="relative aspect-square rounded-2xl overflow-hidden border-2 border-white/30 shadow-lg shadow-aico-red/20"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={`${side}-${position}-${currentImageIndex}`}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className={`relative w-full h-full overflow-hidden ${
                colors[(currentImageIndex + position) % colors.length].bg
              }`}
            >
              {/* Efecto futurista de brillo */}
              <motion.div
                animate={{
                  opacity: [0.3, 0.7, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/10 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.2) 0%, transparent 70%)",
                }}
              />
            </motion.div>
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
