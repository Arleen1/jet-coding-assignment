<template>
  <section class="box">
    <img v-bind:src=restaurant.logoUrl>
    <div class="box-text">
      <h1>{{ restaurant.name }}</h1>
      <h2>Rating: {{ restaurant.rating.starRating }} ({{ restaurant.rating.count }})</h2>
      <div div class="tags">
        <div v-for="cuisine in restaurant.cuisines">
          <div class="tag">{{ cuisine.name }}</div>
        </div>
      </div>
      <h2>{{ restaurant.address.firstLine }}, {{ restaurant.address.city }}</h2>

    </div>
  </section>
</template>

<script setup>
defineProps(['restaurant'])

</script>
