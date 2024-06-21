<template>
  <!-- @click will fall-through to the base HTML component in the 'v-btn' component -->
  <!-- in this case, the click event will propagate from the actual button component here. -->
  <button :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: ['mode'],
};
</script>

<style scoped src="../../styles/button.css"></style>
