<template>
  <div class="navbar" role="navigation">
    <menu-switch />
    <div class="container no-padding">
      <locale-dropdown/>
      <nav-link-list />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MenuSwitch from './MenuSwitch.vue';
import LocaleDropdown from './LocaleDropdown.vue';
import NavLinkList from './NavLinkList.vue';

export default {
  name: 'KlickpagesHeader',
  props: {
    klickartUrl: String,
  },
  data() {
    return {
      loaded: false,
    };
  },
  components: {
    MenuSwitch,
    NavLinkList,
    LocaleDropdown,
  },
  methods: mapActions({
    getTopBarConfig: 'topBar/getConfig',
  }),
  mounted() {
    this.getTopBarConfig(this.klickartUrl)
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
