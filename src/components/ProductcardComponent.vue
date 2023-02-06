<template>
  <v-card class="mx-auto my-12" max-width="374">
    <v-img height="250" :src="product.image"></v-img>

    <v-card-title>{{ resultTitle }}</v-card-title>

    <v-card-text>
      <div class="my-4 text-subtitle-1 text-h2 font-weight-bold">
        Rs.{{ product.price }}
      </div>

      <div>{{ resultDescription }}</div>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "ProductcardComponent",
  props: {
    product: Object,
  },
  data() {
    return {
      resultTitle: this.product.title.split(" ").slice(0, 4).join(" "),
      resultDescription: this.product.description
        .split(" ")
        .slice(0, 20)
        .join(" "),
    };
  },
  methods: {
    // description() {
    //   console.log(this.product.description);
    // },
  },
};
</script>

<style></style>
