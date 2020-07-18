<template>
    <div class="root">
        <h1>{{ pair }}</h1>
        <h2 v-if="!isLoading">{{ formattedPrise }}</h2>
        <i v-if="isLoading" class="fas fa-cog fa-spin"></i>
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
    import { getTicker } from "../api";

    export default {
        props: {
            pair:String,
        },
        data: () => ({
            price: '',
            isLoading: true,
        }),
        computed:{
            formattedPrise(){
                return this.price.toFixed(2);
            },
        },

        mounted() {
            const updateRate = async () => {
                this.price = await getTicker(this.pair);
                this.isLoading = false;
            };
            updateRate();
            this.interval = setInterval(updateRate,1000);
        },

        beforeDestroy() {
            clearInterval(this.interval);
        }
    };

</script>

