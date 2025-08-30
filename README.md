<p>
  <a href="https://www.matthewroeder.com">
    <img src="https://matthewroeder.com/images/mxrlogo.svg" alt="Matthew Roeder Logo">
  </a>
</p>

[![Azure Static Web Apps CI/CD](https://github.com/MXR831367/resume-website/actions/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml/badge.svg)](https://github.com/MXR831367/resume-website/actions/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml)
[![Build and deploy Python project to Azure Function App - mxr-website-counter](https://github.com/MXR831367/resume-website/actions/workflows/main_mxr-website-counter(dev).yml/badge.svg)](https://github.com/MXR831367/resume-website/actions/workflows/main_mxr-website-counter(dev).yml)

##  Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Project Structure](#project-structure)
  - [Project Index](#project-index)
- [Contributing](#contributing)
- [Acknowledgments](#acknowledgments)

---

##  Overview

resume-website is a personal portfolio/resume site deployed on Azure Static Web Apps. It combines a fast, static frontend with a lightweight serverless backend for small dynamic needs (such as counting visits), and ships through GitHub Actions to both preview and production environments. The repository demonstrates a pragmatic, low‑maintenance pattern for building and releasing content‑focused sites on Azure with clear separation between the frontend and backend.

---

##  Features

- End-to-end CI/CD with GitHub Actions
  - Automated deploys to Azure Static Web Apps on push
  - Preview environments for pull requests before merging
- Static, fast frontend
  - Semantic HTML, responsive CSS, and minimal JavaScript for great performance
- Serverless backend
  - Python Azure Functions power small dynamic features (e.g., a visit counter)
  - Simple HTTP-triggered function pattern
- Data layer
  - Integrates with Azure Cosmos DB for persistence where needed
- Security and configuration
  - Secrets stored in GitHub and Azure App Settings; no secrets committed
  - Input validation and constrained CORS for API endpoints
- Performance
  - Global CDN via Static Web Apps and cache-friendly static assets
- Observability
  - Structured logs with support for Application Insights
- Scalability and cost
  - Serverless, auto-scaling components with pay‑per‑use pricing
- Local development
  - Run the static site and Azure Functions locally for quick iteration

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
						<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/.github/workflows/azure-static-web-apps-salmon-river-08c6d6c0f.yml'>azure-static-web-apps-salmon-river-08c6d6c0f.yml</a></b></td>
						<td>- Automates CI/CD for Azure Static Web Apps<br>- Handles build and deployment on push to main branch or pull request events<br>- Executes deployment and closes pull requests using specified configurations<br>- Integrates with Azure and GitHub for seamless workflow.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/.github/workflows/main_mxr-website-counter(dev).yml'>main_mxr-website-counter(dev).yml</a></b></td>
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
				<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/frontend/index.html'>index.html</a></b></td>
				<td>- The `frontend/index.html` file serves as the entry point for the project's frontend interface<br>- It defines the basic structure and metadata for the web page, including author information, page title, and icons for different devices<br>- This file sets the foundation for the user interface presentation and ensures a consistent branding experience for visitors interacting with the application.</td>
			</tr>
			</table>
			<details>
				<summary><b>css</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/frontend/css/style.css'>style.css</a></b></td>
						<td>Define global styling variables and rules for consistent design across the frontend, ensuring a cohesive user experience.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/frontend/css/reset.css'>reset.css</a></b></td>
						<td>- Defines global styling rules for the project, ensuring consistent layout and typography across all components<br>- Establishes box sizing, removes default margins, sets core body defaults, and enhances text wrapping<br>- Normalizes list styles, image handling, and font properties for a cohesive user interface experience.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>js</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/frontend/js/main.js'>main.js</a></b></td>
						<td>- Handles fetching and displaying visit count data from an external API upon page load<br>- The code triggers an API call to retrieve the count and updates the webpage with the latest visit count dynamically<br>- This functionality enhances user engagement by showcasing real-time visit statistics.</td>
					</tr>
					</table>
				</blockquote>
			</details>
			<details>
				<summary><b>images</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/frontend/images/IMG_3877.PNG'>IMG_3877.PNG</a></b></td>
						<td>- The provided code file serves as a crucial component within the project's architecture, contributing to the overall functionality of the P module<br>- It plays a key role in achieving a specific purpose within the codebase, enhancing the project's capabilities and supporting its objectives.</td>
					</tr>
					</table>
					<details>
						<summary><b>favicon</b></summary>
						<blockquote>
							<table>
							<tr>
								<td><b><a href='https://github.com/MXR831367/resume-website/blob/main/frontend/images/favicon/site.webmanifest'>site.webmanifest</a></b></td>
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

- **💬 [Join the Discussions](https://github.com/MXR831367/resume-website/discussions)**: Share your insights, provide feedback, or ask questions.
- **🐛 [Report Issues](https://github.com/MXR831367/resume-website/issues)**: Submit bugs found or log feature requests for the `resume-website.git` project.
- **💡 [Submit Pull Requests](https://github.com/MXR831367/resume-website/blob/main/CONTRIBUTING.md)**: Review open PRs, and submit your own PRs.

<details>
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

<details>
<summary>Contributor Graph</summary>
<br>
<p>
   <a href="https://github.com{/MXR831367/resume-website.git/}graphs/contributors">
      <img src="https://contrib.rocks/image?repo=MXR831367/resume-website.git" alt="Contributors graph">
   </a>
</p>
</details>

---

##  Acknowledgments

- @LearnToCloud for inspiring me to finally do this.
- @pascalvgemert for design inspiration.

---
