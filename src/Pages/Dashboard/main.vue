<template>
    <div>Dashboard</div>
</template>

<script>
    import {mapActions} from "vuex";

    export default {
        methods: {
            ...mapActions('warpliteapi', ['getCbCustomerChargebacks']),
        },
        async mounted() {
            console.log('dash loaded');
            this.getCbCustomerChargebacks()
        }
    }
</script>

<style scoped>

</style>