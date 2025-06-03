<template>
  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-content">
          <span>
            <img
              :src="vusionLive.intro.subImg"
              alt=""
              width="150px"
              height="50px"
            />
          </span>
          <h1 class="header mds-m-bottom-lg mds-width-75">
            {{ vusionLive.intro.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-500 mds-line-height-xl mds-width-70"
          >
            {{ vusionLive.intro.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img :src="vusionLive.intro.image" alt="" />
        </div>
      </div>
      <div class="mds-m-top-4xl mds-p-bottom-7xl">
        <div
          class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-white mds-overflow-hidden mds-box-shadow-base"
        >
          <div class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ vusionLive.retailAnalytics.subtitle }}
            </span>
            <h2 class="subHeader mds-m-bottom-lg">
              {{ vusionLive.retailAnalytics.header }}
            </h2>
            <p
              class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
            >
              {{ vusionLive.retailAnalytics.description }}
            </p>
            <!-- <a
              target="_blank"
              :href="vusionLive.retailAnalytics.link"
              class="mds-button mds-button-secondary mds-m-top-3xl mds-width-30"
            >
              Learn more
            </a> -->
          </div>
          <div>
            <img
              class="mds-img-position-cover mds-height-100"
              :src="vusionLive.retailAnalytics.image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-p-top-3xl mds-p-bottom-3xl mds-background-live-shade"
  >
    <div class="mds-container">
      <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
        {{ vusionLive.howVusionWorks.header }}
      </h2>
      <div
        class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl"
      >
        <div
          v-for="block in vusionLive.howVusionWorks.eachBlockInfo"
          :key="block.id"
          class="mds-flex mds-flex-column mds-gap-around-lg"
        >
          <img class="mds-width-15 mds-m-bottom-lg" :src="block.image" alt="" />
          <h4 class="mds-font-size-lg mds-font-weight-600">
            {{ block.title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ block.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-background-bg-primary">
    <div class="mds-container">
      <div class="mds-section-content">
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          {{ vusionLive.nextGenBlock.header }}
        </h1>
        <div
          class="mds-grid mds-grid-size-2 mds-gap-column-6xl mds-gap-row-4xl mds-m-top-6xl"
        >
          <div
            v-for="block in vusionLive.nextGenBlock.eachBlockInfo"
            :key="block.id"
            class="mds-flex mds-gap-around-lg"
          >
            <div class="mds-width-15">
              <div class="mds-badge mds-badge-rounded mds-badge-large">
                <img class="mds-width-80" :src="block.image" alt="" />
              </div>
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                {{ block.title }}
              </h4>
              <p
                class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
              >
                {{ block.descriptionBefore }}
                <a href="" class="mds-underline-link-dark">
                  {{ block.linkedText }}
                </a>
                {{ block.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mds-section-content mds-p-top-lg">
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-7xl"
          >
            <div class="mds-section-image mds-self-center">
              <img
                class="mds-border-radius-base"
                src="https://www.vusion.com/wp-content/uploads/2024/12/031A9649-scaled-1-1540x1020-c-default.jpg"
                alt=""
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <h2 class="subHeader mds-m-bottom-lg">Results</h2>
              <div
                class="mds-flex mds-flex-column mds-m-top-5xl mds-gap-around-xl mds-p-bottom-2xl mds-width-85"
              >
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-2xl"></i>
                  <p class="mds-font-size-lg">
                    +12% Volume Growth compared to the same period last year.
                  </p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-2xl"></i>
                  <p class="mds-font-size-lg">
                    Sales outperformed similar benchmarks by a factor of x7.
                  </p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-2xl"></i>
                  <p class="mds-font-size-lg">
                    2/3 Revenue generated from incremental sales through
                    optimized assortment strategies driven by data insights.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <contactUs />
  </section>
</template>

<script setup>
import AppData from "@/assets/data/app-data.json";
import contactUs from "@/components/ProductContactUs.vue";
const vusionLive = AppData.allProducts.vusionLive;
</script>
