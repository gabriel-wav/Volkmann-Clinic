# 🦴 Project Website - Volkmann Clinic

This repository contains the source code for a static website for "Volkmann Clinic", a fictional orthopedic center. The project was developed as a pure front-end application, using HTML, CSS and JavaScript to create an interactive and informative user experience.

**[Access the live demo (via GitHub Pages)](https://gabriel-wav.github.io/ClinicaVolkmann/index.html)**

---

## 📋 Table of Contents

* [Overview](#-overview)
* [Key Features](#-key-features)
* [Architecture & Technologies](#️-architecture--technologies)
* [Project Structure](#-project-structure)
* [How to Run the Project](#-how-to-run-the-project)
* [Authors](#-authors)

---

## 🖼 Overview

The Volkmann Clinic website serves as an informational and interactive portal for patients. It was designed from a Figma prototype and implemented with a focus on a modular structure and individualized styling for each section, presenting the clinic's specialties, its medical staff, and allowing users to register and schedule appointments.

---

## ✨ Key Features

The website is composed of several pages, each with a specific purpose:

* **Home Page (`index.html`):** Introduces the clinic, with shortcuts to the main specialties and a call-to-action for scheduling appointments.
* **About Us (`quemsomos.html`):** Details the clinic's history, mission, vision, and values.
* **Specialties (`especialidades.html`):** Displays the different orthopedic treatments offered.
* **Learn More (`saiba-mais.html`):** A detail page for each specialty, explaining the treatments and the responsible professionals.
* **Medical Staff (`corpomedico.html`):** Presents the profiles of the team's doctors with interactive descriptions.
* **Registration & Login (`cadastro.html`, `login.html`):** Forms for new patients to register and existing users to access their area.
* **Appointment Scheduling (`consultas.html`):** A form to book appointments.
* **Privacy Policy (`politica.html`):** Information about user data usage.

---

## 🛠️ Architecture & Technologies

The project is built exclusively with front-end technologies and does not require a back-end to run.

* **Technologies Used:**
    * **HTML5:** For the semantic structuring of content.
    * **CSS3:** For styling, with separate stylesheets for each page, allowing a customized design per section.
    * **JavaScript (ES6):** Used for interactivity and modularization.
    * **Figma:** The visual design of the project was prototyped on the platform.

* **Modular Architecture:**
    A notable characteristic of the architecture is the **modularization of the header and footer**. Instead of repeating the code in every HTML file, the `header.html` and `footer.html` components are dynamically loaded on all pages using the JavaScript `fetch()` API (`header.js`, `footer.js`). This centralizes maintenance and ensures visual consistency throughout the site.

---

## 📁 Project Structure

The repository's file structure is organized as follows:

* **Main Pages (`.html`)**
    * `index.html` (Site home page)
    * `quemsomos.html` (About the clinic section)
    * `especialidades.html` (Lists the areas of expertise)
    * `saiba-mais.html` (Details about each specialty)
    * `corpomedico.html` (Presents the professionals)
    * `consultas.html` (Appointment scheduling form)
    * `cadastro.html` (Patient registration form)
    * `login.html` (Login page)
    * `politica.html` (Privacy policy)

* **Reusable Components (`.html`)**
    * `header.html` (The header, injected into all pages)
    * `footer.html` (The footer, injected into all pages)

* **Stylesheets (`.css`)**
    * `style.css` (Global styles applied to the entire site)
    * Files such as `login.css`, `quemsomos.css`, etc. (Page-specific styles)

* **Scripts (`.js`)**
    * `header.js` (Logic to load the header on all pages)
    * `footer.js` (Logic to load the footer on all pages)

* **Resources & Configuration**
    * `imagens/` (Folder containing all logos, doctor photos, and icons)
    * `figma.html` (File with the link to the visual prototype on Figma)
    * `settings.json` (Development environment configuration for VS Code)

---

## 🚀 How to Run the Project

Since this is a static front-end project, there is no need for a build process or complex dependency installation.

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/gabriel-wav/ClinicaVolkmann.git](https://github.com/gabriel-wav/ClinicaVolkmann.git)
    ```

2.  **Open the Project:**
    * Navigate to the cloned project folder.
    * Open the `index.html` file directly in any web browser.

3.  **Using Live Server (Recommended):**
    * If you use Visual Studio Code, it is recommended to use the **Live Server** extension.
    * The project already includes a configuration (`settings.json`) for Live Server. Simply click the `Go Live` button in the bottom-right corner of VS Code to start a local development server.

---

## 👨‍💻 Authors

This project was developed and is maintained by:

* **Gabriel** - [GitHub: @gabriel-wav](https://github.com/gabriel-wav)
* **Danilo** - [GitHub: @danilinhotj187](https://github.com/danilinhotj187)
* **Antonio** - [GitHub: @Antoniojferreira3](https://github.com/Antoniojferreira3)
* **Pedro** - [GitHub: @pedroH901](https://github.com/pedroH901)
* **David** - [GitHub: @davidmassari](https://github.com/davidmassari)
