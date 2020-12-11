<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <v-tabs fixed-tabs color="primary" dark slider-color="white" centered>
      <v-tab ripple>Basic Buttons</v-tab>
      <v-tab ripple>Floating Action</v-tab>
      <v-tab-item>
        <layout-wrapper>
          <demo-card heading="Usage" subheading="Basic buttons examples below.">
            <btn1></btn1>
          </demo-card>
          <demo-card heading="Flat" subheading="Flat buttons have no box shadow and no background. Only on hover is the container for the button shown.">
            <btn2></btn2>
          </demo-card>
          <demo-card heading="Raised" subheading="Raised buttons have a box shadow that increases when clicked. This is the default style.">
            <btn3></btn3>
          </demo-card>
          <demo-card heading="Depressed" subheading="Depressed buttons still maintain their background color, but have no box shadow.">
            <btn4></btn4>
          </demo-card>
          <demo-card heading="Button Dropdown Variants" subheading="Button dropdowns are regular selects with additional styling.">
            <btn5></btn5>
          </demo-card>
          <demo-card heading="Icon" subheading="Icons can be used for the primary content of a button.">
            <btn6></btn6>
          </demo-card>
          <demo-card heading="Floating" subheading="Floating buttons are round and usually contain an icon.">
            <btn7></btn7>
          </demo-card>
          <demo-card heading="Loaders" subheading="Using the loading prop, you can notify a user that there is processing taking place. The default behavior is to use a v-progress-circular component but this can be customized.">
            <btn8></btn8>
          </demo-card>
          <demo-card heading="Sizing" subheading="Buttons can be given different sizing options to fit a multitude of scenarios.">
            <btn9></btn9>
          </demo-card>
          <demo-card heading="Outline" subheading="Outline buttons inherit their borders from the current color applied.">
            <btn10></btn10>
          </demo-card>
          <demo-card heading="Round" subheading="Rounded buttons behave the same as regular buttons but have rounded edges.">
            <btn11></btn11>
          </demo-card>
          <demo-card heading="Block" subheading="Block buttons extend the full available width.">
            <btn12></btn12>
          </demo-card>
        </layout-wrapper>
      </v-tab-item>
      <v-tab-item>
        <layout-wrapper>
          <demo-card heading="Basic" subheading="Floating action buttons can be attached to material to signify a promoted action in your application. The default size will be used in most cases, whereas the small variant can be used to maintain continuity with similar sized elements.">
            <btnF1></btnF1>
          </demo-card>
          <demo-card  heading="Small variant" subheading="For better visual appeal, we use a small button to match our list avatars.">
            <btnF2></btnF2>
          </demo-card>
          <demo-card heading="Display animation"
            subheading="When displaying for the first time, a floating action button should animate onto the screen. Here we use the v-fab-transition with v-show. You can also use any custom transition provided by Vuetify or your own.">
            <btnF3></btnF3>
          </demo-card>
          <demo-card heading="FAB with speed-dial"
            subheading="The speed-dial component has an very robust api for customizing your FAB experience exactly how you want.">
            <btnF5></btnF5>
          </demo-card>
        </layout-wrapper>
      </v-tab-item>
    </v-tabs>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import btn1 from "../Components/buttons/usage";
import btn2 from "../Components/buttons/flat";
import btn3 from "../Components/buttons/raised";
import btn4 from "../Components/buttons/depressed";
import btn5 from "../Components/buttons/dropdown";
import btn6 from "../Components/buttons/icon";
import btn7 from "../Components/buttons/floating";
import btn8 from "../Components/buttons/loaders";
import btn9 from "../Components/buttons/sizing";
import btn10 from "../Components/buttons/outline";
import btn11 from "../Components/buttons/round";
import btn12 from "../Components/buttons/block";

import btnF1 from "../Components/floating-action-buttons/usage";
import btnF2 from "../Components/floating-action-buttons/small";
import btnF3 from "../Components/floating-action-buttons/displayAnimation";
import btnF5 from "../Components/floating-action-buttons/speedDial";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    btn1,
    btn2,
    btn3,
    btn4,
    btn5,
    btn6,
    btn7,
    btn8,
    btn9,
    btn10,
    btn11,
    btn12,

    btnF1,
    btnF2,
    btnF3,
    btnF5
  },
  data: () => ({
    heading: "Button",
    subheading:
      "The v-btn component replaces the standard html button with a material design theme and a multitude of options. Any color helper class can be used to alter the background or text color.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
