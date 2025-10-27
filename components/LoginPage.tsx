"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { aicoImages } from "@/lib/images";
import { useAuth } from "@/lib/auth-context";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    // Simular un pequeño delay para mejor UX
    await new Promise((resolve) => setTimeout(resolve, 500));

    const success = login(email, password);

    if (!success) {
      setError("Correo o contraseña incorrectos");
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-aico-green/10 via-white to-aico-red/10 flex items-center justify-center p-4">
      {/* Efectos de fondo */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-aico-red/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-aico-green/10 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-aico-black/5 rounded-full blur-3xl animate-pulse delay-2000" />
      </div>

      {/* Card de Login */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative z-10 w-full max-w-md"
      >
        <div className="bg-white/90 backdrop-blur-lg rounded-2xl shadow-2xl border-2 border-aico-green/30 p-8">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="flex justify-center mb-8"
          >
            <div className="relative w-64 h-32">
              <Image
                src={aicoImages.logo.url}
                alt={aicoImages.logo.alt}
                fill
                className="object-contain"
                priority
              />
            </div>
          </motion.div>

          {/* Título */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-center mb-8"
          >
            <h1 className="text-2xl font-bold text-aico-black mb-2">
              Bienvenido
            </h1>
            <p className="text-aico-black/60 text-sm">
              Ingresa tus credenciales para acceder
            </p>
          </motion.div>

          {/* Formulario */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <label
                htmlFor="email"
                className="block text-sm font-medium text-aico-black mb-2"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-aico-green focus:outline-none transition-colors bg-white/80 text-aico-black"
                placeholder="correo@ejemplo.com"
                required
              />
            </motion.div>

            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <label
                htmlFor="password"
                className="block text-sm font-medium text-aico-black mb-2"
              >
                Contraseña
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border-2 border-gray-300 focus:border-aico-green focus:outline-none transition-colors bg-white/80 text-aico-black"
                placeholder="••••••••"
                required
              />
            </motion.div>

            {/* Error Message */}
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-aico-red/10 border border-aico-red/30 text-aico-red px-4 py-3 rounded-lg text-sm"
              >
                {error}
              </motion.div>
            )}

            {/* Botón de Login */}
            <motion.button
              type="submit"
              disabled={isLoading}
              whileHover={{ scale: isLoading ? 1 : 1.02 }}
              whileTap={{ scale: isLoading ? 1 : 0.98 }}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all shadow-lg ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-gradient-to-r from-aico-red to-aico-green hover:shadow-xl"
              }`}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Iniciando sesión...
                </span>
              ) : (
                "Iniciar Sesión"
              )}
            </motion.button>
          </form>

          {/* Footer del card */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="mt-6 text-center"
          >
            <p className="text-xs text-aico-black/60">
              © {new Date().getFullYear()} AICO - Autoridades Indígenas de Colombia
            </p>
          </motion.div>
        </div>

        {/* Decoración inferior */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.7, duration: 0.5 }}
          className="h-2 bg-gradient-to-r from-aico-red via-aico-green to-aico-red rounded-b-lg mt-2 shadow-lg"
        />
      </motion.div>
    </div>
  );
}
