import "./globals.css";
import { Poppins } from "next/font/google";
import AOSWrapper from "../components/AOSWrapper"; 
import { FaDownload } from "react-icons/fa";
import Preloader from "../components/Preloader";   
import CustomCursor from "../components/CustomCursor"; 
import MobileNav from "../components/MobileNav"; // 👈 importa o menu mobile

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Caio | Desenvolvedor Júnior",
  description: "Portfólio profissional do Caio.",
  icons: {
    icon: "/foto-aba.png",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        {/* Meta viewport para responsividade */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`${poppins.className} bg-animated text-white`}>
        {/* Cursor moderno */}
        <CustomCursor />

        {/* Preloader aparece primeiro */}
        <Preloader />

        <AOSWrapper>
          {/* Header fixo */}
          <header className="fixed top-0 w-full bg-black/80 backdrop-blur border-b border-gold z-50">
            <div className="mx-auto max-w-6xl px-4 md:px-6 py-3 md:py-4 flex items-center justify-between">
              <img
                src="/logo-caio.png"
                alt="Logo CaioConde"
                className="h-14 w-auto md:h-20" // menor no mobile
              />

              {/* Navegação desktop */}
              <nav className="hidden md:flex items-center gap-6 text-sm">
                <a href="#projetos" className="hover:text-gold transition-transform transform hover:scale-110">Projetos</a>
                <a href="#habilidades" className="hover:text-gold transition-transform transform hover:scale-110">Habilidades</a>
                <a href="#certificados" className="hover:text-gold transition-transform transform hover:scale-110">Certificados</a>
                <a href="#contato" className="hover:text-gold transition-transform transform hover:scale-110">Contato</a>

                <a
                  href="/curriculo-caio.pdf"
                  download
                  className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded hover:bg-gray-200 transition-transform transform hover:scale-110"
                >
                  <FaDownload />
                  Currículo
                </a>
              </nav>

              {/* Menu mobile */}
              <MobileNav />
            </div>
          </header>

          {/* Conteúdo principal com padding responsivo */}
          <main className="pt-20 md:pt-24 px-4 md:px-0">{children}</main>

          <footer className="mt-16 border-t border-gold/30">
            <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-gray-300 text-center">
              © {new Date().getFullYear()} Caio Conde. Todos os direitos reservados.
            </div>
          </footer>
        </AOSWrapper>
      </body>
    </html>
  );
}
