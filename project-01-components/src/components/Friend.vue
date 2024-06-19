<template>
  <li>
    <h2>{{ name }}</h2>
    <button @click="toggleDetails" :style="{ marginRight: '1rem' }">
      {{ showDetails ? "Hide" : "Show" }} Details
    </button>
    <button @click="toggleCloseFriend" :style="{ marginRight: '1rem' }">
      {{ isClose ? "Remove" : "Add" }} Close Friend
    </button>
    <button @click="removeFriend">Remove Friend</button>
    <ul v-if="showDetails">
      <li>
        Phone: <strong> {{ phoneNumber }} </strong>
      </li>
      <li>
        Email: <strong> {{ emailAddress }} </strong>
      </li>
    </ul>
  </li>
</template>

<script>
export default {
  name: "friend-info",
  //   declaring props: ONLY NAMES
  //   props: ["name", "phoneNumber", "emailAddress"],

  //   declaring props: WITH VALIDATIONS and CONFIG
  props: {
    // Can also have validator functions.
    id: { type: Number },
    name: { type: String, required: true },
    phoneNumber: Number,
    emailAddress: { type: String, default: "no.mail@gmail.com" },
    isClose: { type: Boolean },
  },

  //   declaring events - not mandatory; but it's useful for documentation,
  //   only names
  emits: ["toggle-favorite", "remove-friend"],

  //   declaring events, more descriptive with validators.
  // emits: {
  //   "toggle-favorite": function (id) {
  //     if (id) return true;
  //     else {
  //       console.warn("ID parameter is missing.");
  //       return false;
  //     }
  //   },
  // },

  data() {
    return { showDetails: false, friend: {} };
  },
  methods: {
    toggleDetails() {
      this.showDetails = !this.showDetails;
    },
    toggleCloseFriend() {
      // Emit event to the parent.
      this.$emit("toggle-favorite", this.id);
    },
    removeFriend() {
      this.$emit("remove-friend", this.id);
    },
  },
};
</script>
