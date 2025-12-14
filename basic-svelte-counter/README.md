# Basic Svelte App
This app is scaffolded with `npm create-vite` tool, so its just basic barebone svelte, no sveltekit. This is great setup for basic svelte operations.  
The first impressions that this setup gives is, its very imperative to understand as a React user. You have a `main.ts` where you would mount you `App` component, thereby forming up the root component of the App.

# Basic svelte counter
This setup will explore the very basiscs of svelte, as a language and as a tool to build web applications.

## Using Runes
Runes are identical to special functions from React (useStage, useEffect), but Runes are not really functions. its part of svelte as a language.

`$state` rune is used to create ***reactive state***, the UI reacts to it.
`$derived` rune is used to perform arbitrary expressions when its dependencies are changes. ie the derived operation is marked dirty when one of the dependencies is changed.
`$derived.By` lets you pass a function that performs complex operation when your dependencies changes
