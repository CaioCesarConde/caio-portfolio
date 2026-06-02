"use client";

import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import {
  Code,
  Server,
  Atom,
  Database,
  GitBranch,
  Box,
  Shield,
} from "lucide-react";
import Particles from "react-tsparticles";

export default function Habilidades() {
  const linguagens = [
    { titulo: "JavaScript (ES6+)", icone: <Code className="w-8 h-8 text-yellow-400" /> },
    { titulo: "TypeScript", icone: <Code className="w-8 h-8 text-blue-400" /> },
    { titulo: "HTML5 | CSS3", icone: <Code className="w-8 h-8 text-orange-400" /> },
    { titulo: "React", icone: <Atom className="w-8 h-8 text-cyan-400" /> },
    { titulo: "Node.js | Express", icone: <Server className="w-8 h-8 text-green-400" /> },
    { titulo: "PostgreSQL | Prisma", icone: <Database className="w-8 h-8 text-indigo-400" /> },
    { titulo: "Git | GitHub", icone: <GitBranch className="w-8 h-8 text-pink-400" /> },
    { titulo: "Docker", icone: <Box className="w-8 h-8 text-blue-500" /> },
    { titulo: "APIs REST", icone: <Server className="w-8 h-8 text-purple-400" /> },
    { titulo: "Testes Automatizados", icone: <Shield className="w-8 h-8 text-red-400" /> },
  ];

  const frontend = [
    "Componentização",
    "Hooks",
    "React Router",
    "React Hook Form",
    "Tailwind CSS",
    "Responsividade e Acessibilidade",
  ];

  const backend = [
    "APIs REST",
    "Autenticação e Autorização",
    "Integração com Banco de Dados",
    "Arquitetura básica de aplicações",
  ];

  return (
    <section
      id="habilidades"
      className="relative py-20 bg-gradient-to-b from-gray-900 via-black to-gray-900 text-white overflow-hidden" 
                      /* isso aqui é O DEGRADE COPIAR PARA OS PROXIMOS*/
      
    >
      {/* Partículas animadas */}
      <Particles
        className="absolute inset-0 z-0"
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 50 },
            color: { value: "#FFD700" },
            links: { enable: true, color: "#FFD700" },
            move: { enable: true, speed: 1 },
            size: { value: 2 },
          },
        }}
      />

      <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-16">
        {/* Linguagens e Tecnologias */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold mb-8 text-center text-gold">
            Minhas Linguagens e Tecnologias
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {linguagens.map((item, index) => (
              <Tilt key={index} glareEnable={true} glareColor="#FFD700" glareMaxOpacity={0.2}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-gold transition duration-300"
                >
                  <div className="flex items-center gap-4 mb-2">
                    {item.icone}
                    <h3 className="text-lg font-semibold text-white">{item.titulo}</h3>
                  </div>
                </motion.div>
              </Tilt>
            ))}
          </div>
        </motion.div>

        {/* Frontend + Backend lado a lado */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gold">Front-end</h2>
            <div className="bg-gray-900 rounded-xl shadow-2xl overflow-hidden border-4 border-gray-700">
              {/* Barra superior estilo monitor */}
              <div className="flex items-center gap-2 px-4 py-2 bg-gray-800">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span className="ml-auto text-sm text-gray-400">Frontend Skills</span>
              </div>

              {/* Conteúdo da tela */}
              <div className="p-6 bg-gradient-to-br from-pink-500/20 to-purple-600/20">
                <motion.ul
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ staggerChildren: 0.2 }}
                  className="grid md:grid-cols-2 gap-4 text-white font-semibold"
                >
                  {frontend.map((skill, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 }}
                      className="bg-gray-800/70 rounded-lg p-4 hover:bg-gray-700 transition duration-300 shadow-md"
                    >
                      {skill}
                    </motion.li>
                  ))}
                </motion.ul>
              </div>
            </div>
          </motion.div>

          {/* Backend */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-8 text-center text-gold">Back-end</h2>
            <div className="bg-gray-900 p-8 rounded-xl shadow-lg font-mono text-green-400 relative overflow-hidden">
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.2 }}
                className="space-y-4"
              >
                {backend.map((skill, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 }}
                  >
                    <p
                      className="relative pl-6 hover:text-green-300 transition-colors duration-300
                                 after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-green-500 after:w-full
                                 after:scale-x-0 hover:after:scale-x-100 after:origin-left after:transition-transform after:duration-300"
                    >
                      <span className="absolute left-0 text-green-500">{">"}</span>
                      {skill}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* efeito de cursor piscando */}
              <span className="absolute bottom-2 right-2 text-green-500 animate-pulse">
                █
              </span>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}