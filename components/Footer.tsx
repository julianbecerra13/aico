"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { aicoImages } from "@/lib/images";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navigation = {
    principal: [
      { name: "Inicio", href: "#" },
      { name: "Electos 2023", href: "#" },
      { name: "Contáctanos", href: "#" },
      { name: "Militantes", href: "#" },
    ],
    legal: [
      { name: "Política de Privacidad", href: "#" },
      { name: "Términos y Condiciones", href: "#" },
      { name: "Transparencia", href: "#" },
    ],
    social: [
      { name: "Facebook", href: "https://www.facebook.com/PartidoAICO/", icon: "📘" },
      { name: "Twitter", href: "https://twitter.com/partidoaico", icon: "🐦" },
      { name: "Instagram", href: "https://www.instagram.com/movimiento_aico_oficial", icon: "📷" },
    ],
  };

  return (
    <footer className="relative bg-gradient-to-b from-gray-100 via-gray-50 to-white border-t-2 border-aico-green/30 shadow-2xl">
      {/* Efecto de partículas de fondo */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: 3 + i * 0.2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.1,
            }}
            className="absolute w-1 h-1 bg-aico-green/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Columna 1 - Logo y descripción */}
          <div className="md:col-span-1">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-6"
            >
              <div className="relative w-64 h-32">
                <Image
                  src={aicoImages.logoSimple.url}
                  alt={aicoImages.logoSimple.alt}
                  fill
                  className="object-contain"
                />
              </div>
            </motion.div>
            <p className="text-aico-black/70 text-sm leading-relaxed">
              Movimiento de Autoridades Indígenas de Colombia
            </p>
            <div className="mt-4">
              <p className="text-aico-green text-xs font-semibold italic">
                "Recuperar la tierra para recuperar todo"
              </p>
            </div>
          </div>

          {/* Columna 2 - Navegación Principal */}
          <div>
            <h3 className="text-aico-black font-bold mb-4 text-lg">Navegación</h3>
            <ul className="space-y-2">
              {navigation.principal.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 5, color: "#1b7a3e" }}
                    className="text-aico-black/70 hover:text-aico-green text-sm transition-colors inline-block"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3 - Legal */}
          <div>
            <h3 className="text-aico-black font-bold mb-4 text-lg">Legal</h3>
            <ul className="space-y-2">
              {navigation.legal.map((item) => (
                <li key={item.name}>
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 5, color: "#1b7a3e" }}
                    className="text-aico-black/70 hover:text-aico-green text-sm transition-colors inline-block"
                  >
                    {item.name}
                  </motion.a>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 4 - Contacto y Redes */}
          <div>
            <h3 className="text-aico-black font-bold mb-4 text-lg">Contacto</h3>
            <div className="space-y-3 mb-6">
              <p className="text-aico-black/70 text-sm">
                📍 Carrera 7 # 21-73, Piso 2
                <br />
                Bogotá, Colombia
              </p>
              <p className="text-aico-black/70 text-sm">📞 312 5783615</p>
              <p className="text-aico-black/70 text-sm">
                ✉️ partidoaico@gmail.com
              </p>
            </div>

            {/* Redes Sociales */}
            <div>
              <h4 className="text-aico-black font-semibold mb-3 text-sm">
                Síguenos
              </h4>
              <div className="flex gap-3">
                {navigation.social.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-gradient-to-br from-aico-red/10 to-aico-green/10 border-2 border-gray-300 rounded-lg flex items-center justify-center text-xl hover:border-aico-green transition-all shadow-sm"
                    title={item.name}
                  >
                    {item.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Línea divisoria */}
        <div className="border-t-2 border-aico-green/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <p className="text-aico-black/60 text-sm text-center md:text-left">
              © {currentYear} AICO - Autoridades Indígenas de Colombia. Todos
              los derechos reservados.
            </p>

            {/* Principios */}
            <div className="flex gap-4 text-xs text-aico-black/60 font-semibold">
              <span className="text-aico-red">Territorialidad</span>
              <span>•</span>
              <span className="text-aico-green">Autonomía</span>
              <span>•</span>
              <span className="text-aico-black">Identidad</span>
            </div>
          </div>
        </div>
      </div>

      {/* Efecto de brillo inferior */}
      <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-r from-aico-red via-aico-green to-aico-red shadow-lg" />
    </footer>
  );
}
