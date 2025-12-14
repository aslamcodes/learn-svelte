# Basics
The scope of this learning course is to understand, what are the core basics of svelete, its expected syntax, folder structure and use cases, before covering topics such as components, routing and other complex items.

## creating a svelte project
A svelte project can be scaffolded with the `sv` tool

link to the project - https://svelte.dev/docs/cli/sv-create

```sh
npx sv create
```

the tool asks for templates to use from, but none of it is just the basic svelte compiler, as its not really the ideal approach these days

- `minimal` - \(this project is created with this template\) 
- `demo` - sample app
- `library` - for reusable components, and can be imported into svelte projects, exposes components and functions. This would be helpful for sharing code across apps, `import { Button } "@you/ui-kit". 

**Library template use cases:**
- Reusable **UI component kits** (buttons, modals, charts)
- **Design systems**
- Shared components across multiple apps
- **Svelte wrappers** for JS libraries
- Utility packages (stores, actions, helpers)
- Internal company component libs
- OSS packages published to npm
