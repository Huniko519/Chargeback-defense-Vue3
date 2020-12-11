<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class="content">
      <b-row>
        <b-col md="6">
          <b-card class="main-card mb-3">
            <vue-slider ref="slider" v-model="demo.default.value" v-bind="demo.default"></vue-slider>
            <br />
            <b>
              <small>Value:</small>
              {{ demo.default.value }}
            </b>
          </b-card>
          <b-card class="main-card mb-3">
            <vue-slider ref="slider1" v-bind="demo.demo1" v-model="demo.demo1.value"></vue-slider>
            <br />
            <b>
              <small>Value:</small>
              {{ demo.demo1.value }}
            </b>
            <br />
            <br />

            <div class="btn-group btn-group-sm">
              <button class="btn btn-secondary" @click="setValue('demo1', 21)">set value = 21</button>
              <button class="btn btn-secondary" @click="setIndex('slider1', 2)">set index = 2</button>
              <button class="btn btn-secondary" @click="setDisabled('demo1')">set disabled</button>
              <button class="btn btn-secondary" @click="setTooltip('demo1')">switch tooltip</button>
              <button class="btn btn-secondary" @click="getValue('slider1')">getValue()</button>
              <button class="btn btn-secondary" @click="getIndex('slider1')">getIndex()</button>
            </div>
          </b-card>
          <b-card class="main-card mb-3">
            <vue-slider ref="slider4" v-bind="demo.demo4" v-model="demo.demo4.value"></vue-slider>
            <br />
            <b>
              <small>Value:</small>
              {{ demo.demo4.value }}
            </b>
            <br />
            <br />
            <div class="btn-group btn-group-sm">
              <button class="btn btn-secondary" @click="setValue('demo4', ['10-02', '10-12'])">
                set value = ["10-02", "10-12"]
              </button>
              <button class="btn btn-secondary" @click="setIndex('slider4', [3, 10])">
                set index = [3, 10]
              </button>
              <button class="btn btn-secondary" @click="getValue('slider4')">getValue()</button>
              <button class="btn btn-secondary" @click="getIndex('slider4')">getIndex()</button>
            </div>
          </b-card>
          <b-card class="main-card mb-3">
            <vue-slider ref="slider9" v-bind="demo.demo9" v-model="demo.demo9.value"></vue-slider>
            <br />
            <b>
              <small>Value:</small>
              {{ demo.demo9.value }}
            </b>
            <br />
            <br />
            <div class="btn-group btn-group-sm">
              <button class="btn btn-secondary" @click="setValue('demo9', [0, 30])">
                set value = [0, 30]</button>
              <button class="btn btn-secondary" @click="demo.demo9.fixed = !demo.demo9.fixed">
                switch fixed
              </button>
              <button class="btn btn-secondary" @click="getValue('slider9')">getValue()</button>
              <button class="btn btn-secondary" @click="getIndex('slider9')">getIndex()</button>
            </div>
          </b-card>
        </b-col>
        <b-col md="6">
          <b-card class="main-card mb-3">
            <vue-slider ref="slider2" v-bind="demo.demo2" v-model="demo.demo2.value"></vue-slider>
            <br />
            <b>
              <small>Value:</small>
              {{ demo.demo2.value }}
            </b>
            <br />
            <br />
            <div class="btn-group btn-group-sm">
              <button class="btn btn-secondary" @click="setValue('demo2', '2016-10-06')">
                set value = 2016-10-06
              </button>
              <button class="btn btn-secondary" @click="setIndex('slider2', 3)">set index = 3</button>
              <button class="btn btn-secondary" @click="getValue('slider2')">getValue()</button>
              <button class="btn btn-secondary" @click="getIndex('slider2')">getIndex()</button>
            </div>
          </b-card>
          <b-card class="main-card mb-3">
            <vue-slider ref="slider5" v-bind="demo.demo5" v-model="demo.demo5.value" :reverse="true"
              tooltipDir="left" @drag-start="dragStart" @drag-end="dragEnd"
              @callback="val => demo.demo5.processStyle.backgroundColor = `rgba(71, 113, 255, ${val / 100})`">
            </vue-slider>
            <vue-slider v-bind="demo.demo5" v-model="demo.demo5.value" :reverse="false" tooltipDir="right"
              @drag-start="dragStart" @drag-end="dragEnd"
              @callback="val => demo.demo5.processStyle.backgroundColor = `rgba(71, 113, 255, ${val / 100})`">
            </vue-slider>
            <br />
            <b>
              <small>Value:</small>
              {{ demo.demo5.value }}
            </b>
            <br />
            <br />
            <div class="btn-group btn-group-sm">
              <button class="btn btn-secondary" @click="setIndex('slider5', 50)">set index = 50</button>
              <button class="btn btn-secondary" @click="getValue('slider5')">getValue()</button>
              <button class="btn btn-secondary" @click="getIndex('slider5')">getIndex()</button>
            </div>
          </b-card>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import vueSlider from "vue-slider-component";

