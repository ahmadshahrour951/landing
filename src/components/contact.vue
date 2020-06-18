<template>
  <!-- Contact Us Start -->
  <section class="section bg-light" id="contact">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-6">
          <div class="text-center mb-5">
            <h3 class="title mb-3">Contact Us</h3>
            <p class="text-muted font-size-15">
              Whether you'd like to facilitate or be part of our services,
              please do fill in the form below. We also like the friendly hellos
              too!
            </p>
          </div>
        </div>
      </div>
      <div class="row align-items-center">
        <div class="col-lg-7">
          <div class="custom-form mb-5 mb-lg-0">
            <div id="message"></div>
            <ContactForm v-model="contactForm" :handleSubmit="handleSubmit" />
          </div>
        </div>
        <div class="col-lg-5">
          <div class="contact-detail text-muted ml-lg-5">
            <p class>
              <mail-icon class="icon-xs icon mr-1"></mail-icon>:
              <span>covidoptimize@gmail.com</span>
            </p>
            <p class>
              <LinkIcon class="icon-xs icon mr-1"></LinkIcon>:
              <span>www.covidoptimize.org</span>
            </p>
            <p class>
              <PhoneCallIcon class="icon-xs icon mr-1"></PhoneCallIcon>:
              <span>(+971) 55 626 9196</span>
            </p>
            <p class>
              <ClockIcon class="icon-xs icon mr-1"></ClockIcon>:
              <span>9:00 AM - 6:00 PM</span>
            </p>
            <p class>
              <MapPinIcon class="icon-xs icon mr-1"></MapPinIcon>:
              <span>Dubai, United Arab Emirates</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <!-- Contact Us End -->
</template>

<script>
import {
  SendIcon,
  MailIcon,
  LinkIcon,
  PhoneCallIcon,
  ClockIcon,
  MapPinIcon,
} from 'vue-feather-icons';
import ContactForm from './forms/ContactForm';
export default {
  components: {
    ContactForm,
    SendIcon,
    MailIcon,
    LinkIcon,
    PhoneCallIcon,
    ClockIcon,
    MapPinIcon,
  },
  data() {
    return {
      contactForm: {
        value: {
          email: null,
          name: null,
          message: null,
        },
        loading: false,
        message: '',
      },
    };
  },
  methods: {
    async handleSubmit() {
      this.contactForm.loading = true;

      try {
        if (this.contactForm.value.email) {
          await this.$api.post('public/contact-us', this.contactForm.value);
          this.contactForm.loading = false;
          this.resetForm();
          // this.contactForm.isSuccessful = true;
          // this.contactForm.message =
          //   'Please check your email to reset your password';
        }
      } catch (error) {
        this.contactForm.loading = false;
        this.contactForm.message =
          error.message ||
          error.response.data.message ||
          (error.response && error.response.data);
      }
    },
    resetForm() {
      this.contactForm = {
        value: {
          email: null,
          name: null,
          message: null,
        },
        loading: false,
        message: '',
      };
    },
  },
};
</script>
