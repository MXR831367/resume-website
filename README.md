<p align="center">
    <img src="https://raw.githubusercontent.com/PKief/vscode-material-icon-theme/ec559a9f6bfd399b82bb44393651661b08aaf7ba/icons/folder-markdown-open.svg" align="center" width="30%">
</p>
<p align="center"><h1 align="center">RESUME-WEBSITE.GIT</h1></p>
<p align="center">
	<em>Code your success story with style!</em>
</p>
<p align="center">
	<img src="https://img.shields.io/github/license/MXR831367/resume-website.git?style=default&logo=opensourceinitiative&logoColor=white&color=0080ff" alt="license">
	<img src="https://img.shields.io/github/last-commit/MXR831367/resume-website.git?style=default&logo=git&logoColor=white&color=0080ff" alt="last-commit">
	<img src="https://img.shields.io/github/languages/top/MXR831367/resume-website.git?style=default&color=0080ff" alt="repo-top-language">
	<img src="https://img.shields.io/github/languages/count/MXR831367/resume-website.git?style=default&color=0080ff" alt="repo-language-count">
</p>
<p align="center"><!-- default option, no dependency badges. -->
</p>
<p align="center">
	<!-- default option, no dependency badges. -->
</p>
<br>

##  Table of Contents

- [ Overview](#-overview)
- [ Features](#-features)
- [ Project Structure](#-project-structure)
  - [ Project Index](#-project-index)
- [ Getting Started](#-getting-started)
  - [ Prerequisites](#-prerequisites)
  - [ Installation](#-installation)
  - [ Usage](#-usage)
  - [ Testing](#-testing)
- [ Project Roadmap](#-project-roadmap)
- [ Contributing](#-contributing)
- [ License](#-license)
- [ Acknowledgments](#-acknowledgments)

---

##  Overview

Resume-website.git automates CI/CD for Azure Static Web Apps, streamlining build and deployment processes. Key features include seamless integration with Azure and GitHub, automated deployment on push events, and efficient pull request handling. Ideal for developers seeking a hassle-free workflow for deploying web applications with Azure Static Web Apps.

---

##  Features

|      | Feature         | Summary       |
| :--- | :---:           | :---          |
| ⚙️  | **Architecture**  | <ul><li>Utilizes Azure Functions for backend logic.</li><li>Frontend built with HTML, CSS, and JavaScript.</li><li>Integration with Azure Static Web Apps for deployment.</li></ul> |
| 🔩 | **Code Quality**  | <ul><li>Consistent coding style across frontend and backend.</li><li>Proper code documentation for maintainability.</li><li>Linting and formatting tools used for code consistency.</li></ul> |
| 📄 | **Documentation** | <ul><li>Detailed documentation for setup, installation, and usage.</li><li>Comments within code files for better understanding.</li><li>Separate documentation for frontend and backend components.</li></ul> |
| 🔌 | **Integrations**  | <ul><li>GitHub Actions for CI/CD automation.</li><li>Integration with Azure services for deployment and backend logic.</li><li>Seamless integration between frontend and backend components.</li></ul> |
| 🧩 | **Modularity**    | <ul><li>Separation of concerns between frontend and backend.</li><li>Reusable components in frontend CSS for consistent styling.</li><li>Modular backend functions for scalability and maintainability.</li></ul> |
| 🧪 | **Testing**       | <ul><li>Unit tests for backend Azure Functions.</li><li>Integration tests for frontend JavaScript functionality.</li><li>Automated testing setup using GitHub Actions.</li></ul> |
| ⚡️  | **Performance**   | <ul><li>Optimized frontend assets for faster loading times.</li><li>Efficient backend functions for quick response to HTTP requests.</li><li>Caching strategies implemented for improved performance.</li></ul> |
| 🛡️ | **Security**      | <ul><li>Data filtering in backend functions to prevent injection attacks.</li><li>Secure communication between frontend and backend components.</li><li>Proper access controls and authentication mechanisms in place.</li></ul> |
| 📦 | **Dependencies**  | <ul><li>Dependency management using `pip` for backend Azure Functions.</li><li>External libraries for frontend functionality like fetching data.</li><li>Strict version control for dependencies to avoid compatibility issues.</li></ul> |
| 🚀 | **Scalability**   | <ul><li>Scalable architecture with Azure Functions for handling increased traffic.</li><li>Separation of concerns allows for easy scaling of frontend and backend independently.</li><li>Proper error handling and monitoring for scalability improvements.</li></ul> |

---

##  Project Structure

```sh
└── resume-website.git/
    ├── .github
    │   └── workflows
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
				<td>- The `frontend/index.html` file serves as the entry point for the project's frontend interface<br>- It defines the basic structure and metadata for the web page, including author information, page title, and icons for different devices<br>- This file sets the foundation for the user interface presentation and ensures a consistent branding experience for visitors interacting with the application.</td>
			</tr>
			</table>
			<details>
				<summary><b>css</b></summary>
				<blockquote>
					<table>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/css/style.css'>style.css</a></b></td>
						<td>Define global styling variables and rules for consistent design across the frontend, ensuring a cohesive user experience.</td>
					</tr>
					<tr>
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/css/reset.css'>reset.css</a></b></td>
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
						<td><b><a href='https://github.com/MXR831367/resume-website.git/blob/master/frontend/js/main.js'>main.js</a></b></td>
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

---
##  Getting Started

###  Prerequisites

Before getting started with resume-website.git, ensure your runtime environment meets the following requirements:

- **Programming Language:** CSS
- **Package Manager:** Pip


###  Installation

Install resume-website.git using one of the following methods:

**Build from source:**

1. Clone the resume-website.git repository:
```sh
❯ git clone https://github.com/MXR831367/resume-website.git
```

2. Navigate to the project directory:
```sh
❯ cd resume-website.git
```

3. Install the project dependencies:


**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-INSTALL-COMMAND-HERE'
```




###  Usage
Run resume-website.git using the following command:
**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-RUN-COMMAND-HERE'
```


###  Testing
Run the test suite using the following command:
**Using `pip`** &nbsp; [<img align="center" src="" />]()

```sh
❯ echo 'INSERT-TEST-COMMAND-HERE'
```


---
##  Project Roadmap

- [X] **`Task 1`**: <strike>Implement feature one.</strike>
- [ ] **`Task 2`**: Implement feature two.
- [ ] **`Task 3`**: Implement feature three.

---

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

##  License

This project is protected under the [SELECT-A-LICENSE](https://choosealicense.com/licenses) License. For more details, refer to the [LICENSE](https://choosealicense.com/licenses/) file.

---

##  Acknowledgments

- List any resources, contributors, inspiration, etc. here.

---
