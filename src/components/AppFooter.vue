<template>
  <div class="app-footer">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2">
        <div class="company-info">
          <div class="footer-logo mds-m-bottom-xl">
            <img
              class="mds-logo-width-base"
              src="../assets/media//logo-white.svg"
            />
          </div>
          <p class="mds-m-bottom-xl mds-font-size-md-2">
            {{ footerData.description }}
          </p>
          <button class="mds-button mds-button-secondary mds-m-bottom-xl">
            Contact Us
          </button>
          <div class="footer-social-links mds-flex mds-gap-around-xl">
            <i class="pi pi-instagram mds-font-size-xl"></i>
            <i class="pi pi-twitter mds-font-size-xl"></i>
            <i class="pi pi-linkedin mds-font-size-xl"></i>
          </div>
        </div>
        <div class="footer-links mds-grid mds-grid-size-3">
          <div class="footer-links-sub">
            <p class="mds-font-size-base-2 mds-font-weight-600 mds-m-bottom-xl">
              {{ footerData.ourSolutions.header }}
            </p>
            <ul>
              <li
                v-for="(item, index) in footerData.ourSolutions.links"
                :key="index"
              >
                <router-link
                  class="mds-font-size-md-2 mds-line-height-xl mds-font-weight-400"
                  :to="item.routoTo"
                >
                  {{ item.title }}
                </router-link>
              </li>
            </ul>
          </div>
          <div class="footer-links-sub">
            <div class="footer-links-sub">
              <p
                class="mds-font-size-base-2 mds-font-weight-500 mds-m-bottom-xl"
              >
                {{ footerData.popularProdcuts.header }}
              </p>
              <ul>
                <li
                  v-for="(item, index) in footerData.popularProdcuts.links"
                  :key="index"
                >
                  <router-link
                    class="mds-font-size-md-2 mds-line-height-xl"
                    :to="item.routoTo"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
          <div class="footer-links-sub">
            <div class="footer-links-sub">
              <p
                class="mds-font-size-base-2 mds-font-weight-500 mds-m-bottom-xl"
              >
                {{ footerData.helpfulLinks.header }}
              </p>
              <ul>
                <li
                  v-for="(item, index) in footerData.helpfulLinks.links"
                  :key="index"
                >
                  <router-link
                    class="mds-font-size-md-2 mds-line-height-xl"
                    :to="item.routoTo"
                  >
                    {{ item.title }}
                  </router-link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        class="footer-copyright mds-mobile-flex mds-justify-between mds-m-top-5xl"
      >
        <ul class="mds-grid">
          <li v-for="(item, index) in footerData.legal.links" :key="index">
            <router-link
              class="mds-font-size-md-2 mds-line-height-xl"
              :to="item.routoTo"
            >
              {{ item.title }}
            </router-link>
          </li>
        </ul>
        <div class="copyright-text">
          <p class="mds-font-size-md-2">
            &copy; Copyright {{ new Date().getFullYear() }} VusionGroup
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import footerData from "@/assets/data/footer-data.json";
</script>
