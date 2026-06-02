"use client";

export default function SobreMim() {
  return (
    <section id="sobre" className="relative py-20 bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
        {/* Boneco à esquerda */}
        <div className="flex-shrink-0">
          <img
            src="/boneco-caio.png"
            alt="Totem Caio Desenvolvedor"
            className="w-100 h-auto animate-float"
          />
        </div>

        {/* Timeline à direita */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-gold mb-12 text-center md:text-left">
            Minha Jornada
          </h2>

          <div className="space-y-12 border-l-2 border-gold pl-6">
            {/* Item 1 */}
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-2">Início da Jornada</h3>
              <p className="text-gray-300 text-justify">
                Comecei meus estudos na área como Técnico em Desenvolvimento de Sistemas. Com o tempo, percebi a necessidade de me aprofundar ainda mais, então iniciei também o curso de Sistemas de Informação.
              </p>
            </div>

            {/* Item 2 */}
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-2">Formação Técnica</h3>
              <p className="text-gray-300 text-justify">
                Concluí o curso Técnico em Desenvolvimento de Sistemas, onde aprendi fundamentos sólidos de programação. Atualmente estou no 5º período de Sistemas de Informação, além de possuir uma formação completa pela Rocketseat.
              </p>
            </div>

            {/* Item 3 */}
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-2">Developer Fullstack</h3>
              <p className="text-gray-300 text-justify">
                Me formei na trilha Fullstack da Rocketseat, desenvolvendo aplicações web modernas com React, Node.js e TypeScript. Apliquei boas práticas de código, versionamento com Git/GitHub, integração com APIs, bancos de dados, testes automatizados e deploy. Também explorei ferramentas de Inteligência Artificial no processo de desenvolvimento.
              </p>
            </div>

            {/* Item 4 */}
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-2">Projetos Pessoais</h3>
              <p className="text-gray-300 text-justify">
                Desenvolvi aplicações web completas, como uma plataforma de agendamento de cortes de cabelo e um sistema de reembolso de produtos. Utilizei React, Node.js e TypeScript, com integração entre frontend e backend, persistência de dados e foco em boas práticas.
              </p>
            </div>

            {/* Item 5 */}
            <div data-aos="fade-up">
              <h3 className="text-xl font-semibold mb-2">Soft Skills e Liderança</h3>
              <p className="text-gray-300 text-justify">
                Além das competências técnicas, desenvolvi habilidades em comunicação, trabalho em equipe, liderança e inteligência emocional. Tenho foco em colaboração, organização, feedback construtivo e aprendizado contínuo em ambientes de desenvolvimento.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}