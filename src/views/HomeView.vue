<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <FavouritePlacesForm msg="Add your favourite places"/>
  </div>
</template>

<script>
// @ is an alias to /src
import FavouritePlacesForm from '@/components/FavouritePlacesForm.vue'

export default {
  name: 'HomeView',
  components: {
    FavouritePlacesForm
  }
}
</script>
