<template>
  <div class="header-desktop">
    <div class="mds-navitem-container solutions-nav">
      <div class="mds-navitem-sidenav">
        <h3 class="mds-font-size-base-2">{{ pcNav.header }}</h3>
        <p class="mds-font-size-md-2 mds-font-weight-400 mds-line-height-base">
          {{ pcNav.description }}
        </p>
        <router-link
          to="/positive-commerce"
          class="mds-button mds-button-primary_outline"
          >Overview</router-link
        >
      </div>
      <div class="mds-navitem-options mds-grid mds-grid-size-2">
        <router-link
          class="mds-navitem-option"
          v-for="(page, index) in pageLinks"
          :key="index"
          :to="page?.routoTo"
        >
          <div>
            <h4 class="mds-font-size-base mds-font-weight-700">
              {{ page?.title }}
            </h4>
            <p class="mds-font-size-md-2 mds-font-weight-400 mds-m-top-xl">
              {{ page?.description }}
            </p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

  <div class="header-mobile">
    <div class="mds-navitem-options mds-grid mds-grid-size-1">
      <router-link
        class="mds-navitem-option"
        v-for="(page, index) in pageLinks"
        :key="index"
        :to="page?.routoTo"
      >
        <div>
          <h4 class="mds-font-size-base mds-font-weight-700">
            {{ page?.title }}
          </h4>
        </div>
      </router-link>
    </div>
  </div>
</template>
<script setup>
import navLinks from "@/assets/data/menu-data.json";
import navMessages from "@/assets/data/app-data.json";

const pageLinks = navLinks?.positiveCommerce || [];
const pcNav = navMessages.positiveCommerceNav || {};
</script>
