<template>
<div class="nav-mail">
  <a :href="topBarConfig.mailservice.url" class="lock-screen">
    <mail-service-icon />
  </a>
  <div class="tooltip-status">
    <div class="tooltip-inner">
      {{topBarConfig.mailservice.description}}
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import MailServiceIcon from './icons/MailService.vue';

export default {
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
  components: {
    MailServiceIcon,
  },
};
</script>
