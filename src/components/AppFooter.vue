<template>
	<div class="app-footer">
		<div class="mds-container">
			<div class=" mds-grid mds-grid-size-2">
				<div class="company-info">
					<div class="footer-logo mds-m-bottom-xl">
						<img class="mds-logo-width-base" src="../assets/media//logo-white.svg" />
					</div>
					<p class="mds-m-bottom-xl mds-font-size-md-2">Technologies for Positive Commerce.</p>
					<button class="mds-button mds-button-secondary mds-m-bottom-xl">Contact Us</button>
					<div class="footer-social-links mds-flex mds-gap-around-xl">
						<i class="pi pi-instagram mds-font-size-xl"></i>
						<i class="pi pi-twitter mds-font-size-xl"></i>
						<i class="pi pi-linkedin mds-font-size-xl"></i>
					</div>
				</div>
				<div class="footer-links mds-grid mds-grid-size-2">
					<div class="footer-links-sub">
						<p class="mds-font-size-base-2 mds-font-weight-900 mds-m-bottom-xl">Discover Solutions</p>
						<ul>
							<li><router-link class="mds-font-size-md-2" to="/">Cloud for Retail</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/about">SESimagotag</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/contact">Captana</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/services">Retail Marketing solutions</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/products">Retail intelligence software</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/products">Smart Inventory Management</router-link></li>
						</ul>
					</div>
					<div class="footer-links-sub">
						<p class="mds-font-size-base-2 mds-font-weight-900 mds-m-bottom-xl">Our Products</p>
						<ul>
							<li> <router-link class="mds-font-size-md-2" to="/">VusionOX</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/about">Electronic Shelf Labels</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/contact">EdgeSense™</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/services">IoT infrastructure</router-link></li>
							<li><router-link class="mds-font-size-md-2" to="/products">Pulse </router-link></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="footer-copyright mds-flex mds-justify-between mds-m-top-5xl">
				<ul class="mds-grid">
					<li> <router-link class="mds-font-size-md-2" to="/">Privacy Policy</router-link></li>
					<li><router-link class="mds-font-size-md-2" to="/about">Legal Notice</router-link></li>
					<li><router-link class="mds-font-size-md-2" to="/contact">Cookie Info</router-link></li>
				</ul>
				<div class="copyright-text">
					<p class="mds-font-size-md-2">&copy; Copyright {{ new Date().getFullYear() }} VusionGroup</p>
				</div>
			</div>
		</div>
	</div>
</template>