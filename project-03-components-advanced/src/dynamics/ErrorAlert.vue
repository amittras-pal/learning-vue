<template>
  <dialog open>
    <slot></slot>
  </dialog>
</template>

<style scoped>
dialog {
  position: fixed;
  top: 20vh;
  left: 30%;
  background-color: white;
  padding: 1rem;
  border-radius: 1rem;
}
</style>
