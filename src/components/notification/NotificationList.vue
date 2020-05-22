<template>
  <ul class="drop__list drop__list--notifications dropdown-menu">
    <notification-item
      v-for="notification in notifications"
      :key="`${notification.id}`"
      :notification="notification"
    />
    <notification-error
      v-if="showNotificationError"
      @refreshNotifications="refreshNotifications"
      :errorMessage="errorMessage"
    />
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import NotificationItem from './NotificationItem.vue';
import NotificationError from './NotificationError.vue';

const notificationStatus = {
  success: 'success',
  empty: 'empty',
  error: 'error',
};

export default {
  props: {
    notificationsOpen: Boolean,
  },
  data() {
    return {
      currentNotificationsStatus: notificationStatus.empty,
    };
  },
  computed: {
    ...mapGetters({
      notifications: 'notification/notifications',
    }),
    emptyNotifications() {
      return this.notifications.length === 0;
    },
    showNotificationError() {
      return this.currentNotificationsStatus === notificationStatus.empty
        || this.currentNotificationsStatus === notificationStatus.error;
    },
    errorMessage() {
      if (this.currentNotificationsStatus === notificationStatus.empty) {
        return this.$t('notifications.noNotifications');
      }

      if (this.currentNotificationsStatus === notificationStatus.error) {
        return this.$t('notifications.unableLoad');
      }

      return '';
    },
  },
  components: {
    NotificationItem,
    NotificationError,
  },
  watch: {
    async notificationsOpen(newValue) {
      if (!newValue) {
        return;
      }

      await this.sendReadNotification();
    },
  },
  methods: {
    ...mapActions({
      getNotifications: 'notification/getNotifications',
      readNotifications: 'notification/readNotifications',
    }),
    async refreshNotifications() {
      try {
        await this.getNotifications();

        this.currentNotificationsStatus = this.emptyNotifications
          ? notificationStatus.empty
          : notificationStatus.success;
      } catch (error) {
        console.error(error);
        this.currentNotificationsStatus = notificationStatus.error;
      }
    },
    async sendReadNotification() {
      await this.readNotifications(this.notifications);
    },
  },
  async mounted() {
    await this.refreshNotifications();
  },
};
</script>
