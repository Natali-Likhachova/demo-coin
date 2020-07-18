<template>
  <div id="app">
    <List />
    <Ticker pair="btc_usd" />
    <Ticker pair="eth_usd" />
  </div>
</template>

<script>
import Ticker from './components/Ticker.vue'
import List from './components/List.vue'
import List from "./components/List";

export default {
  name: 'App',
  components: {
    List,
    Ticker
  }
}
</script>
