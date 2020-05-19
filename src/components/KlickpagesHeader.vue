<template>
  <div class="navbar" role="navigation"  v-if="settingsLoaded">
    <menu-switch />
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
import { mapActions } from 'vuex';
import MenuSwitch from './MenuSwitch.vue';
import HomeLink from './HomeLink.vue';
import LocaleDropdown from './LocaleDropdown.vue';
import NavLinkList from './NavLinkList.vue';
import MenuUserDropdown from './MenuUserDropdown.vue';
import MailServiceLink from './MailServiceLink.vue';
import NotificationDropdown from './notification/NotificationDropdown.vue';

import { setklickartURL } from '../config/klickart';
import { setKlicknotificationURL } from '../config/klicknotification';

export default {
  name: 'KlickpagesHeader',
  props: {
    klickartURL: String,
    klicknotificationURL: String,
  },
  data() {
    return {
      settingsLoaded: false,
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
  async mounted() {
    setklickartURL(this.klickartURL);
    setKlicknotificationURL(this.klicknotificationURL);
    await this.getTopBarConfig()
      .catch((error) => {
        console.error(error);
      });

    this.settingsLoaded = true;
  },
};
</script>
