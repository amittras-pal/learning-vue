const app = Vue.createApp({
  data() {
    return { count: 5 };
  },
  watch: {
    count(newValue, _oldValue) {
      if (newValue > 35) this.count = 0;
    },
  },
});

app.mount("#root");
