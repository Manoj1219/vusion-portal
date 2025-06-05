<template>
	<div class="mds-container mds-m-top-4xl">
		<div class="mds-flex mds-items-center mds-gap-around-2xl">
			<button class="mds-button mds-button-slider-link" :class="{ 'is-active': activeSlide === 1 }"
				@click="slideTo(1)">
				V100 Series
			</button>
			<button class="mds-button mds-button-slider-link" :class="{ 'is-active': activeSlide === 2 }"
				@click="slideTo(2)">
				V300 Series - BWR
			</button>
			<button class="mds-button mds-button-slider-link" :class="{ 'is-active': activeSlide === 3 }"
				@click="slideTo(3)">
				V300 Waterproof Series
			</button>
			<button class="mds-button mds-button-slider-link" :class="{ 'is-active': activeSlide === 4 }"
				@click="slideTo(4)">
				V300 Freezer Series
			</button>
			<button class="mds-button mds-button-slider-link" :class="{ 'is-active': activeSlide === 5 }"
				@click="slideTo(5)">
				V700 Series – Full color
			</button>
			<button class="mds-button mds-button-slider-link" :class="{ 'is-active': activeSlide === 6 }"
				@click="slideTo(6)">
				VSway Series
			</button>
		</div>
	</div>
	<div class="mds-carousal mds-products-carousal mds-m-vertical-4xl">
		<swiper :spaceBetween="30" :slidesPerView="'auto'" :modules="modules" class="mds-swiper" @swiper="setSwiperRef">
			<swiper-slide v-for="item in carousalItems" :key="item.id" :class="item.background">
				<div class="mds-flex mds-gap-around-5xl mds-items-center mds-p-top-2xl mds-height-px-600">
					<div class="mds-width-50">
						<h1 class="defaultHeaderFont mds-font-size-xl">
							{{ item.header }}
						</h1>
						<div v-for="block in item.features" :key="block.id"
							class="mds-flex mds-column-gap-3 mds-border-default-top mds-p-vertical-xl">
							<span
								class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500 mds-width-30">
								{{ block.title }}
							</span>

							<p v-html="block.description"
								class="mds-font-size-md-2 mds-line-height-md mds-font-weight-300 mds-width-70"></p>
						</div>
					</div>
					<div class="mds-section-image mds-width-50">
						<img :src="item.image" alt="" />
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

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/virtual";

const modules = [Pagination, Navigation, Virtual];
const carousalItems = computed(() => {
	return AppData.allProducts.ElectronicShel.carousalItems.map((item) => ({
		...item,
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