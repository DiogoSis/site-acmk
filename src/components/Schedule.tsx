"use client";

import { useState } from "react";

const MODALIDADES = ["Todos", "Karatê Kids", "Karatê Adulto", "Karatê Competição"] as const;

type Modalidade = (typeof MODALIDADES)[number];

interface Horario {
  day: string;
  period: string;
  time: string;
  type: Exclude<Modalidade, "Todos">;
  description: string;
}

const HORARIOS: Horario[] = [
  // Segunda-feira
  { day: "Segunda-feira", period: "Manhã", time: "08:00 - 09:00", type: "Karatê Kids", description: "Turma infantil (5-8 anos)" },
  { day: "Segunda-feira", period: "Tarde", time: "17:00 - 18:00", type: "Karatê Kids", description: "Turma infantil (9-12 anos)" },
  { day: "Segunda-feira", period: "Noite", time: "19:00 - 20:30", type: "Karatê Adulto", description: "Turma adulto iniciante" },
  
  // Terça-feira
  { day: "Terça-feira", period: "Manhã", time: "07:00 - 08:00", type: "Karatê Adulto", description: "Turma adulto avançado" },
  { day: "Terça-feira", period: "Tarde", time: "16:00 - 17:00", type: "Karatê Kids", description: "Turma infantil (5-8 anos)" },
  { day: "Terça-feira", period: "Noite", time: "20:00 - 21:30", type: "Karatê Competição", description: "Treino de competição" },
  
  // Quarta-feira
  { day: "Quarta-feira", period: "Manhã", time: "08:00 - 09:00", type: "Karatê Kids", description: "Turma infantil (5-8 anos)" },
  { day: "Quarta-feira", period: "Tarde", time: "17:00 - 18:00", type: "Karatê Kids", description: "Turma infantil (9-12 anos)" },
  { day: "Quarta-feira", period: "Noite", time: "19:00 - 20:30", type: "Karatê Adulto", description: "Turma adulto iniciante" },
  
  // Quinta-feira
  { day: "Quinta-feira", period: "Manhã", time: "07:00 - 08:00", type: "Karatê Adulto", description: "Turma adulto avançado" },
  { day: "Quinta-feira", period: "Tarde", time: "16:00 - 17:00", type: "Karatê Kids", description: "Turma infantil (5-8 anos)" },
  { day: "Quinta-feira", period: "Noite", time: "20:00 - 21:30", type: "Karatê Competição", description: "Treino de competição" },
  
  // Sexta-feira
  { day: "Sexta-feira", period: "Manhã", time: "08:00 - 09:00", type: "Karatê Kids", description: "Turma infantil mista" },
  { day: "Sexta-feira", period: "Tarde", time: "17:00 - 18:00", type: "Karatê Kids", description: "Turma infantil mista" },
  { day: "Sexta-feira", period: "Noite", time: "19:00 - 20:30", type: "Karatê Adulto", description: "Turma adulto mista" },
  
  // Sábado
  { day: "Sábado", period: "Manhã", time: "09:00 - 11:00", type: "Karatê Competição", description: "Treino intensivo de competição" },
  { day: "Sábado", period: "Manhã", time: "11:00 - 12:00", type: "Karatê Kids", description: "Turma infantil especial" },
];

const DAYS = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado"];

const TYPE_COLORS: Record<Exclude<Modalidade, "Todos">, string> = {
  "Karatê Kids": "bg-green-500/20 text-green-400 border-green-500/30",
  "Karatê Adulto": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Karatê Competição": "bg-primary/20 text-primary border-primary/30",
};

export function Schedule() {
  const [selectedFilter, setSelectedFilter] = useState<Modalidade>("Todos");

  const filteredHorarios =
    selectedFilter === "Todos"
      ? HORARIOS
      : HORARIOS.filter((h) => h.type === selectedFilter);

  const groupedByDay = DAYS.map((day) => ({
    day,
    horarios: filteredHorarios.filter((h) => h.day === day),
  })).filter((group) => group.horarios.length > 0);

  return (
    <section id="horarios" className="py-20 bg-bg-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Grade de Aulas
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-light mt-2">
            Horários
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Confira nossa grade de horários e encontre a turma ideal para você ou seu filho.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {MODALIDADES.map((modalidade) => (
            <button
              key={modalidade}
              onClick={() => setSelectedFilter(modalidade)}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                selectedFilter === modalidade
                  ? "bg-primary text-text-light"
                  : "bg-bg-dark-card text-text-muted hover:bg-bg-dark-secondary hover:text-text-light"
              }`}
            >
              {modalidade}
            </button>
          ))}
        </div>

        {/* Schedule Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groupedByDay.map((group) => (
            <div
              key={group.day}
              className="bg-bg-dark-card rounded-xl overflow-hidden card-hover"
            >
              {/* Day Header */}
              <div className="bg-primary/10 px-6 py-4 border-b border-primary/20">
                <h3 className="font-heading text-xl font-bold text-text-light">
                  {group.day}
                </h3>
              </div>

              {/* Classes */}
              <div className="p-4 space-y-3">
                {group.horarios.map((horario, idx) => (
                  <div
                    key={idx}
                    className="bg-bg-dark-secondary rounded-lg p-4"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <svg
                            className="w-4 h-4 text-primary"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                          </svg>
                          <span className="text-text-light font-semibold">
                            {horario.time}
                          </span>
                        </div>
                        <p className="text-text-muted text-sm">
                          {horario.description}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium border ${
                          TYPE_COLORS[horario.type]
                        }`}
                      >
                        {horario.type.replace("Karatê ", "")}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {(Object.keys(TYPE_COLORS) as Array<keyof typeof TYPE_COLORS>).map((type) => (
            <div key={type} className="flex items-center gap-2">
              <span
                className={`w-3 h-3 rounded-full ${TYPE_COLORS[type].split(" ")[0]}`}
              />
              <span className="text-text-muted text-sm">{type}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
