import Hero from "../components/Hero";
import Projetos from "../components/Projetos";
import Habilidades from "../components/Habilidades";
import Certificados from "../components/Certificados";
import Contato from "../components/Contato";

export const metadata = {
  title: "Caio | Desenvolvedor Júnior",
  description: "Portfólio profissional do Caio.",
  icons: {
    icon: "/foto-aba.png",
  },
};

export const viewport = {
  themeColor: "#111827",
};

export default function Home() {
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
