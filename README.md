# 🥋 ACMK - Associação Corpo e Mente de Karatê

<div align="center">

![ACMK Logo](public/logo/logo.jpg)

**Site institucional da ACMK - Transformando vidas pelo Karatê**

[![Next.js](https://img.shields.io/badge/Next.js-16.0-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

[Ver Demo](#) • [Reportar Bug](https://github.com/DiogoSis/site-acmk/issues) • [Solicitar Feature](https://github.com/DiogoSis/site-acmk/issues)

</div>

---

## 📖 Sobre o Projeto

A **ACMK – Associação Corpo e Mente de Karatê** é um projeto dedicado a formar pessoas fortes no corpo e na mente. Este site institucional foi desenvolvido para apresentar a academia, suas modalidades, horários e facilitar o contato com novos alunos.

### ✨ Características

- 🎨 **Design System Personalizado** - Cores e tipografia alinhadas à identidade visual da ACMK
- 📱 **Totalmente Responsivo** - Otimizado para todos os dispositivos
- ⚡ **Performance** - Construído com Next.js 16 e Turbopack
- 🖼️ **Galeria Interativa** - Lightbox com navegação por teclado
- 📅 **Grade de Horários** - Filtro por modalidade
- 💬 **Integração WhatsApp** - Contato direto com a academia
- 🔍 **SEO Otimizado** - Meta tags e estrutura semântica

---

## 🚀 Tecnologias

Este projeto foi desenvolvido com as seguintes tecnologias:

- **[Next.js 16](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://reactjs.org/)** - Biblioteca para interfaces
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Turbopack](https://turbo.build/pack)** - Bundler de alta performance

---

## 📁 Estrutura do Projeto

```
acmk/
├── design-system/           # Documentação do design system
│   ├── desing_system.md     # Guia de identidade visual
│   └── img/                 # Assets originais
├── public/
│   ├── banner/              # Imagens de banner
│   ├── logo/                # Logo da academia
│   └── photo/               # Fotos do site
├── src/
│   ├── app/
│   │   ├── globals.css      # Variáveis CSS e estilos globais
│   │   ├── layout.tsx       # Layout raiz com metadata
│   │   └── page.tsx         # Página principal
│   └── components/
│       ├── index.ts         # Barrel export
│       ├── Header.tsx       # Header fixo com navegação
│       ├── Hero.tsx         # Seção principal com CTA
│       ├── About.tsx        # Sobre a academia
│       ├── Schedule.tsx     # Grade de horários
│       ├── Gallery.tsx      # Galeria de fotos
│       ├── CTA.tsx          # Call to action
│       ├── Contact.tsx      # Formulário de contato
│       └── Footer.tsx       # Rodapé
├── package.json
├── tsconfig.json
├── next.config.ts
└── postcss.config.mjs
```

---

## 🎨 Design System

O site segue o design system oficial da ACMK:

### Paleta de Cores

| Cor | Hex | Uso |
|-----|-----|-----|
| 🔴 Vermelho ACMK | `#E02424` | Cor primária, CTAs, destaques |
| ⬛ Preto Dojo | `#111111` | Fundos escuros, textos fortes |
| ⬜ Branco Kimono | `#FFFFFF` | Fundos claros, textos sobre escuro |
| 🟡 Dourado Medalha | `#C89B3C` | Acentos, conquistas |

### Tipografia

- **Títulos:** Oswald (Google Fonts)
- **Corpo:** Inter (Google Fonts)

---

## 🛠️ Instalação

### Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

### Passos

1. **Clone o repositório**

   ```bash
   git clone https://github.com/DiogoSis/site-acmk.git
   cd site-acmk
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Inicie o servidor de desenvolvimento**

   ```bash
   npm run dev
   ```

4. **Acesse no navegador**

   ```
   http://localhost:3000
   ```

---

## 📜 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia o servidor de desenvolvimento com Turbopack |
| `npm run build` | Gera a build de produção |
| `npm run start` | Inicia o servidor de produção |
| `npm run lint` | Executa o ESLint |

---

## 🌐 Seções do Site

1. **Header** - Navegação fixa com menu responsivo
2. **Hero** - Banner principal com estatísticas e CTAs
3. **Sobre** - História e valores da ACMK
4. **Horários** - Grade de aulas com filtro por modalidade
5. **Galeria** - Fotos de treinos e campeonatos
6. **CTA** - Chamada para aula experimental
7. **Contato** - Formulário e informações de contato
8. **Footer** - Links rápidos e redes sociais

---

## ⚙️ Configuração

### Personalizando Informações

Para atualizar as informações de contato, edite os seguintes arquivos:

- **WhatsApp:** `src/components/Hero.tsx`, `src/components/CTA.tsx`, `src/components/Contact.tsx`
- **Endereço:** `src/components/Contact.tsx`
- **Redes Sociais:** `src/components/Footer.tsx`
- **Horários:** `src/components/Schedule.tsx`

### Alterando Cores

As cores são definidas em `src/app/globals.css` através de variáveis CSS:

```css
:root {
  --primary: #E02424;
  --primary-dark: #B01A1A;
  --secondary: #C89B3C;
  /* ... */
}
```

---

## 📸 Screenshots

<div align="center">

### Desktop

![Desktop Preview](design-system/img/banner/banner_frase.jpeg)

</div>

---

## 🤝 Contribuindo

Contribuições são bem-vindas! Sinta-se à vontade para:

1. Fazer um Fork do projeto
2. Criar uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abrir um Pull Request

---

## 📝 Licença

Este projeto está sob a licença ISC. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

## 📞 Contato

**ACMK - Associação Corpo e Mente de Karatê**

- 📧 Email: <contato@acmk.com.br>
- 📱 WhatsApp: (00) 00000-0000
- 📸 Instagram: [@acmk_karate](https://instagram.com/acmk_karate)

---

<div align="center">

**Desenvolvido com ❤️ para a família ACMK**

*"Corpo forte, mente tranquila."*

</div>
