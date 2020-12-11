<template>
    <v-menu ref="menu1" v-model="menu1" :close-on-content-click="false" :nudge-right="40" lazy
            transition="scale-transition" offset-y full-width max-width="290px" min-width="290px">
        <template v-slot:activator="{ on }">
            <v-text-field v-model="dateFormatted" :label="label" hint="YYYY-MM-DD format"
                          persistent-hint prepend-icon="event" @blur="date = parseDate(dateFormatted)"
                          v-on="on">
            </v-text-field>
        </template>
        <v-date-picker v-model="date" no-title @input="menu1 = false"></v-date-picker>
    </v-menu>
</template>

<script>
    export default {
        props: {
            name: {type: String},
            label: {type: String}
        },
        data: vm => ({
            date: new Date().toISOString().substr(0, 10),
            dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
            menu1: false,
        }),

        computed: {
            computedDateFormatted() {
                return this.formatDate(this.date);
            }
        },
        watch: {
            date() {
                this.dateFormatted = this.formatDate(this.date);
                this.$emit('getDate', {name: this.$props.name, date: this.dateFormatted});
            }
        },

        methods: {
            formatDate(date) {
                if (!date) return null;

                const [year, month, day] = date.split("-");
                return `${year}-${month}-${day}`;
            },
            parseDate(date) {
                if (!date) return null;

                const [year, month, day ] = date.split("-");
                return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
            }
        }
    };
</script>
