import { createApp } from "vue";
import App from "./App.vue";
import Friend from "./components/Friend.vue";
import FriendForm from "./components/FriendForm.vue";

const app = createApp(App);

app.component("friend-info", Friend);
app.component("friend-form", FriendForm);
app.mount("#app");
