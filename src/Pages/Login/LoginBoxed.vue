<template>
    <div>
        <transition name="fade" mode="out-in" appear>
            <div class="h-100">
                <b-row class="h-100 no-gutters">
                    <b-col lg="4" class="d-none d-lg-block">
                        <div class="slider-light">
                            <slick ref="slick" :options="slickOptions6">
                                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-plum-plate" >
                                    <div class="slide-img-bg" />
                                    <div class="slider-content text-light">
                                        <h3>Dispute Management Solutions</h3>
                                        <p>Scale with the increase of processing without any additional resources.  Real time solutions for Risk management team.</p>
                                    </div>
                                </div>
                                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-premium-dark">
                                    <div class="slide-img-bg" />
                                    <div class="slider-content text-light">
                                        <h3>Advanced Reduction ToolsI</h3>
                                        <p>
                                            Chargeback Defense offers advanced reduction tools unique to the industry.  Our layered protection offers unique solutions for each vertical.
                                        </p>
                                    </div>
                                </div>
                                <div class="position-relative h-100 d-flex justify-content-center align-items-center bg-sunny-morning">
                                    <div class="slide-img-bg opacity-6" />
                                    <div class="slider-content text-light">
                                        <h3>Merchant Onboarding API</h3>
                                        <p>
                                            Create new Merchant Accounts automatically. Eliminates forms, spreadsheets and manual entry.
                                        </p>
                                    </div>
                                </div>
                            </slick>
                        </div>
                    </b-col>
                    <b-col lg="8" md="12" class="h-100 d-flex bg-white justify-content-center align-items-center">
                        <VueElementLoading :active="showLoader" spinner="line-scale" color="var(--info)" />
                        <b-col lg="9" md="10" sm="12" class="mx-auto app-login-box">
                            <div class="app-logo" />
                            <h4 class="mb-0">
                                <div>Welcome back,</div>
                                <span>Please sign in to your account.</span>
                            </h4>
                            <div class="divider" />
                            <div>
                                <Form>
                                    <b-row form>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="exampleInput1">Username</Label>
                                                <b-form-input v-model="form.username" type="text"  name="email" id="exampleInput1" placeholder="Username" />
                                            </b-form-group>
                                        </b-col>
                                        <b-col md="6">
                                            <b-form-group>
                                                <Label for="exampleInput2">Password</Label>
                                                <b-form-input v-model="form.password" type="password" name="password" id="exampleInput2" placeholder="Password" />
                                            </b-form-group>
                                        </b-col>
                                    </b-row>
                                    <div class="divider" />
                                    <div class="d-flex align-items-center">
                                        <div class="ml-auto">
                                            <!--<a href="javascript:void(0);" class="btn-lg btn btn-link"> Recover Password </a>-->
                                            <b-button variant="primary" size="lg" @click="login">Login to Dashboard</b-button>
                                            <span class="red--text" style="margin-left:20px;">{{msg}}</span>
                                        </div>
                                    </div>
                                </Form>
                            </div>
                        </b-col>
                    </b-col>
                </b-row>
            </div>
        </transition>
    </div>
</template>

<script>
    import Slick from "vue-slick";
    import VueElementLoading from "vue-element-loading";

    export default {
        components: {
            Slick,
            VueElementLoading
        },
        data: () => ({
            slickOptions6: {
                dots: true,
                infinite: true,
                speed: 500,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1,
                fade: false,
                initialSlide: 0,
                autoplay: false,
                adaptiveHeight: true
            },
            msg: '',
            form: {
                username: '',
                password: ''
            },
            showLoader: false,
            slide: 0,
            sliding: null
        }),

        methods: {
            handleClick(newTab) {
                this.currentTab = newTab;
            },
            next() {
                this.$refs.slick.next();
            },

            prev() {
                this.$refs.slick.prev();
            },

            reInit() {
                this.$nextTick(() => {
                    this.$refs.slick.reSlick();
                });
            },

            onSlideStart() {
                this.sliding = true;
            },
            onSlideEnd() {
                this.sliding = false;
            },
            login() {
                this.showLoader = true;
                let data = {username: this.form.username, password: this.form.password}
                this.$store.dispatch('login/loginUser', data).then(isloggedin => {
                    console.log('log',isloggedin);
                    if (isloggedin) {
                        this.$router.push({name: 'customersdashboard'})
                    }else{
                        this.msg = 'Invalid Login';
                        this.showLoader = false;
                    }
                })
            }
        },
        mounted() {
            this.$store.dispatch('login/isAuth').then(isloggedin => {
                if (isloggedin) {
                    this.$router.push({name: 'customersdashboard'})
                }
            })
        }

    };
</script>
