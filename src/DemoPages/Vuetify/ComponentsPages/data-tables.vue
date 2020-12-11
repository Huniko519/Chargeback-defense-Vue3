<template>
  <div>
    <page-title :heading="heading" :subheading="subheading"></page-title>
    <layout-wrapper>
      <demo-card heading="Basic" subheading="The standard data-table contains data with no additional functionality. You can opt out of displaying table actions that allow you to control the pagination of information with the hide-actions prop.">
        <datatable1></datatable1>
      </demo-card>
      <demo-card heading="Slot no-data" subheading="The no-data slot can display custom HTML when there's no data.">
        <datatable2></datatable2>
      </demo-card>
      <demo-card heading="Slot: items and headers" subheading="The items and headers slots can accept either a collection of td/th tags, or if you want control of the entire row, a tr tag. In the latter case, you have to manually specify a key on the row regardless of the item-key value.">
        <datatable3></datatable3>
      </demo-card>
      <demo-card heading="Slot: headerCell" subheading="If you only want to apply some common markup or effect on each of the header cells, you can use the slot headerCell. In this example is has been used to apply a tooltip to each header.">
        <datatable4></datatable4>
      </demo-card>
      <demo-card heading="Slot: progress" subheading="There is also a progress slot for when you want to customize the display for the data table's loading state. By default this is an indeterminate v-progress-linear">
        <datatable5></datatable5>
      </demo-card>
      <demo-card heading="Slot: footer" subheading="There is also a footer slot for when you want to add some extra functionality to tables, for example per column filtering or search.">
        <datatable6></datatable6>
      </demo-card>
      <demo-card heading="Slot expand" subheading="The v-data-table component also supports expandable rows using the expand slot. By default expanding a row closes all remaining rows. You can use the prop expand on v-data-table to prevent expanded rows from closing when clicking on another row.">
        <datatable7></datatable7>
      </demo-card>
      <demo-card heading="Slot: pageText" subheading="You can customize the page text displaying the range and total items by using the pageText slot.">
        <datatable8></datatable8>
      </demo-card>
      <demo-card  heading="Selectable rows" subheading="Selectable rows allow you to perform an action on specific and all rows.">
        <datatable9></datatable9>
      </demo-card>
      <demo-card heading="Search with custom no-results slot" subheading="The data table exposes a search prop that allows you to filter your data.">
        <datatable10></datatable10>
      </demo-card>
      <demo-card heading="External pagination" subheading="Pagination can be controlled externally by using the pagination prop. Remember that you must apply the .sync modifier.">
        <datatable11></datatable11>
      </demo-card>
      <demo-card heading="External sorting" subheading="Sorting can also be controlled externally by using the pagination prop. Remember that you must apply the .sync modifier. You can also use the prop to set the default sorted column.">
        <datatable12></datatable12>
      </demo-card>
      <demo-card heading="Inline Editing" subheading="The v-edit-dialog component is used for inline-editing within data tables. You can block closing the dialog when clicked outside by adding the persistent prop.">
        <datatable13></datatable13>
      </demo-card>
      <demo-card heading="CRUD Actions" subheading="data-table with CRUD actions using a v-dialog component for editing each row">
        <datatable14></datatable14>
      </demo-card>
    </layout-wrapper>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle2.vue";
import LayoutWrapper from "../../../Layout/Components/LayoutWrapper";
import DemoCard from "../../../Layout/Components/DemoCard";

import datatable1 from "../Components/data-tables/usage";
import datatable2 from "../Components/data-tables/noData";
import datatable3 from "../Components/data-tables/headers";
import datatable4 from "../Components/data-tables/headerCell";
import datatable5 from "../Components/data-tables/progress";
import datatable6 from "../Components/data-tables/footer";
import datatable7 from "../Components/data-tables/expand";
import datatable8 from "../Components/data-tables/pageText";
import datatable9 from "../Components/data-tables/select";
import datatable10 from "../Components/data-tables/search";
import datatable11 from "../Components/data-tables/paginate";
import datatable12 from "../Components/data-tables/sort";
import datatable13 from "../Components/data-tables/editdialog";
import datatable14 from "../Components/data-tables/crud";

export default {
  components: {
    PageTitle,
    "layout-wrapper": LayoutWrapper,
    "demo-card": DemoCard,

    datatable1,
    datatable2,
    datatable3,
    datatable4,
    datatable5,
    datatable6,
    datatable7,
    datatable8,
    datatable9,
    datatable10,
    datatable11,
    datatable12,
    datatable13,
    datatable14
  },
  data: () => ({
    heading: "Data table",
    subheading:
      "The v-data-table component is used for displaying tabular data. Features include sorting, searching, pagination, inline-editing, header tooltips, and row selection.",
    icon: "pe-7s-plane icon-gradient bg-tempting-azure"
  }),

  methods: {}
};
</script>
