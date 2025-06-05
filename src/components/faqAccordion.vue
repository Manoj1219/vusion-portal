<template>
	<h2 class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
		{{ data.subHeader }}
	</h2>

	<div v-for="(block, index) in data.eachBlockInfo" :key="block.id" class="component-accordion">
		<button type="button" class="tab-wrapper" :aria-expanded="openIndex === index" @click="toggle(index)">
			<h2 class="text-left">{{ block.label || block.title }}</h2>
			<div class="shrink-0" :class="{ 'is-open': openIndex === index }">
				<!-- plus/minus icons -->
				<svg v-if="openIndex !== index" xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28">
					<path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#0D2126"
						d="M1.375 14.364h26.25M14.5 27.49V1.24" />
				</svg>

				<svg xmlns="http://www.w3.org/2000/svg" fill="none" width="28" height="28">
					<path stroke-linejoin="round" stroke-linecap="round" stroke-width="2" stroke="#0D2126"
						d="M1.375 14.364h26.25" />
				</svg>
			</div>
		</button>

		<transition name="accordion">
			<div v-show="openIndex === index" class="content-wrapper layout-accordion__content mds-width-85">
				<div class="accordionDes" v-html="block.description"></div>

				<ul>
					<li class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm" v-if="block.description1">
						{{ block.description1 }}
					</li>
					<li class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm" v-if="block.description2">
						{{ block.description2 }}
					</li>
					<li class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm" v-if="block.description3">
						{{ block.description3 }}
					</li>
					<li class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm" v-if="block.description3">
						{{ block.description4 }}
					</li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
import AppData from "@/assets/data/app-data.json";

const props = defineProps({
	productKey: {
		type: String,
		default: "productMemory",
	},
});

const openIndex = ref(-1);

function toggle(index) {
	openIndex.value = openIndex.value === index ? -1 : index;
}

const data = computed(() => {
	return (
		AppData.allProducts[props.productKey]?.FaqAccordion || {
			subHeader: "",
			eachBlockInfo: [],
		}
	);
});
</script>
