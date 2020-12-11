<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic Examples" class="main-card mb-3">
          <div>
            <toggle-button :labels="true" color="#82C7EB" />

            <toggle-button :value="true" name="phone" :labels="{checked: 'Android', unchecked: 'iPhone'}"
              :color="{checked: '#7DCE94', unchecked: '#82C7EB'}" :width="80"/>

            <toggle-button :width="120" :value="true" color="#BB99CD" :labels="{checked: 'Only left label!', unchecked: ''}" />

            <toggle-button :value="false" :width="120" color="#BB99CD" :labels="{checked: '', unchecked: 'Only right label!'}" />

            <toggle-button :value="false" :width="80" :labels="{unchecked: 'Disabled'}" :disabled="true"/>

            <toggle-button :value="false" :width="140" :color="{disabled: '#FF6699'}"
              :labels="{unchecked: 'Custom disabled color'}" :disabled="true" />

            <toggle-button :value="true" :labels="{checked: 'Button', unchecked: 'Collor'}"
              :color="{checked: '#7DCE94', unchecked: '#82C7EB'}"
              :width="80" :switchColor="{checked: 'linear-gradient(red, yellow)', unchecked: '#F2C00B'}" />

            <toggle-button :labels="true">
              <template slot="checked">
                <font-awesome-icon icon="check"></font-awesome-icon>
              </template>
              <template slot="unchecked">
                <font-awesome-icon icon="times"></font-awesome-icon>
              </template>
            </toggle-button>

            <toggle-button :width="120" :labels="{checked: '', unchecked: 'FA Icon Support'}">
              <template slot="checked">
                <font-awesome-icon icon="check"></font-awesome-icon>
              </template>
            </toggle-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Sizing & Options" class="main-card mb-3">
          <div>
            <span v-for="(item, i) in items" :key="i" style="padding: 5px">
              <toggle-button :value="item.value" :color="item.color" :sync="true"
                :labels="true" :key="i" @change="updateItemValue(i)" />
            </span>
          </div>
          <div class="divider"></div>
          <div style="padding-top: 20px;">
            <toggle-button id="changed-font" v-model="hodor" :width="220" :height="40" :speed="480"
              :color="{checked: '#BE3D62', unchecked: '#FF877B'}"
              :labels="{checked: 'HODOOOR!!!', unchecked: 'Hold the door?'}" />
            {{hodor}}
          </div>
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import { ToggleButton } from "vue-js-toggle-button";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCheck, faTimes);

export default {
  components: {
    PageTitle,
    ToggleButton,
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
    heading: "Toggle Switch",
    subheading:
      "Instead of regular checkboxes, use these toggle widgets for a better UX.",
    icon: "pe-7s-news-paper icon-gradient bg-grow-early",

    toggled: false,
    items: [
      { color: "var(--primary)", value: false },
      { color: "var(--danger)", value: false },
      { color: "var(--success)", value: false },
      { color: "var(--warning)", value: false },
      { color: "var(--info)", value: false },
      { color: "var(--focus)", value: false },
      { color: "var(--alternate)", value: false },
      { color: "var(--dark)", value: false }
    ],
    hodor: false
  }),

  mounted() {
    var i = 0;
    setInterval(() => {
      this.updateItemValue(i);
      i = (i + 1) % this.items.length;
    }, 600);
  },
  methods: {
    updateItemValue(index) {
      this.items[index].value = !this.items[index].value;
    }
  }
};
</script>
