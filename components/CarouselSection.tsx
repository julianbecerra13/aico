"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Image from "next/image";
import { aicoImages, temporaryUrls } from "@/lib/images";

interface Person {
  id: number;
  name: string;
  position: string;
  image: string;
}

export default function CarouselSection() {
  // Datos de representantes de AICO
  const people: Person[] = aicoImages.representatives.map((rep, index) => ({
    id: rep.id,
    name: rep.name,
    position: rep.position,
    image: temporaryUrls.representatives[index] || temporaryUrls.representatives[0],
  }));

  // Duplicamos el array para crear el efecto infinito
  const duplicatedPeople = [...people, ...people, ...people];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-6">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-aico-red via-aico-black to-aico-green bg-clip-text text-transparent">
              Nuestros Representantes
            </span>
          </h2>
          <p className="text-aico-green text-lg font-semibold">
            Autoridades al servicio del pueblo
          </p>
        </motion.div>

        {/* Carrusel infinito */}
        <div className="relative overflow-hidden">
          {/* Gradientes laterales para efecto fade */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        {/* Contenedor del carrusel */}
        <motion.div
          animate={{
            x: [0, -33.33 * (people.length / 3) + "%"],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="flex gap-8 px-8"
        >
          {duplicatedPeople.map((person, index) => (
            <motion.div
              key={`${person.id}-${index}`}
              whileHover={{ scale: 1.05, y: -10 }}
              className="flex-shrink-0 w-64"
            >
              <div className="relative group">
                {/* Marco circular con animación */}
                <div className="relative w-48 h-48 mx-auto mb-6">
                  {/* Anillo exterior animado */}
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 10,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="absolute inset-0 rounded-full bg-gradient-to-r from-aico-red via-aico-green to-aico-gold p-1"
                  >
                    <div className="w-full h-full rounded-full bg-white shadow-inner" />
                  </motion.div>

                  {/* Imagen de la persona */}
                  <div className="absolute inset-2 rounded-full overflow-hidden border-4 border-white shadow-lg">
                    <div className="relative w-full h-full bg-gradient-to-br from-aico-green/20 to-aico-red/20">
                      <Image
                        src={person.image}
                        alt={person.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 200px, 192px"
                      />
                    </div>
                  </div>

                  {/* Brillo al hacer hover */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      background:
                        "radial-gradient(circle at 50% 0%, rgba(255,215,0,0.3) 0%, transparent 60%)",
                    }}
                  />
                </div>

                {/* Información */}
                <div className="text-center">
                  <h3 className="text-aico-black font-bold text-xl mb-2">
                    {person.name}
                  </h3>
                  <p className="text-aico-green font-semibold">{person.position}</p>

                  {/* Badge decorativo */}
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    className="mt-3 inline-block bg-gradient-to-r from-aico-red/20 to-aico-green/20 border border-aico-green/40 px-4 py-1 rounded-full text-xs text-aico-black font-semibold shadow-sm"
                  >
                    AICO
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
      </div>

      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 0.5, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.5,
            }}
            className="absolute w-1 h-1 bg-aico-green/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${50 + Math.random() * 30}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
}
