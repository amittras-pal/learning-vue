<template>
  <ul>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'poor' }"
        @click="activate('poor')"
      >
        Poor
      </button>
    </li>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'average' }"
        @click="activate('average')"
      >
        Average
      </button>
    </li>
    <li>
      <button
        type="button"
        :class="{ active: modelValue === 'great' }"
        @click="activate('great')"
      >
        Great
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['modelValue'],
  emits: ['update:modelValue'],
  methods: {
    activate(option) {
      this.$emit('update:modelValue', option);
    },
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0.5rem;
  padding: 0;
  display: flex;
}
li {
  border: 1px solid gray;
  display: flex;
  justify-content: center;
  align-self: start;
}
button {
  font: inherit;
  border: none;
  padding: 0.25rem 0.5rem;
  background-color: white;
  border-radius: 0.25rem;
  cursor: pointer;
}
.active {
  background-color: lightgreen;
}
</style>
