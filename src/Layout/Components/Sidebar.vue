<template>
    <div :class="sidebarbg" class="app-sidebar sidebar-shadow"
         @mouseover="toggleSidebarHover('add','closed-sidebar-open')"
         @mouseleave="toggleSidebarHover('remove','closed-sidebar-open')">
        <div class="app-header__logo">
            <div class="logo-src"/>
            <div class="header__pane ml-auto">
                <button type="button" class="hamburger close-sidebar-btn hamburger--elastic"
                        v-bind:class="{ 'is-active' : isOpen }" @click="toggleBodyClass('closed-sidebar')">
          <span class="hamburger-box">
            <span class="hamburger-inner"></span>
          </span>
                </button>
            </div>
        </div>
        <div class="app-sidebar-content">
            <VuePerfectScrollbar class="app-sidebar-scroll" v-once>
                <sidebar-menu showOneChild :menu="menu"/>
            </VuePerfectScrollbar>
        </div>
    </div>
</template>

<script>
    import {SidebarMenu} from "vue-sidebar-menu";
    import VuePerfectScrollbar from "vue-perfect-scrollbar";

    export default {
        components: {
            SidebarMenu,
            VuePerfectScrollbar
        },
        data() {
            return {
                isOpen: false,
                sidebarActive: false,

                menu: [
                    {
                        header: true,
                        title: "Main Navigation"
                    },
                    {
                        title: "Customers",
                        icon: "pe-7s-users",
                        child: [
                            {
                                href: "/customers/dashboard",
                                title: "Dashboard"
                            },
                            /*
                            {
                                href: "/customers/list",
                                title: "List"
                            },

                            {
                                href: "/customers/invoices",
                                title: "Invoices"
                            },
                            */
                            {
                                href: "/customers/merchants",
                                title: "Merchants"
                            }
                        ]
                    },
                    {
                        title: "Alerts",
                        icon: "pe-7s-attention",
                        child: [
                            {
                                href: "/alerts/myalerts",
                                title: "My Alerts"
                            },
                        ]
                    },
                    {
                        title: "Chargebacks",
                        icon: "pe-7s-refresh-2",
                        child: [
                            /*
                            {
                                href: "/chargebacks/dashboard",
                                title: "Dashboard"
                            },
                            */
                            {
                                href: "/chargebacks/list",
                                title: "My Chargebacks"
                            }
                        ]
                    },
                    /*
                    {
                        title: "Messages",
                        icon: "pe-7s-rocket",
                        child: [
                            {
                                href: "/messages/send",
                                title: "Send"
                            },
                            {
                                href: "/messages/inbox",
                                title: "Inbox"
                            },
                            {
                                href: "/messages/chat",
                                title: "Chat"
                            },
                            {
                                href: "/messages/reports",
                                title: "Reports"
                            }
                        ]
                    }
                     */
                ],
                collapsed: true,

                windowWidth: 0
            };
        },
        props: {
            sidebarbg: String
        },
        methods: {
            toggleBodyClass(className) {
                const el = document.body;
                this.isOpen = !this.isOpen;

                if (this.isOpen) {
                    el.classList.add(className);
                } else {
                    el.classList.remove(className);
                }
            },
            toggleSidebarHover(add, className) {
                const el = document.body;
                this.sidebarActive = !this.sidebarActive;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth > "992") {
                    if (add === "add") {
                        el.classList.add(className);
                    } else {
                        el.classList.remove(className);
                    }
                }
            },
            getWindowWidth() {
                const el = document.body;

                this.windowWidth = document.documentElement.clientWidth;

                if (this.windowWidth < "1350") {
                    el.classList.add("closed-sidebar", "closed-sidebar-md");
                } else {
                    el.classList.remove("closed-sidebar", "closed-sidebar-md");
                }
            }
        },
        mounted() {
            this.$nextTick(function () {
                window.addEventListener("resize", this.getWindowWidth);

                //Init
                this.getWindowWidth();
            });
        },

        beforeDestroy() {
            window.removeEventListener("resize", this.getWindowWidth);
        }
    };
</script>
