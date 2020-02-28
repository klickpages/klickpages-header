<template>
<div  href="#" class="dropdown drop">
  <div class="drop__text"></div>
  <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">
    <span :class="`image image--${topBarConfig.locale.current_locale}`"></span>
    {{topBarConfig.locale.current_locale}}
  </a>
  <div class="drop__list dropdown-menu">
    <div class="drop__shadow">
      <a :href="portuguesePath" class="drop__item"
        :class="topBarConfig.locale.current_locale === 'pt-BR' ? 'active' : ''"
      >
        <span class="image image--pt-BR"></span>
        {{topBarConfig.locale.portuguese}}
        <span class="select">{{topBarConfig.locale.selected}}</span>
      </a>
      <a :href="englishPath" class="drop__item"
        :class="topBarConfig.locale.current_locale === 'en' ? 'active' : ''"
      >
        <span class="image image--en"></span>
        {{topBarConfig.locale.english}}
        <span class="select">{{topBarConfig.locale.selected}}</span>
      </a>
      <a :href="spanishPath" class="drop__item"
        :class="topBarConfig.locale.current_locale === 'es' ? 'active' : ''"
      >
        <span class="image image--es"></span>
        {{topBarConfig.locale.spanish}}
        <span class="select">{{topBarConfig.locale.selected}}</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  data() {
    return {
      portugueseLocale: 'pt-BR',
      englishLocale: 'en',
      spanishLocale: 'es',
    };
  },
  computed: {
    ...mapGetters({
      topBarConfig: 'topBar/config',
    }),
    portuguesePath() {
      return this.localePath(this.portugueseLocale);
    },
    englishPath() {
      return this.localePath(this.englishLocale);
    },
    spanishPath() {
      return this.localePath(this.spanishLocale);
    },
  },
  methods: {
    localePath(locale) {
      if (window.location.href.search(`/${this.topBarConfig.locale.current_locale}`) < 0) {
        return `/${locale}`;
      }

      return window.location.href.replace(`/${this.topBarConfig.locale.current_locale}`,
        `/${locale}`);
    },
  },
};
</script>
