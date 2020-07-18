<template>
  <div id="app">
    <List @itemsupdated="updateList" class="list"/>
    <div class="tickers">
      <Ticker v-for="ticker in items" :pair="ticker" :key="ticker" />
    </div>
  </div>
</template>

<script>
import Ticker from './components/Ticker'
import List from "./components/List";

export default {
  name: 'App',
  components: {
    List,
    Ticker
  },
  data: () => ({ items: [] }),
  methods:{
    updateList(items){
      this.items = items;
      console.log(this.items);
    }
  }
}
</script>

<style scoped>
  .list{
    width: 30%;
    float: left;
  }
  .tickers{
    width: 70%;
  }

</style>
