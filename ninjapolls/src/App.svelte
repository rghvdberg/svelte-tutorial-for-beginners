<script>
  import Header from "./components/Header.svelte";
  import Footer from "./components/Footer.svelte";
  import PollList from "./components/PollList.svelte";
  import CreatePollForm from "./components/CreatePollForm.svelte";

  // tabs
  import Tabs from "./components/shared/Tabs.svelte";
  let items = ["Current Polls", "Add New Poll"];
  let activeItem = "Current Polls";
  const tabChange = (e) => {
    activeItem = e.detail;
  };

  // Polls
  let polls = [
    {
      id: 1,
      question: "What is the best programming language in the world?",
      answerA: "Python",
      answerB: "Java",
      votesA: 9,
      votesB: 15,
    },
  ];

  const handleAdd = (e) => {
    const poll = e.detail;
    polls = [poll, ...polls];
    console.log(polls);
    activeItem = "Current Polls";
  };

  const handleVote = (e) => {
    const { id, option } = e.detail;
    let copiedPolls = [...polls];
    let upvodetedPoll = copiedPolls.find((poll) => poll.id == id);
    if (option == "a") {
      upvodetedPoll.votesA++;
    }
    if (option == "b") {
      upvodetedPoll.votesB++;
    }
    polls = copiedPolls;
  };
</script>

<Header />
<main>
  <Tabs {activeItem} {items} on:tabChange={tabChange} />
  {#if activeItem === "Current Polls"}
    <PollList {polls} on:vote={handleVote} />
  {:else if activeItem === "Add New Poll"}
    <CreatePollForm on:addPoll={handleAdd} />
  {/if}
</main>
<Footer />

<style>
  main {
    max-width: 800px;
    margin: 40px auto;
  }
</style>
