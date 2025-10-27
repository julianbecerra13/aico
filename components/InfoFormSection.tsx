"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function InfoFormSection() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    departamento: "",
    municipio: "",
    fechaNacimiento: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="py-20 px-6">
      <div className="container mx-auto max-w-7xl">
        {/* Título de la sección */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-aico-black">
            Únete a AICO
          </h2>
          <p className="text-gray-600 text-lg">
            Sé parte del cambio, sé parte de la historia
          </p>
        </motion.div>

        {/* Contenedor único con división interna */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white rounded-2xl border-2 border-gray-300 shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2">
            {/* Columna izquierda: Información */}
            <div className="p-8 md:p-10 border-r border-gray-200">
              <h3 className="text-2xl font-bold text-aico-black mb-6">
                ¿Por qué ser militante de AICO?
              </h3>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <span className="text-2xl">🌱</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-aico-black mb-2">
                      Representación Auténtica
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Somos la voz de las comunidades indígenas en el Congreso de
                      la República.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <span className="text-2xl">⚖️</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-aico-black mb-2">
                      Defensa Territorial
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Protegemos los derechos ancestrales y territorios indígenas.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center border border-gray-200">
                    <span className="text-2xl">🤝</span>
                  </div>
                  <div>
                    <h4 className="font-bold text-aico-black mb-2">
                      Unidad y Participación
                    </h4>
                    <p className="text-gray-600 text-sm">
                      Construimos una Colombia pluricultural e incluyente.
                    </p>
                  </div>
                </div>
              </div>

              {/* Principios */}
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h4 className="font-bold text-aico-black mb-4">
                  Nuestros Principios
                </h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">●</span>
                    <span className="text-gray-600 text-sm">
                      Autonomía y autodeterminación de los pueblos
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">●</span>
                    <span className="text-gray-600 text-sm">
                      Respeto por la madre tierra y el territorio
                    </span>
                  </div>
                  <div className="flex items-start gap-2">
                    <span className="text-gray-400 mt-1">●</span>
                    <span className="text-gray-600 text-sm">
                      Pluralismo político y cultural
                    </span>
                  </div>
                </div>
              </div>

              {/* Lema con acento sutil */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="mt-8 p-4 bg-gray-50 border-l-4 border-aico-green rounded-r-lg"
              >
                <p className="text-aico-black font-semibold text-sm italic">
                  "Recuperar la tierra para recuperar todo"
                </p>
              </motion.div>
            </div>

            {/* Columna derecha: Formulario */}
            <div className="p-8 md:p-10 bg-gray-50">
              <h3 className="text-2xl font-bold text-aico-black mb-6">
                Inscríbete como Militante
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Nombre completo */}
                <div>
                  <label
                    htmlFor="nombre"
                    className="block text-sm font-semibold text-aico-black mb-2"
                  >
                    Nombre completo
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    value={formData.nombre}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-aico-black focus:outline-none transition-colors text-aico-black"
                    placeholder="Tu nombre completo"
                    required
                  />
                </div>

                {/* Correo electrónico */}
                <div>
                  <label
                    htmlFor="correo"
                    className="block text-sm font-semibold text-aico-black mb-2"
                  >
                    Correo electrónico
                  </label>
                  <input
                    id="correo"
                    name="correo"
                    type="email"
                    value={formData.correo}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-aico-black focus:outline-none transition-colors text-aico-black"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Teléfono */}
                <div>
                  <label
                    htmlFor="telefono"
                    className="block text-sm font-semibold text-aico-black mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    value={formData.telefono}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-aico-black focus:outline-none transition-colors text-aico-black"
                    placeholder="+57 300 123 4567"
                    required
                  />
                </div>

                {/* Departamento */}
                <div>
                  <label
                    htmlFor="departamento"
                    className="block text-sm font-semibold text-aico-black mb-2"
                  >
                    Departamento
                  </label>
                  <select
                    id="departamento"
                    name="departamento"
                    value={formData.departamento}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-aico-black focus:outline-none transition-colors text-aico-black"
                    required
                  >
                    <option value="">Selecciona tu departamento</option>
                    <option value="cauca">Cauca</option>
                    <option value="narino">Nariño</option>
                    <option value="putumayo">Putumayo</option>
                    <option value="otro">Otro</option>
                  </select>
                </div>

                {/* Municipio */}
                <div>
                  <label
                    htmlFor="municipio"
                    className="block text-sm font-semibold text-aico-black mb-2"
                  >
                    Municipio
                  </label>
                  <input
                    id="municipio"
                    name="municipio"
                    type="text"
                    value={formData.municipio}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg focus:border-aico-black focus:outline-none transition-colors text-aico-black"
                    placeholder="Tu municipio"
                    required
                  />
                </div>

                {/* Botón submit */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-aico-black text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10">Enviar Inscripción</span>
                  {/* Sutil acento de color en hover */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-aico-red/10 via-transparent to-aico-green/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                </motion.button>
              </form>

              {/* Nota de privacidad */}
              <p className="mt-6 text-xs text-gray-500 text-center">
                Al enviar este formulario aceptas nuestros{" "}
                <a href="#" className="text-aico-black hover:text-aico-green transition-colors">
                  términos y condiciones
                </a>{" "}
                de privacidad.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
