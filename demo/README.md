# Demo App
This is created from `npx sv create` with the demo template. We can learn the very basics of state handling, components and basic routing of the App

# Features
This demo app consists of following Features
- A Wordle game `sverdle`
- Three pages `about`, `home`, `sverdle`
- Home page contain the classic state counter example, explaining state mutation example

# The files and folder structure
Before delving into the code, lets explore how the project is setup

`src` - The root folder containing crux of the applications
`src/lib` - for this demp project, the lib folder contains static images, why can't they be put in static?
`src/routes` - the routes for this app, there are two folders
                - `about` folder
                - `sverdle` folder
                Judging by the appearance of it, the `page.svelte` file is present in `about`, `sverdle` and the parent `routes` folder itself. Hence the home page is in `routes/+page.svelte`
`static` - The static items meant to be served

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
