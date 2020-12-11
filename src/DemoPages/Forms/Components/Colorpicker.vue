<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="4">
        <b-card class="main-card mb-3">
          <sketch-picker class="mx-auto mb-4" v-model="colors"></sketch-picker>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card class="main-card mb-3">
          <compact-picker class="mx-auto mb-4" v-model="colors"></compact-picker>
        </b-card>
        <b-card class="main-card mb-3">
          <swatches-picker class="mx-auto mb-4" v-model="colors"></swatches-picker>
        </b-card>
      </b-col>
      <b-col md="4">
        <b-card class="main-card mb-3">
          <slider-picker class="mx-auto mb-4" v-model="colors"></slider-picker>
        </b-card>
        <b-card class="main-card mb-3">
          <grayscale-picker :value="colors" @input="updateValue"></grayscale-picker>
        </b-card>
      </b-col>
    </b-row>

    <b-card class="main-card mb-3">
      <photoshop-picker class="mx-auto mb-4" v-model="colors"></photoshop-picker>
    </b-card>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import { Photoshop } from "vue-color";
import { Sketch } from "vue-color";
import { Slider } from "vue-color";
import { Swatches } from "vue-color";
import { Grayscale } from "vue-color";
import { Compact } from "vue-color";

let defaultProps = {
  hex: "#194d33e6",
  hsl: {
    h: 150,
    s: 0.5,
    l: 0.2,
    a: 0.9
  },
  hsv: {
    h: 150,
    s: 0.66,
    v: 0.3,
    a: 0.9
  },
  rgba: {
    r: 25,
    g: 77,
    b: 51,
    a: 0.9
  },
  a: 0.9
};

export default {
  components: {
    PageTitle,

    "compact-picker": Compact,
    "grayscale-picker": Grayscale,
    "swatches-picker": Swatches,
    "slider-picker": Slider,
    "sketch-picker": Sketch,
    "photoshop-picker": Photoshop
  },
  data: () => ({
    heading: "ColorPickers",
    subheading:
      "Color Pickers following the design from Photoshop, Sketch, Chrome, Twitter and more.",
    icon: "pe-7s-drawer icon-gradient bg-happy-itmeo",

    colors: defaultProps
  }),

  methods: {
    updateValue(value) {
      this.colors = value;
    }
  }
};
</script>
