"use client";
import { useState } from "react";
import { FaEnvelope, FaWhatsapp, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contato() {
  const [sucesso, setSucesso] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Envia para o Formspree via fetch
    const response = await fetch("https://formspree.io/f/mjgbyrqp", {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setSucesso(true);
      form.reset(); // limpa os campos
      setTimeout(() => setSucesso(false), 3000); // mensagem desaparece em 3s
    }
  };

  return (
    <section
      id="contato"
      className="bg-[#0F0F0F] text-white px-6 py-20 flex flex-col md:flex-row items-start justify-center gap-16"
    >
      {/* Totem vertical */}
      <div className="w-full max-w-sm bg-[#f3f4f6] text-black rounded-xl shadow-lg p-8 flex flex-col items-center min-h-full">
        <div className="w-40 h-48 rounded-lg overflow-hidden mb-4">
          <img
            src="/caio-fotofinal.jpeg"
            alt="Foto de Caio"
            className="w-full h-full object-cover"
          />
        </div>
        <h3 className="text-2xl font-extrabold text-black mb-6">CAIO CONDE</h3>
        <p className="text-gray-700 font-medium mb-10 text-center text-sm">
          Um desenvolvedor web é o profissional responsável pelo planejamento, desenvolvimento e manutenção de sites, aplicações e sistemas voltados para a internet. Atua utilizando linguagens de programação, frameworks e ferramentas modernas para construir tanto a interface visual e a experiência do usuário (front-end) quanto a lógica, integrações e regras de negócio que sustentam o funcionamento das aplicações (back-end), assegurando desempenho, usabilidade, escalabilidade e segurança.
        </p>
        <div className="mt-auto flex gap-6 text-2xl">
          <a href="mailto:caio@email.com" style={{ color: "#87CEEB" }} className="transition-transform transform hover:scale-125">
            <FaEnvelope />
          </a>
          <a href="https://wa.me/5535999512075" target="_blank" style={{ color: "#25D366" }} className="transition-transform transform hover:scale-125">
            <FaWhatsapp />
          </a>
          <a href="https://www.linkedin.com/in/caio-conde-8595b5330/" target="_blank" style={{ color: "#0A66C2" }} className="transition-transform transform hover:scale-125">
            <FaLinkedin />
          </a>
          <a href="https://www.instagram.com/caio_conde/" target="_blank" style={{ color: "#E1306C" }} className="transition-transform transform hover:scale-125">
            <FaInstagram />
          </a>
        </div>
      </div>

      {/* Texto + formulário */}
      <div className="flex-1 w-full max-w-xl flex flex-col justify-between">
        <h2 className="text-5xl md:text-6xl font-bold mb-6">
          <span className="text-white">VAMOS</span>{" "}
          <span className="text-gray-400">TRABALHAR JUNTOS</span>
        </h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4 flex-grow">
          <div>
            <label className="text-sm text-gray-400">Nome</label>
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Email</label>
            <input
              type="email"
              name="email"
              placeholder="seu@email.com"
              required
              className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>

          <div>
            <label className="text-sm text-gray-400">Orçamento</label>
            <select
              name="orcamento"
              className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            >
              <option>Selecione...</option>
              <option>Até R$500</option>
              <option>R$500 - R$1000</option>
              <option>Acima de R$1000</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-gray-400">Mensagem</label>
            <textarea
              name="mensagem"
              rows={4}
              placeholder="Escreva sua mensagem..."
              required
              className="w-full bg-[#1A1A1A] text-white px-4 py-3 rounded-md border border-gray-700 focus:outline-none focus:border-red-600"
            />
          </div>

          <button
            type="submit"
            className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-md transition"
          >
            Enviar
          </button>
        </form>

        {/* Mensagem de sucesso */}
        {sucesso && (
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                          bg-green-600 text-white px-6 py-3 rounded-md shadow-lg">
            Mensagem Enviada com Sucesso ✅<br />
            Em breve entrarei em contato com você!
          </div>
        )}
      </div>
    </section>
  );
}