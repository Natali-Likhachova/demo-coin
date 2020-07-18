<template>
    <div class="root">
        <ul>
            <li :key="key" v-for="(value, key) in pairs">
                <label><input type="checkbox" @change="selectItem" />{{ key }}</label>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    ul{
       list-style-type: none;
        padding: 0;
    }
</style>

<script>
    import pairsData from '../pairs.json';

    export default {
        data: () => ({
            pairs: pairsData.pairs,
        }),
        methods: {
            selectItem(){
                console.log(123);
            },
        },
    };

</script>

