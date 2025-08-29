<p align="center">
  <img src="https://matthewroeder.com/images/mxrlogo.svg" alt="Matthew Roeder Logo">
</p>

# [Matthew Roeder - Architect & Developer](https://www.matthewroeder.com)

[![Azure Static Web Apps CI/CD](https://github.com/MXR831367/resume-website/actions/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml/badge.svg)](https://github.com/MXR831367/resume-website/actions/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml)
[![Build and deploy Python project to Azure Function App - mxr-website-counter](https://github.com/MXR831367/resume-website/actions/workflows/main_mxr-website-counter(dev).yml/badge.svg)](https://github.com/MXR831367/resume-website/actions/workflows/main_mxr-website-counter(dev).yml)

##  Table of Contents

- [📋 Overview](#overview)
  - [Design Philosophy](#design-philosophy)
- [✨ Features](#features)
- [📂 Project Structure](#project-structure)
  - [🗂 Project Index](#project-index)
- [👥 Contributing](#contributing)
- [🙏 Acknowledgments](#acknowledgments)

---

## 📋 Overview

This repository powers a fast, minimalist resume website for Matthew Roeder. The frontend uses semantic HTML, modern CSS (custom properties, responsive layout, OS-aware light/dark theme), and a small amount of vanilla JavaScript. The site is deployed as an Azure Static Web App, with a tiny Azure Functions API persisting anonymous page views in Azure Cosmos DB and CI/CD via GitHub Actions.

### Design Philosophy

Principles guiding this project:
- Content-first and accessible by default (semantic HTML, descriptive alt text, keyboard-friendly).
- Mobile-first, responsive layout that scales cleanly from small to large screens.
- Maintainable theming with CSS custom properties and OS-synced dark mode via prefers-color-scheme.
- Progressive enhancement with minimal, framework-free JavaScript; works even if JS is unavailable.
- Performance-focused: lean assets, no client framework or build step, optimized images and critical CSS.
- Privacy-conscious and minimal backend surface area (anonymous view counter only).
- Reliable, simple deployment: static hosting with a small serverless function.

---

## ✨ Features

- Lightweight, accessible, and responsive frontend using semantic HTML and modern CSS (custom properties, dark mode).
- Minimal, framework-free JavaScript for enhancements like theme color syncing and a page-view counter.
- Serverless visitor counter powered by Azure Functions with persistence in Azure Cosmos DB.
- Automated CI/CD via GitHub Actions deploying to Azure Static Web Apps and the Function App.

---

##  Project Structure

```sh
└── resume-website/
    ├── .github
    │   └── workflows
	|       └──
    ├── backend
    │   └── azure-functions
    └── frontend
        ├── README.md
        ├── css
        ├── favicon.ico
        ├── images
        ├── index.html
        └── js
```


###  Project Index
<details open>
  <summary><b><code>RESUME-WEBSITE/</code></b></summary>

  <details>
    <summary><b>.github</b></summary>
    <blockquote>
      <details>
        <summary><b>workflows</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href=".github/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml">azure-static-web-apps-salmon-river-08c6d6c0f.yml</a></b></td>
            <td>CI/CD pipeline for the static site.</td>
          </tr>
          <tr>
            <td><b><a href=".github/workflows/main_mxr-website-counter(dev).yml">main_mxr-website-counter(dev).yml</a></b></td>
            <td>CI/CD pipeline for the Azure Functions backend.</td>
          </tr>
          </table>
        </blockquote>
      </details>
    </blockquote>
  </details>

  <details>
    <summary><b>frontend</b></summary>
    <blockquote>
      <table>
      <tr>
        <td><b><a href="frontend/index.html">index.html</a></b></td>
        <td>Static markup for the resume website.</td>
      </tr>
      </table>

      <details>
        <summary><b>css</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href="frontend/css/reset.css">reset.css</a></b></td>
            <td>Baseline reset/normalization for consistent rendering.</td>
          </tr>
          <tr>
            <td><b><a href="frontend/css/style.css">style.css</a></b></td>
            <td>Responsive styles, theming with CSS variables, and dark mode.</td>
          </tr>
          </table>
        </blockquote>
      </details>

      <details>
        <summary><b>js</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href="frontend/js/main.js">main.js</a></b></td>
            <td>Theme color synchronization and page-view counter integration.</td>
          </tr>
          </table>
        </blockquote>
      </details>

      <details>
        <summary><b>images</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href="frontend/images/favicon/site.webmanifest">favicon/site.webmanifest</a></b></td>
            <td>Metadata and icons for installable app behavior.</td>
          </tr>
          </table>
        </blockquote>
      </details>
    </blockquote>
  </details>

  <details>
    <summary><b>backend</b></summary>
    <blockquote>
      <details>
        <summary><b>azure-functions</b></summary>
        <blockquote>
          <table>
          <tr>
            <td><b><a href="backend/azure-functions/function_app.py">function_app.py</a></b></td>
            <td>HTTP-triggered function that increments and returns the visit count.</td>
          </tr>
          <tr>
            <td><b><a href="backend/azure-functions/requirements.txt">requirements.txt</a></b></td>
            <td>Python dependencies for the function app.</td>
          </tr>
          <tr>
            <td><b><a href="backend/azure-functions/host.json">host.json</a></b></td>
            <td>Function host configuration.</td>
          </tr>
          <tr>
            <td><b><a href="backend/azure-functions/.funcignore">.funcignore</a></b></td>
            <td>Deployment ignore rules for Azure Functions.</td>
          </tr>
          </table>
        </blockquote>
      </details>
    </blockquote>
  </details>
</details>

##  Contributing

- **💬 [Join the Discussions](https://github.com/MXR831367/resume-website/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/MXR831367/resume-website/issues)**: Submit bugs found or log feature requests for the `resume-website.git` project.
- **💡 [Submit Pull Requests](https://github.com/MXR831367/resume-website/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details closed>
<summary>Contributing Guidelines</summary>

1. **Fork the Repository**: Start by forking the project repository to your github account.
2. **Clone Locally**: Clone the forked repository to your local machine using a git client.
   ```sh
   git clone https://github.com/MXR831367/resume-website.git
   ```
3. **Create a New Branch**: Always work on a new branch, giving it a descriptive name.
   ```sh
   git checkout -b new-feature-x
   ```
4. **Make Your Changes**: Develop and test your changes locally.
5. **Commit Your Changes**: Commit with a clear message describing your updates.
   ```sh
   git commit -m 'Implemented new feature x.'
   ```
6. **Push to github**: Push the changes to your forked repository.
   ```sh
   git push origin new-feature-x
   ```
7. **Submit a Pull Request**: Create a PR against the original project repository. Clearly describe the changes and their motivations.
8. **Review**: Once your PR is reviewed and approved, it will be merged into the main branch. Congratulations on your contribution!
</details>

<details closed>
<summary>Contributor Graph</summary>
<br>
<p align="left">
   <a href="https://github.com{/MXR831367/resume-website/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=MXR831367/resume-website.git">
   </a>
</p>
</details>

---

##  Acknowledgments

- @LearnToCloud for inspiring me to finally do this.
- @pascalvgemert for design inspiration.

---
