<template>
  <div>
    <!-- Can remove this header if no content is provided for the slots.  -->
    <header v-if="$slots.header">
      <!-- 'slots' are used to create placeholder for children elements of the components -->
      <!-- named slots for different sections. -->
      <slot name="header">
        <!-- Slots can have default content which will render in case no children are received for this. -->
        <h2>No Header Provided.</h2>
      </slot>
    </header>
    <!-- There can be only 1 unnamed slot.  -->
    <slot></slot>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
  margin: 2rem auto;
  max-width: 30rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
