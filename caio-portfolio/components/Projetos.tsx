"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";
import AgendamentoDemo from "./AgendamentoDemo";

export default function Projetos() {
  const [projetoSelecionado, setProjetoSelecionado] = useState<string | null>(null);
  const [indiceImagem, setIndiceImagem] = useState(0);

  // Array de imagens para o Conversor
  const imagensConversor = [
    "/projeto-conversor.png",
    "/projeto-conversor-2.png",
  ];

  function proximaImagem() {
    setIndiceImagem((prev) => (prev + 1) % imagensConversor.length);
  }

  function imagemAnterior() {
    setIndiceImagem((prev) =>
      prev === 0 ? imagensConversor.length - 1 : prev - 1
    );
  }

  const projetos = [
    {
      titulo: "Plataforma de Agendamento",
      descricao: "Sistema demonstrativo para barbearias, com agendamento online e agenda visual.",
      imagem: "/projeto-barbearia.png",
      tecnologias: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      titulo: "Sistema de Reembolso",
      descricao: "Aplicação para gestão de reembolso de produtos, com interface intuitiva.",
      imagem: "/projeto-reembolso.png",
      tecnologias: ["React", "TypeScript", "TailwindCSS"],
    },
    {
      titulo: "Conversor de Moedas",
      descricao: "Ferramenta interativa para converter valores entre moedas com cotação atualizada.",
      imagem: "/projeto-conversor.png",
      tecnologias: ["React", "API de câmbio", "TailwindCSS"],
    },
  ];

  return (
    <section id="projetos" className="py-20 bg-gradient-to-b from-black to-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-gold">Projetos em Destaque</h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-12">
          Aqui estão alguns dos meus projetos mais completos e impactantes.
          Cada um foi recriado de forma demonstrativa para que você possa
          testar e entender sua funcionalidade.
        </p>

        {/* Container de projetos responsivo */}
        <div className="projetos-container">
          {projetos.map((proj, index) => (
            <div
              key={index}
              role="article"
              onClick={() => {
                setProjetoSelecionado(proj.titulo);
                setIndiceImagem(0); // sempre começa na primeira imagem
              }}
              className="projeto-card group cursor-pointer"
              data-aos="fade-up"
            >
              <div className="relative">
                <img
                  src={proj.imagem}
                  alt={proj.titulo}
                  className="w-full h-48 object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition rounded-t-xl"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gold mb-2" aria-label={proj.titulo}>
                  {proj.titulo}
                </h3>
                <p className="text-gray-300 mb-4">{proj.descricao}</p>
                <p className="text-sm text-gold">{proj.tecnologias.join(" • ")}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <ProjectModal
        isOpen={!!projetoSelecionado}
        onClose={() => setProjetoSelecionado(null)}
        alternateView={
          projetoSelecionado === "Plataforma de Agendamento" ? (
            <img src="/projeto-barbearia.png" alt="Dashboard original" className="rounded-lg w-full h-auto" />
          ) : projetoSelecionado === "Conversor de Moedas" ? (
            <div className="relative">
              <img
                src={imagensConversor[indiceImagem]}
                alt="Conversor de Moedas"
                className="rounded-lg w-full h-auto"
              />
              {/* Setas de navegação */}
              <button
                onClick={imagemAnterior}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 text-yellow-400 rounded-full p-3 hover:bg-black/70 transition z-40"
              >
                ◀
              </button>
              <button
                onClick={proximaImagem}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 text-yellow-400 rounded-full p-3 hover:bg-black/70 transition z-40"
              >
                ▶
              </button>
            </div>
          ) : projetoSelecionado === "Sistema de Reembolso" ? (
            <img src="/projeto-reembolso.png" alt="Dashboard original" className="rounded-lg w-full h-auto" />
          ) : null
        }
      >
        {projetoSelecionado === "Plataforma de Agendamento" && <AgendamentoDemo />}
      </ProjectModal>
    </section>
  );
}
