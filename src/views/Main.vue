<script>
import { EditIcon, HeadphonesIcon, TruckIcon } from 'vue-feather-icons';

import Navbar from '@/components/navbar';
import Service from '@/components/services';
import Features from '@/components/features';
import Contact from '@/components/contact';
import Footer from '@/components/footer';

/**
 * Index-5
 */
export default {
  components: {
    EditIcon,
    HeadphonesIcon,
    TruckIcon,
    Navbar,
    Service,
    Features,
    Contact,
    Footer,
  },
};
</script>

<template>
  <div>
    <Navbar />
    <div v-scroll-spy>
      <!-- Hero Start -->
      <section
        class="hero-5-bg d-flex vh-100 mx-auto flex-column align-items-center justify-content-center position-relative"
        id="home"
        :style="{
          'background-image':
            'url(' + require('@/assets/images/hero-5-bg-img.jpg') + ')',
        }"
      >
        <div class="bg-overlay"></div>
        <div class="bg-hero-overlay"></div>
        <div class="container">
          <div class="row align-items-center">
            <div class="col-xl-6">
              <div class="hero-content">
                <h1
                  class="text-dark hero-5-title text-shadow line-height-1_4 mb-4"
                >
                  We Help Relief Hospitals
                </h1>
                <p class="text-muted text-justify mb-4">
                  The idea is simple, we want to leverage current hospital data!
                  if we know the state of every hospital, then we can make
                  better decisions to direct patients to hospitals that are able
                  to treat them.
                </p>
                <p class="text-muted font-size-15">
                  <edit-icon class="icon-xs icon mr-1"></edit-icon>
                  Hospitals input key inventory data.
                </p>
                <p class="text-muted font-size-15">
                  <headphones-icon class="icon-xs icon mr-1"></headphones-icon>
                  The Emergency Medical Center recieve the inputs.
                </p>
                <p class="text-muted font-size-15">
                  <truck-icon class="icon-xs icon mr-1"></truck-icon>
                  Ambulance are directed to the least overwhelmed hospital
                </p>
                <a href="javascript: void(0);" class="btn btn-primary mt-4"
                  >Get Started</a
                >
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Hero End -->
      <Service />
      <Features />
      <Contact />
      <Footer />
    </div>
  </div>
</template>
