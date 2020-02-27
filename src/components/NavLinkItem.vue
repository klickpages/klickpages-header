<template>
  <li :class="{ locked: !enabled}">
    <a :href="enabled ? url : 'javascript:;' ">
      <i :class="`${icon} mr`"></i>
      <span class="title">{{linkTitle}}</span>
    </a>
    <div v-if="linkDescription" class="tooltip-status">
      <div>
        <div class="tooltip-inner">
          <i :class="`icon-left ${icon}`"></i>
          {{linkDescription}}
        </div>
        <div class="message-content">
          <i class="icon-left icon-kp-lock"></i>
          <div>
              {{topBarConfig.upgrade.description}}
            <a
              :href="topBarConfig.upgrade.url"
              target="_blank"
              class="btn-round"
            >{{topBarConfig.upgrade.title}}</a>
          </div>
        </div>
      </div>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'NavLinkItem',
  props: {
    url: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    linkTitle: {
      type: String,
      default: '',
    },
    linkDescription: {
      type: String,
      default: '',
    },
    enabled: {
      type: Boolean,
      default: true,
    },
  },
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
};
</script>
