<template>

        <h1>{{ title }}</h1>
        <div class="row">
            <template v-for="meme in memes" :key="meme.id">
                <Meme :meme="meme"/><!-- Modificado para mostrar el nombre del meme -->
            </template>
        </div>
</template>

<script>
import { onMounted, computed } from 'vue';
import { useStore } from 'vuex';
// Importa el componente Meme si planeas utilizarlo aquí
import Meme from "./Meme"

export default {
    // Si planeas utilizar el componente Meme aquí, asegúrate de registrarlo
    components: {
        Meme,
    },
    setup() {
        const store = useStore();
        const memes = computed(() => store.state.memes);

        onMounted(() => {
            store.dispatch("getMemes")
        })

        return {
            title: store.state.titleApp,
            memes,
        }
    }
}
</script>

<style>
/* Agrega estilos aquí si es necesario */
</style>
