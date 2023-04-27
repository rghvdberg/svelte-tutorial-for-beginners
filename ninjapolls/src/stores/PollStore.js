import { writable } from "svelte/store";

const PollStore = writable([
  {
    id: 1,
    question: "What is the best programming language in the world?",
    answerA: "Python",
    answerB: "Java",
    votesA: 9,
    votesB: 15,
  },
]);

export default PollStore;
