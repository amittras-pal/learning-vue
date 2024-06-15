const app = Vue.createApp({
  data() {
    return {
      count: 10,
      text: "",
      modified: "",
    };
  },
  methods: {
    decrement(e = 1) {
      this.count -= e;
    },
    increment(e = 1) {
      this.count += e;
    },
    handleText(e) {
      this.text = e.target.value.toUpperCase();
    },
    handleSubmit(e) {
      const data = [...new FormData(e.currentTarget).entries()];
      console.log(
        data.reduce((obj, curr) => {
          obj[curr[0]] = curr[1];
          return obj;
        }, {})
      );
    },
  },
});

app.mount("#counter-section");
