<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <tabs :tabs="tabs" :currentTab="currentTab" :wrapper-class="'body-tabs shadow-tabs'"
      :tab-class="'tab-item'" :tab-active-class="'tab-item-active'"
      :line-class="'tab-item-line'" @onClick="handleClick" />
    <div class="content">
      <div v-if="currentTab === 'tab1'">
        <b-row>
          <b-col md="6">
            <b-card title="Basic Example" class="main-card mb-3">
              <b-form @submit="onSubmit">
                <b-form-group id="exampleInputGroup1" label="Name" label-for="exampleInput1">
                  <b-form-input id="exampleInput1" type="text" v-model="form.name"
                    :state="!$v.form.name.$invalid" aria-describedby="input1LiveFeedback" placeholder="Enter name"/>
                  <b-form-invalid-feedback id="input1LiveFeedback" >
                    This is a required field and must be at least 3 characters
                  </b-form-invalid-feedback>
                </b-form-group>
                <b-form-group id="exampleInputGroup2" label="Food" label-for="exampleInput2">
                  <b-form-select id="exampleInput2" :options="foods" :state="!$v.form.food.$invalid" v-model="form.food" />
                  <b-form-invalid-feedback id="input2LiveFeedback">This is a required field</b-form-invalid-feedback>
                </b-form-group>
                <b-button type="submit" variant="primary" :disabled="$v.form.$invalid">Submit</b-button>
              </b-form>
            </b-card>
          </b-col>
        </b-row>
      </div>
      <div v-if="currentTab === 'tab2'">
        <div class>
          <div class="row">
            <div class="col-md-6">
              <div class="main-card mb-3 card">
                <div class="card-body">
                  <h5 class="card-title">Basic</h5>
                  <form class>
                    <div class="position-relative form-group">
                      <label for="exampleEmail" class>Input without validation</label>
                      <input type="text" class="form-control" />
                      <div class="invalid-feedback">You will not be able to see this</div>
                      <small class="form-text text-muted">Example help text that remains unchanged.</small>
                    </div>
                    <div class="position-relative form-group">
                      <label for="exampleEmail" class>Valid input</label>
                      <input type="text" class="is-valid form-control" />
                      <div class="valid-feedback">Sweet! that name is available</div>
                      <small class="form-text text-muted">Example help text that remains unchanged.</small>
                    </div>
                    <div class="position-relative form-group">
                      <label for="examplePassword" class>Invalid input</label>
                      <input type="text" class="is-invalid form-control" />
                      <div class="invalid-feedback">Oh noes! that name is already taken</div>
                      <small class="form-text text-muted">Example help text that remains unchanged.</small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="main-card mb-3 card">
                <div class="pb-5 card-body">
                  <h5 class="card-title">Alternate Style</h5>
                  <form class>
                    <div class="position-relative form-group">
                      <label for="exampleEmail" class>Input without validation</label>
                      <input type="text" class="form-control" />
                      <div class="invalid-tooltip">You will not be able to see this</div>
                      <small class="form-text text-muted">Example help text that remains unchanged.</small>
                    </div>
                    <div class="position-relative form-group">
                      <label for="exampleEmail" class>Valid input</label>
                      <input type="text" class="is-valid form-control" />
                      <div class="valid-tooltip">Sweet! that name is available</div>
                      <small class="form-text text-muted">Example help text that remains unchanged.</small>
                    </div>
                    <div class="position-relative form-group">
                      <label for="examplePassword" class>Invalid input</label>
                      <input type="text" class="is-invalid form-control" />
                      <div class="invalid-tooltip">Oh noes! that name is already taken</div>
                      <small class="form-text text-muted">Example help text that remains unchanged.</small>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import Tabs from "vue-tabs-with-active-line";
import { validationMixin } from "vuelidate";
import { required, minLength } from "vuelidate/lib/validators";

const TABS = [
  {
    title: "Advanced",
    value: "tab1"
  },
  {
    title: "Feedback",
    value: "tab2"
  }
];

export default {
  components: {
    PageTitle,
    Tabs
  },
  data: () => ({
    heading: "Form Validation",
    subheading:
      "Inline validation is very easy to implement using the ArchitectUI Framework.",
    icon: "lnr-picture text-danger",

    tabs: TABS,
    currentTab: "tab1",

    foods: ["apple", "orange"],
    form: {}
  }),
  mixins: [validationMixin],
  validations: {
    form: {
      food: {
        required
      },
      name: {
        required,
        minLength: minLength(3)
      }
    }
  },
  methods: {
    handleClick(newTab) {
      this.currentTab = newTab;
    },

    onSubmit() {
      // form submit logic
    }
  }
};
</script>
