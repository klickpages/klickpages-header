<template>
  <div class="navbar" role="navigation">
    <menu-switch v-if="klicksendEnabled "></menu-switch>
  </div>
  <!-- /#nav-normal -->
</template>

<script>
import TopBarRequest from '../services/klickartRequest/topBar';
import MenuSwitch from './MenuSwitch.vue';

export default {
  name: 'KlickpagesHeader',
  props: {
    klickartUrl: String,
  },
  components: {
    MenuSwitch,
  },
  mounted() {
    const topBarRequest = new TopBarRequest({
      klickartUrl: this.klickartUrl,
    });

    topBarRequest.get().then(() => {
    });
  },
};
</script>
