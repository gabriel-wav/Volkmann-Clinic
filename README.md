# 🦴 Projeto Site - Clínica Volkmann

Este repositório contém o código-fonte de um site estático para a "Clínica Volkmann", um centro ortopédico fictício. O projeto foi desenvolvido como uma aplicação front-end pura, utilizando HTML, CSS e JavaScript para criar uma experiência de usuário interativa e informativa.

**[Acessar a demonstração ao vivo (via GitHub Pages)](https://gabriel-wav.github.io/ClinicaVolkmann/index.html)**

---

## 📋 Índice

* [Visão Geral](#-visão-geral)
* [Funcionalidades Principais](#-funcionalidades-principais)
* [Arquitetura e Tecnologias](#%EF%B8%8F-arquitetura-e-tecnologias)
* [Estrutura do Projeto](#-estrutura-do-projeto)
* [Como Executar o Projeto](#-como-executar-o-projeto)
* [Autores](#-autores)

---

## 🖼 Visão Geral

O site da Clínica Volkmann serve como um portal informativo e de interação para pacientes. Ele foi projetado a partir de um protótipo no Figma e implementado com foco em uma estrutura modular e estilização individualizada para cada seção, apresentando as especialidades da clínica, seu corpo médico e permitindo que os usuários se cadastrem e agendem consultas.

---

## ✨ Funcionalidades Principais

O site é composto por diversas páginas, cada uma com um propósito específico:

* **Página Inicial (`index.html`):** Apresenta a clínica, com atalhos para as principais especialidades e um chamado para agendamento de consultas.
* **Quem Somos (`quemsomos.html`):** Detalha a história, missão, visão e valores da clínica.
* **Especialidades (`especialidades.html`):** Exibe os diferentes tratamentos ortopédicos oferecidos.
* **Saiba Mais (`saiba-mais.html`):** Página de detalhamento para cada especialidade, explicando os tratamentos e profissionais responsáveis.
* **Corpo Médico (`corpomedico.html`):** Apresenta os perfis dos médicos da equipe com descrições interativas.
* **Cadastro e Login (`cadastro.html`, `login.html`):** Formulários para que novos pacientes possam se cadastrar e usuários existentes possam acessar sua área.
* **Agendamento de Consultas (`consultas.html`):** Formulário para marcar consultas.
* **Política de Privacidade (`politica.html`):** Informações sobre o uso de dados dos usuários.

---

## 🛠️ Arquitetura e Tecnologias

O projeto é construído exclusivamente com tecnologias front-end e não requer um back-end para funcionar.

* **Tecnologias Utilizadas:**
    * **HTML5:** Para a estruturação semântica do conteúdo.
    * **CSS3:** Para a estilização, com folhas de estilo separadas para cada página, permitindo um design customizado por seção.
    * **JavaScript (ES6):** Utilizado para interatividade e modularização.
    * **Figma:** O design visual do projeto foi prototipado na plataforma.

* **Arquitetura Modular:**
    Uma característica notável da arquitetura é a **modularização do cabeçalho e rodapé**. Em vez de repetir o código em cada arquivo HTML, os componentes `header.html` e `footer.html` são carregados dinamicamente em todas as páginas usando a API `fetch()` do JavaScript (`header.js`, `footer.js`). Isso centraliza a manutenção e garante consistência visual em todo o site.

---

## 📁 Estrutura do Projeto

A estrutura de arquivos do repositório está organizada da seguinte maneira:

* **Páginas Principais (`.html`)**
    * `index.html` (Página inicial do site)
    * `quemsomos.html` (Seção sobre a clínica)
    * `especialidades.html` (Lista as áreas de atuação)
    * `saiba-mais.html` (Detalhes sobre cada especialidade)
    * `corpomedico.html` (Apresenta os profissionais)
    * `consultas.html` (Formulário para agendamento)
    * `cadastro.html` (Formulário de cadastro de paciente)
    * `login.html` (Página de login)
    * `politica.html` (Política de privacidade)

* **Componentes Reutilizáveis (`.html`)**
    * `header.html` (O cabeçalho, injetado em todas as páginas)
    * `footer.html` (O rodapé, injetado em todas as páginas)

* **Folhas de Estilo (`.css`)**
    * `style.css` (Estilos globais aplicados a todo o site)
    * Arquivos como `login.css`, `quemsomos.css`, etc. (Estilos específicos para cada página)

* **Scripts (`.js`)**
    * `header.js` (Lógica para carregar o cabeçalho em todas as páginas)
    * `footer.js` (Lógica para carregar o rodapé em todas as páginas)

* **Recursos e Configurações**
    * `imagens/` (Pasta que contém todos os logos, fotos de médicos e ícones)
    * `figma.html` (Arquivo com o link para o protótipo visual no Figma)
    * `settings.json` (Configuração do ambiente de desenvolvimento no VS Code)

---

## 🚀 Como Executar o Projeto

Como este é um projeto front-end estático, não há necessidade de um processo de build ou de instalação de dependências complexas.

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/gabriel-wav/ClinicaVolkmann.git](https://github.com/gabriel-wav/ClinicaVolkmann.git)
    ```

2.  **Abra o Projeto:**
    * Navegue até a pasta do projeto clonado.
    * Abra o arquivo `index.html` diretamente em qualquer navegador web.

3.  **Usando o Live Server (Recomendado):**
    * Se você utiliza o Visual Studio Code, é recomendado usar a extensão **Live Server**.
    * O projeto já contém uma configuração (`settings.json`) para o Live Server. Basta clicar no botão `Go Live` no canto inferior direito do VS Code para iniciar um servidor de desenvolvimento local.

---

## 👨‍💻 Autores

Este projeto foi desenvolvido e é mantido por:

* **Gabriel** - [GitHub: @gabriel-wav](https://github.com/gabriel-wav)
* **Danilo** - [GitHub: @danilinhotj187](https://github.com/danilinhotj187)
* **Antonio** - [GitHub: @Antoniojferreira3](https://github.com/Antoniojferreira3)
* **Pedro** - [GitHub: @pedroH901](https://github.com/pedroH901)
* **David** - [GitHub: @davidmassari](https://github.com/davidmassari)

