<template>
  <form @submit.prevent="addFriend">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" name="name" />
    </div>
    <div class="form-group">
      <label for="phoneNumber">Phone Number</label>
      <input type="text" name="phoneNumber" />
    </div>
    <div class="form-group">
      <label for="emailAddress">Email Address</label>
      <input type="text" name="emailAddress" />
    </div>
    <div class="form-check">
      <input type="checkbox" name="isClose" />
      <label for="isClose">Add as close friend.</label>
    </div>
    <button>Add New Friend</button>
  </form>
</template>

<script>
export default {
  emits: ["on-add-friend"],
  methods: {
    addFriend(e) {
      const formData = [...new FormData(e.currentTarget).entries()].reduce(
        (data, [key, value]) => ({ ...data, [key]: value }),
        []
      );
      const data = { ...formData, isClose: formData.isClose === "on" };
      if (data.name && data.emailAddress && data.phoneNumber) {
        this.$emit("on-add-friend", data);
        e.currentTarget.reset();
      }
    },
  },
};
</script>
