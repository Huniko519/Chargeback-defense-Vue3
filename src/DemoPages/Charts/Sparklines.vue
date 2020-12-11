<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick"/>
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-row>
          <b-col md="4">
            <b-card class="main-card mb-3">
              <trend :data="[0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0]" :gradient="['#3f6ad8']"
                stroke-width="2" stroke-linecap="round" auto-draw smooth>
              </trend>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="main-card mb-3">
              <trend :data="[0, 2, 5, 9, 5, 5, 9, 5, 10, 3, 5, 8, 2, 9, 0]" :gradient="['#d92550']" stroke-width="2"
                stroke-linecap="round" auto-draw smooth>
              </trend>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="main-card mb-3">
              <trend :data="[0, 2, 5, 0, 1, 8, 9, 5, 10, 3, 5, 0, 2, 9, 0]" :gradient="['#3ac47d']"
                stroke-width="4" stroke-linecap="round" auto-draw smooth>
              </trend>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="main-card mb-3">
              <trend :data="[0, 2, 5, 0, 1, 8, 9, 5, 10, 3, 5, 0, 2, 9, 0]" :gradient="['#16aaff']"
                stroke-width="4" stroke-linecap="round" auto-draw smooth>
              </trend>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="main-card mb-3">
              <trend :data="[0, 2, 5, 9, 5, 5, 9, 5, 10, 3, 5, 8, 2, 9, 0]" :gradient="['#4facfe', '#00f2fe']"
                stroke-width="2" stroke-linecap="round" auto-draw smooth>
              </trend>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card class="main-card mb-3">
              <trend :data="[0, 2, 5, 0, 1, 8, 9, 5, 10, 3, 5, 0, 2, 9, 0]" :gradient="['#a18cd1', '#fbc2eb']"
                stroke-width="4" stroke-linecap="round" auto-draw smooth>
              </trend>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <b-row>
          <b-col md="3">
            <b-card class="main-card mb-3 text-center">
              <sparkline :indicatorStyles="spIndicatorStyles1">
                <sparklineLine :data="spData1" :limit="spData1.length" :styles="spLineStyles1" />
              </sparkline>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card class="main-card mb-3 text-center">
              <sparkline>
                <sparklineCurve :data="spData2" :limit="spData2.length" :styles="spCurveStyles2" />
              </sparkline>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card class="main-card mb-3 text-center">
              <sparkline width="100" height="30" :indicatorStyles="spIndicatorStyles3" :tooltipProps="spTooltipProps3">
                <sparklineCurve :data="spData3" :limit="spData3.length" :spotlight="spIndex3"
                  :styles="spCurveStyles3" :spotStyles="spSpotStyles3" :spotProps="spSpotProps3"
                  :refLineType="spRefLineType3" :refLineStyles="spRefLineStyles3" :textStyles="spTextStyles3"/>
              </sparkline>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card class="main-card mb-3 text-center">
              <sparkline>
                <sparklineBar :data="spData4" :margin="spMargin4" :limit="spData4.length"
                  :styles="spBarStyles4" :refLineStyles="spRefLineStyles4"/>
              </sparkline>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card class="main-card mb-3 text-center">
              <sparkline :styles="spStyles5">
                <sparklineLine :data="spData5" :limit="spData5.length" :styles="spLineStyles5" />
                <sparklineLine :data="spData6" :limit="spData6.length" :styles="spLineStyles6" />
              </sparkline>
            </b-card>
          </b-col>
          <b-col md="3">
            <b-card class="main-card mb-3 text-center">
              <sparkline>
                <sparklineLine :data="spData7" :hasSpot="spHasSpot7" :limit="20" :styles="spLineStyles7" />
                <sparklineBar :data="spData8" :limit="20" :styles="spBarStyles8" />
              </sparkline>
            </b-card>
          </b-col>
        </b-row>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import Trend from "vuetrend";
import Sparkline from "vue-sparklines";

const TABS = [
  {
    title: "Trend Sparklines",
    value: "tab1"
  },
  {
    title: "Vue2 Sparklines",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs,
    trend: Trend,
    Sparkline
  },
  data: () => ({
    heading: "Sparklines",
    subheading:
      "Use these Sparklines charts inside other components or on their own.",
    icon: "pe-7s-pendrive icon-gradient bg-mean-fruit",

    tabs: TABS,
    currentTab: "tab1",

    spData1: (() => {
      const len = 20;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spIndicatorStyles1: false,
    spLineStyles1: {
      stroke: "#54a5ff",
      strokeWidth: "2"
    },

    spData2: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spCurveStyles2: {
      stroke: "#54a5ff"
    },

    spData3: (() => {
      const len = 15;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spCurveStyles3: {
      stroke: "#54a5ff",
      fill: "#000"
    },
    spSpotStyles3: {
      fill: "#54a5ff"
    },
    spSpotProps3: {
      size: 2
    },
    spRefLineType3: "avg",
    spRefLineStyles3: {
      stroke: "#d14",
      strokeOpacity: 1,
      strokeDasharray: "2, 2"
    },
    spIndex3: 3,
    spTextStyles3: {
      fill: "#d14",
      fontSize: "12"
    },
    spIndicatorStyles3: {
      stroke: "#000"
    },
    spTooltipProps3: {
      formatter(val) {
        return `Data：<label style="color:${val.color};font-weight:bold;">${val.value}</label>`;
      }
    },

    spData4: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    // margin
    spMargin4: 2,
    spBarStyles4: {
      fill: "#54a5ff"
    },
    spLineStyles4: {
      stroke: "#d14"
    },
    spRefLineStyles4: {
      stroke: "#d14",
      strokeOpacity: 1,
      strokeDasharray: "3, 3"
    },

    spStyles5: {
      background: "#ddd"
    },
    spData5: (() => {
      const len = 10;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spLineStyles5: {
      stroke: "#54a5ff"
    },
    spData6: (() => {
      const len = 30;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spLineStyles6: {
      stroke: "#d14"
    },

    spData7: (() => {
      const len = 30;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spHasSpot7: true,
    spLineStyles7: {
      stroke: "#54a5ff",
      strokeWidth: 2
    },
    spData8: (() => {
      const len = 20;
      return Array.from(
        {
          length: len
        },
        () => Math.floor(Math.random() * len)
      );
    })(),
    spBarStyles8: {
      fill: "#d14",
      fillOpacity: 0.3
    }
  }),

  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    }
  }
};
</script>
