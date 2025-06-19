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
            {{ ElectronicShel.intro.label }}
          </span>
          <h1 class="subHeader mds-m-bottom-lg mds-width-8">
            {{ ElectronicShel.intro.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
          >
            {{ ElectronicShel.intro.description }}
          </p>
          <a
            v-if="ElectronicShel.intro.link.href"
            :target="ElectronicShel.intro.link.target"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
            :href="ElectronicShel.intro.link.href"
          >
            {{ ElectronicShel.intro.link.text }}
          </a>
        </div>
        <div class="hero-section-image">
          <img
            class="mds-height-100 mds-width-intro"
            :src="ElectronicShel.intro.image.src"
            :alt="ElectronicShel.intro.image.alt"
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
          {{ ElectronicShel.enhanceRetail.label }}
        </span>
        <h1 class="subHeader mds-m-bottom-lg mds-width-60">
          {{ ElectronicShel.enhanceRetail.header }}
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60"
        >
          {{ ElectronicShel.enhanceRetail.description }}
        </p>
        <a
          v-if="ElectronicShel.enhanceRetail.link.href"
          :target="ElectronicShel.enhanceRetail.link.target"
          class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
          :href="ElectronicShel.enhanceRetail.link.href"
        >
          {{ ElectronicShel.enhanceRetail.link.text }}
        </a>
      </div>
      <div class="mds-flex mds-flex-column mds-p-top-2xl">
        <div class="mds-grid mds-grid-size-2 mds-m-vertical-2xl">
          <div
            v-for="feature in ElectronicShel.enhanceRetail.features"
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
                {{ feature.title }}
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
            v-for="logo in ElectronicShel.testimonials.logos"
            :key="logo.id"
            class="mds-width-px-150"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
          <li
            v-for="logo in ElectronicShel.testimonials.logos"
            :key="logo.id"
            class="mds-width-px-150"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
          <li
            v-for="logo in ElectronicShel.testimonials.logos"
            :key="logo.id"
            class="mds-width-px-150"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-7xl">
    <div
      class="mds-section-content productBlock cloud mds-p-around-none mds-m-bottom-7xl"
    >
      <div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
        <div
          class="mds-section-content mds-p-left-7xl mds-text-color-white mob-p-left-xl"
        >
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ ElectronicShel.cloudConnection.label }}
          </span>
          <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
            {{ ElectronicShel.cloudConnection.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
          >
            {{ ElectronicShel.cloudConnection.description }}
          </p>
          <a
            v-if="ElectronicShel.cloudConnection.link.href"
            class="mds-button mds-button-icon-forward mds-button-primary__outlineDark mds-gap-around-xl mds-inline-flex mds-items-center mds-m-top-xl"
            :href="ElectronicShel.cloudConnection.link.href"
          >
            {{ ElectronicShel.cloudConnection.link.text }}
          </a>
        </div>
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="ElectronicShel.cloudConnection.image.src"
            :alt="ElectronicShel.cloudConnection.image.alt"
          />
        </div>
      </div>
    </div>
    <div class="mds-m-vertical-5xl mds-p-top-7xl">
      <div
        class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-primary mds-overflow-hidden mds-box-shadow-base"
      >
        <div
          class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white mob-p-left-xl"
        >
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ ElectronicShel.whitePaper.label }}
          </span>
          <h2 class="subHeader mds-m-bottom-lg">
            {{ ElectronicShel.whitePaper.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-line-height-xl"
          >
            {{ ElectronicShel.whitePaper.description }}
          </p>
          <a
            v-if="ElectronicShel.whitePaper.link.href"
            :target="ElectronicShel.whitePaper.link.target"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
            :href="ElectronicShel.whitePaper.link.href"
          >
            {{ ElectronicShel.whitePaper.link.text }}
          </a>
        </div>
        <div>
          <img
            class="mds-img-position-cover mds-height-100"
            :src="ElectronicShel.whitePaper.image.src"
            :alt="ElectronicShel.whitePaper.image.alt"
          />
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
              :src="ElectronicShel.v700Series.image.src"
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ ElectronicShel.v700Series.label }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ ElectronicShel.v700Series.header }}
            </h2>
            <p class="mds-font-weight-400 mds-font-size-base">
              {{ ElectronicShel.v700Series.description }}
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
              {{ ElectronicShel.v300Series.label }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ ElectronicShel.v300Series.header }}
            </h2>
            <p class="mds-font-weight-400 mds-font-size-base">
              {{ ElectronicShel.v300Series.description }}
            </p>
          </div>
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="ElectronicShel.v300Series.image.src"
              :alt="ElectronicShel.v300Series.image.alt"
            />
          </div>
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
              :src="ElectronicShel.v300Waterproof.image.src"
              :alt="ElectronicShel.v300Waterproof.image.alt"
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ ElectronicShel.v300Waterproof.label }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ ElectronicShel.v300Waterproof.header }}
            </h2>
            <p
              class="mds-font-weight-400 mds-font-size-base"
              v-html="ElectronicShel.v300Waterproof.description"
            ></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-p-top-2xl">
    <div class="mds-container">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ ElectronicShel.productsShortPresentations.label }}
      </span>
      <h2 class="subHeader mds-m-bottom-lg">
        {{ ElectronicShel.productsShortPresentations.header }}
      </h2>
    </div>
    <ElectronicShelCarousal />
  </section>
  <section class="mds-p-top-2xl">
    <div class="mds-carousal mds-products-carousal mds-m-vertical-7xl">
      <Swiper
        :space-between="30"
        :slidesPerView="'auto'"
        :modules="modules"
        class="mds-swiper default-swiper"
        @swiper="setSwiperRef"
        @slideChange="(swiper) => (activeSlide = swiper.activeIndex)"
        navigation
        pagination
      >
        <SwiperSlide
          v-for="(video, index) in ElectronicShel.videos"
          :key="index"
        >
          <button class="video-button" @click="togglePlay(index)">
            <video
              ref="videoRefs"
              class="video"
              :poster="video.poster"
              :src="video.src"
              playsinline
              controls
              @playing="playingIndex = index"
              @pause="playingIndex = null"
            ></video>
            <!-- <div v-if="playingIndex !== index" class="play-overlay">▶</div> -->
          </button>
        </SwiperSlide>
      </Swiper>
      <div class="mds-container mds-flex mds-items-center mds-p-left-xl">
        <span></span>
        <div class="mds-button-group-carousel">
          <button
            class="mds-button mds-button-primary_outline"
            @click="slideTo(activeSlide - 1)"
          >
            <i class="pi pi-chevron-left"></i>
          </button>
          <button
            class="mds-button mds-button-primary_outline"
            @click="slideTo(activeSlide + 1)"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-2xl">
    <div
      class="mds-section-content mds-box-shadow-base mds-p-around-none mds-m-bottom-7xl"
    >
      <div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
        <div class="mds-section-content mds-p-left-7xl mob-p-left-xl">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ ElectronicShel.fixingAccessories.label }}
          </span>
          <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
            {{ ElectronicShel.fixingAccessories.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-80"
          >
            {{ ElectronicShel.fixingAccessories.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="ElectronicShel.fixingAccessories.image.src"
            :alt="ElectronicShel.fixingAccessories.image.alt"
          />
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section-content mds-container mds-p-top-lg">
    <FaqAccordion productKey="ElectronicShel" />
  </section>
  <section class="mds-container">
    <div class="insights-section">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ ElectronicShel.relatedInsights.label }}
      </span>
      <div class="mds-grid mds-gap_around-4xl mds-m-top-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            v-for="insight in ElectronicShel.relatedInsights.insights"
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
              <h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
                {{ insight.header }}
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">{{ insight.meta }}</div>
            </div>
            <div class="insights-image">
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
import { ref, onMounted } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import ElectronicShelCarousal from "../components/ElectronicShelCarousal.vue";
import contactUs from "@/components/ProductContactUs.vue";
import AppData from "@/assets/data/app-data.json";
import FaqAccordion from "@/components/FaqAccordion.vue";

const modules = [Pagination, Navigation];
const swiperRef = ref(null);
const videoRefs = ref([]);
const activeSlide = ref(0);
const playingIndex = ref(null);

const ElectronicShel = ref(AppData.ElectronicShel);

const setSwiperRef = (swiper) => {
  swiperRef.value = swiper;
};

const slideTo = (index) => {
  activeSlide.value = index;
  swiperRef.value.slideTo(index);
  stopAllVideos();
};

const togglePlay = (index) => {
  const video = videoRefs.value[index];
  if (!video) return;
  if (video.paused) {
    stopAllVideos();
    video.play();
  } else {
    video.pause();
  }
};

const stopAllVideos = () => {
  videoRefs.value.forEach((v) => v && v.pause());
};

onMounted(() => {
  // Init refs to actual DOM video elements
  videoRefs.value = document.querySelectorAll("video");
});
</script>

<style scoped>
.video-button {
  position: relative;
  width: 100%;
  border: none;
  padding: 0;
  background: none;
}

.video {
  width: 100%;
  height: auto;
  border-radius: 12px;
  pointer-events: none;
}
</style>
