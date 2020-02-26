<template>
  <div class="navbar" role="navigation">
    <menu-switch></menu-switch>
    <nav-link-list />
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MenuSwitch from './MenuSwitch.vue';
import NavLinkList from './NavLinkList.vue';

export default {
  name: 'KlickpagesHeader',
  props: {
    klickartUrl: String,
  },
  components: {
    MenuSwitch,
    NavLinkList,
  },
  methods: mapActions({
    getTopBarConfig: 'topBar/getConfig',
  }),
  async mounted() {
    try {
      await this.getTopBarConfig(this.klickartUrl);
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
