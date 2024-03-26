<template>
    <div class="col-3 meme">
        <p>{{ meme.name }}</p>
        <img :src="meme.url" :alt="meme.name" class="fluid" />
    </div>
</template>

<script>
export default {
    props: {
        meme: Object
    }
}
</script>

<style></style>