export default {
  components: {
    PageTitle,
    vueSlider
  },
  data: () => ({
    heading: "Range Slider",
    subheading: "Create sliders and range sliders with these Vue form widgets.",
    icon: "pe-7s-lintern icon-gradient bg-strong-bliss",

    demo: {
      default: {
        value: 0,
        width: "auto",
        height: 6,
        direction: "horizontal",
        dotSize: 16,
        eventType: "auto",
        min: 0,
        max: 100,
        interval: 1,
        startAnimation: false,
        tooltipMerge: true,
        processDragable: false,
        minRange: null,
        maxRange: null,
        fixed: false,
        debug: process && process.env && process.env.NODE_ENV !== "production",
        disabled: false,
        show: true,
        enableCross: true,
        realTime: false,
        tooltip: "always",
        clickable: true,
        tooltipDir: "top",
        piecewise: false,
        lazy: false,
        useKeyboard: true,
        reverse: false,
        speed: 0.5,
        focusStyle: null,
        bgStyle: null,
        sliderStyle: null,
        tooltipStyle: null,
        processStyle: null,
        piecewiseStyle: null,
        disabledStyle: null
      },
      demo1: {
        value: 1,
        width: 280,
        height: 8,
        dotSize: 20,
        min: 1,
        max: 25,
        interval: 4,
        disabled: false,
        show: true,
        speed: 0.3,
        reverse: false,
        lazy: true,
        tooltip: "always",
        piecewise: true
      },
      demo2: {
        value: "2016-10-01",
        width: "80%",
        tooltip: "always",
        disabled: false,
        piecewise: true,
        piecewiseLabel: true,
        style: {
          marginLeft: "10%"
        },
        data: [
          "2016-10-01",
          "2016-10-02",
          "2016-10-03",
          "2016-10-04",
          "2016-10-05",
          "2016-10-06",
          "2016-10-07"
        ],
        piecewiseStyle: {
          backgroundColor: "#ccc",
          visibility: "visible",
          width: "12px",
          height: "12px"
        },
        piecewiseActiveStyle: {
          backgroundColor: "#3498db"
        },
        labelActiveStyle: {
          color: "#3498db"
        }
      },
      demo3: {
        value: [0, 100],
        width: "100%",
        height: 8,
        dotSize: 16,
        min: 0,
        max: 500,
        disabled: false,
        show: true,
        useKeyboard: true,
        tooltip: "always",
        formatter: "¥{value}",
        enableCross: false,
        mergeFormatter: "¥{value1} ~ ¥{value2}",
        bgStyle: {
          backgroundColor: "#fff",
          boxShadow: "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
        },
        tooltipStyle: {
          backgroundColor: "#666",
          borderColor: "#666"
        },
        processStyle: {
          backgroundColor: "#999"
        }
      },
      demo4: {
        value: ["10-01", "10-05"],
        width: "100%",
        height: 4,
        dotSize: 14,
        min: 1,
        max: 100,
        interval: 3,
        disabled: false,
        show: true,
        tooltip: "always",
        piecewise: true,
        data: [
          "10-01",
          "10-02",
          "10-03",
          "10-04",
          "10-05",
          "10-06",
          "10-07",
          "10-08",
          "10-09",
          "10-10",
          "10-11",
          "10-12",
          "10-13",
          "10-14",
          "10-15",
          "10-16",
          "10-17",
          "10-18",
          "10-19",
          "10-20"
        ]
      },
      demo5: {
        value: 0,
        width: 4,
        height: 300,
        dotSize: 22,
        eventType: "auto",
        min: 0,
        max: 100,
        interval: 1,
        disabled: false,
        show: true,
        tooltip: "always",
        piecewise: false,
        style: {
          display: "inline-block",
          marginLeft: "30px"
        },
        class: "star-slider",
        direction: "vertical",
        speed: 0.5,
        processStyle: {
          backgroundColor: "#fff"
        }
      },
      demo6: {
        value: [0, 200],
        width: "100%",
        height: 8,
        dotSize: 20,
        min: 0,
        max: 200,
        disabled: false,
        show: true,
        tooltip: "always",
        tooltipDir: ["bottom", "top"],
        piecewise: false,
        style: {
          marginBottom: "30px"
        },
        bgStyle: {
          backgroundColor: "#fff",
          boxShadow: "inset 0.5px 0.5px 3px 1px rgba(0,0,0,.36)"
        },
        sliderStyle: [
          {
            backgroundColor: "#f05b72"
          },
          {
            backgroundColor: "#3498db"
          }
        ],
        tooltipStyle: [
          {
            backgroundColor: "#f05b72",
            borderColor: "#f05b72"
          },
          {
            backgroundColor: "#3498db",
            borderColor: "#3498db"
          }
        ],
        processStyle: {
          backgroundImage: "-webkit-linear-gradient(left, #f05b72, #3498db)"
        }
      },
      demo7: {
        width: "100%",
        show: true,
        value: [0, 20],
        min: 0,
        max: 100,
        disabled: false,
        tooltipMerge: false,
        tooltip: "always"
      },
      demo8: {
        width: "100%",
        show: true,
        value: 0,
        min: 0,
        max: 100,
        piecewiseLabel: true,
        tooltip: false
      },
      demo9: {
        value: [0, 20],
        min: 0,
        max: 100,
        interval: 1,
        fixed: true,
        processDragable: true
      }
    },
    diy_tooltip: "",
    diy_label: ""
  }),

  methods: {
    format(value) {
      return value === null
        ? "null"
        : typeof value === "string"
        ? `"${value}"`
        : value;
    },
    setDisabled(name) {
      let obj = this.demo[name];
      obj.disabled = !obj.disabled;
    },
    setTooltip(name) {
      let obj = this.demo[name];
      obj.tooltip = obj.tooltip === "hover" ? "always" : "hover";
    },
    setValue(name, num) {
      let obj = this.demo[name];
      obj.value = num;
    },
    setIndex(name, num) {
      let slider = this.$refs[name];
      slider.setIndex(num);
    },
    getValue(name) {
      let slider = this.$refs[name];
      alert(slider.getValue());
    },
    getIndex(name) {
      let slider = this.$refs[name];
      alert(slider.getIndex());
    },
    dragStart() {
      this.demo.demo5.speed = 0;
    },
    dragEnd() {
      this.demo.demo5.speed = 0.5;
    }
  }
};
</script>
