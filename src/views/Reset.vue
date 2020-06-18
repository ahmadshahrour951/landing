<template>
  <div class="vh-100" style="background-color: #2b7a78 ">
    <div class="container h-100">
      <b-row class="h-100">
        <b-card
          class="modal-body shadow col-9 col-sm-9 col-md-7 col-lg-5 col-xl-4 mx-auto my-auto text-center"
          style="min-width: 340px;"
        >
          <div class="text-center">
            <h3 class="title">Reset password</h3>
            <div class="position-relative text-center mt-2">
              <span class="login-border"></span>
              <div class="social-login text-muted font-size-17"></div>
            </div>
          </div>

          <div class="login-form mt-4">
            <ResetPasswordForm />
          </div>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
import ResetPasswordForm from '@/components/forms/ResetPasswordForm';
export default {
  components: {
    ResetPasswordForm,
  },
};
</script>

<style></style>
