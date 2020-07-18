<template>
  <div id="app">
    <Ticker pair="btc_usd" />
    <Ticker pair="eth_usd" />
  </div>
</template>

<script>
import Ticker from './components/Ticker.vue'

export default {
  name: 'App',
  components: {
    Ticker
  }
}
</script>
