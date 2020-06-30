<template>
  <div>
  </div>
</template>

<script>

export default {
  name: 'HotmartHeader',
  props: {
    hotmartProURL: String,
  },
  mounted() {
    const hotmartHeader = document.createElement('script');
    hotmartHeader.src = this.hotmartProURL;
    document.body.append(hotmartHeader);
  },
};
</script>
