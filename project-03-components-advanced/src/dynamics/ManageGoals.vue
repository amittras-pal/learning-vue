<template>
  <h1>Manage Goals</h1>
  <!-- the entered value in this field will be persisted since wrapped in 'keep-alive' -->
  <input type="text" ref="goal" />
  <button @click="setGoal">Set Goal</button>
  <!-- to port the children to some other place in the DOM. [the 'body' element in this case.] -->
  <teleport to="body">
    <error-alert v-if="isInvalid">
      <h2>Input Invalid</h2>
      <p>Please enter some text</p>
      <button @click="close">OK</button>
    </error-alert>
  </teleport>
</template>

<script>
import ErrorAlert from "./ErrorAlert.vue";
export default {
  components: { ErrorAlert },
  data() {
    return { isInvalid: false };
  },
  methods: {
    setGoal() {
      const value = this.$refs.goal.value;
      if (value === "") {
        this.isInvalid = true;
      }
    },
    close() {
      this.isInvalid = false;
      this.$refs.goal.value = "";
    },
  },
};
</script>
