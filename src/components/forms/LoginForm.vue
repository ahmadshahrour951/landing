<template>
  <ValidationObserver ref="observer" v-slot="{ passes }">
    <b-form @submit.prevent="passes(handleSubmit)" class="login-form mt-4">
      <TextInputWithValidation
        rules="required|email"
        type="email"
        label="Email address:"
        name="Email"
        v-model="innerValue.value.email"
        class="text-left"
      />

      <TextInputWithValidation
        rules="required"
        name="Password"
        vid="password"
        type="password"
        label="Password:"
        v-model="innerValue.value.password"
        class="text-left w-100"
      />

      <b-button
        class="float-right text-muted font-size-15 p-0"
        variant="link"
        @click="handleForget"
      >
        Forgot Password?
      </b-button>

      <!-- <SelectWithValidation
        rules="required"
        name="Portal"
        vid="portal"
        label="Portal:"
        v-model="form.portalId"
        :options="portal_options"
        class="text-left"
      /> -->

      <div class="text-center mt-5">
        <ButtonWithSpinner
          :loading="innerValue.loading"
          text="Login"
          class="pt-3"
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
import { ValidationObserver } from 'vee-validate';

import config from '@/config';
import './vee-validate';
import TextInputWithValidation from './inputs/TextInputWithValidation';
import { ArrowRightCircleIcon } from 'vue-feather-icons';
// import SelectWithValidation from './select/SelectWithValidation';
import ButtonWithSpinner from './buttons/ButtonWithSpinner';

export default {
  name: 'LoginForm',
  components: {
    ValidationObserver,
    ArrowRightCircleIcon,
    TextInputWithValidation,
    // SelectWithValidation,
    ButtonWithSpinner,
  },
  props: {
    handleSubmit: {
      type: Function,
    },
    handleForget: {
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
          password: '',
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
