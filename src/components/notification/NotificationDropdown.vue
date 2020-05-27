<template>
  <div
    class='nav-notifications'
    :class="{open: notificationsOpen}"
    style="display:block"
    @click="toggleNotifications()"
  >
    <div class="new-notifications-signal" :class="newNotifications ? 'active' : ''"></div>
    <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">
      <notification-icon />
    </a>
    <notification-list
      :notificationsOpen="notificationsOpen"
      @notificationsReaded="readNotifications"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import NotificationIcon from '../icons/Notification.vue';
import NotificationList from './NotificationList.vue';

export default {
  data() {
    return {
      notificationsOpen: false,
      notificationsReaded: false,
    };
  },
  computed: {
    ...mapGetters({
      notifications: 'notification/notifications',
    }),
    newNotifications() {
      if (this.notificationsReaded) {
        return false;
      }

      return !!this.notifications.items.find((notification) => notification.read === false);
    },
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
    readNotifications() {
      this.notificationsReaded = true;
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
