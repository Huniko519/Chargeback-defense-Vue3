<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-3">
          <div class="text-center">
            <button class="btn-shadow btn-lg btn-pill btn-wide btn btn-primary" v-clipboard="copyData">Copy</button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-3">
          <textarea class="form-control form-control-sm" name id cols="30" rows="10">Paste here ...</textarea>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import VueClipboards from "vue-clipboards";

Vue.use(VueClipboards);

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Clipboard",
    subheading: "You can copy/paste text with this Vue2 form widget.",
    icon: "pe-7s-phone icon-gradient bg-premium-dark",

    copyData: "This text has been copied on button click!"
  }),

  methods: {}
};
</script>
