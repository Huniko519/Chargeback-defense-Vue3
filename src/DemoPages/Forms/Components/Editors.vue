<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-card class="main-card mb-3">
          <quill-editor v-model="content" ref="myQuillEditor" :options="editorOption"></quill-editor>
        </b-card>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-card class="main-card mb-3">
          <ckeditor :editor="editor2" v-model="editorData" :config="editorConfig"></ckeditor>
        </b-card>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import { quillEditor } from "vue-quill-editor";
import CKEditor from "@ckeditor/ckeditor5-vue";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const TABS = [
  {
    title: "Quill Editor",
    value: "tab1"
  },
  {
    title: "ckEditor",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,
    quillEditor,
    ckeditor: CKEditor.component
  },
  data: () => ({
    heading: "WYSIWYG Editors",
    subheading: "Need to add formatting to your forms? Use these Vue2 widgets.",
    icon: "pe-7s-like icon-gradient bg-love-kiss",

    tabs: TABS,
    currentTab: "tab1",

    editor2: ClassicEditor,
    editorData: "<p>Content of the editor.</p>",
    editorConfig: {
      // The configuration of the editor.
    },

    content:
      "" +
      "<h1>This is a heading</h1><br><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>\n" +
      "\n" +
      "<p>Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.</p>\n" +
      "\n" +
      "<p>In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>\n" +
      "\n" +
      "<p>Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus. Nullam accumsan lorem in dui. Cras ultricies mi eu turpis hendrerit fringilla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; In ac dui quis mi consectetuer lacinia. Nam pretium turpis et arcu. Duis arcu tortor, suscipit eget, imperdiet nec, imperdiet iac</p>",
    editorOption: {
      // some quill options
    }
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  },

  computed: {
    editor() {
      return this.$refs.myQuillEditor.quill;
    }
  }
};
</script>

<style lang="css">
@import "~quill/dist/quill.core.css";
@import "~quill/dist/quill.snow.css";
@import "~quill/dist/quill.bubble.css";
</style>


