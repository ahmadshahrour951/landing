<template>
  <ValidationObserver ref="observer" v-slot="{ passes }">
    <b-form
      @submit.prevent="passes(handleSubmit)"
      class="mx-auto mt-3 mb-3"
      style="height: inherit;"
    >
      <TextInputWithValidation
        rules="required|password"
        name="Password"
        vid="password"
        type="password"
        label="Password:"
        v-model="form.password"
        class="text-left"
      />
      <TextInputWithValidation
        :rules="`required|confirm_password:${form.password}`"
        name="ConfirmPassword"
        vid="confirm_password"
        type="password"
        label="Confirm Password:"
        v-model="confirmPassword"
        class="text-left"
      />
      <ButtonWithSpinner
        :loading="loading"
        text="Reset Password"
        class="pt-3"
      />
    </b-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import TextInputWithValidation from './inputs/TextInputWithValidation';
import ButtonWithSpinner from './buttons/ButtonWithSpinner';

import './vee-validate';

export default {
  name: 'ResetPasswordForm',
  components: {
    ValidationObserver,
    TextInputWithValidation,
    ButtonWithSpinner,
  },
  created() {
    this.fetchData();
  },
  data() {
    return {
      form: {
        userId: null,
        password: '',
        passwordToken: null,
      },
      confirmPassword: null,
      loading: false,
      failedFetch: false,
      message: '',
    };
  },
  methods: {
    async fetchData() {
      try {
        this.loading = true;
        const res = await this.$api.get(
          `auth/reset/${this.$route.params.passwordToken}`
        );
        this.form.userId = res.data.data.userId;
        this.form.passwordToken = this.$route.params.passwordToken;
        this.loading = false;
      } catch (error) {
        this.loading = false;
        this.failedFetch = true;
      }
    },
    async handleSubmit() {
      this.loading = true;

      try {
        if (
          this.form.password &&
          this.confirmPassword &&
          this.form.userId &&
          this.form.password === this.confirmPassword
        ) {
          await this.$api.post('auth/new-password', this.form);
          this.loading = false;
          this.$router.push({ name: 'Main' });
        } else {
          throw Error('There seems to be an issue');
        }
      } catch (error) {
        this.loading = false;
        this.message =
          error.message ||
          error.response.data.message ||
          (error.response && error.response.data);
      }
    },
  },
};
</script>

<style></style>
