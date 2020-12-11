<template>
  <div class="app-container app-theme-white">
    <transition name="fade" mode="out-in" appear>
      <Header :headerbg="headercolor" />
    </transition>
    <transition name="fade" mode="out-in" appear>
      <Sidebar :sidebarbg="sidebarcolor" />
    </transition>
    <div class="app-main__outer">
      <div class="app-main__inner p-0">
        <slot></slot>
      </div>

      <transition name="fade" mode="out-in" appear>
        <Footer />
      </transition>
    </div>
    <!-- Modal Component -->
    <b-modal id="modal1" title="Bootstrap-Vue">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
    <b-modal id="modallg" size="lg" title="Large Modal">Hello Modal!</b-modal>
    <b-modal id="modalsm" size="sm" title="Small Modal">Hello Modal!</b-modal>

    <div class="ui-theme-settings">
      <button type="button" class="btn-open-options btn btn-warning"
        v-bind:class="{ 'is-active' : isConfigOpen }" @click="toggleConfig('settings-open')">
        <font-awesome-icon icon="cog" size="2x" spin />
      </button>
      <div class="theme-settings__inner">
        <VuePerfectScrollbar class="scrollbar-container" v-once>
          <div class="theme-settings__options-wrapper">
            <h3 class="themeoptions-heading">
              <div>Header Style</div>
              <button type="button" @click="headercolor = ''"
                class="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm">
                Restore Default
               </button>
            </h3>
            <div class="p-3">
              <ul class="list-group">
                <li class="list-group-item">
                  <h5 class="pb-2">Choose Color Scheme</h5>
                  <div class="theme-settings-swatches">
                    <div v-for="color in colors" v-bind:key="color" @click="headercolor = color"
                      :class="color" class="swatch-holder swatch-holder-md">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            <h3 class="themeoptions-heading">
              <div>Sidebar Style</div>
              <button type="button" @click="sidebarcolor = ''"
                class="btn-pill btn-shadow btn-wide ml-auto btn btn-focus btn-sm">Restore Default
              </button>
            </h3>
            <div class="p-3">
              <ul class="list-group">
                <li class="list-group-item">
                  <h5 class="pb-2">Choose Color Scheme</h5>
                  <div class="theme-settings-swatches">
                    <div v-for="color in colors" v-bind:key="color"
                      @click="sidebarcolor = color" :class="color" class="swatch-holder swatch-holder-md">
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </VuePerfectScrollbar>
      </div>
    </div>
  </div>
</template>

<script>
import Header from "../Components/Header";
import Sidebar from "../Components/Sidebar";
import Footer from "../Components/Footer";

import VuePerfectScrollbar from "vue-perfect-scrollbar";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCog);

export default {
  name: "app",
  components: {
    Header,
    Sidebar,
    Footer,
    VuePerfectScrollbar,
    "font-awesome-icon": FontAwesomeIcon
  },

  methods: {
    toggleConfig(className) {
      const el = document.body;
      this.isConfigOpen = !this.isConfigOpen;

      if (this.isConfigOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  },

  data() {
    return {
      headercolor: null,
      sidebarcolor: null,

      isConfigOpen: false,

      colors: [
        "bg-primary text-lighter",
        "bg-secondary text-lighter",
        "bg-success text-lighter",
        "bg-info text-lighter",
        "bg-warning text-darker",
        "bg-danger text-lighter",
        "bg-light text-darker",
        "bg-dark text-lighter",
        "bg-focus text-lighter",
        "bg-alternate text-lighter",

        "bg-vicious-stance text-lighter",
        "bg-midnight-bloom text-lighter",
        "bg-night-sky text-lighter",
        "bg-slick-carbon text-lighter",
        "bg-asteroid text-lighter",
        "bg-royal text-lighter",
        "bg-warm-flame text-darker",
        "bg-night-fade text-darker",
        "bg-sunny-morning text-darker",
        "bg-tempting-azure text-darker",
        "bg-amy-crisp text-darker",
        "bg-heavy-rain text-darker",
        "bg-mean-fruit text-darker",
        "bg-malibu-beach text-darker",
        "bg-deep-blue text-darker",
        "bg-ripe-malin text-lighter",
        "bg-arielle-smile text-lighter",
        "bg-plum-plate text-lighter",
        "bg-happy-fisher text-darker",
        "bg-happy-itmeo text-darker",
        "bg-mixed-hopes text-lighter",
        "bg-strong-bliss text-lighter",
        "bg-grow-early text-lighter",
        "bg-love-kiss text-lighter",
        "bg-premium-dark text-lighter",
        "bg-happy-green text-lighter"
      ]
    };
  }
};
</script>
