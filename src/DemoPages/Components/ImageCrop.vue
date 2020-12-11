<template>
  <div>
    <page-title :heading="heading" :subheading="subheading" :icon="icon"></page-title>
    <b-row>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-4">
          <b-alert show>Upload an image to see the Image Cropper in action !</b-alert>
          <input type="file" name="image" accept="image/*" @change="setImage" />
          <div class="mt-3">
            <vue-cropper ref="cropper" :guides="true" :view-mode="2" drag-mode="crop"
              :auto-crop-area="0.5" :min-container-width="250" :min-container-height="180" :background="true"
              :rotatable="true" :src="imgSrc" alt="Source Image" :img-style="{ 'width': '400px', 'height': '300px' }">
            </vue-cropper>
          </div>
          <div class="divider"></div>
          <div class="text-center">
            <b-button @click="cropImage" v-if="imgSrc != ''" variant="primary">Crop</b-button>
            <b-button @click="rotate" v-if="imgSrc != ''" variant="secondary">Rotate</b-button>
          </div>
        </b-card>
      </b-col>
      <b-col md="6">
        <b-card title="Basic" class="main-card mb-4">
          <img :src="cropImg" alt="Cropped Image" style="width: 540px; height: 400px;" />
        </b-card>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import PageTitle from "../../Layout/Components/PageTitle.vue";
import VueCropper from "vue-cropperjs";

export default {
  components: {
    PageTitle,
    VueCropper
  },
  data: () => ({
    heading: "Image Crop",
    subheading: "You can easily crop and edit images with this Vue plugin.",
    icon: "pe-7s-signal icon-gradient bg-malibu-beach",

    imgSrc: "",
    cropImg: ""
  }),

  methods: {
    setImage(e) {
      const file = e.target.files[0];
      if (!file.type.includes("image/")) {
        alert("Please select an image file");
        return;
      }
      if (typeof FileReader === "function") {
        const reader = new FileReader();
        reader.onload = event => {
          this.imgSrc = event.target.result;
          // rebuild cropperjs with the updated source
          this.$refs.cropper.replace(event.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        alert("Sorry, FileReader API not supported");
      }
    },
    cropImage() {
      // get image data for post processing, e.g. upload or setting image src
      this.cropImg = this.$refs.cropper.getCroppedCanvas().toDataURL();
    },
    rotate() {
      // guess what this does :)
      this.$refs.cropper.rotate(90);
    }
  }
};
</script>
