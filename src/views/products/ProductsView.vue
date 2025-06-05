<template>
	<section class="productOverview">
		<div class="hero-section product-overview-hero">
			<div class="mds-container mds-grid mds-grid-size-2">
				<div class="hero-section-content mds-grid">
					<div
						class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ OverviewPageData.intro.title }}
					</div>
					<h1 class="header">
						{{ OverviewPageData.intro.header }}
					</h1>
					<p class="para mds-font-size-lg mds-line-height-xl">
						{{ OverviewPageData.intro.description }}
					</p>
				</div>
				<div class="hero-section-image">
					<img :src="OverviewPageData.intro.image" alt="" />
				</div>
			</div>
		</div>
		<div class="ecosystem-section">
			<div class="mds-container">
				<div class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ OverviewPageData.exploreEcosystem.title }}
				</div>
				<h2 class="subHeader">
					{{ OverviewPageData.exploreEcosystem.header }}
				</h2>

				<div class="tabsContainer">
					<div class="tabsButtonWrapper">
						<button class="eachTabButton mds-button-slider-link" v-for="(tab, i) in OverviewTabsData"
							:key="i" @click="currentTab = i" :class="{ active: currentTab === i }">
							{{ tab.title }}
						</button>
					</div>
					<transition name="slide-fade" mode="out-in">
						<div class="tabContent" :key="currentTab">
							<img :src="OverviewTabsData[currentTab].image" alt="Tab Image" />
							<div class="boxContainer">
								<div class="contentBox">
									<h2 class="boxHeader">
										{{ OverviewTabsData[currentTab].title }}
									</h2>
									<p class="boxBody">
										{{ OverviewTabsData[currentTab].description }}
									</p>
									<a href="/products/vusion-cloud"
										class="mds-button mds-button-primary_outline mds-button-animate">
										Explore Product
										<i class="pi pi-arrow-right"></i>
									</a>
								</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</div>
		<div class="soultions-section">
			<div class="mds-container">
				<div
					class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ OverviewPageData.exploreSolutions.title }}
				</div>
				<h2 class="subHeader mds-p-bottom-xl">
					{{ OverviewPageData.exploreSolutions.header }}
				</h2>
				<div class="mds-m-top-xl mds-grid mds-grid-size-2 mds-gap-around-3xl">
					<div class="product-card" v-for="(product, index) in OverviewPageData.exploreSolutions.list"
						:key="index">
						<div class="product-card-heading mds-m-bottom-2xl">
							<img :src="product.logo" alt="" />
						</div>
						<div class="product-card-body">
							<p class="mds-p-bottom-2xl">
								{{ product.description }}
							</p>
							<div class="mds-border-bottom mds-m-bottom-2xl"></div>
							<p class="mds-font-weight-700 mds-flex mds-m-bottom-base" v-for="feature in product.list"
								:key="feature">
								<span class="mds-m-right-sm">&#10004;</span>
								{{ feature.label }}
							</p>
							<a
								class="mds-button mds-button-icon-forward mds-button-primary_outline mds-gap-around-xl mds-inline-flex mds-items-center mds-m-top-2xl">
								Explore Product
								<svg viewBox="0 0 19 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z">
									</path>
								</svg>
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
		<div class="insights-section product-insights-section">
			<div class="mds-container">
				<div
					class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ OverviewPageData.relatedInsights.title }}
				</div>
				<h2 class="subHeader mds-p-bottom-xl">
					{{ OverviewPageData.relatedInsights.header }}
				</h2>
				<AppInsights />
				<div class="mds-flex mds-justify-center mds-m-top-4xl">
					<button class="mds-button mds-button-primary_outline">
						View all
					</button>
				</div>
			</div>
		</div>
		<router-link to="/about">Go to About</router-link>
	</section>
</template>

<script setup>
import { ref } from "vue";
import AppData from "@/assets/data/app-data.json";
import AppInsights from "@/components/AppInsights.vue";

const currentTab = ref(0);

const OverviewTabsData = AppData.allProducts.productsOverviewTabs;
const OverviewPageData = AppData.allProducts.overview;
</script>
