<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <h4 class="d-flex flex-wrap justify-content-between align-items-center mb-3">
      <div>Forums</div>
      <div class="col-12 col-md-3 p-0 mb-3">
        <input type="text" class="form-control" placeholder="Search..." />
      </div>
    </h4>
    <div class="card mb-3">
      <div class="card-header pr-0 pl-0">
        <div class="row no-gutters align-items-center w-100">
          <div class="col font-weight-bold pl-3">General</div>
          <div class="d-none d-md-block col-6 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-3">Threads</div>
              <div class="col-3">Replies</div>
              <div class="col-6">Last update</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Getting started</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">12</div>
              <div class="col-3">34</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/2.jpg" 
                    alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                    Aliquam et velit vel nisi egestas pulvinar sit amet ac tellus
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Leon Wilson</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Announcements</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">43</div>
              <div class="col-3">112</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/3.jpg"
                  alt class="d-block ui-w-30 rounded-circle" />
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                      Sed scelerisque justo elit, sed maximus arcu fringilla at
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Allie Rodriguez</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Guides</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">42</div>
              <div class="col-3">654</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/4.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                      Donec lobortis molestie sem, ac consectetur turpis egestas quis
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Kenneth Frazier</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header pl-0 pr-0">
        <div class="row w-100 no-gutters align-items-center">
          <div class="col font-weight-bold pl-3">Purchasing</div>
          <div class="d-none d-md-block col-6 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-3">Threads</div>
              <div class="col-3">Replies</div>
              <div class="col-6">Last update</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Payments</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">632</div>
              <div class="col-3">4234</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/5.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                    Donec tellus nibh, efficitur a interdum id, vulputate ultrices mi
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Nellie Maxwell</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Shipping</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">53</div>
              <div class="col-3">116</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/5.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                      Pellentesque in consequat erat
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Mae Gibson</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Products</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">33</div>
              <div class="col-3">86</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/7.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                    Vivamus maximus lectus sed finibus pellentesque
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Alice Hampton</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header pl-0 pr-0">
        <div class="row w-100 no-gutters align-items-center">
          <div class="col font-weight-bold pl-3">Partnership</div>
          <div class="d-none d-md-block col-6 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-3">Threads</div>
              <div class="col-3">Replies</div>
              <div class="col-6">Last update</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Requirements</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">58</div>
              <div class="col-3">176</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/8.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">Nullam luctus eget odio in bibendum</a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Hallie Lewis</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Conditions</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">134</div>
              <div class="col-3">568</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/3.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">
                      Donec rutrum metus mi, eget consequat metus posuere non
                  </a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Amanda Warner</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="card mb-3">
      <div class="card-header pl-0 pr-0">
        <div class="row w-100 no-gutters align-items-center">
          <div class="col font-weight-bold pl-3">Support</div>
          <div class="d-none d-md-block col-6 text-muted">
            <div class="row no-gutters align-items-center">
              <div class="col-3">Threads</div>
              <div class="col-3">Replies</div>
              <div class="col-6">Last update</div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Common questions</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">32</div>
              <div class="col-3">578</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/2.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">Integer eu tortor purus</a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Wayne Morgan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr class="m-0" />
      <div class="card-body py-3">
        <div class="row no-gutters align-items-center">
          <div class="col">
            <a href="javascript:void(0)" class="text-big font-weight-semibold">Site issues</a>
          </div>
          <div class="d-none d-md-block col-6">
            <div class="row no-gutters align-items-center">
              <div class="col-3">12</div>
              <div class="col-3">56</div>
              <div class="media col-6 align-items-center">
                <img style="width: 40px; height: auto;" src="@/assets/images/avatars/6.jpg"
                  alt class="d-block ui-w-30 rounded-circle"/>
                <div class="media-body flex-truncate ml-2">
                  <a href="javascript:void(0)" class="d-block text-truncate">Nullam luctus eget odio in bibendum</a>
                  <div class="text-muted small text-truncate">
                    1d ago &nbsp;·&nbsp;
                    <a href="javascript:void(0)" class="text-muted">Belle Ross</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";

export default {
  components: {
    PageTitle
  },
  data: () => ({
    heading: "Forum Listing",
    subheading: "Example layout page for forum listing",
    icon: "pe-7s-car icon-gradient bg-mean-fruit"
  }),

  methods: {}
};
</script>
