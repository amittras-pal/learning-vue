import { createApp } from 'vue';
import App from './App.vue';
import BaseButton from './components/ui/BaseButton.vue';
import BaseCard from './components/ui/BaseCard.vue';
import BaseDialog from './components/ui/BaseDialog.vue';

const app = createApp(App);

app.component('base-card', BaseCard);
app.component('v-btn', BaseButton);
app.component('v-dialog', BaseDialog);

app.mount('#app');
