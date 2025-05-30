<template>
    <section class="mds-section mds-background-primary">
        <div class="mds-container mds-grid mds-grid-size-2">
            <div
                class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white mds-p-right-6xl">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ positiveCommerceData.intro.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-4xl">
                    {{ positiveCommerceData.intro.header }}
                </h1>
                <p class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-md mds-line-height-xl">
                    {{ positiveCommerceData.intro.description }}
                </p>
            </div>
            <div class="hero-section-image">
                <img class="mds-height-100 mds-width-intro" :src="positiveCommerceData.intro.image" alt="" />
            </div>
        </div>
    </section>
    <section class="mds-section mds-background-secondary-shade mds-overflow-hidden">
        <div class="mds-container mds-grid mds-grid-size-2">
            <div class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ positiveCommerceData.ourMission.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-3xl">
                    {{ positiveCommerceData.ourMission.header }}
                </h1>
            </div>
            <div class="mds-background-white mds-full-width-content mds-p-bottom-7xl mds-p-horizontal-7xl">
                <div class="mds-flex mds-flex-column mds-gap-around-lg mds-m-top-7xl mds-width-50"
                    v-for="mission in positiveCommerceData.ourMission.list" :key="mission.id">
                    <div class="mds-flex mds-items-center mds-gap-around-xl">
                        <i class="pi pi-check mds-font-size-xl"></i>
                        <p class="mds-font-weight-600 mds-font-size-lg">
                            {{ mission.header }}
                        </p>
                    </div>
                    <p class="mds-font-size-base mds-font-weight-500 mds-line-height-xl mds-p-right-2xl mds-p-left-5xl">
                        {{ mission.description }}
                    </p>
                </div>
            </div>
        </div>
    </section>
</template>
<script setup>
import AppData from '@/assets/data/app-data.json';
const positiveCommerceData = AppData.positiveCommerce;
</script>
