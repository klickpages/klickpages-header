<template>
  <div>
  </div>
</template>

<script>
import TopBarRequest from '@/services/api/klickart/request/topBar';

export default {
  name: 'KlickpagesHeader',
  props: {
    klickartUrl: String,
  },
  mounted() {
    const topBarRequest = new TopBarRequest({
      klickartUrl: this.klickartUrl,
    });

    topBarRequest.get().then((response) => {
      const html = response.data;
      this.$el.innerHTML = html;
    });
  },
};
</script>
