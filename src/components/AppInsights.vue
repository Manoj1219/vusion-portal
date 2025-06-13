<template>
  <div class="mds-grid mds-gap_around-4xl mds-m-top-6xl">
    <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
      <router-link
        class="mds-flex-column"
        v-for="(item, index) in insightsLabels"
        :key="index"
        :to="item.routeTo"
      >
        <div class="insights-content">
          <div
            class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
          >
            {{ item.label }}
          </div>
          <h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
            {{ item.header }}
          </h3>
          <p
            v-if="item.description"
            class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
          >
            {{ item.description }}
          </p>
          <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
          <div class="insights-meta">{{ item.updated }}</div>
        </div>
        <div class="insights-image" v-if="item.img">
          <img
            src="https://www.vusion.com/wp-content/uploads/2024/04/Shopper-Engagement@2x-100-scaled-1179x786-c-default.jpg"
            alt=""
          />
        </div>
      </router-link>
    </div>
  </div>
  <div class="mds-flex mds-justify-center mds-m-top-4xl">
    <router-link to="/insights" class="mds-button mds-button-primary_outline">
      View all
    </router-link>
  </div>
</template>
<script setup>
import appData from "@/assets/data/app-data.json";

const insightsLabels = appData?.insightsSection.list;
</script>
