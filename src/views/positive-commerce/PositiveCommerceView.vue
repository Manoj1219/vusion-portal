<template>
  <section class="mds-section mds-background-primary">
    <div class="mds-container mds-grid mds-grid-size-2">
      <div
        class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white mds-p-right-6xl"
      >
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500 mds-p-top-4xl-sm"
        >
          {{ positiveCommerceData.intro.label }}
        </span>
        <h1 class="mds-font-weight-700 mds-font-size-4xl">
          {{ positiveCommerceData.intro.header }}
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-md mds-line-height-xl"
        >
          {{ positiveCommerceData.intro.description }}
        </p>
      </div>
      <div class="hero-section-image">
        <img
          class="mds-height-100 mds-width-intro"
          :src="positiveCommerceData.intro.image"
          alt=""
        />
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-overflow-hidden"
  >
    <div class="mds-container mds-grid mds-grid-size-2">
      <div
        class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl"
      >
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ positiveCommerceData.ourMission.label }}
        </span>
        <h1 class="mds-font-weight-700 mds-font-size-3xl">
          {{ positiveCommerceData.ourMission.header }}
        </h1>
      </div>
      <div
        class="mds-background-white mds-full-width-content mds-p-bottom-7xl mds-p-horizontal-7xl"
      >
        <div
          class="mds-flex mds-flex-column mds-gap-around-lg mds-m-top-7xl mds-width-50"
          v-for="mission in positiveCommerceData.ourMission.list"
          :key="mission.id"
        >
          <div class="mds-flex mds-items-center mds-gap-around-xl">
            <i class="pi pi-check mds-font-size-xl"></i>
            <p class="mds-font-weight-600 mds-font-size-lg">
              {{ mission.header }}
            </p>
          </div>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl mds-p-right-2xl mds-p-left-5xl mds-width-75"
          >
            {{ mission.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-background-primary mds-text-color-white">
    <div class="mds-container mds-p-vertical-7xl">
      <div>
        <div class="mds-width-15">
          <img
            class="mds-width-50 mds-m-bottom-lg"
            :src="positiveCommerceData.ourCommitments.image"
            alt=""
          />
        </div>
        <div class="mds-width-85">
          <span
            class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ positiveCommerceData.ourCommitments.label }}
          </span>
        </div>
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          {{ positiveCommerceData.ourCommitments.header }}
        </h1>
      </div>
      <div class="mds-grid mds-grid-size-2 mds-gap-column-2xl">
        <div
          class="mds-border-around mds-background-contactBadge mds-border-radius-base mds-m-top-3xl mds-overflow-hidden"
          v-for="commitment in positiveCommerceData.ourCommitments.list"
          :key="commitment.id"
        >
          <div class="insights-content insights-content-image mds-p-around-3xl">
            <h3
              class="mds-font-size-2xl mds-font-weight-500 mds-m-bottom-lg truncate"
            >
              {{ commitment.header }}
            </h3>
            <p
              class="insights-intro mds-font-weight-300 mds-font-size-base mds-m-bottom-2xl"
            >
              {{ commitment.description }}
            </p>
            <a
              :href="commitment.link.href"
              class="router-link-active mds-button mds-button-primary_outlineWhiteBtn"
            >
              {{ commitment.link.text }}
            </a>
            <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            <p
              class="mds-flex mds-item-center mds-gap-column-lg mds-font-size-base-2 mds-line-height-xl mds-m-vertical-xl"
              v-for="link in commitment.additionalLinks"
              :key="link.href"
            >
              <img :src="link.icon" alt="" />
              <a class="anchor-underline" :href="link.href">{{ link.text }}</a>
            </p>
            <p
              class="mds-height-px-125"
              v-if="commitment.additionalLinks.length === 0"
            ></p>
          </div>
          <div class="insights-image">
            <img width="100%" :src="commitment.image" alt="" />
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
        {{ positiveCommerceData.relatedInsights.label }}
      </div>
      <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-width-60">
        {{ positiveCommerceData.relatedInsights.header }}
      </h2>
      <div class="mds-m-top-6xl">
        <a
          :href="positiveCommerceData.relatedInsights.featuredInsight.href"
          class="mds-m-top-6xl mds-m-bottom-2xl"
        >
          <div class="mds-mobile-flex mds-height-px-500">
            <div
              class="insights-content mds-width-30 mds-mob-width-100 mds-border-none"
            >
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                {{
                  positiveCommerceData.relatedInsights.featuredInsight.category
                }}
              </div>
              <h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
                {{
                  positiveCommerceData.relatedInsights.featuredInsight.header
                }}
              </h3>
              <p
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
                v-if="
                  positiveCommerceData.relatedInsights.featuredInsight
                    .description
                "
              >
                {{
                  positiveCommerceData.relatedInsights.featuredInsight
                    .description
                }}
              </p>
              <p
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
                v-else
              ></p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">
                {{ positiveCommerceData.relatedInsights.featuredInsight.meta }}
              </div>
            </div>
            <div class="mds-width-70">
              <img
                :src="
                  positiveCommerceData.relatedInsights.featuredInsight.image
                "
                class="mds-width-100 mds-height-100"
                alt=""
              />
            </div>
          </div>
        </a>
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            v-for="insight in positiveCommerceData.relatedInsights.list"
            :key="insight.id"
            :href="insight.href"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                {{ insight.category }}
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                {{ insight.header }}
              </h3>
              <p
                class="insights-intro mds-font-weight-300 mds-font-size-base mds-m-bottom-5xl"
                v-if="insight.description"
              >
                {{ insight.description }}
              </p>
              <p
                class="insights-intro mds-font-weight-300 mds-font-size-base mds-m-bottom-5xl"
                v-else
              ></p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">{{ insight.meta }}</div>
            </div>
            <div class="insights-image" v-if="insight.image">
              <img :src="insight.image" alt="" />
            </div>
          </a>
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
const positiveCommerceData = AppData.positiveCommerce;
</script>
