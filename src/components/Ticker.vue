<template>
    <div class="root">
        <h1>{{ pair }}</h1>
        <h2>{{ price }}</h2>
        <i class="fas fa-cog fa-spin"></i>
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
    export default {
        data: () => ({
            pair: 'BTC_USD',
            price: '',
            isLoading: true,
        }),
    };
</script>

