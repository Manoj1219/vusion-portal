<template>
	<div class="home">
		<section class="hero-section">
			<div class="mds-container mds-grid mds-grid-size-2">
				<div class="mds-section-content mds-flex mds-flex-column mds-items-start">
					<h1 class="mds-font-weight-700 mds-font-size-4xl">
						{{ homepageData.intro.header }}
					</h1>
					<p class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-md mds-line-height-xl">
						{{ homepageData.intro.description }}
					</p>
					<router-link :to="homepageData.intro.link" class="mds-button mds-button-secondary mds-m-top-2xl">
						Get in touch
					</router-link>
				</div>
				<div class="hero-section-image">
					<img :src="homepageData.intro.image" alt="" />
				</div>
			</div>
		</section>
		<section class="mds-section">
			<div class="mds-container mds-border-bottom mds-p-bottom-7xl mds-m-bottom-7xl">
				<div class="mds-grid mds-grid-size-2 mds-gap-around-3xl">
					<div class="mds-section-image mds-self-center">
						<img :src="homepageData.aboutVusionSolutions.image" alt="">
					</div>
					<div class="mds-section-content mds-flex mds-flex-column mds-items-start">
						<span
							class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							{{ homepageData.aboutVusionSolutions.label }}
						</span>
						<h2 class="mds-m-bottom-lg mds-font-size-3xl">
							{{ homepageData.aboutVusionSolutions.header }}
						</h2>
						<p class="mds-font-size-base-2 mds-line-height-xl">
							{{ homepageData.aboutVusionSolutions.description }}
						</p>
						<router-link :to="homepageData.aboutVusionSolutions.link"
							class="mds-button mds-button-secondary mds-m-top-2xl">
							Our solutions
						</router-link>
					</div>
				</div>
				<div class="mds-grid mds-grid-size-4 mds-m-top-4xl">
					<div class="client-count">
						<div class="client-count-number mds-font-size-3xl mds-font-weight-700 mds-m-bottom-lg">
							{{ homepageData.aboutVusionSolutions.clientsCount }}
						</div>
						<div class="client-count-content mds-font-weight-400 mds-font-size-base">
							Clients across the globe
						</div>
					</div>
					<div class="client-count">
						<div class="client-count-number mds-font-size-3xl mds-font-weight-700 mds-m-bottom-lg">
							{{ homepageData.aboutVusionSolutions.electronicShelfCount }}
						</div>
						<div class="client-count-content mds-font-weight-400 mds-font-size-base">
							<a href="#" class="mds-text-color-primary mds-font-weight-700">Electronic shelf labels
							</a><br />
							connected with our platform
						</div>
					</div>
					<div class="client-count">
						<div class="client-count-number mds-font-size-3xl mds-font-weight-700 mds-m-bottom-lg">
							{{ homepageData.aboutVusionSolutions.teamMembersCount }}
						</div>
						<div class="client-count-content mds-font-weight-400 mds-font-size-base">
							Team members here to help
						</div>
					</div>
					<div class="client-count">
						<div class="client-count-number mds-font-size-3xl mds-font-weight-700 mds-m-bottom-lg">
							{{ homepageData.aboutVusionSolutions.sustainabilityrating }}
						</div>
						<div class="client-count-content mds-font-weight-400 mds-font-size-base">
							2023 EcoVadis<br />
							Sustainability Rating
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="mds-section mds-m-top-7xl">
			<div class="mds-container">
				<div
					class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ homepageData.opportunities.label }}
				</div>
				<h2 class="mds-m-bottom-lg mds-font-size-4xl mds-width-75">
					{{ homepageData.opportunities.header }}
				</h2>
				<div class="mds-grid mds-grid-size-3 mds-gap-row-4xl mds-gap-column-3xl mds-m-top-5xl">
					<OpputunitiesGrid />
				</div>
			</div>
		</section>
		<section class="mds-section mds-m-top-7xl">
			<div class="mds-container">
				<div
					class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ homepageData.products.label }}
				</div>
				<h2 class="mds-m-bottom-lg mds-font-size-4xl">
					{{ homepageData.products.header }}
				</h2>
				<p class="mds-font-size-base-2 mds-line-height-xl mds-width-65">
					{{ homepageData.products.description }}
				</p>
			</div>
			<ProductsCarousal />
		</section>
		<section class="mds-section">
			<div class="mds-container mds-border-top mds-p-top-7xl mds-m-top-7xl">
				<div class="mds-grid mds-grid-size-2 mds-background-text mds-p-around-3xl mds-border-radius-base">
					<div
						class="mds-text-color-white mds-p-top-4xl mds-flex mds-flex-column mds-items-start mds-p-left-6xl">
						<div
							class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							{{ homepageData.positiveCommerce.label }}
						</div>
						<h2 class="mds-m-bottom-lg mds-font-size-4xl">
							{{ homepageData.positiveCommerce.header }}
						</h2>
						<p class="mds-font-size-base-2 mds-line-height-xl">
							{{ homepageData.positiveCommerce.description }}
						</p>
						<router-link :to="homepageData.positiveCommerce.link"
							class="mds-button mds-button-secondary mds-m-top-2xl">
							Learn More
						</router-link>
					</div>
					<div class="commerce-section-image">
						<img :src="homepageData.positiveCommerce.image" alt="" />
					</div>
				</div>
			</div>
		</section>
		<section class="mds-section mds-m-top-7xl mds-background-secondary-shade mds-p-vertical-7xl">
			<ClientTestimonials />
		</section>
		<EventsComponent />
		<section class="insights-section">
			<div class="mds-container">
				<div
					class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					Insights
				</div>
				<h2 class="mds-m-bottom-lg mds-font-size-4xl">
					Learn how to leverage retail IoT for your business
				</h2>
				<AppInsights />
			</div>
		</section>
		<section class="mds-section mds-background-secondary-shade">
			<div class="mds-container mds-grid mds-grid-size-2 mds-gap-around-7xl">
				<div class="mds-section-image">
					<img class="mds-height-100" :src="homepageData.careers.logo" alt="">
				</div>
				<div class="mds-section-content mds-flex mds-flex-column mds-items-start">
					<div class="mds-m-bottom-lg">
						<img :src="homepageData.careers.image" alt="">
					</div>
					<div
						class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ homepageData.careers.label }}
					</div>
					<h2 class="mds-m-bottom-lg mds-font-size-4xl">
						{{ homepageData.careers.header }}
					</h2>
					<p class="mds-font-size-base-2 mds-line-height-xl">
						{{ homepageData.careers.description }}
					</p>
					<router-link :to="homepageData.careers.link" class="mds-button mds-button-secondary mds-m-top-2xl">
						Explore open roles
					</router-link>
				</div>
			</div>
		</section>
		<AppFooterHelp />
	</div>
</template>
<script setup>
import AppFooterHelp from '@/components/AppFooterHelp.vue';
import AppInsights from '@/components/AppInsights.vue';
import OpputunitiesGrid from '@/components/OpputunitiesGrid.vue';
import ProductsCarousal from '@/components/ProductsCarousal.vue';
import AppData from '@/assets/data/app-data.json';
import EventsComponent from '@/components/EventsComponent.vue';
import ClientTestimonials from '@/components/ClientTestimonials.vue';


const homepageData = AppData.homepage;
</script>
