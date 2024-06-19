<template>
  <header>
    <h1>My Friends</h1>
  </header>
  <section>
    <friend-form @on-add-friend="addFriend"></friend-form>
    <ul>
      <friend-info
        v-for="friend in friends"
        :key="friend.id"
        :id="friend.id"
        :name="friend.name"
        :phone-number="friend.phoneNumber"
        :email-address="friend.emailAddress"
        :is-close="friend.isClose"
        @toggle-favorite="toggleCloseFriend"
        @remove-friend="removeFriend"
      ></friend-info>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: 1,
          name: "Amittras",
          phoneNumber: 1515151515,
          emailAddress: "amittras@gmail.com",
          isClose: false,
        },
        {
          id: 2,
          name: "Person 02",
          phoneNumber: 2121212121,
          emailAddress: "someone.else@gmail.com",
          isClose: false,
        },
        {
          id: 3,
          name: "Another Person",
          phoneNumber: 4545454545,
          emailAddress: "nuts@mail.com",
          isClose: false,
        },
      ],
    };
  },
  methods: {
    toggleCloseFriend(friendId) {
      const friend = this.friends.find((f) => f.id === friendId);
      friend.isClose = !friend.isClose;
    },
    addFriend(data) {
      this.friends.push({ ...data, id: this.friends.length + 1 });
    },
    removeFriend(friendId) {
      this.friends = this.friends.filter((f) => f.id !== friendId);
    },
  },
};
</script>

<style src="./styles/styles.css"></style>
