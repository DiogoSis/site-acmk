# ACMK – Design System da Associação Corpo e Mente de Karatê

Este repositório documenta o **design system oficial da ACMK** para uso em sites, redes sociais e materiais impressos.

---

## Índice

1. [Visão Geral da Marca](#1-visão-geral-da-marca)
2. [Identidade Visual](#2-identidade-visual)
   - [Paleta de Cores](#21-paleta-de-cores)
   - [Tokens de Cores](#22-tokens-de-cores)
3. [Tipografia](#3-tipografia)
   - [Hierarquia Tipográfica](#31-hierarquia-tipográfica)
   - [Tokens de Tipografia](#32-tokens-de-tipografia)
4. [Logo](#4-logo)
5. [Fotografia e Imagens](#5-fotografia-e-imagens)
6. [Elementos Gráficos e Iconografia](#6-elementos-gráficos-e-iconografia)
7. [Tom de Comunicação](#7-tom-de-comunicação)
8. [Aplicações em Redes Sociais](#8-aplicações-em-redes-sociais)
   - [Modelos de Post em Markdown](#81-modelos-de-post-em-markdown)
9. [Grid e Layout](#9-grid-e-layout)
10. [Texto Institucional Exemplo](#10-texto-institucional-exemplo)
11. [Checklist Rápido de Uso](#11-checklist-rápido-de-uso)

---

## 1. Visão Geral da Marca

**Nome:** ACMK – Associação Corpo e Mente de Karatê  
**Significado:** Integração entre disciplina física (corpo) e formação de valores (mente) por meio do Karatê.

**Pilares da marca:**

- Disciplina
- Respeito
- Superação
- Comunidade / Família
- Inclusão social

**Tom de voz:**

- Motivador e acolhedor
- Didático (explica, ensina)
- Firme, porém positivo
- Focado em valores (respeito, educação, companheirismo)

**Slogans sugeridos:**

- "Força, disciplina e coração."
- "Corpo forte, mente tranquila."
- "Transformando vidas pelo Karatê."

---

## 2. Identidade Visual

### 2.1. Paleta de Cores

**Principais:**

- **Vermelho ACMK**
  - Uso: destaques, títulos, botões principais, fundos de chamadas
  - Hex: `#E02424`

- **Preto Dojo**
  - Uso: textos fortes, fundos escuros, barras, faixas
  - Hex: `#111111`

- **Branco Kimono**
  - Uso: fundos, textos sobre vermelho/preto
  - Hex: `#FFFFFF`

- **Cinza Tatame**
  - Uso: fundos neutros, cards, divisórias
  - Hex: `#E5E5E5`

**Apoio (opcionais):**

- **Cinza Escuro** – `#4B4B4B` (subtítulos, ícones)
- **Dourado Medalha** – `#C89B3C` (selos, conquistas, medalhas)

**Regras de uso:**

- Priorizar vermelho para elementos de foco (títulos, CTAs).
- Manter bom contraste de leitura (padrão AA).
- Evitar mais de 3 cores fortes no mesmo layout.

### 2.2. Tokens de Cores

#### 2.2.1. JSON de Design Tokens

```json
{
  "color-primary": "#E02424",
  "color-primary-dark": "#B01A1A",
  "color-primary-light": "#F45C5C",

  "color-background": "#FFFFFF",
  "color-background-muted": "#E5E5E5",

  "color-text": "#111111",
  "color-text-muted": "#4B4B4B",
  "color-text-on-primary": "#FFFFFF",

  "color-accent-gold": "#C89B3C"
}
```

#### 2.2.2. Exemplo em CSS

```css
:root {
  --color-primary: #E02424;
  --color-primary-dark: #B01A1A;
  --color-primary-light: #F45C5C;

  --color-background: #FFFFFF;
  --color-background-muted: #E5E5E5;

  --color-text: #111111;
  --color-text-muted: #4B4B4B;
  --color-text-on-primary: #FFFFFF;

  --color-accent-gold: #C89B3C;
}
```

---

## 3. Tipografia

### 3.1. Hierarquia Tipográfica

**Títulos (Impacto / Esportivo):**

- Fontes sugeridas:
  - Anton
  - Bebas Neue
  - Oswald (bold)
- Uso: H1, H2, grandes chamadas em posts e banners.

**Subtítulos / Destaques:**

- Fonte sugerida: Oswald (regular / semibold)

**Texto Corrido:**

- Fontes sugeridas: Inter, Roboto ou Montserrat

**Tamanhos (web):**

- H1: 32–40 px
- H2: 24–28 px
- H3: 18–20 px
- Corpo: 16–18 px desktop, 14–16 px mobile

### 3.2. Tokens de Tipografia

#### 3.2.1. JSON de Design Tokens

```json
{
  "font-family-heading": "'Anton', 'Bebas Neue', 'Oswald', system-ui, -apple-system, sans-serif",
  "font-family-subheading": "'Oswald', system-ui, -apple-system, sans-serif",
  "font-family-body": "'Inter', 'Roboto', system-ui, -apple-system, sans-serif",

  "font-size-h1": "2.5rem",
  "font-size-h2": "2rem",
  "font-size-h3": "1.25rem",
  "font-size-body": "1rem",

  "line-height-heading": "1.1",
  "line-height-body": "1.5",

  "font-weight-heading": 700,
  "font-weight-subheading": 600,
  "font-weight-body": 400
}
```

#### 3.2.2. Exemplo em CSS

```css
:root {
  --font-family-heading: 'Anton', 'Bebas Neue', 'Oswald', system-ui, -apple-system, sans-serif;
  --font-family-subheading: 'Oswald', system-ui, -apple-system, sans-serif;
  --font-family-body: 'Inter', 'Roboto', system-ui, -apple-system, sans-serif;

  --font-size-h1: 2.5rem;
  --font-size-h2: 2rem;
  --font-size-h3: 1.25rem;
  --font-size-body: 1rem;

  --line-height-heading: 1.1;
  --line-height-body: 1.5;

  --font-weight-heading: 700;
  --font-weight-subheading: 600;
  --font-weight-body: 400;
}
```

---

## 4. Logo

**Elementos principais:**

- Círculo preto externo com texto "ASSOCIAÇÃO CORPO E MENTE DE KARATÊ – ACMK".
- Disco vermelho central (sol).
- Silhuetas de dois karatecas em ação.
- Detalhes em cinza (montanha/nuvens).

**Regras de uso:**

- Não distorcer (nunca esticar).
- Manter área de respiro (mínimo a largura da letra "A" ao redor).
- Em fundos poluídos, aplicar sobre círculo branco ou versão com contorno branco.

**Versões recomendadas:**

- Colorida (padrão).
- Monocromática branca (para fundos escuros).
- Monocromática preta (impressos P&B).

---

## 5. Fotografia e Imagens

**Estilo desejado:**

- Mostrar pessoas reais (crianças, famílias, senseis, equipe).
- Emoções claras: alegria, orgulho, foco, união.
- Apoiar visualmente os valores da ACMK (disciplina + carinho).

**Diretrizes:**

- Boa iluminação, cores vivas (vermelho, branco, preto).
- Sempre que possível, incluir o logo (banner, camisa, faixa).
- Combinar fotos de:
  - Campeonatos e pódios.
  - Treinos coletivos.
  - Momentos descontraídos (como crianças com o sensei).

---

## 6. Elementos Gráficos e Iconografia

**Formas:**

- Círculos (inspirados no sol do logo).
- Pinceladas / manchas vermelhas (efeito tinta).
- Faixas horizontais e verticais em vermelho e preto.

**Iconografia:**

- Estilo simples, cheio ou traço grosso.
- Ícones sugeridos:
  - Punho fechado → Karatê
  - Coração / cérebro → mente
  - Medalha / pódio → conquistas
  - Grupo de pessoas → comunidade / projeto social

---

## 7. Tom de Comunicação

**Princípios:**

- Positivo e encorajador.
- Inclusivo: falar com crianças, pais e adultos.
- Educativo: explicar benefícios do Karatê para corpo e mente.
- Comunitário: reforçar "família ACMK".

**Exemplos de frases:**

- "Aqui a luta é dentro do tatame e a vitória é para a vida."
- "Venha treinar com a equipe ACMK: disciplina, respeito e amizade."
- "Cada faixa conquistada é um passo na construção do seu caráter."

---

## 8. Aplicações em Redes Sociais

**Formato padrão (feed):** 1080x1080 ou 1080x1350.

**Estrutura recomendada:**

- Faixa vermelha com título em branco no topo.
- Foto principal ao centro.
- Logo ACMK no canto inferior.

### 8.1. Modelos de Post em Markdown

Abaixo, modelos que você pode copiar/colar, ajustando textos e imagens.

#### 8.1.1. Modelo – Chamada para Treinos

```markdown
<!-- FOTO PRINCIPAL: turma treinando no tatame -->
![FOTO PRINCIPAL – TURMA TREINANDO](caminho/para/foto.jpg)

# VENHA TREINAR KARATÊ COM A EQUIPE ACMK 💥

_Aqui você pode colocar um subtítulo curto, por exemplo:_

Disciplina, respeito e amizade para crianças, jovens e adultos.

**O que você vai encontrar na ACMK:**
- Aulas de Karatê para todas as idades
- Projeto social com foco em inclusão
- Treinos voltados para campeonatos e desenvolvimento pessoal

📍 *Local:* _[inserir endereço]_  
🕒 *Horários:* _[inserir horários principais]_

> Corpo forte, mente tranquila. Venha fazer parte da nossa família ACMK!

![LOGO ACMK](caminho/para/logo.png)
```

#### 8.1.2. Modelo – Resultado de Campeonato

```markdown
<!-- FOTO PRINCIPAL: atletas com medalhas / pódio -->
![FOTO PRINCIPAL – EQUIPE CAMPEONATO](caminho/para/foto-campeonato.jpg)

# ORGULHO DA EQUIPE ACMK 🏅

No último fim de semana, nossos atletas representaram a **ACMK – Associação Corpo e Mente de Karatê** na competição:

**Nome do Evento:** _[inserir]_  
**Cidade/Local:** _[inserir]_  
**Data:** _[inserir]_

**Resultados em destaque:**
- 🥇 _[Nome do atleta]_ – _[categoria]_
- 🥈 _[Nome do atleta]_ – _[categoria]_
- 🥉 _[Nome do atleta]_ – _[categoria]_

Parabéns a todos os atletas, famílias e senseis que fizeram parte dessa conquista. Cada medalha é resultado de muito treino, disciplina e união!

> Juntos, somos mais fortes. Juntos, somos ACMK.

![LOGO ACMK](caminho/para/logo.png)
```

#### 8.1.3. Modelo – Dia Mundial do Karatê (25 de Outubro)

```markdown
<!-- FOTO/COLAGEM: momentos de treino e campeonatos -->
![FOTO PRINCIPAL – DIA MUNDIAL DO KARATÊ](caminho/para/foto-dia-mundial.jpg)

# 25 DE OUTUBRO – DIA MUNDIAL DO KARATÊ 🥋

Hoje celebramos a arte que transforma **corpo e mente** todos os dias no nosso dojo.

Na **ACMK**, o Karatê é:
- Respeito e disciplina
- Amizade e trabalho em equipe
- Coragem para enfrentar desafios dentro e fora do tatame

Se você ou seu filho ainda não conhece o Karatê, esse é o momento perfeito para dar o primeiro passo.

📩 *Entre em contato pelo direct ou WhatsApp para saber como começar.*

> Karatê é mais do que luta: é um caminho para a vida inteira.

![LOGO ACMK](caminho/para/logo.png)
```

#### 8.1.4. Modelo – Bastidores / Clima de Família

```markdown
<!-- FOTO PRINCIPAL: crianças com sensei, turma sorrindo, bastidores -->
![FOTO PRINCIPAL – FAMÍLIA ACMK](caminho/para/foto-bastidores.jpg)

# FAMÍLIA ACMK ❤️

Na **ACMK – Associação Corpo e Mente de Karatê**, o tatame é também um lugar de:

- Amizade
- Respeito
- Apoio entre alunos, famílias e professores

Cada sorriso e cada abraço mostram que estamos no caminho certo: formar pessoas mais fortes por dentro e por fora.

> Mais do que alunos, somos uma família de karatecas.

![LOGO ACMK](caminho/para/logo.png)
```

---

## 9. Grid e Layout

**Posts quadrados (feed):**

- Dividir mentalmente em 3 faixas horizontais:
  - Topo: faixa vermelha com título.
  - Meio: foto principal.
  - Base: logo + informações de evento (data, local, @perfil).

**Stories / vertical:**

- Título forte no topo.
- Foto ao centro.
- Chamada simples embaixo (ex.: "Chame no direct para saber mais").

---

## 10. Texto Institucional Exemplo

> A ACMK – Associação Corpo e Mente de Karatê – é um projeto dedicado a formar pessoas fortes no corpo e na mente. Acreditamos que o Karatê vai muito além dos golpes: é disciplina, respeito, amizade e superação.
>
> Em nossos treinos, crianças, jovens e adultos aprendem a se concentrar, a trabalhar em equipe e a lutar pelos seus objetivos – dentro e fora do tatame.
>
> Venha fazer parte da nossa família e descubra todo o potencial que existe em você.

---

## 11. Checklist Rápido de Uso

Antes de publicar uma peça ou página, confirme:

- [ ] As cores seguem a paleta (vermelho, preto, branco, cinza)?
- [ ] O logo está legível, sem distorção e com área de respiro?
- [ ] Títulos usam fonte de impacto; corpo de texto é legível?
- [ ] A foto mostra pessoas reais e transmite emoção positiva?
- [ ] O texto está em tom motivador, acolhedor e educativo?

---

## 12. Informações de Contato

**Dados oficiais para uso em materiais:**

| Campo | Informação |
|-------|------------|
| **Nome** | ACMK – Associação Corpo e Mente de Karatê |
| **Site** | [acmk.mktforce.online](https://acmk.mktforce.online) |
| **Endereço** | Rua Santo André, 1, Km32 – Nova Iguaçu, RJ |
| **CEP** | 26298-662 |
| **WhatsApp** | (21) 98850-5337 |
| **Instagram** | @acmk_km32 |

**Link do WhatsApp para CTAs:**

```text
https://wa.me/5521988505337
```

**Coordenadas para mapas:**

```text
Latitude: -22.855118240966174
Longitude: -43.606102297118774
```
