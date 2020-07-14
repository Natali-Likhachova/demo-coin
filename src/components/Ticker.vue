<template>
    <div class="root">
        <h1>{{ pair }}</h1>
        <h2 v-if="!isLoading">{{ price }}</h2>
        <i v-if="isLoading" class="fas fa-cog fa-spin"></i>
    </div>
</template>

<style scoped>
    .root{
        border: solid black 3px;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: center;
    }
</style>

<script>
    import { getTicker } from "../api";

    export default {
        data: () => ({
            pair: 'btc_usd',
            price: '',
            isLoading: true,
        }),
        async mounted() {
            this.price = await getTicker(this.pair);
            this.isLoading = false;
        }
    };
</script>

