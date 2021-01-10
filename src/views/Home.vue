<template>
<div class="home">
  <section class="hero" :style="{backgroundImage:(`url(${image_back})`)}">
    <div class="hero-body">
      <div class="container">
        <h1 class="title  has-text-black is-size-2">
          E-commerce
        </h1>
        <h2 class="has-text-black is-size-3">
          Купи свою мечту
        </h2>
      </div>
    </div>
  </section>
  <div class="home_slider">
    <vue-slider :data="dataSlider" v-model="value" :marks="true"></vue-slider>
  </div>
  <span class='ml-6'>Самые большие скидки :</span>
    <div class="is-flex is-justify-content-center">
      <Card
        v-for="book in shortInfi"
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
    <div class="container">
    <div class="notification is-link is-flex is-justify-content-space-around ">

      <button class="button is-ligh" @click="stepBack"> Назад </button>
      <button class="button is-ligh" @click="stepForward"> Вперед </button>
    </div>
</div>
</div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
  name: 'Home',
  components: {
    Card,
  },
  data() {
    return {
      image_back: 'https://images.unsplash.com/photo-1510506678113-ba866806e117?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
      value: 'A',
      dataSlider: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
      info: [],
      number: 3,
      shortInfi: [],
    };
  },
  methods: {
    addProduct(item) {
      this.$store.commit('SET_CART', item);
    },
    stepForward() {
      console.log('в перед');
      if (this.info.slice(this.number, this.number + 3) < 3) {
        console.log('массив закончился');
        return;
      }
      this.shortInfi = this.info.slice(this.number, this.number + 3);
      this.number += 3;
    },
    stepBack() {
      console.log('назад');
      if (this.info.slice(this.number - 6, this.number - 3) < 3) {
        console.log('массив закончился');
        return;
      }
      this.shortInfi = this.info.slice(this.number - 6, this.number - 3);
      this.number -= 3;
    },
  },

  async created() {
    const response = await fetch('https://my-json-server.typicode.com/122Nikita122/products_json/db');
    const data = await response.json();
    const joinArr = [...data.videocards, ...data.books]
      .filter((product) => product.discount === true);
    this.info = joinArr.sort((a, b) => {
      const dicount = (x) => Math.round((x.price - x.new_price) / (x.price / 100));
      return dicount(a) > dicount(b) ? 1 : -1;
    }).reverse();
    this.shortInfi = this.info.slice(0, 3);
  },
};

</script>

<style scoped>
.hero {
  background-size: cover;
  background-position: left center;
  background-repeat: no-repeat;
}
.home_slider{
  padding: 30px;
}
.block{
  height: 100%;
}
</style>
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function a(position){
  const newArr = arr.slice(position, position + 3);
  return newArr
}
