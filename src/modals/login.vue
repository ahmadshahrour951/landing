<template>
  <b-modal
    id="login-modal"
    hide-header
    hide-footer
    centered
    @hidden="resetData"
  >
    <div class="text-center">
      <h3 class="title">{{ modalTitle }}</h3>
      <div class="position-relative text-center mt-2">
        <span class="login-border"></span>
        <div class="social-login text-muted font-size-17"></div>
      </div>
    </div>

    <div class="login-form mt-4">
      <LoginForm
        :handleSubmit="handleLogin"
        :handleForget="toggleReset"
        v-model="loginForm"
        v-show="loginVisible"
      />
      <ResetEmailForm
        :handleSubmit="handleReset"
        v-model="resetForm"
        v-show="!loginVisible"
      />
    </div>
    <b-button
      v-show="!loginVisible"
      class="text-left text-muted font-size-15 p-0"
      @click="toggleLogin"
      variant="link"
      ><chevron-left-icon class="icon-xs icon"> </chevron-left-icon
      >Back</b-button
    >
  </b-modal>
</template>

<script>
import config from '@/config';
import LoginForm from '@/components/forms/LoginForm.vue';
import ResetEmailForm from '@/components/forms/ResetEmailForm.vue';
import { ChevronLeftIcon } from 'vue-feather-icons';
import axios from 'axios';

export default {
  components: {
    LoginForm,
    ResetEmailForm,
    ChevronLeftIcon,
  },
  data() {
    return {
      modalTitle: 'Log in',
      loginVisible: true,
      loginForm: {
        value: {
          email: '',
          password: '',
        },
        loading: false,
        isSuccessful: false,
        message: '',
      },
      resetForm: {
        value: {
          email: null,
        },
        loading: false,
        isSuccessful: false,
        message: '',
      },
    };
  },
  methods: {
    toggleReset() {
      this.loginVisible = false;
      this.modalTitle = 'Reset Password';
    },
    toggleLogin() {
      this.loginVisible = true;
      this.modalTitle = 'Log in';
    },
    async handleLogin() {
      this.loginForm.loading = true;

      try {
        if (this.loginForm.value.email && this.loginForm.value.password) {
          const res = await this.$api.post('auth/login', this.loginForm.value);
          const token = res.data.data.token;
          window.location = config.HOSPITAL_URL + 'callback/' + token;
        }
        return false;
      } catch (error) {
        this.loginForm.loading = false;
        console.log(error);
        this.loginForm.message =
          error.response.data.message ||
          error.response.data ||
          error.response ||
          error.message ||
          error.toString();
      }
    },
    async handleReset() {
      this.resetForm.loading = true;

      try {
        if (this.resetForm.value.email) {
          await this.$api.post('auth/reset', {
            email: this.resetForm.value.email,
          });
          this.resetForm.loading = false;
          this.resetForm.isSuccessful = true;
          this.resetForm.message =
            'Please check your email to reset your password';
        }
      } catch (error) {
        this.resetForm.loading = false;
        this.resetForm.message =
          error.message ||
          error.response.data.message ||
          (error.response && error.response.data);
      }
    },

    resetData() {
      this.modalTitle = 'Log in';
      this.loginVisible = true;
      this.loginForm = {
        value: {
          email: '',
          password: '',
        },
        loading: false,
        isSuccessful: false,
        message: '',
      };
      this.resetForm = {
        value: {
          email: null,
        },
        loading: false,
        isSuccessful: false,
        message: '',
      };
    },
  },
};
</script>
