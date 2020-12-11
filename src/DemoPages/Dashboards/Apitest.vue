<template>
    <div id="sites">
        test this vue
    </div>
</template>

<script>
    import { mapActions } from 'vuex'
    export default {
        name: "Apitest.vue",
        methods: {
            ...mapActions('warpliteapi', ['login','getCbdisputes']),
        },
        created () {
            console.log('page loaded');
            //this.getCbdisputes();
            this.login();
        }
    }
</script>

<style scoped>

</style>