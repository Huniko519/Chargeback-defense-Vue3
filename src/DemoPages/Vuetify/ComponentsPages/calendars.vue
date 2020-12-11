<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic"
        subheading="A calendar has a type and a value which determines what type of calendar is shown over what span of time.">
        <cal1></cal1>
      </demo-card>
      <demo-card heading="Slots"
        subheading="Slots allow you to define the content for each day, time interval for the daily views, and various labels.">
        <cal2></cal2>
      </demo-card>
      <demo-card heading="Events"
        subheading="This is an example of an event calendar with type of month. Click on an event to show event details.">
        <cal3></cal3>
      </demo-card>
      <demo-card heading="Weekly"
        subheading="This is an example of an event calendar with all-day and timed events with a type of week.">
        <cal4></cal4>
      </demo-card>
      <demo-card heading="Daily"
        subheading="This is an example of calendar with content in each interval slot and a type of day.">
        <cal5></cal5>
      </demo-card>
      <demo-card heading="Features"
        subheading="This example allows you to explore many of the features of the v-calendar component.">
        <cal6></cal6>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import cal1 from "../Components/calendars/usage";
import cal2 from "../Components/calendars/slots";
import cal3 from "../Components/calendars/events";
import cal4 from "../Components/calendars/weekly";
import cal5 from "../Components/calendars/daily";
import cal6 from "../Components/calendars/features";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    cal1,
    cal2,
    cal3,
    cal4,
    cal5,
    cal6
  },
  data: () => ({
    heading: "Calendar",
    subheading:
      "The v-calendar component is used to display information in a daily, weekly, or monthly view. The daily view has slots for all day or timed elements, and the weekly and monthly view has a slot for each day.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
