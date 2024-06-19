const app = Vue.createApp({
  data() {
    return {
      message: "",
    };
  },
  methods: {
    setText() {
      console.log(this.$refs); // has all the refs defined in the template as a Proxy(Object)
      const input = this.$refs.input;
      this.message = input.value;
    },
  },
});

app.mount("#root");
