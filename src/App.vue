<template>
  <div id="app">
    <klickpages-header :klickartUrl="klickartUrl"></klickpages-header>
  </div>
</template>

<script>

import KlickpagesHeader from '@/components/KlickpagesHeader.vue';

export default {
  name: 'App',
  data() {
    return {
      klickartUrl: 'https://art.klickpages.local',
    };
  },
  components: {
    KlickpagesHeader,
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main";
</style>
