<template>
  <li class="drop__item drop__item--notifications">
    <div class="error-container">
      <span class="error-message">{{errorMessage}}</span>
      <a class="notifications-refresh-btn" href="javascript:" @click="refreshNotifications">
        <i class="fa fa-refresh" />
      </a>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    errorMessage: String,
  },
  methods: {
    refreshNotifications(event) {
      event.stopPropagation();
      this.$emit('refreshNotifications');
    },
  },
};
</script>
