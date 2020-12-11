<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-4">
          <rate :length="5" />
        </b-card>
        <b-card title="With Description" class="main-card mb-4">
          <rate :length="5" :value="2" :ratedesc="['Very bad', 'bad', 'Normal', 'Good', 'Very good']" />
        </b-card>
        <b-card title="Disabled" class="main-card mb-4">
          <rate :length="5" :value="2" :disabled="true" />
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Default Value" class="main-card mb-4">
          <rate :length="5" :value="2" />
        </b-card>
        <b-card title="Show Count" class="main-card mb-4">
          <rate :length="5" :value="2" :showcount="true" />
        </b-card>
        <b-card title="Read-Only" class="main-card mb-4">
          <rate :length="5" :value="2" :readonly="true" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import Vue from "vue";
import PageTitle from "../../Layout/Components/PageTitle.vue";
import rate from "vue-rate";
Vue.use(rate);
export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Ratings",
    subheading:
      "Display beautiful ratings with custom icons, stars and colors.",
    icon: "pe-7s-diamond icon-gradient bg-warm-flame",

    myRate: 0
  }),

  methods: {}
};
</script>
