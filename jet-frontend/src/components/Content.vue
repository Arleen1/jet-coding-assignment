<template>
  <section class="content">
    <section class="search">
      <input type="text" v-model="input" placeholder="Search by postcode" />
      <button @click="findRestaurants(input)"><h3>Search</h3></button>
    </section>
    <section class="results">
      <RestaurantSkeleton  v-if="loading"/>
      <Restaurant :restaurant=restaurant v-else-if="restaurants.length > 0" v-for="restaurant in restaurants"/>
      <div v-else-if="loading === false">No restaurants found</div>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Restaurant from './Restaurant.vue';
import RestaurantSkeleton from './RestaurantSkeleton.vue';

let restaurants = ref([]);
let loading = ref(null);

const findRestaurants = async (postcode) => {
  if (postcode) {
    loading.value = true;
    restaurants.value = []
    const response = await fetch(`http://localhost:5000/api/restaurants/${postcode}/?limit=10`);
    restaurants.value = await response.json()
    loading.value = false;
  }
}

</script>
