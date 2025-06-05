<template>
	<section class="mds-section">
		<div class="mds-container">
			<div class="mds-grid mds-grid-size-2 mds-p-vertical-2xl">
				<div class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl">
					<span
						class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ vusionoXData.intro.label }}
					</span>
					<h1 class="subHeader mds-m-bottom-lg mds-width-8">
						{{ vusionoXData.intro.header }}
					</h1>
					<p class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl">
						{{ vusionoXData.intro.description }}
					</p>
					<a target="_blank" class="mds-button mds-button-secondary mds-m-top-3xl mds-width-60"
						href="https://www.bluetooth.com/blog/ses-imagotag-outlines-what-you-need-to-know-about-electronic-shelf-labels/">
						Learn more about the technology
					</a>
				</div>
				<div class="hero-section-image">
					<img class="mds-height-100 mds-width-intro" :src="vusionoXData.intro.image" alt="" />
				</div>
			</div>
		</div>
	</section>
	<section class="mds-section mds-background-secondary-shade mds-p-vertical-4xl">
		<div class="mds-container">
			<div class="mds-p-vertical-4xl">
				<span
					class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
					{{ vusionoXData.bluetooth.label }}
				</span>
				<h1 class="subHeader mds-m-bottom-lg mds-width-60">
					{{ vusionoXData.bluetooth.header }}
				</h1>
				<p class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60">
					{{ vusionoXData.bluetooth.description }}
				</p>
			</div>
			<div class="mds-flex mds-flex-column mds-p-top-4xl">
				<div class="mds-grid mds-grid-size-2 mds-m-vertical-2xl mds-gap-row-4xl">
					<div class="mds-flex mds-items-start mds-gap-around-sm" v-for="item in vusionoXData.bluetooth.items"
						:key="item.id">
						<svg viewBox="0 0 29 35" fill="none" xmlns="http://www.w3.org/2000/svg"
							class="pi pi-check mds-font-size-2xl" width="30px">
							<path d="M4.4 16.693l5.817 8.336L23.072 6.371" stroke="currentColor" stroke-width="4"
								stroke-miterlimit="22.93"></path>
						</svg>
						<div class="mds-width-80">
							<h4 class="mds-font-size-lg mds-font-weight-500">
								{{ item.title }}
							</h4>
							<p class="mds-font-size-base-2 mds-m-top-base">
								{{ item.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="mds-container mds-p-top-7xl">
		<div class="mds-section-content productBlock cloud mds-p-around-none mds-m-bottom-4xl">
			<div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
				<div class="mds-section-content mds-p-left-7xl mds-text-color-white">
					<span
						class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ vusionoXData.vusionCloud.label }}
					</span>
					<h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
						{{ vusionoXData.vusionCloud.header }}
					</h2>
					<p class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl">
						{{ vusionoXData.vusionCloud.description }}
					</p>
				</div>

				<div class="mds-section-image mds-self-center">
					<img class="mds-border-radius-base" :src="vusionoXData.vusionCloud.image" alt="" />
				</div>
			</div>
		</div>
		<div class="mds-section-content mds-p-top-lg">
			<div class="mds-flex mds-flex-column">
				<div class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl">
					<div class="mds-section-image mds-self-center mds-p-around-lg">
						<img class="mds-border-radius-base" :src="vusionoXData.vusionEnabled.image" alt="" />
					</div>
					<div class="mds-section-content mds-p-around-none">
						<span
							class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
							{{ vusionoXData.vusionEnabled.label }}
						</span>
						<h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
							{{ vusionoXData.vusionEnabled.header }}
						</h2>
						<p class="mds-font-weight-400 mds-font-size-base">
							{{ vusionoXData.vusionEnabled.description }}
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
	<section class="mds-section mds-background-blue-light mds-p-top-7xl mds-p-bottom-3xl">
		<div class="mds-container">
			<span class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
				{{ vusionoXData.completeSolution.label }}
			</span>
			<h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
				{{ vusionoXData.completeSolution.header }}
			</h2>
			<div class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl">
				<div class="mds-flex mds-flex-column mds-gap-around-lg"
					v-for="item in vusionoXData.completeSolution.items" :key="item.id">
					<img class="mds-width-15 mds-m-bottom-lg" :src="item.icon" alt="" />
					<h4 class="mds-font-size-lg mds-font-weight-500">
						{{ item.title }}
					</h4>
					<p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
						{{ item.description }}
					</p>
				</div>
			</div>
		</div>
	</section>
	<section class="mds-container">
		<div class="mds-m-top-4xl mds-p-bottom-7xl">
			<div
				class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-primary mds-overflow-hidden mds-box-shadow-base">
				<div class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white">
					<span
						class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
						{{ vusionoXData.whitePaper.label }}
					</span>
					<h2 class="subHeader mds-m-bottom-lg">
						{{ vusionoXData.whitePaper.header }}
					</h2>
					<p class="mds-font-size-base-2 mds-font-weight-300 mds-line-height-xl">
						{{ vusionoXData.whitePaper.description }}
					</p>
					<a target="_blank"
						href="https://www.vusion.com/wp-content/uploads/2024/04/Navigating-the-Bluetooth-LE-Landscape-for-Retail.pdf"
						class="mds-button mds-button-secondary mds-m-top-3xl mds-width-45">
						Download whitepaper
					</a>
				</div>
				<div>
					<img class="mds-img-position-cover mds-height-100" :src="vusionoXData.whitePaper.image" alt="" />
				</div>
			</div>
		</div>
		<div class="insights-section">
			<span class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
				Related Insights
			</span>
			<div class="mds-grid mds-gap_around-4xl mds-m-top-6xl">
				<div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
					<a href="#" class="mds-flex-column">
						<div class="insights-content insights-content-image">
							<div
								class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase">
								Announcements
							</div>
							<h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate">
								SES-imagotag launches VusionOX, a Cloud-to-Edge protocol to
								accelerate the digitalization of physical commerce
							</h3>

							<div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
							<div class="insights-meta">December 18, 2023 | 5 min read</div>
						</div>
						<div class="insights-image">
							<img src="https://www.vusion.com/wp-content/uploads/2023/12/MicrosoftTeams-image-1-393x262-c-default.png"
								alt="" />
						</div>
					</a>
					<a href="#">
						<div class="insights-content">
							<div
								class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase">
								Announcements
							</div>
							<h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
								VusionGroup reinvents the Shelf-Edge with EdgeSense™
							</h3>
							<p class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl">
								VusionGroup introduces today EdgeSense™, a highly innovative
								digital shelf system to reinvent the shelf-edge. This unique
								innovation is the result of more than ten years of research and
								development in
							</p>
							<div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
							<div class="insights-meta">January 12, 2024 | 5 min read</div>
						</div>
					</a>
					<a href="#" class="mds-flex-column">
						<div class="insights-content insights-content-image">
							<div
								class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase">
								Blog
							</div>
							<h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
								Digital Price Tags: Improving Pricing Accuracy & Integrity
							</h3>
							<div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
							<div class="insights-meta">December 5, 2022 | 4 min read</div>
						</div>
						<div class="insights-image">
							<img src="https://www.vusion.com/wp-content/uploads/2023/11/3.99-1-393x262-c-default.png"
								alt="" />
						</div>
					</a>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
import AppData from "@/assets/data/app-data.json";
const vusionoXData = AppData.vusionox;
</script>
