<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Card Title" class="main-card mb-3">
          <textarea-autosize class="form-control" placeholder="Type something here..." ref="someName"
            :min-height="30" :max-height="200"></textarea-autosize>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Card Title" class="main-card mb-3">
          <textarea-autosize class="form-control" placeholder="Type something here..."
            ref="someName" :min-height="30" :max-height="150">
          </textarea-autosize>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import Vue from "vue";
import VueTextareaAutosize from "vue-textarea-autosize";

Vue.use(VueTextareaAutosize);

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Textarea Autosize",
    subheading: "Create textareas that grow in height based on their content.",
    icon: "pe-7s-switch icon-gradient bg-plum-plate"
  }),

  methods: {}
};
</script>
