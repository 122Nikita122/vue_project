<template>
  <div id="app">
    <h1 class="is-size-4 title"> Магазин e-commerce </h1>
    <div class="columns is-multiline cards_wrapper">
      <Card
        v-for="videocard in info"
        v-bind:key="videocard.id"
        v-bind:id="videocard.id"
        v-bind:image="videocard.img"
        v-bind:rating="videocard.rating"
        v-bind:title="videocard.title"
        v-bind:discount="videocard.discount"
        v-bind:price="videocard.price"
        v-bind:new_price="videocard.new_price"
        v-bind:available="videocard.available"
        @addToCart = "addProduct(videocard)"
      />
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from '../components/Card.vue';

export default {
  name: 'Video',
  components: {
    Card,
  },
  data() {
    return {
      info: '',
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
  },
  computed: {
    ...mapGetters([
      'products',
    ]),
  },
  async created() {
    const response = await fetch('https://my-json-server.typicode.com/122Nikita122/products_json/db');
    const data = await response.json();
    this.info = data.videocards;
  },
};
</script>

<style scoped>
.cards_wrapper {
  margin: 1em 6em;
}
</style>
