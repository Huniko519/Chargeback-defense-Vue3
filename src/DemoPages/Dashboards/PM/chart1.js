import { Line } from 'vue-chartjs'

export default {
    extends: Line,
    props: {
        labels: {
            type: Array,
            default: () => ['January', 'February', 'March', 'April', 'May', 'June', 'July']
        },
        datalabel: {
            type: String,
            default: 'Downloads per Week'
        },
        chartdata: {
            type: Array,
            default: () => [60, 55, 32, 10, 2, 12, 53]
        }
    },
    data() {
        return {
            gradient: null
        }
    },
    mounted() {
        this.gradient = this.$refs.canvas.getContext('2d').createLinearGradient(55, 15, 55, 250)


        this.gradient.addColorStop(1, 'rgba(131, 88, 138, .2)')
        this.gradient.addColorStop(0, 'rgba(131, 88, 138, 1)');



        this.renderChart({
            labels: this.labels,
            datasets: [
                {
                    label: this.datalabel,
                    borderColor: '#83588a',
                    borderWidth: 3,
                    backgroundColor: this.gradient,
                    data: this.chartdata
                }
            ]
        }, { responsive: true, maintainAspectRatio: false })

    }
}