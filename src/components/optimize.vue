<template>
  <div
    class="border p-2 mx-auto"
    style="border-top-width: 2px !important; border-bottom-width: 2px !important; border-right-width: 0px !important;  border-left-width: 0px !important; text-align: center;"
    v-show="$route.name === 'Map' || $route.name === 'Table'"
  >
    <b-form-checkbox
      switch
      size="md"
      v-model="isOptVal"
      button-variant="primary"
      >Optimize</b-form-checkbox
    >
    <b-form-radio-group
      v-show="$store.getters.innerWidth > 500"
      v-model="toggleVal"
      :options="radio.options"
    >
    </b-form-radio-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      radio: {
        options: [
          { text: 'Map', value: 'map' },
          { text: 'Table', value: 'table', disabled: true },
        ],
      },
    };
  },
  computed: {
    isOptVal: {
      get() {
        return this.$store.getters.isOpt;
      },
      set(val) {
        this.$store.commit('updateIsOpt', val);
        this.radio.options[1].disabled = !val;
      },
    },
    toggleVal: {
      get() {
        return this.$store.getters.formatToggle;
      },
      set(val) {
        return this.$store.commit('updateFormatToggle', val);
      },
    },
  },
};
</script>

<style></style>
