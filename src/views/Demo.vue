<template>
  <div :style="{ 'max-height': windowHeight - 138 + 'px', height: '100%' }">
    <Navbar class="nav-sticky" />
    <div style="height: 70px"></div>
    <Optimize />
    <router-view :style="{ height: '100%' }"></router-view>
  </div>
</template>

<script>
import Navbar from '@/components/navbar';
import Optimize from '@/components/optimize';
export default {
  components: {
    Navbar,
    Optimize,
  },
  data() {
    return {
      windowHeight: 0,
    };
  },
  created() {
    this.windowHeight = this.storeHeight;
  },
  computed: {
    storeHeight() {
      return this.$store.getters.innerHeight;
    },
  },
  watch: {
    storeHeight() {
      this.windowHeight = this.$store.getters.innerHeight;
    },
  },
};
</script>

<style></style>
