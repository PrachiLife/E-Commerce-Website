<template>
  <div class="d-flex flex-wrap">
    <ProductcardComponent
      v-for="product in AllProducts"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script>
import ProductcardComponent from "./ProductcardComponent.vue";
import { mapGetters } from "vuex";
export default {
  name: "ProductComponent",
  components: {
    ProductcardComponent,
  },
  computed: {
    ...mapGetters(["AllProducts"]),
  },
  mounted() {
    this.$store.dispatch("getProducts");
  },
};
</script>

<style></style>
