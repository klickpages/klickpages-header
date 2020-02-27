<template>
<div  href="#" class="dropdown drop">
  <div class="drop__text"></div>
  <a href="javascript:;" data-toggle="dropdown" class="dropdown-toggle">
    <span :class="`image image--${currentLocale}`"></span>
    {{currentLocale}}
  </a>
  <div class="drop__list dropdown-menu">
    <div class="drop__shadow">
      <a :href="portuguesePath" class="drop__item" :class="currentLocale === 'pt-BR' ?
        'active' : ''"
      >
        <span class="image image--pt-BR"></span>
        {{portuguese}}
        <span class="select">{{selected}}</span>
      </a>
      <a :href="englishPath" class="drop__item" :class="currentLocale === 'en' ? 'active' : ''">
        <span class="image image--en"></span>
        {{english}}
        <span class="select">{{selected}}</span>
      </a>
      <a :href="spanishPath" class="drop__item" :class="currentLocale === 'es' ? 'active' : ''">
        <span class="image image--es"></span>
        {{spanish}}
        <span class="select">{{selected}}</span>
      </a>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    currentLocale: {
      type: String,
      default: '',
    },
    portuguese: {
      type: String,
      default: '',
    },
    english: {
      type: String,
      default: '',
    },
    spanish: {
      type: String,
      default: '',
    },
    selected: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      portugueseLocale: 'pt-BR',
      englishLocale: 'en',
      spanishLocale: 'es',
    };
  },
  computed: {
    portuguesePath() {
      if (window.location.href.search(this.currentLocale) < 0) {
        return `/${this.portugueseLocale}`;
      }

      return window.location.href.replace(`/${this.currentLocale}`, `/${this.portugueseLocale}`);
    },
    englishPath() {
      if (window.location.href.search(this.currentLocale) < 0) {
        return `/${this.englishLocale}`;
      }

      return window.location.href.replace(`/${this.currentLocale}`, `/${this.englishLocale}`);
    },
    spanishPath() {
      if (window.location.href.search(this.currentLocale) < 0) {
        return `/${this.spanishLocale}`;
      }

      return window.location.href.replace(`/${this.currentLocale}`, `/${this.spanishLocale}`);
    },
  },
};
</script>
