<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Date pickers come in two orientation variations, portrait (default) and landscape. By default they are emitting input event when the day (for date picker) or month (for month picker), but with reactive prop they can update the model even after clicking year/month.">
        <datepicker1></datepicker1>
      </demo-card>
      <demo-card heading="Date pickers - Colors" subheading="Date picker colors can be set using the color and header-color props. If header-color prop is not provided header will use the color prop value.">
        <datepicker2></datepicker2>
      </demo-card>
      <demo-card heading="Date pickers - In dialog and menu" subheading="When integrating a picker into a v-text-field, it is recommended to use the readonly prop. This will prevent mobile keyboards from triggering. To save vertical space, you can also hide the picker title.">
        <datepicker3></datepicker3>
      </demo-card>
      <demo-card heading="Date pickers - formatting date" subheading="If you need to display date in the custom format (different than YYYY-MM-DD) you need to use the formatting function.">
        <datepicker4></datepicker4>
      </demo-card>
      <demo-card heading="Date pickers - Allowed dates" subheading="You can specify allowed dates using arrays, objects, and functions.">
        <datepicker6></datepicker6>
      </demo-card>
      <demo-card heading="Date pickers - Mutiple" subheading="Date picker can now select multiple dates with the multiple prop. If using multiple then date picker expects its model to be an array.">
        <datepicker7></datepicker7>
      </demo-card>
      <demo-card heading="Date pickers - Setting picker width" subheading="You can specify allowed the picker's width or make it full width.">
        <datepicker8></datepicker8>
      </demo-card>
      <demo-card heading="Date pickers - birthday picker" subheading="Starting with year picker by default, resticting dates range and closing the picker menu after selecting the day make the perfect birthday picker.">
        <datepicker9></datepicker9>
      </demo-card>
      <demo-card heading="Date pickers - react to displayed month/year change" subheading="You can watch the pickerDate which is the displayed month/year (depending on the picker type and active view) to perform some action when it changes.">
        <datepicker10></datepicker10>
      </demo-card>
      <demo-card heading="Date pickers - Events" subheading="You can specify events using arrays, objects or functions. To change the default color of the event use event-color prop.">
        <datepicker11></datepicker11>
      </demo-card>
      <demo-card heading="Date pickers - Internationalization" subheading="The date picker supports internationalization through the JavaScript Date object.">
        <datepicker12></datepicker12>
      </demo-card>
      <demo-card heading="Date pickers - icons" subheading="You can override the default icons used in the picker.">
        <datepicker13></datepicker13>
      </demo-card>
      <demo-card heading="Date pickers - read only" subheading="Selecting new date could be disabled by adding readonly prop.">
        <datepicker14></datepicker14>
      </demo-card>
      <demo-card heading="Date pickers - current date indicator" subheading="By default the current date is displayed using outline button - show-current prop allows you to remove the border or select different date to be displayed as the current one.">
        <datepicker15></datepicker15>
      </demo-card>
      <demo-card heading="Month pickers" subheading="Month pickers come in two orientation variations, portrait (default) and landscape.">
        <datepicker16></datepicker16>
      </demo-card>
      <demo-card heading="Month pickers - Colors" subheading="Month picker colors can be set using the color and header-color props. If header-color prop is not provided header will use the color prop value.">
        <datepicker17></datepicker17>
      </demo-card>
      <demo-card heading="Month pickers - In dialog and menu" subheading="When integrating a picker into a v-text-field, it is recommended to use the readonly prop. This will prevent mobile keyboards from triggering.">
        <datepicker18></datepicker18>
      </demo-card>
      <demo-card heading="Month pickers - Allowed months" subheading="You can specify allowed months using arrays, objects or functions.">
        <datepicker19></datepicker19>
      </demo-card>
      <demo-card heading="Month pickers - Multiple" subheading="Month pickers can now select multiple months with the multiple prop. If using multiple then the month picker expects its model to be an array.">
        <datepicker20></datepicker20>
      </demo-card>
      <demo-card heading="Month pickers - Setting picker width" subheading="You can specify allowed the picker's width or make it full width.">
        <datepicker21></datepicker21>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import datepicker1 from "../Components/date-pickers/usage";
import datepicker2 from "../Components/date-pickers/dateColorable";
import datepicker3 from "../Components/date-pickers/dateDialogAndMenu";
import datepicker4 from "../Components/date-pickers/dateFormatting";
import datepicker6 from "../Components/date-pickers/dateAllowedDates";
import datepicker7 from "../Components/date-pickers/dateMultiple";
import datepicker8 from "../Components/date-pickers/dateWidth";
import datepicker9 from "../Components/date-pickers/dateBirthday";
import datepicker10 from "../Components/date-pickers/datePickerDate";
import datepicker11 from "../Components/date-pickers/dateEvents";
import datepicker12 from "../Components/date-pickers/dateInternationalization";
import datepicker13 from "../Components/date-pickers/dateIcons";
import datepicker14 from "../Components/date-pickers/dateReadonly";
import datepicker15 from "../Components/date-pickers/dateCurrent";
import datepicker16 from "../Components/date-pickers/monthLight";
import datepicker17 from "../Components/date-pickers/monthColorable";
import datepicker18 from "../Components/date-pickers/monthDialogAndMenu";
import datepicker19 from "../Components/date-pickers/monthAllowedMonths";
import datepicker20 from "../Components/date-pickers/monthMultiple";
import datepicker21 from "../Components/date-pickers/monthWidth";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    datepicker1,
    datepicker2,
    datepicker3,
    datepicker4,
    datepicker6,
    datepicker7,
    datepicker8,
    datepicker9,
    datepicker10,
    datepicker11,
    datepicker12,
    datepicker13,
    datepicker14,
    datepicker15,
    datepicker16,
    datepicker17,
    datepicker18,
    datepicker19,
    datepicker20,
    datepicker21
  },
  data: () => ({
    heading: "Date/month picker",
    subheading:
      "The v-date-picker is stand-alone component that can be utilized in many existing Vuetify components. It offers the user a visual representation for selecting date/month.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
