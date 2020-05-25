<template>
  <div id="app">
    <klickpages-header
      :klickartURL="klickartURL"
      :jwtSecret="jwtSecret"
    />
  </div>
</template>

<script>

import KlickpagesHeader from '@/components/KlickpagesHeader.vue';

export default {
  name: 'App',
  data() {
    return {
      klickartURL: 'https://art.klickpages.local',
      jwtSecret: '986392d822a953640a12c03aa3dc6799',
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
