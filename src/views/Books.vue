<template>
  <div id="app">
    <h1 class="is-size-4 title"> Магазин e-commerce</h1>
    <div class="columns is-multiline cards_wrapper">
      <Card
        v-for="book in info"
        v-bind:key="book.id"
        v-bind:id="book.id"
        v-bind:image="book.img"
        v-bind:rating="book.rating"
        v-bind:title="book.title"
        v-bind:discount="book.discount"
        v-bind:price="book.price"
        v-bind:new_price="book.new_price"
        v-bind:available="book.available"
        @addToCart = "addProduct(book)"
      />
    </div>
  </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'Books',
  components: {
    Card,
  },
  data() {
    return {
      info: [],
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
  },
  computed: {
  },
  async created() {
    const response = await fetch('https://my-json-server.typicode.com/122Nikita122/products_json/db');
    const data = await response.json();
    this.info = data.books;
  },
};
</script>

<style scoped>
.cards_wrapper {
  margin: 1em 6em;
}
</style>
