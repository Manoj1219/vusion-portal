<template>
  <div class="mds-navitem-container products-nav">
    <div class="mds-navitem-sidenav header-desktop">
      <h3 class="mds-font-size-base-2">Product Overview</h3>
      <p class="mds-font-size-md-2 mds-font-weight-400 mds-line-height-base">
        Turn your physical store into a digital asset to maximize efficiency and
        improve store performance.
      </p>
      <router-link
        to="/products"
        class="mds-button mds-button-primary_outline mds-m-top-xl"
        >Overview</router-link
      >
    </div>
    <div class="header-desktop">
      <div class="mds-navitem-options mds-grid mds-grid-size-3">
        <router-link
          class="mds-navitem-option"
          v-for="(page, index) in pageLinks"
          :key="index"
          :to="page?.routoTo"
        >
          <img class="route-img" :src="page?.imgSrc" alt="" />
          <div>
            <span>
              <h4 class="mds-font-size-base mds-font-weight-700">
                {{ page?.title }}
              </h4>
              <h5 class="mds-font-size-mds-2 mds-font-weight-500 mds-m-top-xs">
                {{ page?.subTitle ? page?.subTitle : "&nbsp;" }}
              </h5>
            </span>
            <p class="mds-font-size-md-2 mds-font-weight-400 mds-m-top-xs">
              {{ page?.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>

    <div class="mds-navitem-options mds-grid mds-grid-size-1 header-mobile">
      <router-link to="/products" class="mds-navitem-option">
        <svg
          viewBox="0 0 19 16"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          width="30px"
        >
          <path
            d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
          ></path>
        </svg>
        Overview</router-link
      >
      <router-link
        class="mds-navitem-option"
        v-for="(page, index) in pageLinks"
        :key="index"
        :to="page?.routoTo"
      >
        <img class="route-img" :src="page?.imgSrc" alt="" />
        <div>
          <span>
            <h4 class="mds-font-size-base mds-font-weight-700">
              {{ page?.title }}
            </h4>
          </span>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import navLinks from "@/assets/data/menu-data.json";

const pageLinks = navLinks?.products || [];
</script>
