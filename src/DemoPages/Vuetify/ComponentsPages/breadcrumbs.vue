<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="By default, breadcrumbs use a text divider. This can be any string.">
        <breadcrumb3></breadcrumb3>
      </demo-card>
      <demo-card heading="Icon dividers" subheading="For the icon variant, breadcrumbs can use any icon in Material Design Icons.">
        <breadcrumb1></breadcrumb1>
      </demo-card>
      <demo-card heading="Item slot" subheading="You can use the scoped item slot to customize each breadcrumb.">
        <breadcrumb2></breadcrumb2>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import breadcrumb1 from "../Components/breadcrumbs/iconDividers";
import breadcrumb2 from "../Components/breadcrumbs/itemSlot";
import breadcrumb3 from "../Components/breadcrumbs/usage";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    breadcrumb1,
    breadcrumb2,
    breadcrumb3
  },
  data: () => ({
    heading: "Alerts",
    subheading:
      "This is an example dashboard created using build-in elements and components.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
