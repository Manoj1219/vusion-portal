<template>
	<div class="mds-header-brand mds-container">
		<router-link to='/' class="mds-header-brand-link">
			<img class="mds-header-brand-logo" src="../assets/media/logo-light.svg" alt="">
		</router-link>
		<div class="mds-header-brand-actions">
			<div class="mds-header-brand-actions-lang">Engilsh</div>
			<router-link to="/investors" rel="noopener noreferrer">{{ headerLabels.investors }}</router-link>
			<router-link to="/partners" rel="noopener noreferrer">{{ headerLabels.partners }}</router-link>
			<button class="mds-button mds-button-primary_outline">
				<i class="pi pi-search"></i>
			</button>
		</div>
	</div>
	<div class="mds-header-nav">
		<nav class="mds-container">
			<div class="mds-primary-nav">
				<router-link to='/' class="mds-header-brand-link">
					<img class="mds-header-brand-logo-sm" src="../assets/media/logo-light-sm.svg" alt="">
				</router-link>
				<ul class="mds-header-nav-list">
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>{{ headerLabels.products }}</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<ProdcutsNav />
						</div>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>{{ headerLabels.solutions }}</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<SolutionsNav />
						</div>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>{{ headerLabels.insights }}</span>
						</button>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>{{ headerLabels.positiveCommerce }}</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<PositiveCommerceNav />
						</div>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>{{ headerLabels.careers }}</span>
						</button>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>{{ headerLabels.company }}</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<CompanyNav />
						</div>
					</li>
				</ul>
			</div>
			<router-link to='/contact-us' class="mds-button mds-button-secondary">
				{{ headerLabels.contact }}
			</router-link>
		</nav>
	</div>
</template>
<script setup>
import appData from "@/assets/data/app-data.json";
import CompanyNav from './menus/CompanyNav.vue';
import PositiveCommerceNav from './menus/PositiveCommerceNav.vue';
import ProdcutsNav from './menus/ProdcutsNav.vue';
import SolutionsNav from './menus/SolutionsNav.vue';

const headerLabels = appData.headerLabels || {};
</script>