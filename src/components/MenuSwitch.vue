<template>
  <div class="menu--switch" v-if="topBarConfig.klicksend.enabled">
    <ul class="container no-padding">
      <li>
        <i class="icon-kp-kp"></i>
        Klickpages
      </li>
      <li class="myKlicksendMenu">
        <a :href="topBarConfig.klicksend.url" data-turbolinks="false">
          <i class="icon-kp-ks"></i>
          Klicksend
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  props: {
    klicksendUrl: String,
  },
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
};
</script>
