"use client";
import { useEffect, useState } from "react";
import { Wifi } from "lucide-react"; // 👈 ícone de sinal

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true); // inicia fade-out
      setTimeout(() => setLoading(false), 800); // remove após fade-out
    }, 2500); // tempo total de exibição
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div
      className={`fixed inset-0 flex flex-col items-center justify-center bg-black z-[9999] transition-opacity duration-700 ${
        fadeOut ? "opacity-0" : "opacity-100"
      }`}
    >
      {/* Ícone pulsando */}
      <Wifi className="w-16 h-16 text-white animate-pulse mb-4" />

      {/* Texto simples */}
      <p className="text-white text-lg font-semibold">Conectando...</p>
    </div>
  );
}