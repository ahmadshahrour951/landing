<script>
import {
  LayoutIcon,
  LifeBuoyIcon,
  ServerIcon,
  RssIcon,
} from 'vue-feather-icons';
export default {
  components: { LayoutIcon, LifeBuoyIcon, ServerIcon, RssIcon },
};
</script>

<template>
  <div>
    <!-- Features Start -->
    <section
      class="section bg-light feather-bg-img"
      :style="{
        'background-image':
          'url(' + require('@/assets/images/features-bg-img.png') + ')',
      }"
      id="features"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-6">
            <div class="text-center mb-5">
              <h3 class="title mb-3">Features</h3>
              <p class="text-muted font-size-15">
                There are two dashboard available to meet our stakeholders'
                needs.
              </p>
            </div>
          </div>
        </div>

        <div class="row align-items-center">
          <div class="col-lg-6">
            <div class="mb-4 mb-lg-0">
              <img
                src="@/assets/images/form.png"
                alt
                class="img-fluid d-block mx-auto rounded shadow"
              />
            </div>
          </div>

          <div class="col-lg-5 offset-lg-1">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-import h2 text-primary mr-1 align-middle"></i>
              Hospital Dashboard
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              <b>Simple</b>, yet <b>Powerful</b>
            </h3>
            <p class="text-muted text-justify font-size-15 mb-4">
              All hospitals would use this form. Only two personnel would have
              the authority to input data about the ER room. Analytics about how
              the ER is doing will be available to the hospital director. That
              data will be piped securely to the EMC dashboard.
            </p>
            <!-- <p class="text-muted mb-2">
              <layout-icon class="icon-xs mr-1"></layout-icon>Donec pede justo
              fringilla vel nec.
            </p>
            <p class="text-muted">
              <life-buoy-icon class="icon-xs mr-1"></life-buoy-icon>Cras
              ultricies mi eu turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2"
                >Read More</a
              >
              <a href="javascript: void(0);" class="btn btn-soft-primary"
                >Buy Now</a
              >
            </div> -->
          </div>
        </div>
      </div>
    </section>

    <section
      class="section feather-bg-img"
      :style="{
        'background-image':
          'url(' + require('@/assets/images/features-bg-img-1.png') + ')',
      }"
    >
      <div class="container">
        <div class="row align-items-center">
          <div class="col-lg-5">
            <p class="font-weight-medium text-uppercase mb-2">
              <i class="mdi mdi-export h2 text-primary mr-1 align-middle"></i>
              EMC Dashboard
            </p>
            <h3 class="font-weight-semibold line-height-1_4 mb-4">
              It's not just any <b>Map</b>, it has <b>Data</b>
            </h3>
            <!-- <h3 class="font-weight-semibold line-height-1_4 mb-4">Build <b>community</b> & <b>conversion</b> with our suite of <b>social tool</b></h3> -->
            <p class="text-muted text-justify font-size-15 mb-4">
              All Emergency Medical Centers would be able to see the state of
              each hospital on a map. That knowledge would be then be manifested
              into an informed decision. Saving patients time-to-treatment which
              ultimately increases the probability of the patient's chance of
              survival.
            </p>
            <!-- <p class="text-muted mb-2">
              <server-icon class="icon-xs mr-1"></server-icon>Donec pede justo
              fringilla vel nec.
            </p>
            <p class="text-muted">
              <rss-icon class="icon-xs mr-1"></rss-icon>Cras ultricies mi eu
              turpis hendrerit fringilla.
            </p>
            <div class="mt-5">
              <a href="javascript: void(0);" class="btn btn-primary mr-2"
                >Read More</a
              >
              <a href="javascript: void(0);" class="btn btn-soft-primary"
                >Buy Now</a
              >
            </div> -->
          </div>
          <div class="col-lg-6 offset-lg-1">
            <div class="mt-4 mt-lg-0">
              <img
                src="@/assets/images/map.png"
                alt
                class="img-fluid d-block mx-auto rounded shadow"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Features End -->
  </div>
</template>
