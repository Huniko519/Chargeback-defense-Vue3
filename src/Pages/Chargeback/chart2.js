//Importing Line class from the vue-chartjs wrapper
import {Line} from 'vue-chartjs'
import {mapGetters} from 'vuex'

//Exporting this so it can be used in other components
export default {
    extends: Line,
    computed: {
        ...mapGetters({
            'latestmerchantChargebacksLine': 'warpliteapi/getLatestMerchantChargebacks',
        }),
    },
    data() {
        return {
            dataDefault: {

                label: '',
                fill: true,
                lineTension: 0.5,
                backgroundColor: 'rgba(48, 177, 255, 0.2)',
                borderColor: '#30b1ff',
                borderCapStyle: 'round',
                borderDash: [],
                borderWidth: 4,
                borderDashOffset: 0.0,
                borderJoinStyle: 'round',
                pointBorderColor: '#30b1ff',
                pointBackgroundColor: '#ffffff',
                pointBorderWidth: 5,
                pointHoverRadius: 6,
                pointHoverBackgroundColor: '#ffffff',
                pointHoverBorderColor: '#30b1ff',
                pointHoverBorderWidth: 2,
                pointRadius: 4,
                pointHitRadius: 10,
                data: []

            },
            datacollection: {
                //Data to be represented on x-axis
                //labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August','September', 'October'],
                labels: [],
                datasets: []
            },
            //Chart.js options that controls the appearance of the chart
            options: {
                layout: {
                    padding: {
                        left: 0,
                        right: 0,
                        top: 0,
                        bottom: 0
                    }
                },
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero: true
                        },
                        gridLines: {
                            display: false
                        }
                    }],
                    xAxes: [{
                        ticks: {
                            display: false
                        },
                        gridLines: {
                            display: false
                        }
                    }]
                },
                legend: {
                    display: false
                },
                responsive: true,
                maintainAspectRatio: true
            }
        }
    },
    methods: {
        loadData(){
            let thedata = this.latestmerchantChargebacksLine

            //let isnum = /^\d+$/.test(val);
            let isnum = 0;
            let numObj = {}

            Object.keys(thedata).forEach(pd => {
                isnum = /^\d+$/.test(pd);
                if(isnum) {
                    this.datacollection.labels.push('')
                    numObj[parseInt(pd)] = thedata[pd]
                }
            })
            /*
            Object.keys(numObj).forEach(no => {
                let pointData = {}
                pointData.data = []
                pointData.label = 'January'
                pointData.data.push(numObj[no])

            })
            */
            let allValues = Object.values(numObj)
            console.log('vals',allValues)

            this.dataDefault.data = allValues
            this.datacollection.datasets.push(this.dataDefault)
            this.renderChart(this.datacollection, this.options)

        }
    },
    mounted() {
        //renderChart function renders the chart with the datacollection and options object.

        //this.renderChart(this.datacollection, this.options)
        let rb = this.$store.state.warpliteapi.cbdisputesLoaded
        if (rb) {
            this.loadData()
        } else {
            let unwatch = this.$store.watch((state) => state.warpliteapi.cbdisputesLoaded , () => {
                this.loadData()
                unwatch()
            })
        }



    }
}