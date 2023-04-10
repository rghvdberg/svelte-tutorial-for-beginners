<script>
  let people = [
    // { name: "Yoshi", beltColour: "black", age: 25, id: 1 },
    // { name: "Mario", beltColour: "orang", age: 45, id: 2 },
    // { name: "Luigi", beltColour: "brown", age: 35, id: 3 },
  ];
</script>

<main>
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      <p>{person.age} years old, {person.beltColour} belt</p>
    </div>
  {:else}
    <p>There are no people to show</p>
  {/each}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
