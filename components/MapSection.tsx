"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import ColombiaMapSimple from "./ColombiaMapSimple";

export default function MapSection() {
  const [selectedDepartment, setSelectedDepartment] = useState<string | null>(
    null
  );
  const [showMap, setShowMap] = useState(false);

  const handleDepartmentClick = (departmentId: string) => {
    setSelectedDepartment(departmentId);
    console.log("Departamento seleccionado:", departmentId);
  };

  return (
    <section className="min-h-screen pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Lema AICO */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="bg-white/80 backdrop-blur-sm border-2 border-aico-green/30 rounded-2xl p-8 text-center relative overflow-hidden shadow-xl">
            {/* Efecto de brillo animado */}
            <motion.div
              animate={{
                x: ["-100%", "200%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
              style={{ width: "50%" }}
            />

            <h1 className="text-3xl md:text-5xl font-bold relative z-10">
              <span className="bg-gradient-to-r from-aico-red via-aico-black to-aico-green bg-clip-text text-transparent">
                Recuperar la tierra para recuperar todo
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-aico-green mt-4 font-bold">
              Autoridad • Autonomía • Cultura
            </p>
          </div>
        </motion.div>

        {/* Contenedor del Mapa */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white/70 backdrop-blur-md border-2 border-aico-red/30 rounded-3xl p-8 md:p-12 shadow-2xl shadow-aico-green/20"
        >
          {/* Mapa de Colombia */}
          <div className="relative aspect-[3/4] md:aspect-[4/3] max-w-2xl mx-auto mb-8">
            {showMap ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 bg-white rounded-2xl flex items-center justify-center border-2 border-aico-green/30 shadow-inner p-4"
              >
                <ColombiaMapSimple onDepartmentClick={handleDepartmentClick} />
              </motion.div>
            ) : (
              <div className="absolute inset-0 bg-gradient-to-br from-aico-green/10 to-aico-red/10 rounded-2xl flex items-center justify-center border-2 border-aico-green/20 shadow-inner">
                {/* Placeholder inicial */}
                <div className="text-center">
                  <motion.div
                    animate={{
                      scale: [1, 1.05, 1],
                      rotate: [0, 2, -2, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="text-white/40 text-6xl mb-4"
                  >
                    🗺️
                  </motion.div>
                  <p className="text-aico-black/70 text-lg font-medium">
                    Mapa Interactivo de Colombia
                  </p>
                  <p className="text-aico-green text-sm mt-2 font-semibold">
                    Haz clic en "Pueblos" para ver el mapa
                  </p>
                </div>

                {/* Efecto de partículas flotantes */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -30, 0],
                      x: [0, Math.random() * 20 - 10, 0],
                      opacity: [0.3, 0.6, 0.3],
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.3,
                    }}
                    className="absolute w-2 h-2 bg-aico-green/50 rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + (i % 3) * 20}%`,
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* Botones de navegación */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setShowMap(!showMap)}
              className={`py-4 px-6 rounded-xl font-semibold text-lg relative overflow-hidden border-2 transition-all ${
                showMap
                  ? "bg-gradient-to-r from-aico-green to-aico-green/80 text-white border-aico-green shadow-lg shadow-aico-green/30"
                  : "bg-gradient-to-r from-aico-red to-aico-red/80 text-white border-aico-red shadow-lg shadow-aico-red/30 hover:shadow-xl"
              }`}
            >
              <motion.div
                className="absolute inset-0 bg-white/20"
                initial={{ x: "-100%" }}
                whileHover={{ x: "100%" }}
                transition={{ duration: 0.5 }}
              />
              <span className="relative z-10">
                {showMap ? "Ocultar Mapa" : "Pueblos"}
              </span>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled
              className="bg-gray-200 text-gray-500 py-4 px-6 rounded-xl font-semibold text-lg cursor-not-allowed relative overflow-hidden border-2 border-gray-300"
            >
              <span className="relative z-10">Electos 2023</span>
              <div className="absolute top-2 right-2 text-xs bg-gray-300 px-2 py-1 rounded">
                Próximamente
              </div>
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              disabled
              className="bg-gray-200 text-gray-500 py-4 px-6 rounded-xl font-semibold text-lg cursor-not-allowed relative overflow-hidden border-2 border-gray-300"
            >
              <span className="relative z-10">Candidatos 2026</span>
              <div className="absolute top-2 right-2 text-xs bg-gray-300 px-2 py-1 rounded">
                Próximamente
              </div>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
