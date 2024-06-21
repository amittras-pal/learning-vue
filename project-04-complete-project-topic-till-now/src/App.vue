<template>
  <the-header title="Learning Resources"></the-header>
  <the-resources></the-resources>
</template>

<script>
import TheHeader from './components/layouts/TheHeader.vue';
import TheResources from './components/learning-resources/TheResources.vue';
export default {
  components: { TheHeader, TheResources },
};
</script>

<style src="./styles/app.css"></style>
