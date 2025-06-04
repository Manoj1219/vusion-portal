<template>
  <div class="mds-container">
    <div class="mds-flex mds-items-start">
      <div class="mds-width-80">
        <div
          class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ testimonials.label }}
        </div>
        <h2 class="mds-m-bottom-lg mds-font-size-4xl">
          {{ testimonials.header }}
        </h2>
      </div>
      <div
        class="mds-width-20 mds-flex mds-items-center mds-justify-end mds-gap-around-xl"
      >
        <span>{{ activeSlide + 1 }}/{{ testimonials.list.length }}</span>
        <div class="mds-button-group-carousel">
          <button
            class="mds-button mds-button-primary_outline"
            :disabled="activeSlide === 0"
            @click="slideTo(activeSlide - 1)"
          >
            <i class="pi pi-chevron-left"></i>
          </button>
          <button
            class="mds-button mds-button-primary_outline"
            :disabled="activeSlide === testimonials.list.length - 1"
            @click="slideTo(activeSlide + 1)"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="mds-m-top-6xl">
      <div class="mds-carousal-full">
        <swiper
          :spaceBetween="30"
          :slidesPerView="'auto'"
          :modules="modules"
          class="mds-swiper"
          @swiper="setSwiperRef"
        >
          <swiper-slide
            v-for="testimonial in testimonials.list"
            :key="testimonial.id"
          >
            <div class="mds-flex mds-gap-around-7xl mds-items-center">
              <div class="mds-width-35">
                <img
                  :src="testimonial.image"
                  class="mds-border-radius-base"
                  alt=""
                />
              </div>
              <div class="mds-width-65">
                <img
                  v-if="testimonial.logo"
                  :src="testimonial.logo"
                  class="mds-m-bottom-xl mds-width-30"
                  alt=""
                />
                <h4 class="mds-font-size-3xl mds-m-bottom-xl">
                  "{{ testimonial.description }}"
                </h4>

                <h3 class="mds-font-size-base">{{ testimonial.name }}</h3>
                <p>{{ testimonial.designation }}</p>

                <button
                  class="mds-button mds-button-primary_outline mds-m-top-4xl"
                >
                  View More
                </button>
              </div>
            </div>
          </swiper-slide>
        </swiper>
      </div>
    </div>
  </div>
  <div class="mds-border-top mds-border-color-dark mds-overflow-hidden">
    <div class="mds-p-top-7xl mds-animation-loop mds-flex mds-items-center">
      <ul class="mds-logos mds-flex mds-items-center mds-gap-around-xl">
        <li
          class="mds-width-px-150"
          v-for="logo in testimonials.logos"
          :key="logo.id"
        >
          <img :src="logo.image" :alt="logo.alt" />
        </li>
        <li
          class="mds-width-px-150"
          v-for="logo in testimonials.logos"
          :key="logo.id"
        >
          <img :src="logo.image" :alt="logo.alt" />
        </li>
        <li
          class="mds-width-px-150"
          v-for="logo in testimonials.logos"
          :key="logo.id"
        >
          <img :src="logo.image" :alt="logo.alt" />
        </li>
      </ul>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import appData from "@/assets/data/app-data.json";
import { Pagination, Navigation, Virtual } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/vue";

const testimonials = ref(appData.homepage.testimonials);
const modules = [Pagination, Navigation, Virtual];
const swiperRef = ref(null);
const activeSlide = ref(0);

const setSwiperRef = (swiper) => {
  console.log("swiper");
  swiperRef.value = swiper;
};
const slideTo = (index) => {
  activeSlide.value = index;
  swiperRef.value.slideTo(index);
};
</script>
