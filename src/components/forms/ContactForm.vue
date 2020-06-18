<template>
  <ValidationObserver ref="observer" v-slot="{ passes }">
    <b-form
      name="contact-form"
      id="contact-form"
      @submit.prevent="passes(handleSubmit)"
    >
      <div class="row">
        <div class="col-md-6">
          <TextInputWithValidation
            rules="required"
            vid="name"
            name="Name"
            type="text"
            label="Name*"
            placeholder="Your name..."
            v-model="innerValue.value.name"
          />
        </div>
        <div class="col-md-6">
          <TextInputWithValidation
            rules="required|email"
            vid="email"
            type="email"
            label="Email address*"
            name="Email"
            v-model="innerValue.value.email"
            placeholder="Your email..."
          />
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <TextAreaWithValidation
            rules="required"
            vid="comments"
            label="Message*"
            name="Message"
            v-model="innerValue.value.message"
            placeholder="Your message..."
            rows="4"
            id="comments"
          />
        </div>
      </div>
      <div class="row">
        <div class="col-sm-12">
          <ButtonWithSpinner text="Send Message" :loading="innerValue.loading">
            <send-icon
              class="icon-size-15 ml-2 icon"
              v-show="!innerValue.loading"
            ></send-icon>
          </ButtonWithSpinner>
          <!-- <button type="button" class="btn btn-primary">
            Send Message
            <send-icon class="icon-size-15 ml-2 icon"></send-icon>
          </button> -->
          <div id="simple-msg"></div>
        </div>
      </div>
    </b-form>
  </ValidationObserver>
</template>

<script>
import { ValidationObserver } from 'vee-validate';
import './vee-validate';

import TextInputWithValidation from './inputs/TextInputWithValidation';
import TextAreaWithValidation from './inputs/TextAreaWithValidation';
import { SendIcon } from 'vue-feather-icons';
import ButtonWithSpinner from './buttons/ButtonWithSpinner';

export default {
  components: {
    ValidationObserver,
    TextInputWithValidation,
    TextAreaWithValidation,
    ButtonWithSpinner,
    SendIcon,
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
          name: '',
          email: '',
          message: '',
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
