<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Sliders reflect a range of values along a bar, from which users may select a single value. They are ideal for adjusting settings such as volume, brightness, or applying image filters.">
        <slider1></slider1>
      </demo-card>
      <demo-card heading="Thumb" subheading="You can display a thumb-label while sliding or always. It It can have a custom color by setting thumb-color and a custom size with thumb-size. With always-dirty its color will never change, even when on min value.">
        <slider2></slider2>
      </demo-card>
      <demo-card heading="Custom Range slider" subheading="Using the tick-labels prop along with a scoped slot, you can create a very customized solution.">
        <slider3></slider3>
      </demo-card>
      <demo-card heading="Ticks" subheading="Tick marks represent predetermined values to which the user can move the slider.">
        <slider4></slider4>
      </demo-card>
      <demo-card heading="Discrete" subheading="Discrete sliders offer a thumb label that displays the exact current amount. Using the step prop you can disallow selecting values outside of steps.">
        <slider5></slider5>
      </demo-card>
      <demo-card heading="Icons" subheading="You can add icons to the slider with the append-icon and prepend-icon props. With @click:append and @click:prepend you can trigger a callback function when click the icon.">
        <slider6></slider6>
      </demo-card>
      <demo-card heading="With an editable numeric value" subheading="Sliders can be combined with other components for a better display.">
        <slider7></slider7>
      </demo-card>
      <demo-card heading="Custom colors" subheading="You can set the colors of the slider using the props color, track-color and thumb-color.">
        <slider8></slider8>
      </demo-card>
      <demo-card heading="Validation" subheading="Vuetify includes simple validation through the rules prop. The prop accepts an array of callbacks.">
        <slider9></slider9>
      </demo-card>
      <demo-card heading="Range" subheading="Sliders examples with range selectors.">
        <slider10></slider10>
      </demo-card>
      <demo-card heading="Min & Max values" subheading="You can set min and max values of sliders.">
        <slider11></slider11>
      </demo-card>
      <demo-card heading="Metronome" subheading="Use slotted prepend and append icons to easily customize the v-slider to fit any situation.">
        <slider12></slider12>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import slider1 from "../Components/sliders/usage";
import slider2 from "../Components/sliders/thumb";
import slider3 from "../Components/sliders/range";
import slider4 from "../Components/sliders/ticks";
import slider5 from "../Components/sliders/discrete";
import slider6 from "../Components/sliders/icons";
import slider7 from "../Components/sliders/editableNumericValue";
import slider8 from "../Components/sliders/customColors";
import slider9 from "../Components/sliders/validation";
import slider10 from "../Components/sliders/range";
import slider11 from "../Components/sliders/minMax";
import slider12 from "../Components/sliders/metronome";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    slider1,
    slider2,
    slider3,
    slider4,
    slider5,
    slider6,
    slider7,
    slider8,
    slider9,
    slider10,
    slider11,
    slider12
  },
  data: () => ({
    heading: "Sliders",
    subheading:
      "The v-slider component is a better visualization of the number input. It is used for gathering numerical user data.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
