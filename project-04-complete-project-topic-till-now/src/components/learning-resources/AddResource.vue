<template>
  <base-card>
    <form @submit.prevent="handleSubmit">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" />
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          type="text"
          id="description"
          name="description"
          rows="4"
        ></textarea>
      </div>
      <div class="form-control">
        <label for="link">Resource Link</label>
        <input type="url" id="link" name="link" />
      </div>
      <div>
        <v-btn type="submit">Add Resource</v-btn>
      </div>
    </form>
  </base-card>
  <v-dialog v-if="isError" @close="isError = false">
    <template #header>
      <h3>Invalid Data...</h3>
    </template>
    <template #default>
      <p>Form Data is Invalid. Please fill all the required inputs.</p>
    </template>
    <template v-slot:actions>
      <v-btn @click="isError = false">OK</v-btn>
    </template>
  </v-dialog>
</template>

<script>
export default {
  inject: ['addResource'],
  data() {
    return { isError: false };
  },
  methods: {
    handleSubmit(e) {
      const data = [...new FormData(e.currentTarget).entries()].reduce(
        (obj, [k, v]) => ({ ...obj, [k]: v }),
        {}
      );
      if (!data.title.trim() || !data.description.trim()) {
        this.isError = true;
        return;
      }
      this.addResource(data);
      e.currentTarget.reset();
    },
  },
};
</script>

<style scoped src="../../styles/add-resource.css"></style>
