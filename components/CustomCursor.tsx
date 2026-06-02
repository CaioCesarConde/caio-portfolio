"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    // Detecta dispositivos com ponteiro "coarse" (toque)
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);

    const moveHandler = (e: MouseEvent) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", moveHandler);
    return () => window.removeEventListener("mousemove", moveHandler);
  }, []);

  // Não renderiza o cursor customizado em dispositivos touch
  if (isTouch) return null;

  return (
    <motion.div
      className="fixed flex items-center justify-center text-blue-400 font-bold pointer-events-none z-[9999] drop-shadow-[0_0_8px_#3b82f6]"
      animate={{ x: pos.x - 18, y: pos.y - 18 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <span className="text-2xl">{`</>`}</span>
    </motion.div>
  );
}