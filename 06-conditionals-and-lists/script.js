const app = Vue.createApp({
  data() {
    return { items: [], goalTitle: "" };
  },
  methods: {
    addGoal() {
      if (this.goalTitle.length > 0) {
        this.items.push(this.goalTitle);
        this.goalTitle = "";
      }
    },
    removeGoal(index) {
      this.items.splice(index, 1);
    },
  },
});

app.mount("#root");
