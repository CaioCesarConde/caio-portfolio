"use client";
import { useState } from "react";
import { FaBars, FaTimes, FaDownload } from "react-icons/fa";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Botão hambúrguer visível apenas em mobile */}
      <button
        aria-label="Abrir menu"
        onClick={() => setOpen(true)}
        className="md:hidden text-white"
      >
        <FaBars className="w-7 h-7" />
      </button>

      {/* Overlay do menu quando aberto */}
      {open && (
        <div className="fixed inset-0 bg-black/85 backdrop-blur-md z-[60] md:hidden">
          {/* Botão de fechar */}
          <div className="flex justify-end p-4">
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <FaTimes className="w-7 h-7" />
            </button>
          </div>

          {/* Links do menu */}
          <nav className="flex flex-col items-center gap-6 mt-8 text-lg font-bold text-white">
            <a href="#projetos" onClick={() => setOpen(false)} className="hover:text-gold transition-transform transform hover:scale-110">
              Projetos
            </a>
            <a href="#habilidades" onClick={() => setOpen(false)} className="hover:text-gold transition-transform transform hover:scale-110">
              Habilidades
            </a>
            <a href="#certificados" onClick={() => setOpen(false)} className="hover:text-gold transition-transform transform hover:scale-110">
              Certificados
            </a>
            <a href="#contato" onClick={() => setOpen(false)} className="hover:text-gold transition-transform transform hover:scale-110">
              Contato
            </a>

            <a
              href="/curriculo-caio.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-4 flex items-center gap-2 bg-white text-black px-5 py-2 rounded-lg font-bold hover:bg-gray-200 transition-transform transform hover:scale-110"
            >
              <FaDownload />
              Currículo
            </a>
          </nav>
        </div>
      )}
    </>
  );
}
