<template>
  <li class="drop__item drop__item--notifications">
    <span class="date">{{notificationDate}}</span>
    <span class="title">{{notification.data[locale].title}}</span>
    <p>{{notification.data[locale].description}}</p>
    <a
      :href="notification.data[locale].link"
      target="_blank">{{notification.data[locale].linkText}}
    </a>
  </li>
</template>

<script>
import { getDefinedLocale } from '../../i18n/index';

export default {
  props: {
    notification: Object,
  },
  computed: {
    locale() {
      const definedLocale = getDefinedLocale();
      return definedLocale === 'pt-BR' ? 'ptBR' : definedLocale;
    },
    notificationDate() {
      const date = new Date(this.notification.created_at);
      return date.toLocaleString(getDefinedLocale(), { timeStyle: 'short', dateStyle: 'full' });
    },
  },
};
</script>
