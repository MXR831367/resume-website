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

This repository contains the code for Matthew Roeder's professional resume website. The site showcases Matthew's experience, skills, and professional certifications in a clean, responsive design. The project is deployed using Azure Static Web Apps with a serverless backend to track page views.

### Design Philosophy

The website follows modern web design principles with:
- Clean, minimalist aesthetic with a focus on content readability
- Responsive layout that works across all device sizes
- Semantic HTML and accessibility features
- Progressive enhancement with subtle animations
- Performance optimization for fast loading times

---

## ✨ Features

- **Modern & Responsive Frontend**:
  - Built with pure HTML5, CSS3, and vanilla JavaScript, ensuring a lightweight and fast user experience.
  - The design is fully responsive, adapting seamlessly to all screen sizes from mobile to desktop.
  - Includes engaging UI elements like animated skill bars that trigger on scroll.

- **Serverless Visitor Counter**:
  - A serverless API endpoint built with Python and Azure Functions tracks the number of website visits.
  - Utilizes Azure Cosmos DB to persist the visitor count, providing a highly scalable and resilient backend.

- **Automated CI/CD Pipeline**:
  - Integrated with GitHub Actions for a fully automated build and deployment process.
  - The frontend is deployed as an Azure Static Web App, and the backend is deployed to an Azure Function App.
  - Pushes to the `main` branch automatically trigger deployments, ensuring the live site is always up-to-date.

- **Comprehensive Documentation & Testing**:
  - The project includes detailed setup and usage instructions for both local development and deployment.
  - Scripts and configurations are provided for testing the backend functions and validating the frontend code.

---

##  Project Structure

```sh
└── resume-website.git/
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
	<summary><b><code>RESUME-WEBSITE.GIT/</code></b></summary>
	<details> <!-- __root__ Submodule -->
		<summary><b>__root__</b></summary>
		<blockquote>
			<table>
			</table>
		</blockquote>
	</details>
	<details> <!-- .github Submodule -->
		<summary><b>.github</b></summary>
		<blockquote>
			<details>
				<summary><b>workflows</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/.github/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml'>azure-static-web-apps-salmon-river-08c6d6c0f.yml</a></b></td>
						<td>- Automates CI/CD for Azure Static Web Apps<br>- Handles build and deployment on push to main branch or pull request events<br>- Executes deployment and closes pull requests using specified configurations<br>- Integrates with Azure and GitHub for seamless workflow.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/.github/workflows/main_mxr-website-counter(dev).yml'>main_mxr-website-counter(dev).yml</a></b></td>
						<td>- Automates the build and deployment process of a Python project to an Azure Function App named 'mxr-website-counter'<br>- Utilizes GitHub Actions to set up the Python environment, resolve project dependencies, and run the Azure Functions Action for deployment<br>- The workflow triggers on pushes to the main branch and manual dispatch.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- frontend Submodule -->
		<summary><b>frontend</b></summary>
		<blockquote>
			<table>
			<tr>
				<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/index.html'>index.html</a></b></td>
				<td>- Semantic HTML5 structure with proper accessibility attributes<br>- Organized into logical sections for different resume components<br>- Optimized for SEO with appropriate meta tags and structured content</td>
			</tr>
			</table>
			<details>
				<summary><b>css</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/css/style.css'>style.css</a></b></td>
						<td>- Modern CSS with CSS variables for consistent theming<br>- Responsive design using mobile-first approach<br>- Component-based styling with clean organization<br>- Optimized for performance and readability</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/css/reset.css'>reset.css</a></b></td>
						<td>- CSS reset and normalization to ensure consistent cross-browser rendering<br>- Removes default browser styles for predictable styling<br>- Establishes baseline typography and spacing</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>js</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/js/main.js'>main.js</a></b></td>
						<td>- Modern, well-documented JavaScript with clean structure and comments<br>- Handles view counter integration with backend API<br>- Implements skill bar animations using Intersection Observer for better performance<br>- Follows progressive enhancement principles to ensure functionality without JavaScript</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>images</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/images/IMG_3877.PNG'>IMG_3877.PNG</a></b></td>
						<td>- The provided code file serves as a crucial component within the project's architecture, contributing to the overall functionality of the P module<br>- It plays a key role in achieving a specific purpose within the codebase, enhancing the project's capabilities and supporting its objectives.</td>
					</tr>
					</table>
					<details>
						<summary><b>favicon</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/images/favicon/site.webmanifest'>site.webmanifest</a></b></td>
								<td>- Define the project's web app appearance and behavior by configuring the site manifest file<br>- Customize the app's name, icons, theme colors, and display mode for a cohesive user experience.</td>
							</tr>
							</table>
						</blockquote>
					</details>
				</blockquote>
			</details>
		</blockquote>
	</details>
	<details> <!-- backend Submodule -->
		<summary><b>backend</b></summary>
		<blockquote>
			<details>
				<summary><b>azure-functions</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/backend/azure-functions/requirements.txt'>requirements.txt</a></b></td>
						<td>- Facilitates management of Azure Functions dependencies by specifying required packages in the 'requirements.txt' file<br>- Ensures proper functioning of Azure Functions and integration with Azure Cosmos<br>- Prevents potential issues by excluding 'azure-functions-worker' from manual management.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/backend/azure-functions/function_app.py'>function_app.py</a></b></td>
						<td>- Increment website visit count in Cosmos DB using Azure Functions<br>- Handles HTTP requests to update count for a specified document ID<br>- Retrieves document, increments count, and updates Cosmos DB<br>- Filters non-relevant keys before returning updated count<br>- Handles errors and responds accordingly.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/backend/azure-functions/host.json'>host.json</a></b></td>
						<td>Configures Azure Functions host settings for logging and extension bundles, ensuring efficient application monitoring and management.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/backend/azure-functions/.funcignore'>.funcignore</a></b></td>
						<td>Exclude unnecessary files and directories from Azure Functions deployment to enhance performance and security.</td>
					</tr>
					</table>
				</blockquote>
			</details>
		</blockquote>
	</details>
</details>

##  Contributing

- **💬 [Join the Discussions](https://github.com/MXR831367/resume-website.git/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/MXR831367/resume-website.git/issues)**: Submit bugs found or log feature requests for the `resume-website.git` project.
- **💡 [Submit Pull Requests](https://github.com/MXR831367/resume-website.git/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

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
   <a href="https://github.com{/MXR831367/resume-website.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=MXR831367/resume-website.git">
   </a>
</p>
</details>

---

##  Acknowledgments

- @LearnToCloud for inspiring me to finally do this.
- @pascalvgemert for design inspiration.

---
