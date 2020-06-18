<template>
  <div id="app" :style="{ height: windowHeight + 'px' }">
    <!-- Loader -->
    <div id="preloader" v-if="loading">
      <div id="status">
        <b-img
          class="spinner"
          :src="require('./assets/images/logo-light.png')"
        ></b-img>
      </div>
    </div>
    <transition name="slide-fade" mode="out-in" appear>
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: true,
      windowHeight: 0,
    };
  },
  created() {
    setTimeout(() => (this.loading = false), 600);
    window.addEventListener('resize', this.onResize);
    this.onResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    onResize() {
      this.$store.commit('updateWindowDim', {
        innerHeight: window.innerHeight,
        innerWidth: window.innerWidth,
      });
    },
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

<style>
.slide-fade-enter-active {
  transition: all 0.8s ease;
}
.slide-fade-leave-active {
  transition: all 0.5s ease;
}
.slide-fade-enter,
.slide-fade-leave-to {
  opacity: 0;
}

.slide-fade-enter-to,
.slide-fade-leave {
  opacity: 1;
}
</style>
