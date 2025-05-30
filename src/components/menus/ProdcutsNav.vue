<template>
    <div class="mds-navitem-container products-nav">
        <div class="mds-navitem-sidenav">
            <h3 class="mds-font-size-base-2">Product Overview</h3>
            <p class="mds-font-size-md-2 mds-font-weight-400 mds-line-height-base">
                Turn your physical store into a digital asset to maximize efficiency and improve
                store performance.
            </p>
            <router-link to="/products" class=" mds-button mds-button-primary_outline">Overview</router-link>
        </div>
        <div class="mds-navitem-options mds-grid mds-grid-size-3">
            <router-link class="mds-navitem-option" v-for="(page, index) in pageLinks" :key="index" :to="page?.routoTo">
                <img class="route-img" :src="page?.imgSrc" alt="">
                <div>
                    <span>
                        <h4 class="mds-font-size-base mds-font-weight-700">{{ page?.title }}</h4>
                        <h5 class="mds-font-size-mds-2 mds-font-weight-500 mds-m-top-xs">
                            {{ page?.subTitle ? page?.subTitle : "&nbsp;" }}
                        </h5>
                    </span>
                    <p class="mds-font-size-md-2 mds-font-weight-400 mds-m-top-xs">{{ page?.description }}</p>
                </div>
            </router-link>
        </div>
    </div>
</template>
<script setup>
import navLinks from "@/assets/data/menu-data.json";

const pageLinks = navLinks?.products || [];
</script>