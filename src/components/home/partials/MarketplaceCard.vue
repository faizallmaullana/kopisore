<template>
  <a :href="link">
    <div :class="'marketplace'" :style="{ backgroundColor: color }">
      <img :src="require(`@/assets/icons/marketplace/${marketplace}`)" :alt="alt" />
    </div>
  </a>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  computed: {
    link() {
      return this.data.link;
    },
    color() {
      return this.data.color;
    },
    marketplace() {
      return this.data.marketplace;
    },
    alt() {
      return this.data.alt;
    }
  }
};
</script>