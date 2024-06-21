<template>
  <base-card>
    <!-- @click will fall-through to the base HTML component in the 'v-btn' component -->
    <!-- in this case, the click event will propagate from the actual button component here. -->

    <v-btn
      @click="selectTab('stored-resources')"
      :mode="activeView === 'stored-resources' ? '' : 'flat'"
      >Stored Resource</v-btn
    >
    <v-btn
      @click="selectTab('add-resource')"
      :mode="activeView === 'add-resource' ? '' : 'flat'"
      :style="{ marginLeft: '1rem' }"
      >Add Resource</v-btn
    >
  </base-card>
  <keep-alive>
    <component :is="activeView"></component>
  </keep-alive>
</template>

<script>
import AddResource from './AddResource.vue';
import StoredResources from './StoredResources.vue';
export default {
  components: { AddResource, StoredResources },
  data() {
    return {
      activeView: 'stored-resources',
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'This is the official official documentation.',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Google is your friend...',
          link: 'https://google.com',
        },
      ],
    };
  },
  provide() {
    return {
      resources: this.storedResources,
      addResource: this.addResource,
      removeResource: this.removeResource,
    };
  },
  methods: {
    selectTab(tab) {
      this.activeView = tab;
    },
    addResource(data) {
      this.storedResources.push({
        ...data,
        id: data.title.replaceAll(' ', '-'),
      });
      this.activeView = 'stored-resources';
    },
    removeResource(id) {
      // Filter won't work, bcz Proxy pattern doesn't register the change in reference caused by overwriting the exiting object.
      // This is a completely different behaviour from what we learned in react.

      // this.storedResources = this.storedResources.filter((r) => r.id !== id);

      // Instead, we should modify the current object itself as follows.
      const index = this.storedResources.findIndex((re) => re.id === id);
      this.storedResources.splice(index, 1);
    },
  },
};
</script>
