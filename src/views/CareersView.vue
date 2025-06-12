<template>
  <section class="mds-pos-relative">
    <video
      class="mds-width-100"
      src="https://player.vimeo.com/progressive_redirect/playback/883266366/rendition/720p/file.mp4?loc=external&log_user=0&signature=a8f4996ca4525c6d9d74276c20a39726a695502a028dd5325c1ce380493baeb1#t=0.001"
      autoplay
      muted
      playsinline
      loop
    ></video>

    <div class="mds-container">
      <div class="mds-section-content">
        <div class="mds-pos-absolute mds-pos-top">
          <h1 class="header mds-m-bottom-lg mds-width-75 mds-p-top-4xl-sm">
            We are VusionGroup.
          </h1>

          <a
            target="_blank"
            href="https://careers.smartrecruiters.com/VusionGroupSA/all-job-offers"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
          >
            <span> Search All Jobs </span>
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
    </div>
  </section>

  <section class="mds-p-top-2xl careers-carousal">
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
