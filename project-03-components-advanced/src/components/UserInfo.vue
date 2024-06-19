<template>
  <!-- Using a styled wrapper component and placing children which will be put into slots. -->
  <section>
    <base-card>
      <!-- specifying which slot the content should go to. -->
      <template v-slot:header>
        <h3>{{ fullName }}</h3>
        <base-badge :type="role" :caption="role.toUpperCase()"></base-badge>
      </template>
      <!-- Additional children will go to the default slot -->
      <p>{{ infoText }}</p>
    </base-card>
  </section>
</template>

<script>
export default {
  props: ["fullName", "infoText", "role"],
};
</script>
