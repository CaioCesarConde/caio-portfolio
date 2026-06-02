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
        <FaBars className="w-6 h-6" />
      </button>

      {/* Overlay do menu quando aberto */}
      {open && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur z-[60] md:hidden">
          {/* Botão de fechar */}
          <div className="flex justify-end p-4">
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="text-white"
            >
              <FaTimes className="w-6 h-6" />
            </button>
          </div>

          {/* Links do menu */}
          <nav className="flex flex-col items-center gap-6 mt-8 text-lg">
            <a href="#projetos" onClick={() => setOpen(false)} className="hover:text-gold">Projetos</a>
            <a href="#habilidades" onClick={() => setOpen(false)} className="hover:text-gold">Habilidades</a>
            <a href="#certificados" onClick={() => setOpen(false)} className="hover:text-gold">Certificados</a>
            <a href="#contato" onClick={() => setOpen(false)} className="hover:text-gold">Contato</a>

            <a
              href="/curriculo-caio.pdf"
              download
              onClick={() => setOpen(false)}
              className="mt-2 flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
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