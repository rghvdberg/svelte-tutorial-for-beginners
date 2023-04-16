<script>
  import Modal from "./Modal.svelte";
  let showModal = false;
  let people = [
    { name: "Yoshi", beltColour: "black", age: 25, id: 1 },
    { name: "Mario", beltColour: "orang", age: 45, id: 2 },
    { name: "Luigi", beltColour: "brown", age: 35, id: 3 },
  ];
  const handleClick = (id) => {
    // delete the person from people
    people = people.filter((person) => person.id != id);
  };
  const toggleModal = () => {
    showModal = !showModal;
  };
</script>

<Modal message="Hey I am a prop value" {showModal} on:click={toggleModal} />
<main>
  <button on:click|once={toggleModal}>Open Modal</button>
  {#each people as person (person.id)}
    <div>
      <h4>{person.name}</h4>
      {#if person.beltColour === "black"}
        <p><strong>MASTER NINJA</strong></p>
      {/if}
      <p>{person.age} years old, {person.beltColour} belt</p>
      <button on:click={() => handleClick(person.id)}> delete </button>
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
