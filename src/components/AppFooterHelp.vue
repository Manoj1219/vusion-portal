<template>
  <section class="footer-secondary">
    <div class="mds-container">
      <div class="mds-mobile-flex">
        <div class="mds-width-70">
          <h4
            class="mds-font-size-5xl mds-m-bottom-3xl mds-text-color-white mds-width-85"
          >
            {{ footerData.header }}
          </h4>
          <button class="mds-button mds-button-secondary mds-button-animate">
            Let's connect
            <i class="pi pi-arrow-right"></i>
          </button>
        </div>
        <div class="mds-width-30">
          <img
            class="mds-width-100"
            src="https://www.vusion.com/wp-content/uploads/2023/10/Retail-W-15-1200x1200-c-default.png"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import appData from "@/assets/data/app-data.json";

const footerData = appData.enquirySeciton || {};
</script>
