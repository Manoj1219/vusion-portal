<template>
  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-content">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-p-top-4xl-sm"
          >
            {{ solutionsData.intro.label }}
          </div>
          <h2 class="mds-m-bottom-lg mds-font-size-5xl mds-font-weight-500">
            {{ solutionsData.intro.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
          >
            {{ solutionsData.intro.description }}
          </p>
        </div>
        <div class="mds-section-image">
          <img
            class="mds-height-100 mds-solutions-image"
            :src="solutionsData.intro.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-background-secondary-gradient">
    <div class="mds-container">
      <div class="mds-section-content">
        <div class="mds-width-70 mds-m-bottom-5xl">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          >
            {{ solutionsData.exploreSolutions.label }}
          </div>
          <h2 class="mds-font-size-4xl">
            {{ solutionsData.exploreSolutions.header }}
          </h2>
        </div>
        <div class="mds-grid mds-grid-size-2 mds-gap-around-3xl">
          <div
            class="mds-border-radius-base mds-background-white mds-border-around mds-p-around-3xl"
            v-for="solution in solutionsData.exploreSolutions.solutionsList"
            :key="solution.id"
          >
            <div
              class="mds-flex mds-flex-column mds-gap-around-xl mds-border-bottom mds-p-bottom-3xl"
            >
              <div class="mds-flex mds-items-center mds-justify-start">
                <img :src="solution.image" alt="" />
              </div>
              <p>
                {{ solution.description }}
              </p>
            </div>
            <div class="mds-p-top-3xl">
              <div
                class="mds-flex mds-flex-column mds-gap-around-xl mds-p-bottom-2xl mds-height-px-200"
              >
                <div
                  class="mds-flex mds-items-center mds-gap-around-xl"
                  v-for="feature in solution.list"
                  :key="feature"
                >
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600">{{ feature.description }}</p>
                </div>
              </div>
              <button
                class="mds-button mds-button-primary_outline mds-button-animate"
              >
                <span>Explore Solutions</span>
                <i class="pi pi-arrow-right"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="insights-section">
    <div class="mds-container">
      <div
        class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ solutionsData.insights.label }}
      </div>
      <h2 class="mds-m-bottom-5xl mds-width-70">
        {{ solutionsData.insights.description }}
      </h2>
      <AppInsights />
    </div>
  </section>
  <AppEnquiry />
</template>
<script setup>
import AppInsights from "@/components/AppInsights.vue";
import AppEnquiry from "@/components/AppEnquiry.vue";
import AppData from "@/assets/data/app-data.json";

const solutionsData = AppData.solutions.overview;
</script>
