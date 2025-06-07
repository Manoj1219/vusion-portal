<template>
  <div class="mds-container mds-m-top-4xl">
    <div class="mds-flex mds-items-center mds-gap-around-2xl mds-scroll-auto">
      <button
        class="mds-button mds-button-slider-link"
        :class="{ 'is-active': activeSlide === 1 }"
        @click="slideTo(1)"
      >
        VusionCloud
      </button>
      <button
        class="mds-button mds-button-slider-link"
        :class="{ 'is-active': activeSlide === 2 }"
        @click="slideTo(2)"
      >
        SESImagotag
      </button>
      <button
        class="mds-button mds-button-slider-link"
        :class="{ 'is-active': activeSlide === 3 }"
        @click="slideTo(3)"
      >
        Captana
      </button>
      <button
        class="mds-button mds-button-slider-link"
        :class="{ 'is-active': activeSlide === 4 }"
        @click="slideTo(4)"
      >
        Memory
      </button>
      <button
        class="mds-button mds-button-slider-link"
        :class="{ 'is-active': activeSlide === 5 }"
        @click="slideTo(5)"
      >
        Engage
      </button>
      <button
        class="mds-button mds-button-slider-link"
        :class="{ 'is-active': activeSlide === 6 }"
        @click="slideTo(6)"
      >
        PDigital
      </button>
    </div>
  </div>
  <div class="mds-carousal mds-products-carousal mds-m-vertical-4xl">
    <swiper
      :spaceBetween="30"
      :slidesPerView="'auto'"
      :modules="modules"
      class="mds-swiper"
      @swiper="setSwiperRef"
    >
      <swiper-slide
        v-for="item in carousalItems"
        :key="item.id"
        :class="item.background"
      >
        <div
          class="mds-mobile-flex mds-gap-around-5xl mds-items-center mds-border-bottom mds-p-bottom-3xl mds-m-bottom-2xl mds-height-px-500 mds-flex"
        >
          <div class="mds-section-image mds-width-40">
            <img :src="item.image" alt="" />
          </div>
          <div
            class="mds-flex mds-flex-column mds-gap-around-xl mds-items-start mds-width-60"
          >
            <div class="mds-section-content-icon">
              <img
                class="mds-icon-width-60 mds-p-top-xl"
                :src="item.icon"
                :alt="item.header"
              />
            </div>
            <h2 class="mds-font-size-3xl mds-font-weight-500">
              {{ item.header }}
            </h2>
            <p class="mds-font-size-base mds-line-height-xl mds-width-85">
              {{ item.description }}
            </p>
            <router-link
              :to="item.link"
              class="mds-button mds-button-primary_outline mds-button-animate"
            >
              Explore solutions
              <i class="pi pi-arrow-right"></i>
            </router-link>
          </div>
        </div>
        <div
          class="mds-flex mds-gap-around-2xl mds-items-center mds-p-vertical-2xl mds-mobile-flex"
        >
          <div
            class="mds-flex mds-gap-around-lg mds-items-center mds-p-bottom-xl"
            v-for="feature in item.features"
            :key="feature.title"
          >
            <img :src="feature.imgUrl" alt="" />
            <p>{{ feature.title }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script setup>
// Import required modules and components
import { computed, ref } from "vue";
import { Pagination, Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";
import AppData from "@/assets/data/app-data.json";

// Import product icons
import vusionCloudIcon from "@/assets/media/products/vusion-cloud.svg";
import sesimagotagIcon from "@/assets/media/products/sesimagotag.svg";
import captanaIcon from "@/assets/media/products/captana.svg";
import memoryIcon from "@/assets/media/products/memory.svg";
import engageIcon from "@/assets/media/products/engage.svg";
import pdigitalIcon from "@/assets/media/products/pdigital.svg";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";

const iconMap = {
  1: vusionCloudIcon,
  2: sesimagotagIcon,
  3: captanaIcon,
  4: memoryIcon,
  5: engageIcon,
  6: pdigitalIcon,
};
const modules = [Pagination, Navigation, Virtual];
const carousalItems = computed(() => {
  return AppData.homepage.products.carousalItems.map((item) => ({
    ...item,
    icon: iconMap[item.id],
  }));
});

const activeSlide = ref(1);

const swiperRef = ref(null);

const setSwiperRef = (swiper) => {
  swiperRef.value = swiper;
};

const slideTo = (index) => {
  activeSlide.value = index;
  swiperRef.value.slideTo(index - 1);
};
</script>
