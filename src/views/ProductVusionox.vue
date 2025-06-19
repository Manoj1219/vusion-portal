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
            {{ vusionOX.intro.label }}
          </span>
          <h1 class="subHeader mds-m-bottom-lg mds-width-8">
            {{ vusionOX.intro.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
          >
            {{ vusionOX.intro.description }}
          </p>
          <a
            v-if="vusionOX.intro.link"
            target="_blank"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
            :href="vusionOX.intro.link.href"
          >
            {{ vusionOX.intro.link.text }}
          </a>
        </div>
        <div class="hero-section-image">
          <img
            class="mds-height-100 mds-width-intro"
            :src="vusionOX.intro.image"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-p-vertical-4xl"
  >
    <div class="mds-container">
      <div class="mds-p-vertical-4xl">
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ vusionOX.bluetooth.label }}
        </span>
        <h1 class="subHeader mds-m-bottom-lg mds-width-60">
          {{ vusionOX.bluetooth.header }}
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60"
        >
          {{ vusionOX.bluetooth.description }}
        </p>
      </div>
      <div class="mds-flex mds-flex-column mds-p-top-4xl">
        <div
          class="mds-grid mds-grid-size-2 mds-m-vertical-2xl mds-gap-row-4xl"
        >
          <div
            class="mds-flex mds-items-start mds-gap-around-sm"
            v-for="item in vusionOX.bluetooth.items"
            :key="item.id"
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
                {{ item.title }}
              </h4>
              <p class="mds-font-size-base-2 mds-m-top-base">
                {{ item.description }}
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
            v-for="logo in vusionOX.testimonials.logos"
            :key="logo.id"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
          <li
            class="mds-width-px-150"
            v-for="logo in vusionOX.testimonials.logos"
            :key="logo.id"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
          <li
            class="mds-width-px-150"
            v-for="logo in vusionOX.testimonials.logos"
            :key="logo.id"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-7xl">
    <div
      class="mds-section-content productBlock cloud mds-p-around-none mds-m-bottom-4xl"
    >
      <div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
        <div
          class="mds-section-content mds-p-left-7xl mds-text-color-white mds-p-left-2xl-sm mob-p-left-xl"
        >
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ vusionOX.vusionCloud.label }}
          </span>
          <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
            {{ vusionOX.vusionCloud.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-80"
          >
            {{ vusionOX.vusionCloud.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="vusionOX.vusionCloud.image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mds-section-content mds-p-top-lg">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="vusionOX.vusionEnabled.image"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ vusionOX.vusionEnabled.label }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ vusionOX.vusionEnabled.header }}
            </h2>
            <p class="mds-font-weight-400 mds-font-size-base">
              {{ vusionOX.vusionEnabled.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-blue-light mds-p-top-7xl mds-p-bottom-3xl"
  >
    <div class="mds-container">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ vusionOX.completeSolution.label }}
      </span>
      <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
        {{ vusionOX.completeSolution.header }}
      </h2>
      <div
        class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl"
      >
        <div
          class="mds-flex mds-flex-column mds-gap-around-lg"
          v-for="item in vusionOX.completeSolution.items"
          :key="item.id"
        >
          <img class="mds-width-15 mds-m-bottom-lg" :src="item.icon" alt="" />
          <h4 class="mds-font-size-lg mds-font-weight-500">
            {{ item.title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ item.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="mds-m-top-4xl mds-p-bottom-7xl">
      <div
        class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-primary mds-overflow-hidden mds-box-shadow-base"
      >
        <div
          class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white mob-p-left-xl"
        >
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ vusionOX.whitePaper.label }}
          </span>
          <h2 class="subHeader mds-m-bottom-lg">
            {{ vusionOX.whitePaper.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-line-height-xl"
          >
            {{ vusionOX.whitePaper.description }}
          </p>
          <a
            v-if="vusionOX.whitePaper.link"
            target="_blank"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
            :href="vusionOX.whitePaper.link.href"
          >
            {{ vusionOX.whitePaper.link.text }}
          </a>
        </div>
        <div>
          <img
            class="mds-img-position-cover mds-height-100"
            :src="vusionOX.whitePaper.image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="insights-section">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ vusionOX.relatedInsights.label }}
      </span>
      <div class="mds-grid mds-gap_around-4xl mds-m-top-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            v-for="insight in vusionOX.relatedInsights.insights"
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
</template>

<script setup>
import { ref } from "vue";
import AppData from "@/assets/data/app-data.json";

const vusionOX = ref(AppData.vusionox);
</script>
