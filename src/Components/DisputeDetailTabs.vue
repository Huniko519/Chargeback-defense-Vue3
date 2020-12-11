<template>
    <v-tabs class="tabwidth" centered icons-and-text>
        <v-tabs-slider color="yellow"></v-tabs-slider>

        <v-tab href="#disputedetail">
            Dispute Details
        </v-tab>

        <v-tab href="#disputenotes">
            Dispute Notes
        </v-tab>

        <v-tab-item :value="'disputedetail'">
            <v-card flat>
                <v-card-text class="tabInfo">
                    <b-table thead-class="hidden_header" :items="disputeData"></b-table>
                </v-card-text>
            </v-card>
        </v-tab-item>
        <v-tab-item :value="'disputenotes'">
            <v-card flat>
                <v-card-text class="tabInfo">Dispute Detail</v-card-text>
            </v-card>
        </v-tab-item>
    </v-tabs>
</template>

<script>
    export default {
        props: ["disputeData"]
    };
</script>

<style>
    .hidden_header {
        display: none;
    }

    .tabwidth {width: 100%;}

    .tabInfo {
        height: 250px;
        border:1px solid #cccccc;
    }
</style>
