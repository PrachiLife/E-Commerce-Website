<template>
  <v-app>
    <div class="container mt-10">
      <p class="text-center text-h4 text-decoration-underline mt-2">
        E-Commerce Website
      </p>
      <ProductComponent />
    </div>
  </v-app>
</template>

<script>
import ProductComponent from "./components/ProductComponent.vue";
export default {
  name: "App",
  components: {
    ProductComponent,
  },
};
</script>

<style scoped>
.container {
  width: 80%;
  /* border: 2px solid red; */
  margin: auto;
}
</style>
