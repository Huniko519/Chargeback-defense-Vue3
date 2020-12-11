<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Date & Time" class="main-card mb-3">
          <input class="form-control" id="time-and-date-ex" type="text" placeholder="27/10/2016 23:15"
            v-mask="'##/##/#### ##:##'" v-model="models.timeAndDate" />
        </b-card>
        <b-card title="US Phone Number" class="main-card mb-3">
          <input class="form-control"  id="us-phone-number-ex" type="text"
            placeholder="+1(999)-999-9999" v-mask="'+1(###)-###-####'" v-model="models.usPhoneNumber" />
        </b-card>
        <b-card title="Phone number" class="main-card mb-3">
          <input class="form-control" id="phone-number-ex" type="text"
            placeholder="(999) 999-9999" v-mask="'(###) ###-####'" v-model="models.phoneNumber"/>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Time with seconds " class="main-card mb-3">
          <input class="form-control" id="time-ex" type="text" placeholder="11:23:15"
            v-mask="'##:##:##'" v-model="models.timeWithSeconds" />
        </b-card>
        <b-card title="Credit card number" class="main-card mb-3">
          <input class="form-control" id="credit-cart-ex" type="text" placeholder="4444 4444 4444 4444"
            v-mask="'#### #### #### ####'" v-model="models.cardNumber" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import VueMask from "v-mask";

Vue.use(VueMask);
export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Input Mask",
    subheading:
      "Add all kind of input masks for inputs for a better user experience.",
    icon: "pe-7s-global icon-gradient bg-happy-itmeo",

    dynamicMask: "###.###.###/###",
    models: {
      timeAndDate: "",
      timeWithSeconds: "",
      cardNumber: "",
      phoneNumber: "",
      dynamicMask: "",
      usPhoneNumber: ""
    }
  }),

  methods: {}
};
</script>
