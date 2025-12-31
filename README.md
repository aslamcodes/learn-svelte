# Learn Svelte 5 Workspace

This repository serves as a workspace for learning and experimenting with **Svelte 5** and **SvelteKit**. It contains multiple isolated projects ranging from basic component demos to full application examples, all built using the latest Svelte 5 features (Runes, Snippets, etc.).

## 📂 Project Structure

| Project Directory | Type | Key Concepts | Description |
| :--- | :--- | :--- | :--- |
| **[`basic-svelte-counter`](./basic-svelte-counter)** | Vite + Svelte | Reactivity, Events | A simple counter application to understand the basics of component state and event handling in Svelte. |
| **[`basics`](./basics)** | SvelteKit | Routing, Layouts | A minimal SvelteKit scaffold useful for testing basic routing and kit-specific features. |
| **[`demo`](./demo)** | SvelteKit | SSR, Form Actions, API | The classic "Sverdle" demo application showing advanced SvelteKit features like server-side loading, form actions, and progressive enhancement. |
| **[`svelte-todo`](./svelte-todo)** | Vite + Svelte | Runes (`$state`), Stores | A Todo application showcasing Svelte 5's new reactivity model using Runes (`$state`) for global state management. |

## 🚀 Getting Started

Since this is a mono-repo style workspace (without a workspace manager like pnpm workspaces or turborepo currently configured), you will need to install dependencies and run scripts within each project directory individually.

### Prerequisites

*   [Node.js](https://nodejs.org/) (Latest LTS recommended)
*   npm (comes with Node.js)

### Running a Project

1.  Navigate to the project directory:
    ```bash
    cd <project-directory-name>
    # Example: cd svelte-todo
    ```

2.  Install dependencies:
    ```bash
    npm install
    ```

3.  Start the development server:
    ```bash
    npm run dev
    ```

4.  Open your browser at the URL shown (usually `http://localhost:5173`).

## 🛠 Project Details

### 1. Basic Svelte Counter (`/basic-svelte-counter`)
A standard "Hello World" style application.
*   **Tech Stack:** Vite, Svelte 5, TypeScript.
*   **Focus:** Understanding how `.svelte` components work, script tags, styling, and basic button interactions.

### 2. Basics (`/basics`)
A clean slate SvelteKit project.
*   **Tech Stack:** SvelteKit, Svelte 5, TypeScript.
*   **Focus:** Exploring SvelteKit's file-system based routing (`+page.svelte`, `+layout.svelte`) without the noise of a complex demo.

### 3. SvelteKit Demo / Sverdle (`/demo`)
The official SvelteKit demonstration app.
*   **Tech Stack:** SvelteKit, Svelte 5, TypeScript.
*   **Focus:**
    *   **Server-Side Rendering (SSR):** Loading data in `+page.server.ts`.
    *   **Form Actions:** Handling form submissions on the server.
    *   **Sverdle:** A Wordle clone implementation.
    *   **Animations:** Using Svelte's transition capabilities.

### 4. Svelte Todo (`/svelte-todo`)
A task management application demonstrating modern state patterns.
*   **Tech Stack:** Vite, Svelte 5, TypeScript.
*   **Focus:**
    *   **Runes:** utilizing `$state` in `.svelte.ts` files for universal reactivity.
    *   **Components:** Breaking down the UI into `TodoInput`, `TodoList`, and `TodoItem`.
    *   **TypeScript:** Typed interfaces for state objects.

## 📝 Notes
*   All projects are configured to use **TypeScript**.
*   This repo explores **Svelte 5** specifically. You will see usage of new syntax (Runes) rather than the legacy store API in the newer examples like `svelte-todo`.