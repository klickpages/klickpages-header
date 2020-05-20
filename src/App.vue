<template>
  <div id="app">
    <klickpages-header
      :klickartURL="klickartURL"
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
