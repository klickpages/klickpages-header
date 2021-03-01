<template>
<div class="dropdown menu-user">
  <a href="javascript:;" class="kp-user dropdown-toggle clearfix" data-toggle="dropdown">
    <span class="btn-user">{{topBarConfig.user.name[0]}}</span>
    <span class="user__text">{{topBarConfig.user.name}}</span>
    <span class="btn">
      <i class="fa fa-angle-down"></i>
    </span>
  </a>
  <ul class="dropdown-menu">
    <li>
      <a class="option" :href="topBarConfig.profile.url">
        <profile-icon />
        {{topBarConfig.profile.title}}
      </a>
    </li>
    <li>
      <a class="option" :href="topBarConfig.mailservice.url">
        <mail-service-icon />
        {{topBarConfig.mailservice.title}}
      </a>
    </li>
    <li>
      <a class="option" :href="topBarConfig.domain.url">
        <domain-icon />
        {{topBarConfig.domain.title}}
      </a>
    </li>
    <li>
      <a class="option" :href="topBarConfig.logout.url">
        <logout-icon />
        {{topBarConfig.logout.title}}
      </a>
    </li>
  </ul>
</div>
</template>

<script>
import { mapGetters } from 'vuex';
import DomainIcon from './icons/Domain.vue';
import MailServiceIcon from './icons/MailService.vue';
import ProfileIcon from './icons/Profile.vue';
import LogoutIcon from './icons/Logout.vue';
export default {
  computed: mapGetters({
    topBarConfig: 'topBar/config',
  }),
  components: {
    DomainIcon,
    ProfileIcon,
    MailServiceIcon,
    LogoutIcon,
  },
};
</script>
