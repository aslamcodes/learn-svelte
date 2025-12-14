# Demo App
This is created from `npx sv create` with the demo template. We can learn the very basics of state handling, components and basic routing of the App

# Features
This demo app consists of following Features
- A Wordle game `sverdle`
- Three pages `about`, `home`, `sverdle`
- Home page contain the classic state counter example, explaining state mutation example

# The files and folder structure
Before delving into the code, lets explore how the project is setup

- `src` - The root folder containing crux of the applications  
- `src/lib` - for this demp project, the lib folder contains static images, why can't they be put in static?  
- `src/routes` - the routes for this app, there are two folders  
                - `about` folder  
                - `sverdle` folder  
                Judging by the appearance of it, the `page.svelte` file is present in `about`, `sverdle` and the parent `routes` folder itself. Hence the home page is in `routes/+page.svelte`  
- `static` - The static items meant to be served  

# File naming conventions
The project have five types of file extensions scattered across

special page files (special for + )
  - +page.svelte
  - +page.server.ts
  - +page.ts

special layout files
  - +layout.svelte

svelte files
  - .svelte
  
Typescript files
  - .d.ts
  - .ts files (game.ts)
  - .server.ts (words.server.ts)

Vanilla files
  - .html, .css 

- The pages are named as `+page.svelte`, svelte files are with ext `.svelte` but the plus (+) is sveltekit notation.

# The special files (page and layout)
Sveltekit uses a file-system based router, similar to next.js for react. `src\routes` being the root page `\` of the app.  

These special files are called `route files` [1](https://svelte.dev/docs/kit/routing)  

layout files
- +layout.svelte and +error.svelte files, define the layout and error page for the directory they live in and as well as subdirectories. However the subdirectories can define their own layout files

page files
- +page.svelte file defines a page of the route (the directory, they are in)
- +page.ts - exports a load function, that can be used for loading data for the +page.svelte to use 
  CSR - runs on the client to load data 
  SSR - runs on the server to pre-hydrate the rendered file
- +page.server.ts - only run on the server, you want this NOT to run on client side, for things like fetching data  from database or a backend app

> Other than +page, +layout and +server (not used in this project) files are ignored by sveltekit. Sveltekit recommends commonly used components and modules to be put in `lib` folder, which this project probably not follows, as I can see some svelte components `Counter.svelte` and `Header.svelte`

The app.html is similar as what found in react's index.html with id root, where svelte injects the dynamic setup

# References
1. [SvelteKit Routing](https://svelte.dev/docs/kit/routing)
