import Image from "next/image";

const DIFERENCIAIS = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
    title: "Disciplina",
    description: "Desenvolvemos a autodisciplina e o autocontrole através do treinamento constante.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Respeito",
    description: "Valorizamos o respeito mútuo entre alunos, senseis e famílias.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Superação",
    description: "Incentivamos nossos alunos a superarem seus limites a cada treino.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: "Comunidade",
    description: "Somos uma família unida que cresce e evolui junta.",
  },
];

export function About() {
  return (
    <section id="sobre" className="py-20 bg-bg-dark-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Conheça a ACMK
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-light mt-2">
            Sobre Nós
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <Image
                src="/photo/criancas_com_sensei.jpeg"
                alt="Sensei com alunos da ACMK"
                fill
                className="object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-2xl -z-10" />
            <div className="absolute -top-6 -left-6 w-24 h-24 border-2 border-primary/30 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div>
            <h3 className="font-heading text-2xl md:text-3xl font-bold text-text-light mb-6">
              Corpo Forte, <span className="text-primary">Mente Tranquila</span>
            </h3>
            <div className="space-y-4 text-text-muted leading-relaxed">
              <p>
                A <strong className="text-text-light">ACMK – Associação Corpo e Mente de Karatê</strong> é 
                um projeto dedicado a formar pessoas fortes no corpo e na mente. Acreditamos que o Karatê 
                vai muito além dos golpes: é disciplina, respeito, amizade e superação.
              </p>
              <p>
                Em nossos treinos, crianças, jovens e adultos aprendem a se concentrar, a trabalhar em 
                equipe e a lutar pelos seus objetivos – dentro e fora do tatame.
              </p>
              <p>
                <strong className="text-text-light">Venha fazer parte da nossa família</strong> e descubra 
                todo o potencial que existe em você.
              </p>
            </div>

            {/* Slogans */}
            <div className="mt-8 flex flex-wrap gap-3">
              {["Força", "Disciplina", "Coração"].map((word) => (
                <span
                  key={word}
                  className="px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-primary font-medium"
                >
                  {word}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Diferenciais */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
          {DIFERENCIAIS.map((item) => (
            <div
              key={item.title}
              className="bg-bg-dark-card p-6 rounded-xl card-hover text-center"
            >
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                {item.icon}
              </div>
              <h4 className="font-heading text-xl font-bold text-text-light mb-2">
                {item.title}
              </h4>
              <p className="text-text-muted text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
