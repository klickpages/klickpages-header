<template>
<div class="navbar-header">
  <a :href="topBarConfig.home.url">
    <img class="img-responsive" src="../assets/images/logo-kp-white.png" />
  </a>

  <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
    data-target="#kp-nav-header" aria-expanded="false"
  >
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
    <span class="icon-bar"></span>
  </button>
</div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
};
</script>
