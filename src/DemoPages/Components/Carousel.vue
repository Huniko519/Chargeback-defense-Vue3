<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick"/>
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-row>
          <b-col md="6">
            <b-card title="Full Width Slider" class="main-card mb-3">
              <slick ref="slick" :options="slickOptions2">
                <div>
                  <div class="slider-item">1</div>
                </div>
                <div>
                  <div class="slider-item">2</div>
                </div>
                <div>
                  <div class="slider-item">3</div>
                </div>
                <div>
                  <div class="slider-item">4</div>
                </div>
                <div>
                  <div class="slider-item">5</div>
                </div>
                <div>
                  <div class="slider-item">6</div>
                </div>
                <div>
                  <div class="slider-item">7</div>
                </div>
              </slick>
            </b-card>
            <b-card title="Center Model" class="main-card mb-3">
              <slick ref="slick" :options="slickOptions3">
                <div>
                  <div class="slider-item">1</div>
                </div>
                <div>
                  <div class="slider-item">2</div>
                </div>
                <div>
                  <div class="slider-item">3</div>
                </div>
                <div>
                  <div class="slider-item">4</div>
                </div>
                <div>
                  <div class="slider-item">5</div>
                </div>
                <div>
                  <div class="slider-item">6</div>
                </div>
                <div>
                  <div class="slider-item">7</div>
                </div>
              </slick>
            </b-card>
            <b-card title="Responsive" class="main-card mb-3">
              <slick ref="slick" :options="slickOptions7">
                <div>
                  <div class="slider-item">1</div>
                </div>
                <div>
                  <div class="slider-item">2</div>
                </div>
                <div>
                  <div class="slider-item">3</div>
                </div>
                <div>
                  <div class="slider-item">4</div>
                </div>
                <div>
                  <div class="slider-item">5</div>
                </div>
                <div>
                  <div class="slider-item">6</div>
                </div>
                <div>
                  <div class="slider-item">7</div>
                </div>
                <div>
                  <div class="slider-item">8</div>
                </div>
              </slick>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card title="Multiple Items" class="main-card mb-3">
              <slick ref="slick" :options="slickOptions">
                <div>
                  <div class="slider-item">1</div>
                </div>
                <div>
                  <div class="slider-item">2</div>
                </div>
                <div>
                  <div class="slider-item">3</div>
                </div>
                <div>
                  <div class="slider-item">4</div>
                </div>
                <div>
                  <div class="slider-item">5</div>
                </div>
                <div>
                  <div class="slider-item">6</div>
                </div>
                <div>
                  <div class="slider-item">7</div>
                </div>
              </slick>
            </b-card>
            <b-card title="Variable Width" class="main-card mb-3">
              <slick ref="slick" :options="slickOptions5">
                <div>
                  <div class="slider-item" style="width: 100px;">100</div>
                </div>
                <div>
                  <div class="slider-item" style="width: 200px;">200</div>
                </div>
                <div>
                  <div class="slider-item" style="width: 75px;">75</div>
                </div>
                <div>
                  <div class="slider-item" style="width: 225px;">225</div>
                </div>
                <div>
                  <div class="slider-item" style="width: 175px;">175</div>
                </div>
              </slick>
            </b-card>
            <b-card title="Inverted + Images" class="main-card mb-3">
              <div class="slider-light">
                <slick ref="slick" :options="slickOptions6">
                  <div class="p-5 bg-plum-plate">
                    <div class="slide-img-bg" />
                    <div class="slider-content text-light">
                      <h3>Perfect Balance</h3>
                      <p>ArchitectUI is like a dream. Some think it's too good to be true! Extensive collection of unified Vue Bootstrap Components and Elements.</p>
                    </div>
                  </div>
                  <div class="p-5 bg-premium-dark">
                    <div class="slide-img-bg" />
                    <div class="slider-content text-light">
                      <h3>Scalable, Modular, Consistent</h3>
                      <p>
                        Easily exclude the components you don't require. Lightweight, consistent
                        Bootstrap based styles across all elements and components
                      </p>
                    </div>
                  </div>
                  <div class="p-5 bg-sunny-morning">
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
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-card title="Bootstrap 4 Carousel" class="main-card mb-3">
          <b-carousel id="carousel1" style="text-shadow: 1px 1px 2px #333;" controls indicators
            background="#ababab" :interval="4000" img-width="1024" img-height="480"
            v-model="slide" @sliding-start="onSlideStart" @sliding-end="onSlideEnd">
            <!-- Text slides with image -->
            <b-carousel-slide caption="First slide" text="Nulla vitae elit libero, a pharetra augue mollis interdum."
              img-src="https://picsum.photos/1024/480/?image=52">
            </b-carousel-slide>

            <!-- Slides with custom text -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=54">
              <h1>Hello world!</h1>
            </b-carousel-slide>

            <!-- Slides with image only -->
            <b-carousel-slide img-src="https://picsum.photos/1024/480/?image=58"></b-carousel-slide>

            <!-- Slides with img slot -->
            <!-- Note the classes .d-block and .img-fluid to prevent browser default image alignment -->
            <b-carousel-slide>
              <img slot="img" class="d-block img-fluid w-100" width="1024" height="480"
                src="https://picsum.photos/1024/480/?image=55" alt="image slot"/>
            </b-carousel-slide>

            <!-- Slide with blank fluid image to maintain slide aspect ratio -->
            <b-carousel-slide caption="Blank Image" img-blank img-alt="Blank image">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                eros felis, tincidunt a tincidunt eget, convallis vel est. Ut pellentesque
                ut lacus vel interdum.
              </p>
            </b-carousel-slide>
          </b-carousel>
          <div class="divider"></div>
          <p class="mt-4">
            Slide #: {{ slide }}
            <br />
            Sliding: {{ sliding }}
          </p>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import Slick from "vue-slick";

const TABS = [
  {
    title: "Slideshow",
    value: "tab1"
  },
  {
    title: "Carousel",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,
    Slick
  },
  data: () => ({
    heading: "Carousels & Slideshows",
    subheading:
      "Create easy and beautiful slideshows with these Vue components.",
    icon: "pe-7s-album icon-gradient bg-sunny-morning",

    tabs: TABS,
    currentTab: "tab1",

    slickOptions: {
      slidesToShow: 3,
      dots: true
    },

    slickOptions7: {
      dots: true,
      infinite: false,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 4,
      initialSlide: 0,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    },

    slickOptions2: {
      slidesToShow: 1,
      dots: true
    },

    slickOptions5: {
      className: "slider variable-width",
      dots: true,
      infinite: true,
      centerMode: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true
    },

    slickOptions3: {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 3,
      speed: 500,
      dots: true
    },

    slickOptions6: {
      className: "center",
      infinite: true,
      slidesToShow: 1,
      speed: 500,
      adaptiveHeight: true,
      dots: true
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
