const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Here's some text.",
      href: "https://vuejs.org",
      text1: "This is 1",
      text2: "Another text",
    };
  },
  methods: {
    outputGoal() {
      // here 'this' is the data returned from the data object.
      return Math.random() > 0.5 ? this.text1 : this.text2;
    },
  },
});

app.mount("#user-goal");
