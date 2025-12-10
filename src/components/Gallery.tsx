"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "/photo/campeonato_karate.jpeg",
    alt: "Campeonato de Karatê - Equipe ACMK",
    caption: "Equipe ACMK no campeonato regional",
  },
  {
    src: "/photo/campeonato_karate_2.jpeg",
    alt: "Atletas ACMK com medalhas",
    caption: "Nossos atletas conquistando medalhas",
  },
  {
    src: "/photo/criancas_com_sensei.jpeg",
    alt: "Crianças treinando com o Sensei",
    caption: "Turma infantil com o Sensei",
  },
  {
    src: "/photo/etapa_torneio.jpeg",
    alt: "Etapa do torneio de Karatê",
    caption: "Participação em etapa do torneio estadual",
  },
  {
    src: "/banner/dia_mundial_karate.jpeg",
    alt: "Dia Mundial do Karatê",
    caption: "Celebração do Dia Mundial do Karatê",
  },
  {
    src: "/banner/dia_mundial_karate_2.jpeg",
    alt: "Dia Mundial do Karatê - Turma",
    caption: "Nossa família ACMK reunida",
  },
];

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);

  const goToPrevious = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === 0 ? GALLERY_IMAGES.length - 1 : selectedImage - 1
    );
  }, [selectedImage]);

  const goToNext = useCallback(() => {
    if (selectedImage === null) return;
    setSelectedImage(
      selectedImage === GALLERY_IMAGES.length - 1 ? 0 : selectedImage + 1
    );
  }, [selectedImage]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage, goToPrevious, goToNext]);

  // Lock body scroll when lightbox is open
  useEffect(() => {
    if (selectedImage !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [selectedImage]);

  return (
    <section id="galeria" className="py-20 bg-bg-dark-secondary">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Nossos Momentos
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-text-light mt-2">
            Galeria
          </h2>
          <p className="text-text-muted mt-4 max-w-2xl mx-auto">
            Confira alguns momentos especiais da nossa família ACMK em treinos,
            campeonatos e eventos.
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((image, index) => (
            <button
              key={index}
              onClick={() => openLightbox(index)}
              className="relative aspect-square rounded-xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-bg-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-text-light text-sm font-medium">
                  {image.caption}
                </p>
              </div>
              {/* Zoom icon */}
              <div className="absolute top-4 right-4 w-10 h-10 bg-primary/80 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <svg
                  className="w-5 h-5 text-text-light"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                  />
                </svg>
              </div>
            </button>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 z-50 bg-bg-dark/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 w-12 h-12 bg-bg-dark-card rounded-full flex items-center justify-center text-text-light hover:bg-primary transition-colors z-10"
              aria-label="Fechar"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Previous button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-bg-dark-card rounded-full flex items-center justify-center text-text-light hover:bg-primary transition-colors z-10"
              aria-label="Anterior"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Next button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-bg-dark-card rounded-full flex items-center justify-center text-text-light hover:bg-primary transition-colors z-10"
              aria-label="Próximo"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>

            {/* Image */}
            <div
              className="relative max-w-5xl max-h-[80vh] w-full h-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={GALLERY_IMAGES[selectedImage].src}
                alt={GALLERY_IMAGES[selectedImage].alt}
                fill
                className="object-contain"
              />
              {/* Caption */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-bg-dark to-transparent p-6">
                <p className="text-text-light text-center font-medium">
                  {GALLERY_IMAGES[selectedImage].caption}
                </p>
                <p className="text-text-muted text-center text-sm mt-1">
                  {selectedImage + 1} / {GALLERY_IMAGES.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
