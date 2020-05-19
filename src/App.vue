<template>
  <div id="app">
    <klickpages-header
      :klickartURL="klickartURL"
      :klicknotificationURL="klicknotificationURL"
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
      klicknotificationURL: 'https://notification-delivery.kpages.com.br',
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
