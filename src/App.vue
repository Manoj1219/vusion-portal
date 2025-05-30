<template>
	<header class="mds-header" :class="isPageScrolled ? 'mds-header-fixed' : ''">
		<AppHeader />
	</header>
	<main class="mds-main-section">
		<router-view />
	</main>
	<footer>
		<AppFooter />
	</footer>
</template>
<script setup>
import { onMounted } from 'vue';
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import './assets/styles/main.scss';

import { ref } from 'vue';

const isPageScrolled = ref(false);

onMounted(() => {
	document.body.classList.add('light-mode');
	const handleScroll = () => {
		if (window.scrollY > 5) {
			isPageScrolled.value = true;
		} else {
			isPageScrolled.value = false;
		}
	};

	window.addEventListener('scroll', handleScroll);

	// Cleanup the event listener when the component is unmounted
	return () => {
		window.removeEventListener('scroll', handleScroll);
	};
});
</script>