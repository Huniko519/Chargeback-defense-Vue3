<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-3">
          <v-select label="countryName" :options="options"></v-select>
          <br><br>
          <v-select :options="[{label: 'foo', value: 'Foo'}]"></v-select>
        </b-card>
        <b-card title="Multi select" class="main-card mb-3">
          <v-select multiple :options="options2" v-model="selected2"></v-select>
        </b-card>
        <b-card title="Add Tags" class="main-card mb-3">
          <v-select multiple taggable push-tags ></v-select>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Single Select" class="main-card mb-3">
          <multiselect v-model="selected3" :options="options3"> </multiselect>
        </b-card>
        <b-card title="Multi Select" class="main-card mb-3">
          <multiselect :options="options2" v-model="selected3" :multiple="true"
            :close-on-select="true" placeholder="Pick some">
          </multiselect>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>

  import PageTitle from "../../../Layout/Components/PageTitle.vue";
  import vSelect from 'vue-select'
  import Multiselect from 'vue-multiselect'

  export default {
    components: {
      PageTitle,
      'v-select': vSelect,
      Multiselect
    },
    data: () => ({
      heading: 'Input Selects',
      subheading: 'Create fancy multi select dropdown menus for a better user experience.',
      icon: 'pe-7s-gift icon-gradient bg-mixed-hopes',

      options: [
        { countryCode: "AU", countryName: "Australia" },
        { countryCode: "CA", countryName: "Canada" },
        { countryCode: "CN", countryName: "China" },
        { countryCode: "DE", countryName: "Germany" },
        { countryCode: "JP", countryName: "Japan" },
        { countryCode: "MX", countryName: "Mexico" },
        { countryCode: "CH", countryName: "Switzerland" },
        { countryCode: "US", countryName: "United States" }
      ],

      selected2: ['foo','bar'],
      options2: ['foo','bar','baz', 'Green', 'Blue', 'Orange'],

      selected3: null,
      options3: ['list', 'of', 'options']

    }),

  }
</script>
