"use client";

import { useEffect } from "react";

export default function ProjectModal({
  isOpen,
  onClose,
  children,
  alternateView,
}: {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  alternateView: React.ReactNode;
}) {
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] bg-black/80 backdrop-blur flex items-center justify-center px-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-xl border border-gold p-6 relative">
        {/* Botão fechar */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-black/50 text-gold hover:text-yellow-400 rounded-full p-3 text-2xl font-bold z-50"
        >
          ✕
        </button>

        {/* Conteúdo */}
        <div className="flex flex-col items-center justify-center gap-4">
          {alternateView ? (
            <div className="w-full flex flex-col items-center">
              {alternateView}
              {/* Ajuste para botões de navegação dentro do alternateView */}
              <style jsx>{`
                button {
                  min-width: 48px;
                  min-height: 48px;
                  font-size: 1.5rem;
                }
                @media (max-width: 768px) {
                  button {
                    min-width: 56px;
                    min-height: 56px;
                    font-size: 2rem;
                  }
                }
              `}</style>
            </div>
          ) : (
            children
          )}
        </div>
      </div>
    </div>
  );
}
