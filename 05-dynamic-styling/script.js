const app = Vue.createApp({
  data() {
    return { selectedByStyle: 1, selectedByClass: 6 };
  },
  methods: {
    selectBoxByStyle(boxNum) {
      this.selectedByStyle = boxNum;
    },
    selectBoxByClass(boxNum) {
      this.selectedByClass = boxNum;
    },
  },
});

app.mount("#root");
