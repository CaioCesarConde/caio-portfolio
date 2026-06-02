"use client";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { useState } from "react";
import { ChevronLeft, ChevronRight, X, Award } from "lucide-react";

const certificados = [
  { titulo: "Fullstack", imagem: "/Certificado-Fullstack.png" },
  { titulo: "Introducao ao React", imagem: "/Certificado-Introducao-ao-React.png" },
  { titulo: "Node.js", imagem: "/Certificado-Nodejs.png" },
  { titulo: "JavaScript", imagem: "/Certificado-JavaScript.png" },
  { titulo: "HTML e CSS", imagem: "/Certificado-Fundamentos-de-HTML-e-CSS.png" },
  { titulo: "Introducao a IA", imagem: "/Introducao-a-IA.png" },
  { titulo: "IA do Zero", imagem: "/Inteligencia-artificial-do-zero.png" },
  { titulo: "Lideranca Tecnica", imagem: "/Lideranca-tecnica.png" },
  { titulo: "Soft Skills", imagem: "/Soft-Skills.png" },
  { titulo: "Tec. em Desenvolvimento de Sistemas", imagem: "/Tec-Devdesistemas.png" },
  { titulo: "Git e GitHub", imagem: "/Git-Github.png" },
];

export default function CertificadosCarrossel() {
  const [modalImagem, setModalImagem] = useState<string | null>(null);

  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: { perView: 1 }, // apenas 1 diploma por vez
  });

  return (
    <section
      id="certificados" // 👈 ADICIONADO para o link funcionar
      className="relative py-20 bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden"
    >
      {/* Título com ícone */}
      <h2 className="text-3xl font-bold text-center text-purple-300 mb-4 flex items-center justify-center gap-2">
        <Award className="w-8 h-8 text-purple-400" />
        Minha Jornada de Certificações
      </h2>

      <p className="text-center text-sm text-gray-400 mb-8">
        Arraste para o lado ou use as setas para navegar pelos diplomas
      </p>

      <div className="relative max-w-3xl mx-auto">
        {/* Setas */}
        <button
          onClick={() => instanceRef.current?.prev()}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
          aria-label="Anterior"
        >
          <ChevronLeft className="text-white w-5 h-5" />
        </button>
        <button
          onClick={() => instanceRef.current?.next()}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-gray-800 p-2 rounded-full hover:bg-purple-600 transition"
          aria-label="Próximo"
        >
          <ChevronRight className="text-white w-5 h-5" />
        </button>

        {/* Carrossel */}
        <div ref={sliderRef} className="keen-slider overflow-hidden">
          {certificados.map((cert, index) => (
            <div
              key={index}
              className="keen-slider__slide flex justify-center cursor-pointer"
              onClick={() => setModalImagem(cert.imagem)}
            >
              <div
                className="bg-gray-900 rounded-xl p-4 
                           shadow-[0_0_20px_rgba(128,0,128,0.4)] 
                           border border-purple-400 
                           hover:shadow-[0_0_45px_rgba(168,85,247,0.9)] 
                           transition duration-500 ease-in-out 
                           max-w-md w-full"
              >
                <img
                  src={cert.imagem}
                  alt={cert.titulo}
                  className="rounded-md w-full h-auto"
                />
                <h3 className="text-lg font-semibold text-purple-200 mt-4 text-center">
                  {cert.titulo}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal fullscreen */}
      {modalImagem && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center">
          <button
            onClick={() => setModalImagem(null)}
            className="absolute top-6 right-6 bg-gray-800 p-2 rounded-full hover:bg-red-600 transition"
            aria-label="Fechar"
          >
            <X className="text-white w-6 h-6" />
          </button>
          <img
            src={modalImagem}
            alt="Diploma ampliado"
            className="max-w-4xl w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}