<template>
  <div
    class="navbar"
    :class="{'hotmart-pro': isHotmartPro}"
    role="navigation"
    v-if="settingsLoaded">
    <menu-switch :class="{'hotmart-pro': isHotmartPro}" />
    <div class="container no-padding">
      <home-link />
      <locale-dropdown />
      <nav-link-list />
      <mail-service-link />
      <notification-dropdown />
      <menu-user-dropdown />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import MenuSwitch from './MenuSwitch.vue';
import HomeLink from './HomeLink.vue';
import LocaleDropdown from './LocaleDropdown.vue';
import NavLinkList from './NavLinkList.vue';
import MenuUserDropdown from './MenuUserDropdown.vue';
import MailServiceLink from './MailServiceLink.vue';
import NotificationDropdown from './notification/NotificationDropdown.vue';

import { setklickartURL } from '../config/klickart';
import { setJWTSecret } from '../config/jwt';

export default {
  name: 'KlickpagesHeader',
  props: {
    klickartURL: String,
    jwtSecret: String,
  },
  data() {
    return {
      settingsLoaded: false,
      isHotmartPro: false,
    };
  },
  components: {
    MenuSwitch,
    NavLinkList,
    LocaleDropdown,
    HomeLink,
    MenuUserDropdown,
    MailServiceLink,
    NotificationDropdown,
  },
  methods: mapActions({
    getTopBarConfig: 'topBar/getConfig',
  }),
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
  async mounted() {
    setklickartURL(this.klickartURL);
    setJWTSecret(this.jwtSecret);
    await this.getTopBarConfig()
      .catch((error) => {
        console.error(error);
      });

    if (this.topBarConfig.user.ucode) {
      this.isHotmartPro = true;
    }
    this.settingsLoaded = true;
  },
};
</script>
