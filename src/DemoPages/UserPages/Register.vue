<template>
  <div class="h-100">
    <b-row class="h-100 no-gutters">
      <b-col lg="7"  md="12" class="h-100 d-md-flex d-sm-block bg-white justify-content-center align-items-center">
        <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
          <div class="app-logo" />
          <h4>
            <div>Welcome,</div>
            <span>
              It only takes a
              <span class="text-success">few seconds</span> to create your account
            </span>
          </h4>
          <div>
            <Form>
              <b-row form>
                <b-col md="6">
                  <b-form-group>
                    <Label for="exampleEmail">
                      <span class="text-danger">*</span>
                      Email
                    </Label>
                    <b-form-input  type="email"  name="email" id="exampleEmail" placeholder="Email here..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="exampleName">Name</Label>
                    <b-form-input type="text"  name="text" id="exampleName"  placeholder="Name here..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="examplePassword">
                      <span class="text-danger">*</span>
                      Password
                    </Label>
                    <b-form-input type="password" name="password" id="examplePassword" placeholder="Password here..." />
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group>
                    <Label for="examplePasswordRep">
                      <span class="text-danger">*</span>
                      Repeat Password
                    </Label>
                    <b-form-input type="password" name="passwordrep"  id="examplePasswordRep" placeholder="Repeat Password here..." />
                  </b-form-group>
                </b-col>
              </b-row>
              <b-form-checkbox name="check" id="exampleCheck">
                Accept our
                <a href="javascript:void(0);">Terms and Conditions</a>.
              </b-form-checkbox>
              <div class="mt-4 d-flex align-items-center">
                <h5 class="mb-0">
                  Already have an account?
                  <a href="javascript:void(0);" class="text-primary">Sign in</a>
                </h5>
                <div class="ml-auto">
                  <b-button color="primary" class="btn-wide btn-pill btn-shadow btn-hover-shine" size="lg">Create Account</b-button>
                </div>
              </div>
            </Form>
          </div>
        </b-col>
      </b-col>
      <b-col lg="5" class="d-lg-flex d-xs-none">
        <div class="slider-light">
          <slick ref="slick" :options="slickOptions6">
            <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate">
              <div class="slider-content text-light">
                <h3>Perfect Balance</h3>
                <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified Vue Bootstrap Components and Elements.</p>
              </div>
            </div>
          </slick>
        </div>
      </b-col>
    </b-row>
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
