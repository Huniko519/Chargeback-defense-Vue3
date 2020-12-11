<template>
    <div>
        <page-title :heading=heading :subheading=subheading></page-title>
        <layout-wrapper>
            <demo-card heading="Basic" subheading="With Combobox, you can allow a user to create new values that may not be present in a provided items list.">
                <combo1></combo1>
            </demo-card>
            <demo-card heading="No data with chips" subheading="In this example we utilize a custom no-data slot to provide context to the user when searching / creating items.">
                <combo2></combo2>
            </demo-card>
            <demo-card heading="Advanced custom options" subheading="The v-combobox improves upon the added functionality from v-select and v-autocomplete. This provides you with an expansive interface to create truly customized implementations.">
                <combo3></combo3>
            </demo-card>
            <demo-card heading="Multiple combobox" subheading="Previously known as tags - user is allowed to enter more than 1 value">
                <combo4></combo4>
            </demo-card>
        </layout-wrapper>
    </div>
</template>

<script>

    import PageTitle from "../../../Layout/Components/PageTitle2.vue";
    import LayoutWrapper from '../../../Layout/Components/LayoutWrapper';
    import DemoCard from '../../../Layout/Components/DemoCard';

    import combo1 from '../Components/combobox/usage';
    import combo2 from '../Components/combobox/usage';
    import combo3 from '../Components/combobox/usage';
    import combo4 from '../Components/combobox/usage';


    export default {
        components: {
            PageTitle,
            'layout-wrapper': LayoutWrapper,
            'demo-card': DemoCard,

            combo1,
            combo2,
            combo3,
            combo4
        },
        data: () => ({
            heading: 'Combobox',
            subheading: 'This is an example of multi-items and tags in selects.',
            icon: 'pe-7s-plane icon-gradient bg-tempting-azure',
        }),

        methods: {},

    }


</script>
