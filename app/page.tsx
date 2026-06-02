"use client"; // garante que o código rode no navegador

import { useEffect } from "react";
import Hero from "../components/Hero";
import Projetos from "../components/Projetos";
import Habilidades from "../components/Habilidades";
import Certificados from "../components/Certificados";
import Contato from "../components/Contato";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0); // força abrir no topo
  }, []);

  return (
    <>
      <Hero />
      <Projetos />
      <Habilidades />
      <Certificados />
      <Contato />
    </>
  );
}
