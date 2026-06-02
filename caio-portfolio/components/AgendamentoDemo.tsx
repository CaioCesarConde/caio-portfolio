"use client";

import { useState } from "react";

export default function AgendamentoDemo() {
  const [nome, setNome] = useState("");
  const [horario, setHorario] = useState("");
  const [data, setData] = useState("2024-01-10");
  const [agendamentos, setAgendamentos] = useState<{ nome: string; horario: string; data: string }[]>([]);

  const horarios = {
    manhã: ["09:00", "10:00", "11:00", "12:00"],
    tarde: ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"],
    noite: ["19:00", "20:00", "21:00"],
  };

  function agendar() {
    if (nome && horario && data) {
      setAgendamentos([...agendamentos, { nome, horario, data }]);
      setNome("");
      setHorario("");
    }
  }

  return (
    <div className="grid md:grid-cols-2 gap-12 bg-[#1a1a1a] text-white rounded-xl p-8 font-sans">
      {/* Formulário */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Agende um atendimento ✂️</h2>
        <p className="text-gray-400 text-sm mb-6">
          Selecione data, horário e informe o nome do cliente para criar o agendamento.
        </p>

        {/* Data */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-1">Data selecionada:</label>
          <input
            type="date"
            value={data}
            onChange={(e) => setData(e.target.value)}
            className="bg-[#2a2a2a] text-white px-4 py-2 rounded w-full border border-gray-700 text-sm"
          />
        </div>

        {/* Horários */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-2">Horário:</label>
          <div className="grid grid-cols-3 gap-2">
            {Object.entries(horarios).map(([_, horas]) =>
              horas.map((h) => (
                <button
                  key={h}
                  onClick={() => setHorario(h)}
                  className={`px-3 py-2 rounded text-sm font-medium ${
                    horario === h
                      ? "bg-yellow-400 text-black"
                      : "bg-[#2a2a2a] text-white hover:bg-[#333]"
                  }`}
                >
                  {h}
                </button>
              ))
            )}
          </div>
        </div>

        {/* Nome */}
        <div className="mb-6">
          <label className="block text-sm text-gray-300 mb-1">Nome do cliente:</label>
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            placeholder="Digite seu nome"
            className="bg-[#2a2a2a] text-white px-4 py-2 rounded w-full border border-gray-700 placeholder-gray-500 text-sm"
          />
        </div>

        {/* Botão */}
        <button
          onClick={agendar}
          className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition text-sm"
        >
          AGENDAR
        </button>
      </div>

      {/* Agenda */}
      <div>
        <h2 className="text-2xl font-bold mb-2">Sua agenda</h2>
        <p className="text-gray-400 text-sm mb-6">
          Consulte os seus cortes de cabelo agendados por dia.
        </p>

        <div className="space-y-6">
          {Object.entries(horarios).map(([periodo, horas]) => (
            <div key={periodo}>
              <h3 className="text-lg font-semibold mb-2 capitalize">
                {periodo} ({horas[0]}h – {horas[horas.length - 1]}h)
              </h3>
              <ul className="space-y-1 text-sm text-gray-300">
                {agendamentos
                  .filter((a) => horas.includes(a.horario) && a.data === data)
                  .map((a, idx) => (
                    <li key={idx}>
                      {a.horario} - {a.nome}
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}