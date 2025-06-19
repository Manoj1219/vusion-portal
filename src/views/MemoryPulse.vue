<template>
  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-p-vertical-2xl">
        <div
          class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl"
        >
          <span
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ MemoryPulse.hero.label }}
          </span>
          <h1 class="subHeader mds-m-bottom-lg mds-width-8">
            {{ MemoryPulse.hero.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
          >
            {{ MemoryPulse.hero.description }}
          </p>
        </div>
        <div class="hero-section-image">
          <img
            class="mds-height-100 mds-width-intro"
            :src="MemoryPulse.hero.image.src"
            :alt="MemoryPulse.hero.image.alt"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-m-vertical-6xl mds-p-vertical-4xl">
    <div class="mds-container">
      <div class="mds-p-vertical-4xl">
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ MemoryPulse.analytics.label }}
        </span>
        <h1 class="subHeader mds-m-bottom-lg mds-width-75">
          {{ MemoryPulse.analytics.header }}
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60"
        >
          {{ MemoryPulse.analytics.description }}
        </p>
      </div>
    </div>
    <div class="mds-background-secondary-shade mds-p-vertical-4xl">
      <div class="mds-container">
        <div class="mds-flex mds-flex-column mds-p-top-2xl">
          <div class="mds-grid mds-grid-size-2 mds-m-vertical-2xl">
            <div
              v-for="feature in MemoryPulse.analytics.features"
              :key="feature.id"
              class="mds-flex mds-items-start mds-gap-around-sm"
            >
              <svg
                viewBox="0 0 29 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="pi pi-check mds-font-size-2xl"
                width="30px"
              >
                <path
                  d="M4.4 16.693l5.817 8.336L23.072 6.371"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-miterlimit="22.93"
                ></path>
              </svg>
              <div class="mds-width-80">
                <h4 class="mds-font-size-lg mds-font-weight-500">
                  {{ feature.header }}
                </h4>
                <p class="mds-font-size-base-2 mds-m-top-base">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mds-overflow-hidden">
        <div class="mds-p-top-7xl mds-animation-loop mds-flex mds-items-center">
          <ul class="mds-logos mds-flex mds-items-center mds-gap-around-4xl">
            <li
              class="mds-width-px-150"
              v-for="logo in ElectronicShel.testimonials.logos"
              :key="logo.id"
            >
              <img :src="logo.image" :alt="logo.alt" />
            </li>
            <li
              class="mds-width-px-150"
              v-for="logo in ElectronicShel.testimonials.logos"
              :key="logo.id"
            >
              <img :src="logo.image" :alt="logo.alt" />
            </li>
            <li
              class="mds-width-px-150"
              v-for="logo in ElectronicShel.testimonials.logos"
              :key="logo.id"
            >
              <img :src="logo.image" :alt="logo.alt" />
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-2xl">
    <div
      class="mds-section-content mds-box-shadow-base mds-p-around-none mds-m-bottom-7xl"
    >
      <div class="mds-grid mds-grid-size-2">
        <div class="mds-section-content mds-p-left-7xl mob-p-left-xl">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ MemoryPulse.benefits.label }}
          </span>
          <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
            {{ MemoryPulse.benefits.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-80"
          >
            {{ MemoryPulse.benefits.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img :src="MemoryPulse.benefits.image.src" />
        </div>
      </div>
    </div>
    <div class="mds-section-content">
      <h1 class="subHeader mds-m-bottom-lg mds-width-70">
        Why Pulse works for you
      </h1>
      <div
        class="mds-grid mds-grid-size-2 mds-gap-column-6xl mds-gap-row-4xl mds-m-top-6xl"
      >
        <div
          v-for="feature in MemoryPulse.benefits.features"
          :key="feature.id"
          class="mds-mobile-flex mds-gap-around-lg"
        >
          <div class="mds-width-15">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade"
            >
              <img class="mds-width-80" :src="feature.icon" alt="" />
            </div>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4 class="mds-font-size-lg mds-font-weight-600">
              {{ feature.header }}
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
            >
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-2xl">
    <div class="mds-section-content mds-p-top-lg">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="MemoryPulse.efficiency.image.src"
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ MemoryPulse.efficiency.label }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ MemoryPulse.efficiency.header }}
            </h2>
            <p
              v-for="(item, index) in MemoryPulse.efficiency.description"
              :key="index"
              class="mds-font-weight-300 mds-font-size-base mds-p-top-sm"
            >
              – {{ item }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mds-section-content mds-p-top-lg">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ MemoryPulse.roi.label }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ MemoryPulse.roi.header }}
            </h2>
            <p
              v-for="(item, index) in MemoryPulse.roi.description"
              :key="index"
              class="mds-font-weight-300 mds-font-size-base mds-p-top-sm"
            >
              – {{ item }}
            </p>
          </div>
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="MemoryPulse.roi.image.src"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="insights-section">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ MemoryPulse.relatedInsights.label }}
      </span>
      <div class="mds-grid mds-gap_around-4xl mds-m-top-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            v-for="insight in MemoryPulse.relatedInsights.insights"
            :key="insight.id"
            :href="insight.href"
            class="mds-flex-column"
          >
            <div
              class="insights-content"
              :class="{ 'insights-content-image': insight.image }"
            >
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
                v-if="insight.intro"
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
              >
                {{ insight.intro }}
              </p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">{{ insight.meta }}</div>
            </div>
            <div v-if="insight.image" class="insights-image">
              <img :src="insight.image.src" :alt="insight.image.alt" />
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
import { ref } from "vue";
import AppData from "@/assets/data/app-data.json";
import contactUs from "@/components/ProductContactUs.vue";

const MemoryPulse = ref(AppData.allProducts.MemoryPulse);
const ElectronicShel = ref(AppData.allProducts.ElectronicShel);
</script>
