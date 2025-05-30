<template>
    <section class="mds-section mds-background-gray mds-p-vertical-7xl">
        <div class="mds-container mds-grid mds-grid-size-2">
            <div class="mds-flex mds-flex-column mds-items-start">
                <div
                    class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500">
                    {{ homepageData.upcomingEvents.label }}
                </div>
                <h2 class="mds-m-bottom-lg mds-font-size-4xl">
                    {{ homepageData.upcomingEvents.header }}
                </h2>
                <p class="mds-font-size-base-2 mds-line-height-xl">
                    {{ homepageData.upcomingEvents.description }}
                </p>
                <router-link :to="homepageData.upcomingEvents.link"
                    class="mds-button mds-button-primary_outline mds-m-top-2xl">
                    See all events
                </router-link>
            </div>
            <div class="mds-seciton">
                <EventsList />
            </div>
        </div>
    </section>
</template>
<script setup>
import AppData from '@/assets/data/app-data.json';
import EventsList from '@/components/EventsList.vue';

const homepageData = AppData.homepage;
</script>
