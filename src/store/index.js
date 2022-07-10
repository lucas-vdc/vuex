import { createStore } from 'vuex'

const apiUrl = function (postcode) {
  return `https://viacep.com.br/ws/${postcode}/json/`
};
const headers = {
  Accept: 'application/json'
}

export default createStore({
  state: {
    favouritePlaces: [],
    lastFavouritePlace: null
  },
  getters: {
    getFavouritePlaces: state => state.favouritePlaces 
  },
  mutations: {
    setFavouritePlace (state, payload) {
      state.favouritePlaces.push(payload)
      state.lastFavouritePlace = payload
    }
  },
  actions: {
    async setFavouritePlace (state, postcode) {
      try {
        const payload = await fetch(apiUrl(postcode), { headers })
        const data = await payload.json()
        state.commit('setFavouritePlace', data)
        if(payload.status == 200) {
          alert(`Successfully added: ${data.logradouro}`)
        }
        return data;
      } catch (err) {
        console.log(err)
        alert(err)
      }
    }
  },
  modules: {
  }
})
