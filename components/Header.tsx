"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import { aicoImages } from "@/lib/images";
import { useAuth } from "@/lib/auth-context";
import { LogOut } from "lucide-react";

export default function Header() {
  const [daysUntilElection, setDaysUntilElection] = useState(58);
  const { logout } = useAuth();

  const menuItems = [
    { name: "Inicio", active: true },
    { name: "Electos 2023", active: false },
    { name: "Contáctanos", active: false },
    { name: "Militantes", active: false },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-lg border-b border-aico-red/30 shadow-md"
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3"
          >
            <div className="relative w-48 h-16 hidden md:block">
              <Image
                src={aicoImages.logo.url}
                alt={aicoImages.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="w-12 h-12 bg-gradient-to-br from-aico-red to-aico-green rounded-lg flex items-center justify-center font-bold text-white text-xl shadow-lg md:hidden">
              AICO
            </div>
          </motion.div>

          {/* Menu */}
          <nav className="hidden md:flex items-center gap-8">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.name}
                href="#"
                whileHover={{ scale: item.active ? 1 : 1.05 }}
                className={`relative text-sm font-medium transition-colors ${
                  item.active
                    ? "text-aico-red"
                    : item.active === false
                    ? "text-gray-400 cursor-not-allowed"
                    : "text-aico-black hover:text-aico-green"
                }`}
                style={{
                  pointerEvents: item.active ? "auto" : "none",
                }}
              >
                {item.name}
                {item.active && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-aico-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </motion.a>
            ))}
          </nav>

          {/* Election Counter */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="hidden lg:flex items-center gap-2 bg-gradient-to-r from-aico-red/10 to-aico-green/10 px-4 py-2 rounded-lg border border-aico-green/30 shadow-sm"
          >
            <div className="w-2 h-2 rounded-full bg-aico-green animate-pulse" />
            <span className="text-aico-black text-sm font-medium">
              Días Próximas elecciones:{" "}
              <span className="text-aico-green font-bold">{daysUntilElection}</span>
            </span>
          </motion.div>

          {/* Logout Button */}
          <motion.button
            onClick={logout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="hidden md:flex items-center gap-2 bg-aico-red/10 hover:bg-aico-red/20 text-aico-red px-4 py-2 rounded-lg border border-aico-red/30 transition-colors shadow-sm"
            title="Cerrar sesión"
          >
            <LogOut className="w-4 h-4" />
            <span className="text-sm font-medium">Salir</span>
          </motion.button>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <motion.button
              onClick={logout}
              whileTap={{ scale: 0.95 }}
              className="text-aico-red p-2 rounded-lg bg-aico-red/10"
              title="Cerrar sesión"
            >
              <LogOut className="w-5 h-5" />
            </motion.button>
            <button className="text-aico-black">
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M4 6h16M4 12h16M4 18h16"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
