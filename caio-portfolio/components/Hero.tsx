"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

// CSS extra para shimmer effect em branco puro
const shimmerStyle = `
@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
.text-shimmer {
  background: linear-gradient(90deg, #ffffff, #ffffff, #ffffff);
  background-size: 200% auto;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 3s linear infinite;
}
`;

export default function Hero() {
  return (
    <section
      className="relative text-white text-center h-screen bg-black overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Injetando estilo shimmer */}
      <style>{shimmerStyle}</style>

      {/* Imagem de fundo expandida */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/caio-costas.jpeg')" }}
      ></div>

      {/* Overlay escuro */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Bloco do ícone separado */}
      <motion.div
        whileHover={{ scale: 1.08, y: -5 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative z-10 w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden ring-4 ring-white shadow-xl mb-8"
      >
        <img
          src="/foto-caio.png"
          alt="Foto de perfil"
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Bloco de texto separado */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center px-4"
      >
        {/* Título com shimmer branco */}
        <h1 className="text-4xl md:text-5xl font-bold mb-2 drop-shadow-lg text-shimmer">
          Olá, eu sou Caio
        </h1>

        {/* Subtítulo com typing loop mostrando frases completas */}
        <p className="text-white text-base md:text-lg max-w-2xl px-4 leading-relaxed">
          <Typewriter
            words={[
              "Software Developer | JavaScript | React | Node.js | TypeScript | Building Scalable Web Apps",
              "Desenvolvedor Fullstack apaixonado por criar soluções escaláveis e modernas",
              "Explorando Inteligência Artificial aplicada ao desenvolvimento web",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={2500}
          />
        </p>
      </motion.div>
    </section>
  );
}