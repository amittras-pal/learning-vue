<template>
  <li>
    <base-card>
      <header>
        <h3>{{ resource.title }}</h3>
        <v-btn mode="flat" @click="handleDelete">Delete</v-btn>
      </header>
      <p>{{ resource.description }}</p>
      <nav v-if="resource.link">
        <a :href="resource.link">View Resource</a>
      </nav>
    </base-card>
  </li>
</template>

<script>
export default {
  props: ['resource'],
  inject: ['removeResource'],
  methods: {
    handleDelete() {
      this.removeResource(this.resource.id);
    },
  },
};
</script>

<style scoped src="../../styles/learning-resource.css"></style>
