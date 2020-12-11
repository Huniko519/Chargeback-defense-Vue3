<template>
  <div>
    <div class="app-inner-layout chat-layout">
      <div class="app-inner-layout__header text-white bg-premium-dark">
        <div class="app-page-title">
          <div class="page-title-wrapper">
            <div class="page-title-heading">
              <div class="page-title-icon">
                <i class="pe-7s-umbrella icon-gradient bg-sunny-morning"></i>
              </div>
              <div>
                Chat
                <div class="page-title-subheading">ArchitectUI HTML Bootstrap 4 Dashboard Template</div>
              </div>
            </div>
            <div class="page-title-actions">
              <b-button v-b-tooltip.hover variant="warning" title="Example Tooltip" class="btn-shadow mr-3">
                <font-awesome-icon icon="star" />
              </b-button>

              <div class="d-inline-block">
                <b-dropdown toggle-class="btn-shadow" menu-class="dropdown-menu-lg" variant="info" right>
                  <span slot="button-content">
                    <span class="btn-icon-wrapper pr-2 opacity-7">
                      <font-awesome-icon icon="business-time" />
                    </span>
                    Buttons
                  </span>
                  <div class="dropdown-menu-header">
                    <div class="dropdown-menu-header-inner bg-plum-plate">
                      <div class="menu-header-image dd-header-bg-1"></div>
                      <div class="menu-header-content text-white">
                        <h5 class="menu-header-title">Grid Dashboard</h5>
                        <h6 class="menu-header-subtitle">Easy grid navigation inside dropdowns</h6>
                      </div>
                    </div>
                  </div>
                  <ul class="nav flex-column">
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-inbox"></i>
                        <span>Inbox</span>
                        <div class="ml-auto badge badge-pill badge-secondary">86</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-book"></i>
                        <span>Book</span>
                        <div class="ml-auto badge badge-pill badge-danger">5</div>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a href="javascript:void(0);" class="nav-link">
                        <i class="nav-link-icon lnr-picture"></i>
                        <span>Picture</span>
                      </a>
                    </li>
                    <li class="nav-item">
                      <a disabled href="javascript:void(0);" class="nav-link disabled">
                        <i class="nav-link-icon lnr-file-empty"></i>
                        <span>File Disabled</span>
                      </a>
                    </li>
                  </ul>
                </b-dropdown>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="app-inner-layout__wrapper">
        <div class="app-inner-layout__content card">
          <div class="table-responsive">
            <div class="app-inner-layout__top-pane">
              <div class="pane-left">
                <div class="mobile-app-menu-btn">
                  <button type="button" class="hamburger hamburger--elastic"
                    v-bind:class="{ 'is-active' : isMobileOpen }" @click="toggleLayoutClass('open-mobile-menu')">
                    <span class="hamburger-box">
                      <span class="hamburger-inner"></span>
                    </span>
                  </button>
                </div>
                <div class="avatar-icon-wrapper mr-2">
                  <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                  <div class="avatar-icon avatar-icon-xl rounded">
                    <img width="82" src="@/assets/images/avatars/1.jpg" alt />
                  </div>
                </div>
                <h4 class="mb-0 text-nowrap">
                  Chad Evans
                  <div class="opacity-7">
                    Last Seen Online:
                    <span class="opacity-8">10 minutes ago</span>
                  </div>
                </h4>
              </div>
              <div class="pane-right">
                <button type="button" class="ml-2 btn btn-primary">
                  <span class="opacity-7 mr-1">
                    <font-awesome-icon icon="cog" />
                  </span>
                  Actions
                </button>
              </div>
            </div>
            <div class="chat-wrapper">
              <div class="chat-box-wrapper">
                <div>
                  <div class="avatar-icon-wrapper mr-1">
                    <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon avatar-icon-lg rounded">
                      <img src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="chat-box">
                    But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.
                  </div>
                  <small class="opacity-6">
                    <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                  </small>
                </div>
              </div>
              <div class="float-right">
                <div class="chat-box-wrapper chat-box-wrapper-right">
                  <div>
                    <div class="chat-box">
                      Expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.
                    </div>
                    <small class="opacity-6">
                      <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                    </small>
                  </div>
                  <div>
                    <div class="avatar-icon-wrapper ml-1">
                      <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                      <div class="avatar-icon avatar-icon-lg rounded">
                        <img src="@/assets/images/avatars/2.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat-box-wrapper">
                <div>
                  <div class="avatar-icon-wrapper mr-1">
                    <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon avatar-icon-lg rounded">
                      <img src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                  </div>
                </div>
                <div>
                  <div
                    class="chat-box"
                  >But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system.</div>
                  <small class="opacity-6">
                    <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                  </small>
                </div>
              </div>
              <div class="float-right">
                <div class="chat-box-wrapper chat-box-wrapper-right">
                  <div>
                    <div class="chat-box">Denouncing pleasure and praising pain was born and I will give you a complete account.</div>
                    <small class="opacity-6">
                      <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                    </small>
                  </div>
                  <div>
                    <div class="avatar-icon-wrapper ml-1">
                      <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                      <div class="avatar-icon avatar-icon-lg rounded">
                        <img src="@/assets/images/avatars/3.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat-box-wrapper">
                <div>
                  <div class="avatar-icon-wrapper mr-1">
                    <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon avatar-icon-lg rounded">
                      <img src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="chat-box">Born and I will give you a complete account of the system.</div>
                  <small class="opacity-6">
                    <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                  </small>
                </div>
              </div>
              <div class="float-right">
                <div class="chat-box-wrapper chat-box-wrapper-right">
                  <div>
                    <div class="chat-box">The master-builder of human happiness.</div>
                    <small class="opacity-6">
                      <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                    </small>
                  </div>
                  <div>
                    <div class="avatar-icon-wrapper ml-1">
                      <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                      <div class="avatar-icon avatar-icon-lg rounded">
                        <img src="@/assets/images/avatars/3.jpg" alt />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="chat-box-wrapper">
                <div>
                  <div class="avatar-icon-wrapper mr-1">
                    <div class="badge badge-bottom btn-shine badge-success badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon avatar-icon-lg rounded">
                      <img src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                  </div>
                </div>
                <div>
                  <div class="chat-box">Mistaken idea of denouncing pleasure and praising pain was born and I will give you</div>
                  <small class="opacity-6">
                    <font-awesome-icon icon="calendar-alt" />11:01 AM | Yesterday
                  </small>
                </div>
              </div>
            </div>
            <div class="app-inner-layout__bottom-pane d-block text-center">
              <div class="mb-0 position-relative row form-group">
                <div class="col-sm-12">
                  <input placeholder="Write here and hit enter to send..." type="text" class="form-control-lg form-control"/>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="app-inner-layout__sidebar card">
          <div class="app-inner-layout__sidebar-header">
            <ul class="nav flex-column">
              <li class="pt-4 pl-3 pr-3 pb-3 nav-item">
                <div class="input-group">
                  <div class="input-group-prepend">
                    <div class="input-group-text">
                      <font-awesome-icon icon="search" />
                    </div>
                  </div>
                  <input placeholder="Search..." type="text" class="form-control" />
                </div>
              </li>
              <li class="nav-item-header nav-item">Friends Online</li>
            </ul>
          </div>
          <ul class="nav flex-column">
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Alina Mcloughlin</div>
                      <div class="widget-subheading">Aenean vulputate eleifend tellus.</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item active">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Chad Evans</div>
                      <div class="widget-subheading">Vivamus elementum semper nisi.</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ella-Rose Henry</div>
                      <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ruben Tillman</div>
                      <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/3.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ella-Rose Henry</div>
                      <div class="widget-subheading">Etiam sit amet orci eget eros faucibus</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" tabindex="0" class="dropdown-item">
                <div class="widget-content p-0">
                  <div class="widget-content-wrapper">
                    <div class="widget-content-left mr-3">
                      <div class="avatar-icon-wrapper">
                        <div class="badge badge-bottom badge-success badge-dot badge-dot-lg"></div>
                        <div class="avatar-icon">
                          <img src="@/assets/images/avatars/2.jpg" alt />
                        </div>
                      </div>
                    </div>
                    <div class="widget-content-left">
                      <div class="widget-heading">Ruben Tillman</div>
                      <div class="widget-subheading">Lorem ipsum dolor sit amet, consectetuer</div>
                    </div>
                  </div>
                </div>
              </button>
            </li>
          </ul>
          <div class="app-inner-layout__sidebar-footer pb-3">
            <ul class="nav flex-column">
              <li class="nav-item-divider nav-item"></li>
              <li class="nav-item-header nav-item">Offline Friends</li>
              <li class="text-center p-2 nav-item">
                <div class="avatar-wrapper avatar-wrapper-overlap">
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/5.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/10.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/7.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/8.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/1.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/2.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/3.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper">
                    <div class="badge badge-bottom badge-danger badge-dot badge-dot-lg"></div>
                    <div class="avatar-icon rounded">
                      <img src="@/assets/images/avatars/4.jpg" alt />
                    </div>
                  </div>
                  <div class="avatar-icon-wrapper avatar-icon-add">
                    <div class="avatar-icon rounded">
                      <i>+</i>
                    </div>
                  </div>
                </div>
              </li>
              <li class="nav-item-btn text-center nav-item">
                <button class="btn-wide btn-pill btn btn-success btn-sm">Offline Group Conversation</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCog,
  faBusinessTime,
  faSearch,
  faStar
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

library.add(faCog, faBusinessTime, faSearch, faStar);

export default {
  components: {
    "font-awesome-icon": FontAwesomeIcon
  },
  data: () => ({
    heading: "Mailbox",
    subheading:
      "Create stunning UIs for your pages with these layout components.",
    icon: "pe-7s-power icon-gradient bg-mixed-hopes",

    isMobileOpen: false
  }),

  methods: {
    toggleLayoutClass(className) {
      const el = document.body;
      this.isMobileOpen = !this.isMobileOpen;

      if (this.isMobileOpen) {
        el.classList.add(className);
      } else {
        el.classList.remove(className);
      }
    }
  }
};
</script>