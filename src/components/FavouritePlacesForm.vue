<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <label>Postcode: </label>
    <input v-model="postcode" />
    <button @click="save">Save</button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'FavouritePlacesForm',
  props: {
    msg: String
  },
  data: () => ({
    postcode: ''
  }),
  methods: {
    ...mapActions(['setFavouritePlace']),

    save () {
      // this.$store.dispatch('setFavouritePlace', this.postcode)
      this.setFavouritePlace(this.postcode)
      .then(response => {
        if(typeof response !== 'undefined'){
          console.log('aaaaaaa ' + response)
          this.$router.push('/favourite-places')
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
