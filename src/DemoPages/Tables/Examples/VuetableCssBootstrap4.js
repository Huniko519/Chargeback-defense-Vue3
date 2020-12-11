// Bootstrap4 with FontAwesome
export default {
    table: {
        tableWrapper: "",
        tableHeaderClass: "mb-0",
        tableBodyClass: "mb-0",
        tableClass: "table table-bordered table-hover",
        loadingClass: "loading",
        ascendingIcon: "fa fa-chevron-up",
        descendingIcon: "fa fa-chevron-down",
        ascendingClass: "sorted-asc",
        descendingClass: "sorted-desc",
        sortableIcon: "",
        detailRowClass: "vuetable-detail-row",
        handleIcon: "fa-bars text-secondary",
        renderIcon(classes, options) {
            return `<i class="${classes.join(" ")}" ${options}></span>`;
        }
    },

    pagination: {}
};
