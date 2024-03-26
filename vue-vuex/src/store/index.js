import { createStore } from 'vuex'

export default createStore({
  state: {
    titleApp: "Memes v2",
    memes: []
  },
  getters: {
  },
  mutations: {
    setMemes(state, payload) {
      state.memes = payload;
    }
  },
  actions: {
    async getMemes({ commit }) { // Desestructurar commit del objeto context
      try {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const result = await response.json();
        commit("setMemes", result.data.memes);
      } catch (error) {
        console.log(error);
      }
    }
  },
  modules: {
  }
})
