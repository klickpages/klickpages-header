<template>
  <div class="nav-notifications" style="display:block">
    <div class="new-notifications-signal"></div>
    <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">
      <notification-icon />
    </a>
    <ul class="drop__list drop__list--notifications dropdown-menu"></ul>
  </div>
</template>

<script>
import NotificationIcon from '../icons/Notification.vue';

export default {
  components: {
    NotificationIcon,
  },
};
</script>
