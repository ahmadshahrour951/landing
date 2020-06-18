<template>
  <b-form-group>
    <b-button :disabled="loading" type="submit" variant="primary">
      <span>{{ text }}</span>
      <b-spinner
        v-show="loading"
        class="ml-1"
        small
        variant="white"
      ></b-spinner>

      <slot></slot>

      <!-- <Icon v-show="!loading" class="icon-size-15 icon ml-1"></Icon> -->
    </b-button>
  </b-form-group>
</template>

<script>
// import { ArrowRightCircleIcon } from 'vue-feather-icons';
export default {
  props: {
    loading: {
      type: Boolean,
      default: false,
    },
    text: {
      type: String,
    },
  },
};
</script>

<style></style>
