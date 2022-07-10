<template>
  <div class="about">
    <h1>List of favourite places:</h1>
    <ul>
      <li v-for="(item, index) in favouritePlaces" :key="index">
        {{index}}: {{item.logradouro}}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    teste: ''
  }),
  computed: {
    // favouritePlaces() {
    //   return this.$store.getters.getFavouritePlaces
    // },
    ...mapState(['favouritePlaces'])
  }
}
</script>