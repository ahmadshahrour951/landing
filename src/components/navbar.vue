<script>
import {
  FacebookIcon,
  TwitterIcon,
  InstagramIcon,
  LinkedinIcon,
  ArrowRightCircleIcon,
} from 'vue-feather-icons';

export default {
  props: {
    navbarcolor: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    FacebookIcon,
    TwitterIcon,
    InstagramIcon,
    LinkedinIcon,
    ArrowRightCircleIcon,
  },
  mounted: () => {
    window.onscroll = function() {
      onwindowScroll();
    };
    var navbar = document.getElementById('navbar');
    function onwindowScroll() {
      if (
        document.body.scrollTop > 50 ||
        document.documentElement.scrollTop > 50
      ) {
        navbar.classList.add('nav-sticky');
      } else {
        navbar.classList.remove('nav-sticky');
      }
    }
  },
  methods: {
    /**
     * Toggle menu
     */
    toggleMenu() {
      document.getElementById('navbarCollapse').classList.toggle('show');
    },
  },
};
</script>

<template>
  <!--Navbar Start-->
  <nav
    class="navbar navbar-expand-lg fixed-top navbar-custom sticky sticky-dark"
    id="navbar"
    :class="{ 'navbar-light': navbarcolor === true }"
  >
    <div class="container">
      <!-- LOGO -->
      <a class="navbar-brand logo" href="/">
        <img
          src="@/assets/images/logo-dark.png"
          alt
          class="logo-dark mr-2"
          height="24"
        />
        <img
          src="@/assets/images/logo-light.png"
          alt
          class="logo-light mr-2"
          height="24"
        />
        <span class="bold text-primary"><b>Covid Optimize</b></span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        @click="toggleMenu()"
        aria-label="Toggle navigation"
      >
        <i class="mdi mdi-menu"></i>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul
          class="navbar-nav mx-auto navbar-center"
          id="mySidenav"
          v-scroll-spy-active
        >
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="'#home'"
              class="nav-link"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#features', offset: -2 }"
              class="nav-link"
              >Features</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              v-scroll-to="{ el: '#contact', offset: -50 }"
              class="nav-link"
              >Contact Us</a
            >
          </li>
        </ul>
        <ul class="navbar-nav navbar-center">
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              class="nav-link"
              v-b-modal.login-modal
              >Log in</a
            >
          </li>
          <li class="nav-item">
            <a
              href="javascript: void(0);"
              class="nav-link"
              v-scroll-to="{ el: '#contact', offset: -50 }"
              >Register</a
            >
          </li>
        </ul>
      </div>
    </div>
    <b-modal id="login-modal" hide-header hide-footer centered>
      <div class="text-center">
        <h3 class="title mb-4">Login</h3>
        <div class="position-relative text-center mt-4">
          <span class="login-border"></span>
          <div class="social-login text-muted font-size-17"></div>
        </div>
        <!-- <h4 class="text-uppercase text-primary">
          <b>Login</b>
        </h4> -->
      </div>
      <div class="login-form mt-4">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
            />
          </div>
          <!-- <a
            href="javascript: void(0);"
            class="float-right text-muted font-size-15"
            >Forgot Password.?</a
          > -->
          <!-- <div class="custom-control custom-checkbox">
            <input
              type="checkbox"
              class="custom-control-input"
              id="customCheck1"
            />
            <label class="custom-control-label font-size-15" for="customCheck1"
              >Remember Me</label
            >
          </div> -->
          <div class="text-center mt-4">
            <button type="submit" class="btn btn-primary">
              Login
              <arrow-right-circle-icon
                class="icon-size-15 icon ml-1"
              ></arrow-right-circle-icon>
            </button>
          </div>
        </form>
      </div>
    </b-modal>
  </nav>
  <!-- Navbar End -->
</template>
