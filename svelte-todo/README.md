# The Hello World Project

Since I've been looking around here and there in svelte, now its time to get my Hands dirty

# Svelte 5 Todo App - Comprehensive Learning Tasks - By Claude

I'll create a series of tasks that will help you build a complete todo app while systematically exploring Svelte 5's core concepts. Each task is designed to introduce specific framework features.

## **Task 1: Project Setup & Basic Runes**

**Svelte Concepts: `$state`, `$derived`, Basic Reactivity**

Create a basic todo app foundation with reactive state management.

**Requirements:**

- Initialize a Svelte 5 project (use Vite or SvelteKit)
- Create a `TodoList.svelte` component
- Use `$state()` rune to manage an array of todos (each todo: `{ id, text, completed }`)
- Use `$state()` for an input field binding
- Implement an "Add Todo" function that adds items to the array
- Use `$derived()` to calculate and display the total number of todos
- Display the list of todos with basic styling

**Learning Goals:**

- Understand how `$state()` replaces the old reactive declarations
- See how Svelte 5's fine-grained reactivity works
- Learn `$derived()` for computed values

**Task completion:**

- This task is completed at [afd972f](https://github.com/aslamcodes/learn-svelte/commit/afd972fddc01c1492183e0871d94ef6ca24fadd9)
- Learnt that, when counting the total count of the todolist array without the $derived rune will not get the underlying proxy's count.

---

## **Task 2: Event Handling & Two-Way Binding**

**Svelte Concepts: Event handlers, `bind:` directive, `$effect()`**

Enhance interactivity with proper event handling and effects.

**Requirements:**

- Add a checkbox to each todo for completion status using `bind:checked`
- Implement a delete button for each todo
- Add `bind:value` for the input field
- Use `$derived()` to calculate completed vs incomplete todo counts
- Use `$effect()` to log to console whenever the todo list changes
- Add keyboard support: pressing Enter should add a todo
- Clear the input field after adding a todo

**Learning Goals:**

- Master Svelte's binding syntax
- Understand event modifiers (e.g., `on:click`, `on:keydown`)
- Learn when and how to use `$effect()` for side effects
- See the difference between `$derived()` (pure computation) and `$effect()` (side effects)

**Task completion:**

- The task is complted at [965d723](https://github.com/aslamcodes/learn-svelte/commit/965d723dcba505b4a5948eb5562a6570dd40a9d2)
- The idea is, $props are read-only in svelte, even though prop is reactive, svelte discourages mutating prop in child components, and its spits out a warning when doing so. well in that case you have to explicitly mark a prop as $bindable, but that makes it even more complicated, for this TodoItem and TodoList case
- Rule of thump
  Bind = "This child controls this piece of state"
  Callbacks = "This child requests a state change"

---

## **Task 3: Component Composition & Props**

**Svelte Concepts: Component props, `$props()` rune, Component hierarchy**

Break the app into reusable components.

**Requirements:**

- Create a `TodoItem.svelte` component that receives props using `$props()`
- Pass todo data, completion status, and callbacks to TodoItem
- Create a `TodoInput.svelte` component for the input field
- Use TypeScript types for props (optional but recommended)
- Implement proper prop destructuring with defaults
- Create a `Stats.svelte` component to display todo statistics

**Learning Goals:**

- Understand Svelte 5's `$props()` rune vs legacy props
- Learn component communication patterns
- Practice component composition and separation of concerns
- Understand unidirectional data flow

**Task completion:**

- Most of the tasks are completed at Tasks 2 as, part of code best practices [965d723](https://github.com/aslamcodes/learn-svelte/commit/965d723dcba505b4a5948eb5562a6570dd40a9d2)

---

## **Task 4: Conditional Rendering & Loops**

**Svelte Concepts: `{#if}`, `{#each}`, `{#key}`, Transitions**

Add dynamic rendering and visual feedback.

**Requirements:**

- Use `{#each}` with proper keying for the todo list
- Add `{#if}` blocks to show/hide UI based on conditions:
  - Show "No todos yet" message when list is empty
  - Show stats only when there are todos
- Implement filter buttons (All, Active, Completed)
- Use `$derived()` to compute filtered todo list
- Add Svelte transitions (`transition:fade`, `transition:slide`) to todos
- Use `{#key}` block to animate list changes

**Learning Goals:**

- Master Svelte's templating syntax
- Understand the importance of keying in lists
- Learn Svelte's built-in transition system
- See how `$derived()` can handle complex computations

---

## **Task 5: Stores & Shared State**

**Svelte Concepts: Runes-based stores, `$state` in modules, Store patterns**

Implement global state management using Svelte 5 patterns.

**Requirements:**

- Create a `todoStore.svelte.ts` file with exported `$state()`
- Move todo management logic to the store
- Create functions: `addTodo()`, `toggleTodo()`, `deleteTodo()`, `clearCompleted()`
- Import and use the store in multiple components
- Add a `filterStore` for the current filter setting
- Demonstrate how changes in one component affect others

**Learning Goals:**

- Understand Svelte 5's approach to shared state (universal reactivity)
- Learn to create reactive modules with runes
- Compare with legacy stores (`writable`, `readable`)
- Practice state management patterns

---

## **Task 6: Snippets & Content Projection**

**Svelte Concepts: `{#snippet}`, render props pattern, Slot alternatives**

Create reusable UI patterns with snippets.

**Requirements:**

- Create a `Card.svelte` wrapper component using snippets
- Define a snippet for custom todo item rendering
- Create a `Button.svelte` component that accepts icon snippets
- Implement a `Modal.svelte` with header, body, and footer snippets
- Add an "Edit Todo" feature using the modal
- Use snippets to customize empty state messaging

**Learning Goals:**

- Master Svelte 5's snippet syntax (replaces slots)
- Understand snippet parameters and render props
- Learn advanced component composition patterns
- See how snippets enable more flexible APIs

---

## **Task 7: Actions & Directives**

**Svelte Concepts: `use:` directive, Custom actions, DOM manipulation**

Add custom behaviors with actions.

**Requirements:**

- Create a `clickOutside` action for the modal/dropdowns
- Implement an `autofocus` action for the input field
- Create a `longpress` action for todo items (long press to delete)
- Add a `tooltip` action that shows todo creation date on hover
- Implement an action that animates new todos with FLIP technique
- Use action parameters to customize behavior

**Learning Goals:**

- Understand Svelte actions for reusable DOM behaviors
- Learn the action lifecycle (mount, update, destroy)
- Practice direct DOM manipulation when needed
- See how actions encapsulate imperative code

---

## **Task 8: Forms & Validation**

**Svelte Concepts: Form handling, `$state` validation, Error states**

Implement robust form handling with validation.

**Requirements:**

- Add validation: todos must be at least 3 characters
- Show error messages using `$derived()` for validation state
- Prevent adding empty or invalid todos
- Add an edit mode for existing todos with a form
- Implement "Cancel" functionality that reverts changes
- Use `bind:group` for filter radio buttons or checkboxes
- Add todo priority/category selection with `<select>`

**Learning Goals:**

- Master form handling in Svelte
- Learn validation patterns with runes
- Understand when to use different binding directives
- Practice user feedback and error handling

---

## **Task 9: Local Storage Persistence**

**Svelte Concepts: `$effect()` with async, Side effects, Lifecycle**

Persist todos across browser sessions.

**Requirements:**

- Use `$effect()` to save todos to localStorage whenever they change
- Load todos from localStorage on component mount
- Handle edge cases (invalid JSON, quota exceeded)
- Add a debounce to prevent excessive localStorage writes
- Implement an "Export" feature (download as JSON)
- Implement an "Import" feature (upload JSON file)

**Learning Goals:**

- Understand `$effect()` for side effects and synchronization
- Learn to handle async operations in effects
- Practice data serialization and deserialization
- See component lifecycle in Svelte 5's runes paradigm

---

## **Task 10: Animations & Advanced Transitions**

**Svelte Concepts: `transition:`, `animate:`, Motion, Tweened values**

Polish the UI with smooth animations.

**Requirements:**

- Use `animate:flip` for smooth list reordering
- Add drag-and-drop reordering for todos
- Implement custom transition functions for specific effects
- Use `tweened` or `spring` stores for animated counters
- Add a progress bar that animates completion percentage
- Implement crossfade transition when moving todos between filters

**Learning Goals:**

- Master Svelte's animation system
- Learn FLIP animations with `animate:flip`
- Understand motion stores (`tweened`, `spring`)
- Create polished, professional UI transitions

---

## **Task 11: Context API & Dependency Injection**

**Svelte Concepts: `setContext()`, `getContext()`, Component trees**

Implement theme switching and cross-component communication.

**Requirements:**

- Create a theme context (light/dark mode)
- Use `setContext()` in a root component
- Use `getContext()` in nested components to access theme
- Implement theme toggle that affects all components
- Create a "settings" context for user preferences
- Add preference for animation speed using context
- Apply theme classes conditionally throughout the app

**Learning Goals:**

- Understand context API for dependency injection
- Learn when to use context vs. stores
- Practice provider/consumer patterns
- Avoid prop drilling with context

---

## **Task 12: Component Events & `$bindable`**

**Svelte Concepts: `$bindable()`, Event dispatching, Two-way binding with components**

Create advanced component communication patterns.

**Requirements:**

- Use `$bindable()` in TodoInput for two-way binding with parent
- Create a `SearchBar.svelte` with bindable search query
- Implement a `Pagination.svelte` with bindable current page
- Create custom event handlers for todo actions
- Add a `MultiSelect.svelte` for bulk todo operations
- Implement "Select All" and "Clear Selection" using `$bindable()`

**Learning Goals:**

- Master `$bindable()` for two-way component binding
- Understand the difference between `$props()` and `$bindable()`
- Learn when to use bindable vs. callbacks
- Practice creating flexible component APIs

---

## **Task 13: Performance Optimization**

**Svelte Concepts: `$derived.by()`, Memoization, Lazy evaluation**

Optimize the app for better performance.

**Requirements:**

- Use `$derived.by()` for expensive computed values
- Implement virtual scrolling for large todo lists (100+ items)
- Add memoization to prevent unnecessary recalculations
- Use `$effect.pre()` to batch DOM updates
- Implement lazy loading for todo details
- Profile the app and identify performance bottlenecks
- Add a "Generate 1000 todos" button to test performance

**Learning Goals:**

- Understand when and why to use `$derived.by()`
- Learn performance optimization techniques
- See the difference between `$effect()` and `$effect.pre()`
- Practice performance profiling

---

## **Task 14: Error Boundaries & Loading States**

**Svelte Concepts: Error handling, `{#await}`, Async patterns**

Add robust error handling and async state management.

**Requirements:**

- Implement an error boundary component pattern
- Add loading states for async operations (simulated API calls)
- Use `{#await}` blocks for promise handling
- Create a toast/notification system for errors
- Handle network failures gracefully
- Implement retry logic for failed operations
- Add a global error handler

**Learning Goals:**

- Learn error handling patterns in Svelte
- Master async data handling with `{#await}`
- Understand loading and error states
- Practice defensive programming

---

## **Task 15: Testing & Final Polish**

**Svelte Concepts: Component testing, Integration, Accessibility**

Write tests and ensure accessibility.

**Requirements:**

- Set up Vitest or Jest for component testing
- Write unit tests for store functions
- Write component tests for TodoItem, TodoInput
- Add integration tests for the full user flow
- Implement ARIA labels and roles throughout
- Test keyboard navigation (Tab, Enter, Escape, Arrow keys)
- Add focus management for modal and forms
- Run accessibility audit and fix issues
- Add README with feature documentation

**Learning Goals:**

- Learn to test Svelte 5 components
- Understand accessibility best practices
- Practice TDD or test-after development
- Complete the full development cycle

---

## Bonus Challenges (Optional Advanced Exploration)

**Task 16: Server-Side Rendering (SvelteKit)**

- Convert to SvelteKit project
- Implement server-side data loading
- Add API routes for todos
- Deploy to Vercel/Netlify

**Task 17: Advanced Patterns**

- Implement undo/redo functionality
- Add keyboard shortcuts system
- Create a command palette (Cmd+K)
- Implement todo templates and recurring tasks

---

Each task builds on the previous ones while introducing new Svelte 5 concepts. Complete them in order for the best learning experience! Good luck! 🚀
