import Image from "next/image";
import Link from "next/link";

const STATS = [
  { value: "10+", label: "Anos de Experiência" },
  { value: "500+", label: "Alunos Formados" },
  { value: "50+", label: "Medalhas Conquistadas" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background with Logo */}
      <div className="absolute inset-0 z-0 bg-bg-dark">
        {/* Logo positioned center-right */}
        <div className="absolute inset-0 flex items-center justify-end">
          <div className="relative w-[90%] h-[90%] md:w-[65%] md:h-[95%] mr-[-15%] md:mr-[-8%]">
            <Image
              src="/logo/logo_circular_transparente.png"
              alt="ACMK Logo"
              fill
              className="object-contain opacity-15 md:opacity-25"
              priority
            />
          </div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-bg-dark via-bg-dark/80 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-dark/30 via-transparent to-bg-dark" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-text-light">
              Matrículas Abertas
            </span>
          </div>

          {/* Title */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            <span className="text-text-light">Transformando Vidas</span>
            <br />
            <span className="text-gradient">pelo Karatê</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto mb-8 animate-fade-in">
            Na ACMK, o Karatê vai muito além dos golpes: é{" "}
            <span className="text-text-light font-semibold">disciplina</span>,{" "}
            <span className="text-text-light font-semibold">respeito</span>,{" "}
            <span className="text-text-light font-semibold">amizade</span> e{" "}
            <span className="text-text-light font-semibold">superação</span>.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in">
            <Link
              href="https://wa.me/5521988505337?text=Olá! Gostaria de agendar uma aula experimental de Karatê na ACMK."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-lg"
            >
              <svg
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Agendar Aula
            </Link>
            <Link href="#horarios" className="btn-secondary text-lg">
              Ver Horários
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 md:gap-8 max-w-2xl mx-auto animate-fade-in">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="text-center p-4 bg-bg-dark-card/50 rounded-lg backdrop-blur-sm"
              >
                <div className="font-heading text-2xl md:text-4xl font-bold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-text-muted">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="w-6 h-6 text-text-muted"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
