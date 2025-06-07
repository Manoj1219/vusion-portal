<template>
  <div
    class="oppprtunities-card"
    v-for="opportunity in opportunities"
    :key="opportunity.id"
  >
    <div class="oppprtunities-image mds-m-bottom-2xl">
      <img class="mds-border-radius-base" :src="opportunity.image" alt="" />
    </div>
    <div class="oppprtunities-content">
      <h3 class="mds-font-size-base-2 mds-m-bottom-2xl">
        {{ opportunity.title }}
      </h3>
      <p class="mds-font-size-base mds-line-height-md">
        {{ opportunity.description }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import AppData from "@/assets/data/app-data.json";

const opportunities = ref(AppData.homepage.opportunities.list);
</script>
