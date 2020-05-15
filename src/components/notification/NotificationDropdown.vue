<template>
  <div
    class='nav-notifications'
    :class="{open: notificationsOpen}"
    style="display:block"
    @click="toggleNotifications()"
  >
    <div class="new-notifications-signal"></div>
    <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">
      <notification-icon />
    </a>
    <notification-list />
  </div>
</template>

<script>
import NotificationIcon from '../icons/Notification.vue';
import NotificationList from './NotificationList.vue';

export default {
  data() {
    return {
      notificationsOpen: false,
    };
  },
  components: {
    NotificationIcon,
    NotificationList,
  },
  methods: {
    toggleNotifications() {
      this.notificationsOpen = !this.notificationsOpen;
    },
    closeNotifications(event) {
      if (!this.$el.contains(event.target)) {
        this.notificationsOpen = false;
      }
    },
  },
  created() {
    window.addEventListener('click', this.closeNotifications);
  },
  beforeDestroy() {
    window.removeEventListener('click', this.closeNotifications);
  },
};
</script>
