<template>
  <div class="navbar" role="navigation">
    <menu-switch />
    <div class="container no-padding">
      <locale-dropdown v-if="loaded"
        :currentLocale="topBarConfig.locale.current_locale"
        :portuguese="topBarConfig.locale.portuguese"
        :english="topBarConfig.locale.english"
        :spanish="topBarConfig.locale.spanish"
        :selected="topBarConfig.locale.selected"
      />
      <nav-link-list />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
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
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
  components: {
    MenuSwitch,
    NavLinkList,
    LocaleDropdown,
  },
  methods: mapActions({
    getTopBarConfig: 'topBar/getConfig',
  }),
  async mounted() {
    try {
      await this.getTopBarConfig(this.klickartUrl);
      this.loaded = true;
    } catch (error) {
      console.error(error);
    }
  },
};
</script>
