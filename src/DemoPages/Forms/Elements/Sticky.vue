<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <div class>
      <div class="main-card mb-3 card" sticky-container>
        <div class="card-header-lg card-header" v-sticky sticky-offset="offset" sticky-side="top">
          <div class="card-header-title font-size-lg text-capitalize font-weight-normal">Sticky Page Headers</div>
          <div class="btn-actions-pane-right">
            <button class="mr-2 btn btn-warning btn-lg">Dummy Button</button>
            <button class="btn btn-primary btn-lg">Actions</button>
          </div>
        </div>
        <div class="pt-4 card-body">
          <div class="mx-auto col-md-8">
            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="exampleEmail" class>Email</label>
                  <input name="email" id="exampleEmail"  placeholder="with a placeholder"  type="email"  class="form-control"/>
                </div>
              </div>
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="examplePassword" class>Password</label>
                  <input  name="password" id="examplePassword"  placeholder="password placeholder"  type="password"  class="form-control"/>
                </div>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="exampleAddress" class>Address</label>
              <input name="address" id="exampleAddress" placeholder="1234 Main St"  type="text" class="form-control" />
            </div>
            <div class="position-relative form-group">
              <label for="exampleAddress2" class>Address 2</label>
              <input  name="address2"  id="exampleAddress2" placeholder="Apartment, studio, or floor" type="text" class="form-control" />
            </div>
            <div class="form-row">
              <div class="col-md-6">
                <div class="position-relative form-group">
                  <label for="exampleCity" class>City</label>
                  <input name="city" id="exampleCity" type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-4">
                <div class="position-relative form-group">
                  <label for="exampleState" class>State</label>
                  <input name="state" id="exampleState" type="text" class="form-control" />
                </div>
              </div>
              <div class="col-md-2">
                <div class="position-relative form-group">
                  <label for="exampleZip" class>Zip</label>
                  <input name="zip" id="exampleZip" type="text" class="form-control" />
                </div>
              </div>
            </div>
            <div class="position-relative form-check">
              <input name="check" id="exampleCheck" type="checkbox" class="form-check-input" />
              <label for="exampleCheck" class="form-check-label">Check me out</label>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCheckbox" class>Checkboxes</label>
              <div>
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" id="exampleCustomCheckbox" class="custom-control-input" />
                  <label
                    class="custom-control-label"
                    for="exampleCustomCheckbox"
                  >Check this custom checkbox</label>
                </div>
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" id="exampleCustomCheckbox2" class="custom-control-input" />
                  <label class="custom-control-label" for="exampleCustomCheckbox2">Or this one</label>
                </div>
                <div class="custom-checkbox custom-control">
                  <input type="checkbox" id="exampleCustomCheckbox3" disabled class="custom-control-input" />
                  <label class="custom-control-label" for="exampleCustomCheckbox3" >But not this disabled one</label>
                </div>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCheckbox" class>Radios</label>
              <div>
                <div class="custom-radio custom-control">
                  <input type="radio"  id="exampleCustomRadio"  name="customRadio" class="custom-control-input" />
                  <label class="custom-control-label" for="exampleCustomRadio">Select this custom radio</label>
                </div>
                <div class="custom-radio custom-control">
                  <input  type="radio" id="exampleCustomRadio2" name="customRadio" class="custom-control-input"/>
                  <label class="custom-control-label" for="exampleCustomRadio2">Or this one</label>
                </div>
                <div class="custom-radio custom-control">
                  <input type="radio" id="exampleCustomRadio3" disabled  class="custom-control-input" />
                  <label class="custom-control-label" for="exampleCustomRadio3">But not this disabled one</label>
                </div>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCheckbox" class>Inline</label>
              <div>
                <div class="custom-checkbox custom-control custom-control-inline">
                  <input type="checkbox" id="exampleCustomInline" class="custom-control-input" />
                  <label class="custom-control-label" for="exampleCustomInline">An inline custom input</label>
                </div>
                <div class="custom-checkbox custom-control custom-control-inline">
                  <input type="checkbox" id="exampleCustomInline2" class="custom-control-input" />
                  <label class="custom-control-label" for="exampleCustomInline2">and another one</label>
                </div>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomSelect" class>Custom Select</label>
              <select type="select" id="exampleCustomSelect" name="customSelect" class="custom-select">
                <option value>Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </select>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomMutlipleSelect" class>Custom Multiple Select</label>
              <select multiple type="select" id="exampleCustomMutlipleSelect" name="customSelect" class="custom-select">
                <option value>Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </select>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomSelectDisabled" class>Custom Select Disabled</label>
              <select type="select" id="exampleCustomSelectDisabled" name="customSelect" disabled class="custom-select">
                <option value>Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </select>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomMutlipleSelectDisabled" class>Custom Multiple Select Disabled</label>
              <select multiple type="select" id="exampleCustomMutlipleSelectDisabled"
                name="customSelect" disabled class="custom-select">
                <option value>Select</option>
                <option>Value 1</option>
                <option>Value 2</option>
                <option>Value 3</option>
                <option>Value 4</option>
                <option>Value 5</option>
              </select>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomFileBrowser" class>File Browser</label>
              <div class="custom-file">
                <input type="file" id="exampleCustomFileBrowser" name="customFile" class="custom-file-input" />
                <label class="custom-file-label" for="exampleCustomFileBrowser">Choose file</label>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomFileBrowser" class>File Browser with Custom Label</label>
              <div class="custom-file">
                <input type="file" id="exampleCustomFileBrowser"  name="customFile" class="custom-file-input" />
                <label class="custom-file-label" for="exampleCustomFileBrowser">Yo, pick a file!</label>
              </div>
            </div>
            <div class="position-relative form-group">
              <label for="exampleCustomFileBrowser" class>File Browser Disabled</label>
              <div class="custom-file">
                <input type="file" id="exampleCustomFileBrowser" name="customFile" disabled  class="custom-file-input" />
                <label class="custom-file-label" for="exampleCustomFileBrowser">Choose file</label>
              </div>
            </div>
          </div>
        </div>
        <div class="d-block text-center card-footer">
          <button class="mr-2 btn btn-link btn-sm">Cancel</button>
          <button class="btn btn-success btn-lg">Save</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import PageTitle from "../../../Layout/Components/PageTitle.vue";
import Sticky from "vue-sticky-directive";

export default {
  components: {
    PageTitle
  },
  directives: { Sticky },
  data: () => ({
    heading: "Forms Sticky Headers",
    subheading: "Add sticky headers in forms sections!",
    icon: "lnr-map text-info",

    offset: { top: 60 },
    stickyEnabled: true
  })
};
</script>
