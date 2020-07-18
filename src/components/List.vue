<template>
    <div class="root">
        <button @click="shuffle">Перемешать</button>
        <ul>
            <li :key="key" v-for="(key, idx) in pairs" :style="{ order:idx }">
                <label><input type="checkbox" @change="toggleItem(key)" />{{ key }}</label>
            </li>
        </ul>
    </div>
</template>

<style scoped>
    li{
        transition-property: all;
        transition-duration: 0.3s;
    }
    ul{
       list-style-type: none;
        padding: 0;
        display: flex;
        flex-direction: column;
    }
</style>

<script>
    import pairsData from '../pairs.json';
    import shuffle from 'Lodash.shuffle';

    export default {
        created() {
            this.selectedItems =[];
        },
        data(){
            return{
                pairs: Object.key(pairsData.pairs).slice(0, 20),
            };
        },
        methods: {
            shuffle(){
                this.pairs = shuffle(this.pairs);
            },
            toggleItem(key){
                const index = this.selectedItems.indexOf(key);
                if (index != -1){
                    this.selectedItems.splice(index, 1);
                } else {
                    this.selectedItems.push(key);
                }
                console.log(this.selectedItems);
                this.$emit('itemsupdated', this.selectedItems);
            },
        },
    };

</script>

