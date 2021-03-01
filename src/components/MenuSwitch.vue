<template>
 <div class="menu--switch__wrapper">
    <div class="container no-padding">
      <div class="menu--switch">
        <ul class="container no-padding" v-if="topBarConfig.klicksend.enabled && !topBarConfig.user.ucode">
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
        <locale-dropdown />
      </div>
    </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';
import LocaleDropdown from './LocaleDropdown.vue';

export default {
  name: 'MenuSwitch',
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
  components: {
    LocaleDropdown,
  },
};
</script>
