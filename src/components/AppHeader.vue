<template>
	<div class="mds-header-brand mds-container">
		<router-link to='/' class="mds-header-brand-link">
			<img class="mds-header-brand-logo" src="../assets/media/logo-light.svg" alt="">
		</router-link>
		<div class="mds-header-brand-actions">
			<div class="mds-header-brand-actions-lang">Engilsh</div>
			<router-link to="/investors" rel="noopener noreferrer">Investors</router-link>
			<router-link to="/partners" rel="noopener noreferrer">Partners</router-link>
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
							<span>Products</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<ProdcutsNav />
						</div>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>Solutions</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<SolutionsNav />
						</div>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>Insights</span>
						</button>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>Positive Commerce</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<PositiveCommerceNav />
						</div>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>Careers</span>
						</button>
					</li>
					<li class="mds-header-nav-item">
						<button class="mds-button mds-button-nav">
							<span>Company</span>
							<i class="pi pi-angle-down"></i>
						</button>
						<div class="mds-navitem-wrapper">
							<CompanyNav />
						</div>
					</li>
				</ul>
			</div>
			<router-link to='/contact-us' class="mds-button mds-button-secondary">
				Contact Us
			</router-link>
		</nav>
	</div>
</template>
<script setup>
import CompanyNav from './menus/CompanyNav.vue';
import PositiveCommerceNav from './menus/PositiveCommerceNav.vue';
import ProdcutsNav from './menus/ProdcutsNav.vue';
import SolutionsNav from './menus/SolutionsNav.vue';

</script>