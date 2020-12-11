<template>
  <div>
    <div class="h-100">
      <b-row class="h-100 no-gutters">
        <b-col lg="4" class="d-none d-lg-block">
          <div class="slider-light">
            <slick ref="slick" :options="slickOptions6">
              <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
                <div class="slide-img-bg" />
                <div class="slider-content text-light">
                  <h3>Perfect Balance</h3>
                  <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified Vue Bootstrap Components and Elements.</p>
                </div>
              </div>
              <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                <div class="slide-img-bg" />
                <div class="slider-content text-light">
                  <h3>Scalable, Modular, Consistent</h3>
                  <p>
                    Easily exclude the components you don't require. Lightweight, consistent
                    Bootstrap based styles across all elements and components
                  </p>
                </div>
              </div>
              <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                <div class="slide-img-bg opacity-6" />
                <div class="slider-content text-light">
                  <h3>Complex, but lightweight</h3>
                  <p>
                    We've included a lot of components that cover almost all use cases for
                    any type of application.
                  </p>
                </div>
              </div>
            </slick>
          </div>
        </b-col>
        <b-col lg="8" md="12" class="h-100 d-flex bg-white justify-content-center align-items-center">
          <b-col lg="6" md="8" sm="12" class="mx-auto app-login-box">
            <div class="app-logo" />
            <h4>
              <div>Forgot your Password?</div>
              <span>Use the form below to recover it.</span>
            </h4>
            <div>
              <Form>
                <b-row form>
                  <b-col md="12">
                    <b-form-group>
                      <Label for="exampleEmail">Email</Label>
                      <b-form-input type="email" name="email"  id="exampleEmail"  placeholder="Email here..." />
                    </b-form-group>
                  </b-col>
                </b-row>
                <div class="mt-4 d-flex align-items-center">
                  <h6 class="mb-0">
                    <a href="javascript:void(0);" class="text-primary">Sign in existing account</a>
                  </h6>
                  <div class="ml-auto">
                    <b-button variant="primary" size="lg">Recover Password</b-button>
                  </div>
                </div>
              </Form>
            </div>
          </b-col>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import Slick from "vue-slick";

export default {
  components: {
    Slick
  },
  data: () => ({
    slickOptions6: {
      dots: true,
      infinite: true,
      speed: 500,
      arrows: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      fade: true,
      initialSlide: 0,
      autoplay: true,
      adaptiveHeight: true
    },

    slide: 0,
    sliding: null
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },
    next() {
      this.$refs.slick.next();
    },

    prev() {
      this.$refs.slick.prev();
    },

    reInit() {
      this.$nextTick(() => {
        this.$refs.slick.reSlick();
      });
    },

    onSlideStart() {
      this.sliding = true;
    },
    onSlideEnd() {
      this.sliding = false;
    }
  }
};
</script>

