<template>
  <vue-custom-scrollbar
    class="drop__list drop__list--notifications dropdown-menu"
    :tagname="'ul'"
    @ps-y-reach-end="onInfiniteScroll"
  >
    <notification-item
      v-for="notification in notifications.items"
      :key="`${notification.id}`"
      :notification="notification"
    />
    <notification-error
      v-if="showNotificationError"
      @refreshNotifications="refreshNotifications"
      :errorMessage="errorMessage"
    />
    <loader v-if="isLoading" />
  </vue-custom-scrollbar>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VueCustomScrollbar from 'vue-custom-scrollbar';

import NotificationItem from './NotificationItem.vue';
import NotificationError from './NotificationError.vue';
import Loader from './Loader.vue';

const notificationStatus = {
  success: 'success',
  empty: 'empty',
  error: 'error',
};

const ITEMS_PER_PAGE = 5;

export default {
  props: {
    notificationsOpen: Boolean,
  },
  data() {
    return {
      currentNotificationsStatus: notificationStatus.empty,
      currentPage: 1,
      isLoading: false,
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
      if (this.isLoading) {
        return false;
      }

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
    notificationsTotalPage() {
      return Math.ceil((this.notifications.totalItems / ITEMS_PER_PAGE));
    },
    shouldLoadMoreNotifications() {
      return this.currentPage < this.notificationsTotalPage;
    },
  },
  components: {
    NotificationItem,
    NotificationError,
    VueCustomScrollbar,
    Loader,
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
        this.isLoading = true;

        await this.getNotifications(this.currentPage);
        this.currentNotificationsStatus = this.emptyNotifications
          ? notificationStatus.empty
          : notificationStatus.success;
      } catch (error) {
        console.error(error);
        this.currentNotificationsStatus = notificationStatus.error;
      } finally {
        this.isLoading = false;
      }
    },
    async sendReadNotification() {
      await this.readNotifications(this.notifications.items);
      this.$emit('notificationsReaded');
    },
    async onInfiniteScroll() {
      if (this.shouldLoadMoreNotifications && !this.isLoading) {
        this.currentPage += 1;
        await this.refreshNotifications();

        if (this.notificationsOpen) {
          this.sendReadNotification();
        }
      }
    },
  },
  async mounted() {
    await this.refreshNotifications();
  },
};
</script>
