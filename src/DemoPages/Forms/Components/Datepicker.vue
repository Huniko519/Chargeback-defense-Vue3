<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-3">
          <date-picker v-model="value1" lang="en" :not-before="new Date()"></date-picker>
        </b-card>
        <b-card title="DateRangePicker" class="main-card mb-3">
          <date-picker v-model="value2" lang="en" range></date-picker>
        </b-card>
        <b-card title="Month Selector" class="main-card mb-3">
          <date-picker v-model="value10" lang="en" type="month" format="YYYY-MM"></date-picker>
        </b-card>
        <b-card title="Year Selector" class="main-card mb-3">
          <date-picker v-model="value11" lang="en" type="month" format="YYYY-MM"></date-picker>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Time Selector" class="main-card mb-3">
          <date-picker v-model="value12" lang="en" type="time" format="HH:mm:ss" placeholder="Select Time"></date-picker>
        </b-card>
        <b-card title="Date & Time" class="main-card mb-3">
          <date-picker v-model="value3" lang="en" type="datetime" format="[on] MM-DD-YYYY [at] HH:mm"></date-picker>
        </b-card>
        <b-card title="Date & TimePicker" class="main-card mb-3">
          <date-picker v-model="value4" lang="en" type="datetime" format="YYYY-MM-DD hh:mm:ss a"
            :time-picker-options="{ start: '00:00', step: '00:30', end: '23:30' }">
          </date-picker>
        </b-card>
        <b-card title="Footer Buttons" class="main-card mb-3">
          <date-picker v-model="value6" format="YYYY-MM-DD" lang="en" confirm></date-picker>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import DatePicker from "vue2-datepicker";

export default {
  components: {
    PageTitle,
    DatePicker
  },
  data: () => ({
    heading: "Datepickers",
    subheading:
      "Build beautiful datepickers perfectly integrated in the general style of the application.",
    icon: "pe-7s-battery icon-gradient bg-plum-plate",
    value1: new Date(),
    value2: "",
    value3: new Date(),
    value4: "",
    value5: "",
    value6: "",
    value7: "",
    value8: "",
    value9: "",
    value10: new Date(),
    value11: new Date(),
    value12: ""
  }),

  methods: {}
};
</script>
