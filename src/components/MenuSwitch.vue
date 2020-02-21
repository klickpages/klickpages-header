<template>
  <div class="menu--switch">
    <ul class="container no-padding">
      <li>
        <i class="icon-kp-kp"></i>
        Klickpages
      </li>
      <li class="myKlicksendMenu">
        <a :href="klicksendUrl" data-turbolinks="false">
          <i class="icon-kp-ks"></i>
          Klicksend
        </a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    klicksendUrl: String,
  },
};
</script>
