<template>
  <div>
    <the-header></the-header>
    <button @click="selectComponent('manage-goals')">Manage Goals</button>
    <button @click="selectComponent('active-goal')">Active Goal</button>
    <!-- to keep the dynamic component mounted. -->
    <!-- The selected component will be rendered here.  -->
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";

import ManageGoals from "./dynamics/ManageGoals.vue";
import ActiveGoal from "./dynamics/ActiveGoal.vue";
export default {
  components: { TheHeader, ManageGoals, ActiveGoal },
  data() {
    return { selected: "manage-goals" };
  },
  methods: {
    selectComponent(comp) {
      this.selected = comp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
