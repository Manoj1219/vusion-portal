<template>
  <section class="mds-pos-relative">
    <video
      class="mds-width-100 mds-width-300-md"
      :src="career.hero.video.src"
      autoplay
      muted
      playsinline
      loop
    ></video>
    <div class="mds-container">
      <div class="mds-pos-absolute mds-pos-top">
        <h1 class="header mds-m-bottom-lg mds-width-75 mds-p-top-4xl-sm">
          {{ career.hero.header }}
        </h1>
        <a
          target="_blank"
          :href="career.hero.button.href"
          class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
        >
          <span>{{ career.hero.button.text }}</span>
          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section class="mds-p-top-2xl careers-carousal">
    <div class="mds-container">
      <div class="mds-m-vertical-5xl">
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          {{ career.overview.header }}
        </h1>
        <p
          v-for="(para, index) in career.overview.paragraphs"
          :key="index"
          :class="para.class"
        >
          <span v-if="para.highlight" :class="para.highlight.class">
            {{ para.highlight.text }}
          </span>
          <template v-else>
            {{ para.text }}
          </template>
        </p>
      </div>
    </div>
    <div class="mds-carousal mds-products-carousal mds-m-vertical-7xl">
      <Swiper
        :space-between="30"
        :slidesPerView="'auto'"
        :loop="false"
        :modules="modules"
        navigation
        class="mds-swiper default-swiper video-carousel"
        @slideChange="() => stopAllVideos()"
        @swiper="onSwiperInit"
        pagination
      >
        <SwiperSlide
          v-for="(video, index) in career.videos"
          :key="index"
          class="swiper-slide swiper-slide-active"
        >
          <div class="video-button">
            <video
              :ref="(el) => (videoRefs[index] = el)"
              class="video"
              :poster="video.poster"
              :src="video.src"
              playsinline
              muted
              @click="togglePlay(index)"
            ></video>
            <div
              class="component-video__play"
              v-if="playingIndex !== index"
              @click.stop="togglePlay(index)"
            >
              <svg viewBox="0 0 17 18" fill="currentColor">
                <path d="M17 9L4.25 16.361V1.64L17 9z" />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      <div class="mds-container mds-flex mds-items-center mds-p-left-xl">
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
  <section
    class="mds-section mds-background-gray mds-p-top-3xl mds-p-bottom-3xl"
  >
    <div class="mds-container mds-p-top-2xl">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ career.careerPaths.label }}
      </span>
      <h2
        class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65"
        v-html="career.careerPaths.header"
      ></h2>
      <p
        v-for="(desc, index) in career.careerPaths.descriptions"
        :key="index"
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-75"
      >
        {{ desc }}
      </p>
    </div>
    <div class="insights-section mds-container mds-m-vertical-md">
      <div class="mds-grid mds-gap_around-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            v-for="path in career.careerPaths.list"
            :key="path.id"
            :href="path.href"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                {{ path.category }}
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                {{ path.header }}
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img :src="path.image" alt="" />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="mds-flex mds-flex-column">
      <div
        class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
      >
        <div class="mds-section-image mds-self-center mds-p-around-lg">
          <img
            class="mds-border-radius-base"
            :src="career.visualize.image"
            alt=""
          />
        </div>
        <div class="mds-section-content mds-p-around-none">
          <h2
            class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl"
            v-html="career.visualize.header"
          ></h2>
          <p class="mds-font-weight-400 mds-font-size-base-2 mds-width-90">
            {{ career.visualize.description }}
          </p>
        </div>
      </div>
    </div>
    <div class="mds-m-vertical-5xl">
      <h1
        class="subHeader mds-m-bottom-lg mds-width-70"
        v-html="career.impact.header"
      ></h1>
      <p
        v-for="(desc, index) in career.impact.descriptions"
        :key="index"
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-60"
        :class="{
          'mds-font-weight-400': index !== 1,
          'mds-font-weight-500': index === 1,
          'mds-width-70': index !== 0,
        }"
      >
        {{ desc }}
      </p>
      <div class="mds-mobile-flex mds-m-top-xl mds-gap-around-xl">
        <a
          v-for="link in career.impact.links"
          :key="link.href"
          :href="link.href"
          class="mds-button mds-button-primary_outline"
        >
          {{ link.text }}
          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            class="mds-m-left-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section
    class="mds-section-content mds-background-primary mds-text-color-white"
  >
    <div class="mds-container">
      <h1 class="subHeader mds-m-bottom-lg mds-width-70 mds-text-color-white">
        {{ career.glance.header }}
      </h1>
      <div
        class="mds-grid mds-grid-size-3 mds-gap-column-6xl mds-gap-row-6xl mds-m-top-6xl"
      >
        <div v-for="item in career.glance.list" :key="item.id">
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img class="mds-width-80" :src="item.image" alt="" />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              {{ item.value }}
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section-content mds-p-top-lg">
    <div class="mds-container">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="career.lead.image"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <h2
              class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl"
              v-html="career.lead.header"
            ></h2>
            <p class="mds-font-weight-300 mds-font-size-base-2 mds-width-90">
              {{
                career.lead.description.replace(
                  "Electronic Shelf Labels (ESL)",
                  ""
                )
              }}
              <a
                class="mds-font-weight-500 mds-underline-text mds-text-color-primary"
                :href="career.lead.eslLink.href"
              >
                {{ career.lead.eslLink.text }}
              </a>
              {{
                career.lead.description.split(
                  "Electronic Shelf Labels (ESL)"
                )[1]
              }}
            </p>
            <a
              target="_blank"
              class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
              :href="career.lead.link.href"
            >
              {{ career.lead.link.text }}
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-background-secondary-shade">
    <div class="insights-section mds-container mds-p-vertical-4xl">
      <h2 class="defaultHeaderFont mds-p-bottom-2xl mds-font-size-3xsl">
        {{ career.instagram.header }}
      </h2>
      <div class="mds-grid mds-gap_around-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            v-for="post in career.instagram.list"
            :key="post.id"
            :href="post.href"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                {{ post.header }}
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img :src="post.image" alt="" />
            </div>
          </a>
        </div>
      </div>
      <div class="mds-flex mds-justify-center mds-p-top-3xl">
        <a
          :href="career.instagram.button.href"
          class="mds-button mds-button-primary_outlineWhite"
        >
          {{ career.instagram.button.text }}
          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            class="mds-m-left-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section
    class="mds-section-content mds-background-primary mds-text-color-white"
  >
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2">
        <div class="mds-p-vertical-4xl">
          <span
            class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ career.techStack.subHeader }}
          </span>
          <h1
            class="defaultHeader mds-m-vertical-lg mds-width-60 mds-font-size-3xl"
            v-html="career.techStack.header"
          ></h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-90"
          >
            {{ career.techStack.description }}
          </p>
        </div>
        <div
          class="mds-grid mds-grid-size-1 mds-m-vertical-2xl mds-p-left-2xl mds-gap-row-4xl"
        >
          <div
            v-for="tech in career.techStack.list"
            :key="tech.id"
            class="mds-flex mds-items-start mds-gap-around-sm"
          >
            <svg
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pi pi-check mds-font-size-2xl mds-text-color-secondary"
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
                {{ tech.header }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section-content mds-p-top-lg">
    <div class="mds-container">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="career.listen.image"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <h2
              class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl mds-width-60"
              v-html="career.listen.header"
            ></h2>
            <p class="mds-font-weight-300 mds-font-size-base-2 mds-width-80">
              {{ career.listen.description }}
            </p>
          </div>
        </div>
      </div>
      <div class="mds-section-content">
        <div class="mds-m-bottom-7xl mds-width-75">
          <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
            {{ career.benefits.header }}
          </h2>
          <p
            v-for="(desc, index) in career.benefits.descriptions"
            :key="index"
            class="mds-font-size-base-2 mds-font-weight-300 mds-line-height-xl mds-width-85"
            :class="{ 'mds-p-top-xl': index === 1 }"
          >
            {{ desc }}
          </p>
        </div>
        <div
          class="mds-grid mds-grid-size-3 mds-gap-column-6xl mds-gap-row-6xl mds-m-top-6xl"
        >
          <div v-for="benefit in career.benefits.list" :key="benefit.id">
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img class="mds-width-80" :src="benefit.image" alt="" />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-500">
                {{ benefit.header }}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section-content mds-background-primary mds-text-color-white"
  >
    <div class="mds-container">
      <h2 class="Header mds-font-size-4xl mds-width-65 mds-font-weight-500">
        {{ career.hiringProcess.header }}
      </h2>
      <div class="mds-grid mds-grid-size-2 mds-gap-around-6xl mds-p-top-3xl">
        <div
          v-for="step in career.hiringProcess.list"
          :key="step.id"
          class="mds-flex mds-gap-column-4xl"
        >
          <div class="mds-width-20">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
            >
              <img class="mds-width-35" :src="step.image" alt="" />
            </div>
          </div>
          <p
            class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            {{ step.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container mds-grid mds-grid-size-2 mds-gap-around-7xl">
      <div class="mds-section-image">
        <img class="mds-height-100" :src="career.callToAction.image" alt="" />
      </div>
      <div class="mds-section-content mds-flex mds-flex-column mds-items-start">
        <h2 class="mds-m-bottom-lg mds-font-size-4xl">
          {{ career.callToAction.header }}
        </h2>
        <p class="mds-font-size-base-2 mds-line-height-xl">
          {{ career.callToAction.description }}
        </p>
        <div class="mds-mobile-flex mds-m-top-xl mds-gap-around-xl">
          <a
            v-for="button in career.callToAction.buttons"
            :key="button.href"
            :href="button.href"
            class="mds-button mds-button-secondary"
          >
            {{ button.text }}
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import AppData from "@/assets/data/app-data.json";

const modules = [Pagination, Navigation];
const swiperRef = ref(null);
const activeSlide = ref(0);
const playingIndex = ref(null);
const videoRefs = ref([]);
const career = ref(AppData.career);

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper;
};

const togglePlay = (index) => {
  videoRefs.value.forEach((video, i) => {
    if (video) {
      if (i === index) {
        if (video.paused) {
          video.play();
          playingIndex.value = i;
        } else {
          video.pause();
          playingIndex.value = null;
        }
      } else {
        video.pause();
      }
    }
  });
};

const stopAllVideos = () => {
  videoRefs.value.forEach((video) => video?.pause());
  playingIndex.value = null;
};

const slideTo = (index) => {
  const clampedIndex = Math.max(
    0,
    Math.min(index, career.value.videos.length - 1)
  );
  activeSlide.value = clampedIndex;
  if (swiperRef.value && swiperRef.value.slideTo) {
    swiperRef.value.slideTo(clampedIndex);
  }
};
</script>

<style lang="scss" scoped>
.video-carousel {
  .video-button {
    position: relative;
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    video {
      width: 100%;
      border-radius: 1rem;
    }

    .component-video__play {
      z-index: 10;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 9999px;
      background-color: rgba(255, 255, 255, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
