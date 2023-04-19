<!-- <!- @ 9:35 https://youtu.be/U8cM_jhmDxA?t=575  -->
<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  // tabs
  import Tabs from "./components/shared/Tabs.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
</script>

<Header />
<main>
  <Tabs {items} {activeItem} />
</main>
<Footer />

<style>
  main {
    max-width: 800px;
    margin: 40px auto;
  }
</style>
