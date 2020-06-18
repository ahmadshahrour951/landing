<template>
  <ValidationObserver ref="observer" v-slot="{ passes }">
    <b-form
      @submit.prevent="passes(handleSubmit)"
      class="mx-auto mt-3 mb-3"
      style="height: inherit;"
    >
      <TextInputWithValidation
        rules="required|email"
        type="email"
        label="Email address"
        name="Email"
        v-model="innerValue.value.email"
        class="text-left"
      />
      <div class="text-center mt-4">
        <ButtonWithSpinner
          :loading="innerValue.loading"
          text="Send reset link"
          class="pt-3s"
        >
          <arrow-right-circle-icon
            v-show="!innerValue.loading"
            class="icon-size-15 icon ml-1"
          ></arrow-right-circle-icon>
        </ButtonWithSpinner>
      </div>

      <b-form-group>
        <div
          v-if="innerValue.message && !innerValue.isSuccessful"
          class="alert alert-danger"
          role="alert"
        >
          {{ innerValue.message }}
        </div>
        <div
          v-else-if="innerValue.message && innerValue.isSuccessful"
          class="alert alert-success"
          role="alert"
        >
          {{ innerValue.message }}
        </div>
      </b-form-group>
    </b-form>
  </ValidationObserver>
</template>

<script>
import config from '@/config';
import './vee-validate';
import { ValidationObserver } from 'vee-validate';
import TextInputWithValidation from './inputs/TextInputWithValidation';
import ButtonWithSpinner from './buttons/ButtonWithSpinner';
import { ArrowRightCircleIcon } from 'vue-feather-icons';

export default {
  name: 'EmailPasswordForm',
  components: {
    ValidationObserver,
    TextInputWithValidation,
    ButtonWithSpinner,
    ArrowRightCircleIcon,
  },
  props: {
    handleSubmit: {
      type: Function,
    },
    value: {
      type: null,
    },
  },
  created() {
    if (this.value) {
      this.innerValue = this.value;
    }
  },
  data() {
    return {
      innerValue: {
        value: {
          email: '',
        },
        loading: false,
        isSuccessful: false,
        message: '',
      },
    };
  },
  watch: {
    innerValue: {
      handler: function(newVal) {
        this.$emit('input', newVal);
      },
      deep: true,
    },
    value: {
      handler: function(newVal) {
        this.innerValue = newVal;
      },
      deep: true,
    },
  },
};
</script>

<style></style>
