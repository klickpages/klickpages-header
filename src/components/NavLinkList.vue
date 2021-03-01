<template>
  <ul class="navbar__menu" id="kp-nav-header">
    <nav-link-item
      :url="topBarConfig.pages.url"
      :icon="'icon-kp-monitor'"
      :linkTitle="topBarConfig.pages.title"
    />
    <nav-link-item
      :url="topBarConfig.klicktest.url"
      :icon="'icon-kp-testab'"
      :linkTitle="topBarConfig.klicktest.title"
      :linkDescription="topBarConfig.klicktest.description"
      :enabled="topBarConfig.klicktest.enabled"
    />
    <nav-link-item
      :url="topBarConfig.klicktimer.url"
      :icon="'icon-kp-klicktimer'"
      :linkTitle="topBarConfig.klicktimer.title"
      :linkDescription="topBarConfig.klicktimer.description"
      :enabled="topBarConfig.klicktimer.enabled"
    />
    <nav-link-item
      :url="topBarConfig.klickbox.url"
      :icon="'icon-kp-pop-up'"
      :linkTitle="topBarConfig.klickbox.title"
      :linkDescription="topBarConfig.klickbox.description"
      :enabled="topBarConfig.klickbox.enabled"
    />
    <nav-link-item
      :url="topBarConfig.klickredirect.url"
      :icon="'icon-kp-link'"
      :linkTitle="topBarConfig.klickredirect.title"
      :linkDescription="topBarConfig.klickredirect.description"
    />
  </ul>
</template>

<script>

import { mapGetters } from 'vuex';
import NavLinkItem from './NavLinkItem.vue';

export default {
  name: 'NavLinkList',
  components: {
    NavLinkItem,
  },
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
};
</script>
