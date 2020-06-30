<template>
  <div id="app">
    <hotmart-header
      v-if="topBarConfig.user.ucode"
      :hotmartProURL="hotmartProURL"
    />
    <klickpages-header
      :klickartURL="klickartURL"
      :jwtSecret="jwtSecret"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import HotmartHeader from '@/components/HotmartHeader.vue';
import KlickpagesHeader from '@/components/KlickpagesHeader.vue';

export default {
  name: 'App',
  data() {
    return {
      klickartURL: 'https://art.klickpages.local',
      jwtSecret: '986392d822a953640a12c03aa3dc6799',
      hotmartProURL: 'https://extensions-scripts.buildstaging.com/app.js',
    };
  },
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
  components: {
    HotmartHeader,
    KlickpagesHeader,
  },
};
</script>
<style lang="scss">
@import "./assets/scss/main";
</style>
