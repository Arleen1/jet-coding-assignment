<template>
  <section class="content">
    <section class="search">
      <input type="text" v-model="input" placeholder="Search by postcode" />
      <button @click="findRestaurants(input)"><h3>Search</h3></button>
    </section>
    <section class="results">
      <div v-if="restaurants.length > 0" v-for="restaurant in restaurants">
        <Restaurant :restaurant=restaurant />
      </div>
      <div v-else="">No restaurants found</div>
    </section>
  </section>
</template>

<script setup>
import { ref } from 'vue';
import Restaurant from './Restaurant.vue';

let restaurants = ref([])

const findRestaurants = async (postcode) => {
  const response = await fetch(`http://localhost:5000/api/restaurants/${postcode}/?limit=10`);
  restaurants.value = await response.json()
}

</script>
