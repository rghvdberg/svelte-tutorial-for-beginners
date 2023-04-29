<script>
  // import { onMount, onDestroy } from "svelte";
  import PollStore from "../stores/PollStore.js";
  import PollDetails from "./PollDetails.svelte";

  // const unsub = PollStore.subscribe((data) => {
  //   polls = data;
  // });

  // onMount(() => {
  //   console.log("component mounted");
  //   // PollStore.set(polls);
  // });
  //
  // onDestroy(() => {
  //   console.log("component destroyed");
  //   unsub();
  // });
</script>

<div class="poll-list">
  {#each $PollStore as poll (poll.id)}
    <div>
      <PollDetails {poll} on:vote />
    </div>
  {/each}
</div>

<style>
  .poll-list {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 20px;
  }
</style>
