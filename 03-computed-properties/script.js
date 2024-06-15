const app = Vue.createApp({
  data() {
    return {
      name: "",
      count: 5,
    };
  },
  methods: {
    // This is used to render the value concatenated with another value.
    outputFullName() {
      console.log("Rendering full name");
      if (this.name === "") return "";
      return this.name + " Family Name";
    },
  },
  computed: {
    // name them using data property naming convensions, not method naming convensions.
    // nouns instead of verbs.
    fullName() {
      console.log("Computing full name");
      if (this.name === "") return "";
      return this.name + " Family Name";
    },
  },
});

app.mount("#root");
