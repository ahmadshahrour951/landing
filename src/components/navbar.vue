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
      <div
        class="collapse navbar-collapse"
        id="navbarCollapse"
        style="margin-right: 160px;"
      >
        <ul class="navbar-nav mx-auto navbar-center" id="mySidenav">
          <li class="nav-item">
            <b-link
              href="javascript: void(0);"
              :to="{ name: 'Main' }"
              class="nav-link"
              :active="$route.name === 'Main'"
              >Home</b-link
            >
          </li>
          <li class="nav-item">
            <b-link
              href="javascript: void(0);"
              :to="{ name: 'About' }"
              class="nav-link"
              :active="$route.name === 'About'"
              >About</b-link
            >
          </li>
          <li class="nav-item">
            <b-link
              href="javascript: void(0);"
              :to="{ name: 'Demo' }"
              class="nav-link"
              :active="$route.path.startsWith('/demo')"
              >Demo</b-link
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
        </ul>
      </div>
    </div>
    <Login />
  </nav>
  <!-- Navbar End -->
</template>

<script>
import Login from '@/modals/login';

export default {
  props: {
    navbarcolor: {
      type: Boolean,
      default: false,
    },
  },
  components: {
    Login,
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
