<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>asd
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Content Boxes",
    subheading:
      "These boxes are usually used for building dashboards elements centered around content.",
    icon: "pe-7s-bluetooth icon-gradient bg-happy-fisher"
  }),

  methods: {}
};
</script>
