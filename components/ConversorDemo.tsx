"use client";

import { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function ConversorDemo() {
  const [valor, setValor] = useState("");
  const [moeda, setMoeda] = useState("");
  const [resultado, setResultado] = useState<number | null>(null);

  // Simulação de cotações atuais (poderia ser integrado a uma API real)
  const cotacoes: Record<string, number> = {
    USD: 5.00,
    EUR: 5.45,
    GBP: 6.30,
  };

  function converter() {
    if (valor && moeda && cotacoes[moeda]) {
      const convertido = parseFloat(valor) * cotacoes[moeda];
      setResultado(convertido);
    }
  }

  // Dados fictícios para o gráfico
  const data = {
    labels: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"],
    datasets: [
      {
        label: "USD/BRL",
        data: [4.95, 4.87, 4.92, 4.85, 4.78, 4.82, 4.90, 4.93, 4.88, 4.91, 4.89, 4.94],
        borderColor: "#FFD700",
        backgroundColor: "#FFD700",
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "#fff" } },
      tooltip: { enabled: true },
    },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "#333" } },
      y: { ticks: { color: "#fff" }, grid: { color: "#333" } },
    },
  };

  return (
    <div className="bg-[#1a1a1a] text-white rounded-xl p-8 space-y-8">
      <h2 className="text-2xl font-bold mb-2">Conversor de Moedas 💱</h2>
      <p className="text-gray-400 text-sm mb-6">
        Digite o valor e selecione a moeda para converter em reais.
      </p>

      {/* Valor */}
      <div className="mb-4">
        <label className="block text-sm text-gray-300 mb-1">VALOR</label>
        <input
          type="number"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
          placeholder="0,00"
          className="bg-[#2a2a2a] text-white px-4 py-2 rounded w-full border border-gray-700 placeholder-gray-500"
        />
      </div>

      {/* Moeda */}
      <div className="mb-4">
        <label className="block text-sm text-gray-300 mb-1">MOEDA</label>
        <select
          value={moeda}
          onChange={(e) => setMoeda(e.target.value)}
          className="bg-[#2a2a2a] text-white px-4 py-2 rounded w-full border border-gray-700"
        >
          <option value="">Selecione a moeda</option>
          <option value="USD">Dólar (USD)</option>
          <option value="EUR">Euro (EUR)</option>
          <option value="GBP">Libra (GBP)</option>
        </select>
      </div>

      {/* Botão */}
      <button
        onClick={converter}
        className="bg-yellow-400 text-black font-bold px-6 py-2 rounded hover:bg-yellow-300 transition"
      >
        Converter em reais
      </button>

      {/* Resultado */}
      {resultado !== null && (
        <p className="mt-4 text-lg font-semibold text-yellow-400">
          Resultado: R$ {resultado.toFixed(2)}
        </p>
      )}

      {/* Gráfico */}
      <div className="mt-8">
        <h3 className="text-lg font-semibold mb-4">Cotação do Dólar em Reais - Últimos 12 Meses</h3>
        <Line data={data} options={options} />
      </div>
    </div>
  );
}