<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="Pagination displays all pages if parent container is big enough.">
        <pagination1></pagination1>
      </demo-card>
      <demo-card heading="Long" subheading="When the number of page buttons exceeds the parent container, the component will truncate the list.">
        <pagination2></pagination2>
      </demo-card>
      <demo-card heading="Limit" subheading="You can also manually set the maximum number of visible page buttons with the total-visible prop.">
        <pagination3></pagination3>
      </demo-card>
      <demo-card heading="Round" subheading="The alternate style for pagination is circle pages.">
        <pagination4></pagination4>
      </demo-card>
      <demo-card heading="Icons" subheading="Previous and next page icons can be customized with prev-icon and next-icon props.">
        <pagination5></pagination5>
      </demo-card>
      <demo-card heading="Disabled" subheading="Pagination items can be manually deactivated.">
        <pagination6></pagination6>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import pagination1 from "../Components/paginations/usage";
import pagination2 from "../Components/paginations/long";
import pagination3 from "../Components/paginations/limit";
import pagination4 from "../Components/paginations/round";
import pagination5 from "../Components/paginations/icons";
import pagination6 from "../Components/paginations/disabled";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    pagination1,
    pagination2,
    pagination3,
    pagination4,
    pagination5,
    pagination6
  },
  data: () => ({
    heading: "Pagination",
    subheading:
      "The v-pagination component is used to separate long sets of data so that it is easier for a user to consume information. Depending on the length provided, the pagination component will automatically scale.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
