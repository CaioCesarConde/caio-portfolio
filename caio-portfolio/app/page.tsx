import Hero from "@/components/Hero";
import SobreMim from "@/components/SobreMim"; 
import Projetos from "@/components/Projetos";
import Habilidades from "@/components/Habilidades";
import Certificados from "@/components/Certificados";
import Contato from "@/components/Contato";

export default function Home() {
  return (
    <>
      <Hero />
      <SobreMim /> 
      <Projetos />
      <Habilidades />
      <Certificados />
      <Contato />
    </>
  );
}