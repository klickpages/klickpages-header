<template>
  <div class="navbar" role="navigation">
    <menu-switch />
    <div class="container no-padding">
      <home-link />
      <locale-dropdown v-if="loaded"/>
      <nav-link-list />
      <menu-user-dropdown />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import MenuSwitch from './MenuSwitch.vue';
import HomeLink from './HomeLink.vue';
import LocaleDropdown from './LocaleDropdown.vue';
import NavLinkList from './NavLinkList.vue';
import MenuUserDropdown from './MenuUserDropdown.vue';

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
    HomeLink,
    MenuUserDropdown,
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
