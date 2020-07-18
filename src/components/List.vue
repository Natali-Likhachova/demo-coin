<template>
    <div class="root">
        <ul>
            <li :key="key" v-for="(value, key) in pairs">{{ key }}</li>
        </ul>
    </div>
</template>

<style scoped>
    .root{
        display: inline-block;
        border: solid black 3px;
        border-radius: 5px;
        padding: 10px;
        margin: 10px;
        text-align: center;
    }
</style>

<script>
    import pairsData from '../pairs.json';

    export default {
        data: () => ({
            pairs: pairsData.pairs,
        }),
    };

</script>

