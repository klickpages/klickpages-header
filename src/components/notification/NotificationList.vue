<template>
  <ul class="drop__list drop__list--notifications dropdown-menu">
    <li
      class="drop__item drop__item--notifications"
      v-for="notification in notifications"
      :key="`${notification.id}`"
    >
      <span class="date">{{notification.created_at}}</span>
      <span class="title">{{notification.data[locale].title}}</span>
      <p>{{notification.data[locale].description}}</p>
      <a
        :href="notification.data[locale].link"
        target="_blank">{{notification.data[locale].linkText}}
      </a>
    </li>
  </ul>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { getDefinedLocale } from '../../i18n/index';

export default {
  computed: {
    ...mapGetters({
      notifications: 'notification/notifications',
    }),
    locale() {
      const definedLocale = getDefinedLocale();
      return definedLocale === 'pt-BR' ? 'ptBR' : definedLocale;
    },
  },
  methods: mapActions({
    getNotifications: 'notification/getNotifications',
  }),
  async mounted() {
    await this.getNotifications()
      .catch((error) => {
        console.error(error);
      });
  },
};
</script>
