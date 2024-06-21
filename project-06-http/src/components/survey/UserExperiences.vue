<template>
  <section>
    <base-card>
      <h2>Submitted Experiences</h2>
      <div>
        <base-button @click="load" :disabled="isLoading">
          {{ isLoading ? 'Loading...' : 'Load Submitted Experiences' }}
        </base-button>
      </div>
      <!-- If Else Chain. -->
      <p v-if="isLoading">
        <em>Loading Experiences...</em>
      </p>
      <p v-else-if="isError">
        <em>Something went wrong while fetching experiences.</em>
      </p>
      <p v-else-if="results.length === 0">
        <em>No Experiences added. Add the first one.</em>
      </p>
      <ul v-else>
        <survey-result
          v-for="result in results"
          :key="result.id"
          :name="result.name"
          :rating="result.rating"
        ></survey-result>
      </ul>
    </base-card>
  </section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';

export default {
  components: { SurveyResult },
  data() {
    return { results: [], isLoading: false, isError: false };
  },
  methods: {
    load() {
      this.isLoading = true;
      this.isError = false;
      fetch('http://localhost:3000/surveys')
        .then((res) => {
          if (!res.ok) throw new Error('Failed.');
          return res.json();
        })
        .then((data) => {
          this.results = data;
        })
        // Server side errors don't trigger the catch block,
        // Since the request did complete with some response, albeit without a the desired one.
        // Hence, manually throwing the error above...
        .catch((err) => {
          console.log(err);
          this.isError = true;
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
  mounted() {
    this.load();
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}
</style>
