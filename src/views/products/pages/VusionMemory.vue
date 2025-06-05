<template>
	<section class="mds-section mds-background-memory-shade">
		<div class="mds-container">
			<div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
				<div class="mds-section-content">
					<h1 class="header mds-m-bottom-lg mds-width-75">
						{{ memoryData.intro.header }}
					</h1>
					<p class="mds-font-size-base-2 mds-font-weight-500 mds-line-height-xl mds-width-70">
						{{ memoryData.intro.description }}
					</p>
				</div>
				<div class="mds-section-image mds-self-center">
					<img :src="memoryData.intro.image" alt="" />
				</div>
			</div>
			<div class="mds-m-top-4xl mds-p-bottom-7xl">
				<div
					class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-white mds-overflow-hidden mds-box-shadow-base">
					<div class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl">
						<span
							class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							{{ memoryData.retailAnalytics.subtitle }}
						</span>
						<h2 class="subHeader mds-m-bottom-lg">
							{{ memoryData.retailAnalytics.header }}
						</h2>
						<p class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl">
							{{ memoryData.retailAnalytics.description }}
						</p>
						<a target="_blank" :href="memoryData.retailAnalytics.link"
							class="mds-button mds-button-secondary mds-m-top-3xl mds-width-30">
							Learn more
						</a>
					</div>
					<div>
						<img class="mds-img-position-cover mds-height-100" :src="memoryData.retailAnalytics.image"
							alt="" />
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="mds-section mds-background-memory-shade mds-p-top-3xl mds-p-bottom-3xl">
		<div class="mds-container">
			<span class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
				Differentiators
			</span>
			<h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
				Memory: Beyond Analytics, AI-Powered Intelligence for Retail
			</h2>
			<div class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl">
				<div class="mds-flex mds-flex-column mds-gap-around-lg">
					<img class="mds-width-15 mds-m-bottom-lg"
						src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_MakeSense-170x170-c-default.png"
						alt="" />
					<h4 class="mds-font-size-lg mds-font-weight-600">
						We understand retail.
					</h4>
					<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
						We analyze transactional, supply chain, logistics, and shopper
						behavior data from 20,000+ stores. Partnering with industry leaders,
						we leverage 25 million households’ shopping behavior for a precise
						view of product consumption and performance.
					</p>
				</div>
				<div class="mds-flex mds-flex-column mds-gap-around-lg">
					<img class="mds-width-15 mds-m-bottom-lg"
						src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_GetRightInsights-170x170-c-default.png"
						alt="" />
					<h4 class="mds-font-size-lg mds-font-weight-600">
						We work with different data sets.
					</h4>
					<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
						Combining diverse data sources with our deep-rooted retail
						knowledge, we identify assortment optimization opportunities,
						provide predictive scenarios, and offer grounded recommendations to
						drive your product categories.
					</p>
				</div>
				<div class="mds-flex mds-flex-column mds-gap-around-lg">
					<img class="mds-width-15 mds-m-bottom-lg"
						src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_DataWork-170x170-c-default.png"
						alt="" />
					<h4 class="mds-font-size-lg mds-font-weight-600">
						We deliver action plans.
					</h4>
					<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
						Catering to brand’s needs, we support your marketing, trade and
						logistics discussions through decision-making and action-oriented
						tools dedicated to your business assortment.
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="mds-section">
		<div class="mds-container">
			<div class="mds-flex mds-column-gap-5 mds-m-top-lg">
				<div class="mds-section-content mds-p-around-none mds-35">
					<span
						class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ memoryData.MemoryBenefits.subtitle }}
					</span>
					<h2 class="subHeader">
						{{ memoryData.MemoryBenefits.header }}
					</h2>
					<div class="mds-flex mds-flex-column">
						<div class="mds-flex mds-items-center mds-gap-around-xl">
							<p class="mds-font-weight-400 mds-font-size-lg">
								{{ memoryData.MemoryBenefits.description }}
							</p>
						</div>
					</div>
				</div>
				<div class="mds-section-image mds-self-center mds-65">
					<img class="mds-border-radius-base" :src="memoryData.MemoryBenefits.image" alt="" />
				</div>
			</div>
			<div class="mds-section-content">
				<h1 class="subHeader mds-m-bottom-lg mds-width-70">
					Why adopt Memory, the next gen Retail Intelligence Software
				</h1>
				<div class="mds-grid mds-grid-size-2 mds-gap-column-6xl mds-gap-row-4xl mds-m-top-6xl">
					<div class="mds-flex mds-gap-around-lg">
						<div class="mds-width-15">
							<div class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade">
								<img class="mds-width-80"
									src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_MakeDecisions-50x50-c-default.png"
									alt="" />
							</div>
						</div>
						<div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
							<h4 class="mds-font-size-lg mds-font-weight-600">
								Make evidence-based decisions
							</h4>
							<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90">
								Inform better decision-making with AI recommendations and
								simulate product or pricing models to see estimates on their ROI
								impact.
							</p>
						</div>
					</div>
					<div class="mds-flex mds-gap-around-lg">
						<div class="mds-width-15">
							<div class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade">
								<img class="mds-width-80"
									src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_MakeDecisions-1-50x50-c-default.png"
									alt="" />
							</div>
						</div>
						<div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
							<h4 class="mds-font-size-lg mds-font-weight-600">
								Get custom analysis and reporting
							</h4>
							<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90">
								Tailor monitoring and reporting to your business needs. Measure
								sales performance and easily identify issues and priorities.
							</p>
						</div>
					</div>
					<div class="mds-flex mds-gap-around-lg">
						<div class="mds-width-15">
							<div class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade">
								<img class="mds-width-80"
									src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_MeasureImpact-50x50-c-default.png"
									alt="" />
							</div>
						</div>
						<div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
							<h4 class="mds-font-size-lg mds-font-weight-600">
								Measure impact in-store
							</h4>
							<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90">
								Harness the power of your data from
								<a href="/electronic shelf labels" class="mds-underline-link-dark">
									electronic shelf labels
								</a>
								and IoT devices on the shop floor and trigger actions in the
								aisles for immediate impact on store performance.
							</p>
						</div>
					</div>
					<div class="mds-flex mds-gap-around-lg">
						<div class="mds-width-15">
							<div class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade">
								<img class="mds-width-50"
									src="https://www.vusion.com/wp-content/uploads/2023/11/Memory_StrategizeandMonetize-50x50-c-default.png"
									alt="" />
							</div>
						</div>
						<div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
							<h4 class="mds-font-size-lg mds-font-weight-600">
								Strategize and monetize with brand partners
							</h4>
							<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90">
								Collaborate and share insights with vendors on a single platform
								and build joint strategies for targeted marketing and maximizing
								ROI.
							</p>
						</div>
					</div>
				</div>
			</div>
			<div class="mds-section-content mds-p-top-lg">
				<div class="mds-flex mds-flex-column">
					<div class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-7xl">
						<div class="mds-section-content mds-p-around-none">
							<span
								class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
								{{ memoryData.Features.subtitle }}
							</span>
							<h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
								{{ memoryData.Features.header }}
							</h2>
							<div class="mds-flex mds-flex-column mds-gap-around-xl mds-p-bottom-2xl">
								<div class="mds-flex mds-items-center mds-gap-around-md">
									<p class="mds-font-weight-400 mds-font-size-md-2">
										{{ memoryData.Features.description }}
									</p>
								</div>
							</div>
						</div>
						<div class="mds-section-image mds-self-center mds-p-around-lg">
							<img class="mds-border-radius-base" :src="memoryData.Features.image" alt="" />
						</div>
					</div>
					<div class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-7xl">
						<div class="mds-section-image mds-self-center">
							<img class="mds-border-radius-base"
								src="https://www.vusion.com/wp-content/uploads/2023/11/shutterstock_1082010449-scaled-1-1540x1020-c-default.jpg"
								alt="" />
						</div>
						<div class="mds-section-content mds-p-around-none">
							<h2 class="subHeader mds-m-bottom-lg">See Memory’s ROI impact</h2>
							<div
								class="mds-flex mds-flex-column mds-m-top-5xl mds-gap-around-xl mds-p-bottom-2xl mds-height-px-200 mds-width-75">
								<div class="mds-flex mds-items-center mds-gap-around-xl">
									<i class="pi pi-check mds-font-size-xl"></i>
									<p class="mds-font-size-base">
										2% to 8% Uplift in sales on recommended assortment
									</p>
								</div>
								<div class="mds-flex mds-items-center mds-gap-around-xl">
									<i class="pi pi-check mds-font-size-xl"></i>
									<p class="mds-font-size-base">
										5PTS Incremental sales on targeted promotions
									</p>
								</div>
								<div class="mds-flex mds-items-center mds-gap-around-xl">
									<i class="pi pi-check mds-font-size-xl"></i>
									<p class="mds-font-size-base">
										0.5% to 2% Incremental revenue through monetization
									</p>
								</div>
								<div class="mds-flex mds-items-center mds-gap-around-xl">
									<i class="pi pi-check mds-font-size-xl"></i>
									<p class="mds-font-size-base">
										50% Time reduction for building product mixes
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="mds-m-top-4xl mds-p-bottom-7xl">
				<div
					class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-primary mds-overflow-hidden mds-box-shadow-base">
					<div class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white">
						<span
							class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							{{ memoryData.Podcast.subtitle }}
						</span>
						<h2 class="subHeader mds-m-bottom-lg">
							{{ memoryData.Podcast.header }}
						</h2>
						<p class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl">
							{{ memoryData.Podcast.description }}
						</p>
						<a target="_blank" :href="memoryData.Podcast.link"
							class="mds-button mds-button-secondary mds-m-top-3xl mds-width-45">
							Listen to the podcast
						</a>
					</div>
					<div>
						<img class="mds-img-position-cover mds-height-100" :src="memoryData.Podcast.image" alt="" />
					</div>
				</div>
			</div>
			<div class="mds-section-content">
				<FaqAccordion productKey="productMemory" />
			</div>
			<div class="mds-section-content productBlock mds-p-around-none mds-m-bottom-4xl">
				<div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
					<div class="mds-section-content mds-p-left-7xl mds-text-color-white">
						<span
							class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							Memory Products
						</span>
						<h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
							Get detailed information on the Memory family of products
						</h2>
						<div class="actionBlock">
							<a class="mds-button mds-button-icon-forward mds-button-primary__outlineDark mds-gap-around-xl mds-inline-flex mds-items-center mds-m-top-xl"
								href="https://www.inthememory.com/" target="_blank">
								Learn about our HQ solution
								<svg viewBox="0 0 19 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z">
									</path>
								</svg>
							</a>
							<a class="mds-button mds-button-icon-forward mds-button-primary__outlineDark mds-gap-around-xl mds-inline-flex mds-items-center mds-m-top-xl"
								href="/products/memory/pulse">
								Learn about our store solution
								<svg viewBox="0 0 19 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
									<path
										d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z">
									</path>
								</svg>
							</a>
						</div>
					</div>

					<div class="mds-section-image mds-self-center">
						<img class="mds-border-radius-base"
							src="https://www.vusion.com/wp-content/uploads/2023/11/Vusion_Memory_GetInfo@1x-1440x1440-c-default.png"
							alt="" />
					</div>
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
import FaqAccordion from "@/components/FaqAccordion.vue";
import contactUs from "@/components/ProductContactUs.vue";
const memoryData = AppData.allProducts.productMemory;
</script>