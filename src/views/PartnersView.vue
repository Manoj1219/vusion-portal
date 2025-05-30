<template>
    <section class="mds-section mds-background-primary">
        <div class="mds-container mds-grid mds-grid-size-2">
            <div class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ partnersData.intro.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-4xl">
                    {{ partnersData.intro.header }}
                </h1>
                <p class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-md mds-line-height-xl">
                    {{ partnersData.intro.description }}
                </p>
                <router-link :to="partnersData.intro.link" class="mds-button mds-button-secondary mds-m-top-2xl">
                    Contact us
                </router-link>
            </div>
            <div class="hero-section-image">
                <img class="mds-height-100 mds-width-intro" :src="partnersData.intro.image" alt="" />
            </div>
        </div>
    </section>
    <section class="mds-section mds-p-vertical-7xl">
        <div class="mds-container">
            <div class="mds-flex mds-flex-column mds-items-start">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ partnersData.partnersPrinciples.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-4xl">
                    {{ partnersData.partnersPrinciples.header }}
                </h1>
                <div class="mds-grid mds-grid-size-3 mds-gap-around-3xl mds-m-top-6xl">
                    <div class="mds-flex mds-flex-column mds-gap-around-lg"
                        v-for="principle in partnersData.partnersPrinciples.principles" :key="principle.id">
                        <img class="mds-width-px-60 mds-m-bottom-lg" :src="principle.icon" alt="">
                        <h4 class="mds-font-size-lg mds-font-weight-600">
                            {{ principle.header }}
                        </h4>
                        <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-p-right-2xl">
                            {{ principle.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mds-section mds-background-secondary-shade mds-p-vertical-7xl">
        <div class="mds-container mds-flex mds-items-center">
            <div class="mds-section-content mds-flex mds-flex-column mds-items-start mds-width-50 mds-p-right-6xl">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ partnersData.howWePartners.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-3xl mds-line-height-3xl">
                    {{ partnersData.howWePartners.header }}
                </h1>
            </div>
            <div class="mds-flex mds-flex-column mds-gap-around-6xl mds-width-50 mds-p-left-3xl">
                <div class="mds-flex mds-flex-column mds-gap-around-lg"
                    v-for="partner in partnersData.howWePartners.list" :key="partner.id">
                    <div>
                        <div class="mds-flex mds-items-center mds-gap-around-xl mds-m-bottom-lg">
                            <i class="pi pi-check mds-font-size-xl"></i>
                            <p class="mds-font-weight-600 mds-font-size-lg">
                                {{ partner.header }}
                            </p>
                        </div>
                        <p
                            class="mds-font-size-base mds-font-weight-500 mds-line-height-xl mds-p-right-2xl mds-p-left-5xl">
                            {{ partner.description }}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="mds-section mds-p-vertical-7xl">
        <div class="mds-container">
            <div class="mds-flex mds-flex-column mds-items-start">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ partnersData.benefits.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-4xl">
                    {{ partnersData.benefits.header }}
                </h1>
                <div class="mds-grid mds-grid-size-3 mds-gap-around-3xl mds-m-top-7xl mds-width-100">
                    <div class="mds-flex mds-flex-column mds-gap-around-lg"
                        v-for="benefit in partnersData.benefits.list" :key="benefit.id">
                        <img class="mds-width-px-60 mds-m-bottom-lg" :src="benefit.image" alt="">
                        <h4 class="mds-font-size-lg mds-font-weight-600">
                            {{ benefit.header }}
                        </h4>
                        <ul
                            class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-p-right-2xl mds-list mds-list-disc">
                            <li class="mds-m-bottom-xs" v-for="item in benefit.items" :key="item.id">
                                {{ item.description }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <EventsComponent />
    <section class="insights-section">
        <div class="mds-container">
            <div
                class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                {{ partnersData.insights.label }}
            </div>
            <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-width-50">
                {{ partnersData.insights.header }}
            </h2>
            <AppInsights />
        </div>
    </section>
    <section class="mds-section mds-background-secondary-shade">
        <div class="mds-container mds-flex mds-items-center">
            <div class="mds-flex mds-flex-column mds-gap-around-6xl mds-width-50 mds-p-right-3xl">
                <img class="mds-height-100" :src="partnersData.becomePartner.image" alt="">
            </div>
            <div class="mds-flex mds-flex-column mds-items-start mds-width-50 mds-p-left-6xl">
                <span
                    class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ partnersData.becomePartner.label }}
                </span>
                <h1 class="mds-font-weight-700 mds-font-size-3xl mds-line-height-3xl">
                    {{ partnersData.becomePartner.header }}
                </h1>
                <p class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-md mds-line-height-xl">
                    {{ partnersData.becomePartner.description }}
                </p>
                <router-link :to="partnersData.becomePartner.link"
                    class="mds-button mds-button-secondary mds-m-top-2xl">
                    Become a partner
                </router-link>
            </div>
        </div>
    </section>
</template>
<script setup>
import AppData from '@/assets/data/app-data.json';
import EventsComponent from '@/components/EventsComponent.vue';
import AppInsights from '@/components/AppInsights.vue';
const partnersData = AppData.partners;
</script>
