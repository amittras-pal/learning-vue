<template>
  <div>
    <the-header></the-header>
    <badge-list></badge-list>
    <UserInfo
      :full-name="activeUser.name"
      :info-text="activeUser.description"
      :role="activeUser.role"
    />
  </div>
</template>

<script>
// Registering components as local components.
// Can only be used in this component
import TheHeader from "./components/TheHeader.vue";
import BadgeList from "./components/BadgeList.vue";
import UserInfo from "./components/UserInfo.vue";

export default {
  // Component registration supports multiple ways of registering and usage.
  components: {
    // registered with a web-component style naming comvension
    "the-header": TheHeader,
    // registerd as a plain KV pair, but used as web-component style naming convension
    BadgeList,
    // registerd as a plain KV pair, used as a JSX notation.
    UserInfo,
  },
  data() {
    return {
      activeUser: {
        name: "Maximilian Schwarzmüller",
        description: "Site owner and admin",
        role: "admin",
      },
    };
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
