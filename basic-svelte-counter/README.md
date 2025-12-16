# Basic Svelte App

This app is scaffolded with `npm create-vite` tool, so its just basic barebone svelte, no sveltekit. This is great setup for basic svelte operations.  
The first impressions that this setup gives is, its very imperative to understand as a React user. You have a `main.ts` where you would mount you `App` component, thereby forming up the root component of the App.

# Basic svelte counter

This setup will explore the very basiscs of svelte, as a language and as a tool to build web applications.

## Using Runes

Runes are identical to special functions from React (useStage, useEffect), but Runes are not really functions. its part of svelte as a language.

`$state` rune is used to create **_reactive state_**, the UI reacts to it.
`$derived` rune is used to perform arbitrary expressions when its dependencies are changes. ie the derived operation is marked dirty when one of the dependencies is changed.
`$derived.By` lets you pass a function that performs complex operation when your dependencies changes

# Bindable

- This is a relatively new concept from svelte, as in React, when you wanted to life state up, you would pass a setter funciton to your child. Svelte think that's a lot of code and have this two way `bind` feature

Here's a simple example.

```svelte
<script>
   let value = "hello"
</script>
<!-- <input bind:value={value} /> or -->
<input bind:value />
```

```svelte
<script>
    let value = "hello";
    function setValue(val) {
        value = val;
    }
</script>

<input
    {value}
    oninput={(e) => {
        setValue(e.target.value);
    }}
/>
{value}
```

So svelte's bind works behind the scenses during compile time, to produce the code I've often repeat myself and does it perfectly everytime.
