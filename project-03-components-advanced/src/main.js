import { createApp } from "vue";

import App2 from "./App2.vue";
import BaseBadge from "./components/BaseBadge.vue";
import BaseCard from "./components/BaseCard.vue";

const app = createApp(App2);

// Registering like this adds them as global components.
// PRO: Can be used as custom components that can be used anywhere in the app.
// CON: They need to be loaded and bundled along with the main script.
app.component("base-badge", BaseBadge);
app.component("base-card", BaseCard);
// app.component("the-header", TheHeader);

app.mount("#app");
