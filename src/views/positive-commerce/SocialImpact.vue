<template>
	<section class="mds-section mds-background-primary">
		<div class="mds-container mds-grid mds-grid-size-2">
			<div
				class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white mds-p-right-6xl">
				<span
					class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ SocialImpact.intro.subHeader }}
				</span>
				<h1 class="header mds-m-bottom-lg">
					{{ SocialImpact.intro.header }}
				</h1>
				<p class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl">
					{{ SocialImpact.intro.description }}
				</p>
			</div>
			<div class="hero-section-image">
				<img class="mds-height-100 mds-width-intro" :src="SocialImpact.intro.image" alt="" />
			</div>
		</div>
	</section>
	<section class="mds-section-content">
		<div class="mds-container defaul-b-border">
			<div class="retailBlock">
				<div class="mds-badge-large">
					<img class="mds-width-80" :src="SocialImpact.Opportunities.icon" alt="" />
				</div>
				<span class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ SocialImpact.Opportunities.subHeader }}
				</span>
				<h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-70">
					{{ SocialImpact.Opportunities.header }}
				</h2>
				<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-70">
					{{ SocialImpact.Opportunities.description }}
				</p>
			</div>
			<div class="mds-grid mds-grid-size-4 mds-m-vertical-6xl mds-gap-around-4xl">
				<div v-for="block in SocialImpact.Opportunities.eachBlockInfo" :key="block.id"
					class="mds-flex mds-flex-column mds-gap-around-lg">
					<img class="mds-width-15 mds-m-bottom-lg" :src="block.image" alt="" />
					<h1 class="defaultHeaderFont mds-font-weight-600 mds-font-size-2xl mds-height-px-50">
						{{ block.title }}
					</h1>

					<p class="mds-font-size-base mds-font-weight-300 mds-line-height-xl">
						{{ block.description }}
					</p>

					<a v-if="block.subTitle" :href="block.downloadLink" target="_blank" download
						class="mds-font-size-base mds-font-weight-300 mds-line-height-xl">
						<span class="text-underline mds-text-color-primary mds-flex mds-items-center mds-gap-md">
							{{ block.subTitle }}

							<svg viewBox="0 0 14 16" fill="none" class="mds-m-left-sm" width="15px"
								stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.923 14.846V4.461m4.138 6.101l-4.138 4.4-4.138-4.4" stroke-width="1.5"
									stroke-miterlimit="22.93"></path>
							</svg>
						</span>
					</a>
				</div>
			</div>
			<div class="mds-grid mds-grid-size-4 mds-m-vertical-6xl mds-gap-around-4xl">
				<div v-for="block in SocialImpact.Opportunities.certificate" :key="block.id"
					class="mds-flex mds-items-start mds-flex-column mds-gap-around-lg">
					<div class="mds-height-px-150">
						<img class="mds-width-60" :src="block.image" alt="" />
					</div>

					<h1 class="defaultHeaderFont mds-font-weight-600 mds-font-size-lg">
						{{ block.title }}
					</h1>

					<a :href="block.downloadLink" target="_blank" download
						class="mds-font-size-base mds-font-weight-300 mds-line-height-xl">
						<span class="text-underline mds-text-color-primary mds-flex mds-items-center mds-gap-md">
							{{ block.subTitle }}

							<svg viewBox="0 0 14 16" fill="none" class="mds-m-left-sm" width="15px"
								stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.923 14.846V4.461m4.138 6.101l-4.138 4.4-4.138-4.4" stroke-width="1.5"
									stroke-miterlimit="22.93"></path>
							</svg>
						</span>
					</a>
				</div>
			</div>
		</div>
	</section>
	<section class="mds-container">
		<div class="mds-section-content mds-p-top-lg">
			<h1 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
				{{ SocialImpact.Features.mainHeader }}
			</h1>
			<div class="mds-flex mds-flex-column">
				<div class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl">
					<div class="mds-section-image mds-self-center mds-p-around-lg">
						<img class="mds-border-radius-base" :src="SocialImpact.Features.image" alt="" />
					</div>
					<div class="mds-section-content mds-p-around-none">
						<span
							class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							{{ SocialImpact.Features.subtitle }}
						</span>
						<h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
							{{ SocialImpact.Features.header }}
						</h2>

						<p class="mds-font-weight-400 mds-font-size-base">
							{{ SocialImpact.Features.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
		<div class="mds-flex mds-flex-column">
			<div class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl">
				<div class="mds-section-content mds-p-around-none">
					<span
						class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ SocialImpact.FeaturesTwo.subtitle }}
					</span>
					<h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
						{{ SocialImpact.FeaturesTwo.header }}
					</h2>
					<p class="mds-font-weight-400 mds-font-size-base">
						{{ SocialImpact.FeaturesTwo.description }}
					</p>
				</div>
				<div class="mds-section-image mds-self-center mds-p-around-lg">
					<img class="mds-border-radius-base" :src="SocialImpact.FeaturesTwo.image" alt="" />
				</div>
			</div>
		</div>
	</section>
	<section class="mds-section mds-background-secondary-shade">
		<div class="mds-container">
			<div class="mds-flex mds-column-gap-5 mds-m-top-lg">
				<div class="mds-section-image mds-self-center mds-width-60">
					<img :src="SocialImpact.OurCustomer.image" alt="" />
				</div>
				<div class="mds-section-content mds-p-around-none mds-width-40">
					<h2 class="defaultHeaderFont mds-font-size-3xl">
						{{ SocialImpact.OurCustomer.header }}
					</h2>

					<p class="mds-font-weight-400 mds-font-size-base-2">
						{{ SocialImpact.OurCustomer.description }}
					</p>
				</div>
			</div>
		</div>
	</section>

	<section class="mds-container mds-m-top-7xl">
		<div
			class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-primary mds-overflow-hidden mds-box-shadow-base">
			<div class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white">
				<span class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ SocialImpact.Podcast.subtitle }}
				</span>
				<h2 class="subHeader mds-m-bottom-lg">
					{{ SocialImpact.Podcast.header }}
				</h2>
				<p class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl">
					{{ SocialImpact.Podcast.description }}
				</p>
				<a target="_blank" :href="SocialImpact.Podcast.link"
					class="mds-button mds-button-secondary mds-m-top-3xl mds-width-55">
					Explore 2023 ESG report
				</a>
			</div>
			<div>
				<img class="mds-img-position-cover mds-height-100" :src="SocialImpact.Podcast.image" alt="" />
			</div>
		</div>
		<div class="retailBlock mds-section-content">
			<div>
				<div class="mds-badge-large mds-m-bottom-base">
					<img class="mds-width-90" :src="SocialImpact.OurPolicies.icon" alt="" />
				</div>
				<span class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ SocialImpact.OurPolicies.subHeader }}
				</span>
				<h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-70">
					{{ SocialImpact.OurPolicies.header }}
				</h2>
				<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-70">
					{{ SocialImpact.OurPolicies.description }}
				</p>
			</div>
			<div class="mds-grid mds-grid-size-2 mds-m-vertical-6xl mds-gap-around-2xl">
				<div v-for="block in SocialImpact.OurPolicies.certificate" :key="block.id"
					class="mds-flex mds-items-start mds-flex-column mds-gap-around-md">
					<h1 class="defaultHeaderFont mds-font-size-lg">
						{{ block.title }}
					</h1>

					<a :href="block.downloadLink" target="_blank" download
						class="mds-font-size-base mds-font-weight-300 mds-line-height-xl">
						<span class="text-underline mds-text-color-primary mds-flex mds-items-center mds-gap-md">
							{{ block.subTitle }}

							<svg viewBox="0 0 14 16" fill="none" class="mds-m-left-sm" width="15px"
								stroke="currentColor" xmlns="http://www.w3.org/2000/svg">
								<path d="M6.923 14.846V4.461m4.138 6.101l-4.138 4.4-4.138-4.4" stroke-width="1.5"
									stroke-miterlimit="22.93"></path>
							</svg>
						</span>
					</a>
				</div>
			</div>
		</div>
		<div class="mds-section-content mds-p-top-lg">
			<h1 class="subHeader mds-m-bottom-5xl mds-width-80">
				FAQ for Positive Commerce and ESG
			</h1>
			<FaqAccordion productKey="SocialImpact" />
		</div>
	</section>
</template>
<script setup>
import AppData from "@/assets/data/app-data.json";
import FaqAccordion from "@/components/FaqAccordion.vue";
const SocialImpact = AppData.positiveCommerce.SocialImpact;
</script>
