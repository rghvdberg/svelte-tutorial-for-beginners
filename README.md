# [The Net Ninja's - Svelte Tutorial for Beginners](https://www.youtube.com/playlist?list=PL4cUxeGkcC9hlbrVO_2QFVqVPhlZmz7tO)

- [x] 1 - Introduction
- [x] 2 - Setting up a Svelte App

```
  npm install -g degit
  degit sveltejs/template myproject
  cd myproject
  npm run dev
```

- [x] 3 - Svelte Basics

* variables/data/logic in the `<script></script>` section
* `{var}` calls the vars/logic

- [x] 4 - User Input & Data Binding

* one way data binding
  - `<input type="text" on:input={handleInput}`
  - `<input type="text" value={beltColour} />`
* two way data binding
  - `<input type="text" bind:value={beltColour} />`

- [x] 5 - Reactive Values

* reactive value
  - `$: fullName = `${firstName} ${lastName}`;`
* reactive statement
  - single line
    - `$: console.log(beltColour);`
  - code block
    - ```javascipt
      $: {
        console.log(beltColour);
        console.log(fullName); // reacive name!!
      }
      ```

- [x] 6 - Loops
  - ```sveltejs
    {#each myArray as myObject (myObject.id)}
      {myObject.myProperty}
      {:else}
      <-- do something -->
    {/each}
    ```
- [ ] 7 - Inline Event Handlers
- [ ] 8 - Conditionals
- [ ] 9 - Components
- [ ] 10 - CSS & Conditional Styles
- [ ] 11 - Props
- [ ] 12 - Event Forwarding
- [ ] 13 - Event Modifiers
- [ ] 14 - Slots
- [ ] 15 - Forms (part 1)
- [ ] 16 - forms (part 2)
- [ ] 17 - Dispatching Custom Events
- [ ] 18 - Starting the Polls Project
- [ ] 19 - Header & Footer Components
- [ ] 20 - Reusable Tabs Component
- [ ] 21 - Poll Form Component
- [ ] 22 - Custom Button Component
- [ ] 23 - Custom Form Validation
- [ ] 24 - Adding New Polls
- [ ] 25 - Poll Details Component
- [ ] 26 - Card Component
- [ ] 27 - Casting Votes
- [ ] 28 - Vote Bars
- [ ] 29 - Introduction to Stores
- [ ] 30 - Lifecycle Hooks
- [ ] 31 - Updating Store Data
- [ ] 32 - Deleting Polls
- [ ] 33 - Transition Basics
- [ ] 34 - Tweens & Animations
- [ ] 35 - Wrap Up
