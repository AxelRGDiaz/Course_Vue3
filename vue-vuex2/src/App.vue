<template>
  <div class="container">
    <ListMemes />
  </div>
</template>

<script>
import { useStore } from 'vuex'
import ListMemes from './components/ListMemes.vue'
import ListMemesVue from './components/ListMemes.vue'

export default {
  components: { ListMemes },
  name: 'App',

}
</script>

<style></style>
