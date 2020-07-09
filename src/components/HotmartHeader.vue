<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'HotmartHeader',
  props: {
    hotmartSrc: String,
  },
  mounted() {
    const hotmartHeader = document.createElement('script');
    hotmartHeader.src = this.hotmartSrc;
    document.body.append(hotmartHeader);
  },
};
</script>
