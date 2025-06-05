<template>
    <div class="mds-navitem-container solutions-nav">
        <div class="mds-navitem-sidenav">
            <h3 class="mds-font-size-base-2">{{ companyNav.header }}</h3>
            <p class="mds-font-size-md-2 mds-font-weight-400 mds-line-height-base">
                {{ companyNav.description }}
            </p>
            <!-- <router-link to="/positive-commerce" class="mds-button mds-button-primary_outline">Overview</router-link> -->
        </div>
        <div class="mds-navitem-options mds-grid mds-grid-size-3">
            <router-link class="mds-navitem-option" v-for="(page, index) in pageLinks" :key="index" :to="page?.routoTo">
                <div>
                    <h4 class="mds-font-size-base mds-font-weight-700">{{ page?.title }}</h4>
                    <p class="mds-font-size-md-2 mds-font-weight-400 mds-m-top-xl">{{ page?.description }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import navLinks from "@/assets/data/menu-data.json";
import navMessages from "@/assets/data/app-data.json";


const pageLinks = navLinks?.company || [];
const companyNav = navMessages.companyNav || {};
</script>