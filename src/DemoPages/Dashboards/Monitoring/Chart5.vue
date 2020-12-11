<template>
  <div class="example">
    <apexchart height="250" type="area" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  name: "AreaExample",
  components: {
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      chartOptions: {
        dataLabels: {
          enabled: false
        },

        chart: {
          height: 300,
          sparkline: {
            enabled: true
          }
        },

        stroke: {
          curve: "smooth"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"]
        },
        tooltip: {
          fixed: {
            enabled: false,
            position: "topRight"
          }
        }
      },
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100]
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41]
        }
      ]
    };
  }
};
</script>
