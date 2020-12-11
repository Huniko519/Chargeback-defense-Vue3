<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Time pickers have the light theme enabled by default.">
        <timepicker1></timepicker1>
      </demo-card>
      <demo-card heading="Time pickers - Colors" subheading="Time picker colors can be set using the color and header-color props. If header-color prop is not provided header will use the color prop value.">
        <timepicker2></timepicker2>
      </demo-card>
      <demo-card heading="Time pickers - In dialog and menu" subheading="Due to the flexibility of pickers, you can really dial in the experience exactly how you want it.">
        <timepicker3></timepicker3>
      </demo-card>
      <demo-card heading="Time pickers - 24h format" subheading="A time picker can be switched to 24hr format. Note that the format prop defines only the way the picker is displayed, picker's value (model) is always in 24hr format.">
        <timepicker4></timepicker4>
      </demo-card>
      <demo-card heading="Time pickers - Allowed times" subheading="You can specify allowed times using arrays, objects, and functions. You can also specify time step/precision/interval - e.g. 10 minutes.">
        <timepicker5></timepicker5>
      </demo-card>
      <demo-card heading="Time pickers - Setting picker width" subheading="You can specify allowed the picker's width or make it full width.">
        <timepicker6></timepicker6>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import timepicker1 from "../Components/time-pickers/usage";
import timepicker2 from "../Components/time-pickers/timeColorable";
import timepicker3 from "../Components/time-pickers/timeDialogAndMenu";
import timepicker4 from "../Components/time-pickers/time24hFormat";
import timepicker5 from "../Components/time-pickers/timeAllowedTimes";
import timepicker6 from "../Components/time-pickers/timeWidth";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    timepicker1,
    timepicker2,
    timepicker3,
    timepicker4,
    timepicker5,
    timepicker6
  },
  data: () => ({
    heading: "Time picker",
    subheading:
      "The v-time-picker is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting the time.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
