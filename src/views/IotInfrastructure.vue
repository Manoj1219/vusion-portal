<template>
  <div v-if="IoTInfrastructure">
    <section class="mds-section">
      <div class="mds-container">
        <div class="mds-grid mds-grid-size-2 mds-p-vertical-6xl">
          <div
            class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl"
          >
            <span
              v-if="IoTInfrastructure.intro"
              class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ IoTInfrastructure.intro.label }}
            </span>
            <h1
              v-if="IoTInfrastructure.intro"
              class="subHeader mds-m-bottom-lg"
            >
              {{ IoTInfrastructure.intro.header }}
            </h1>
            <p
              v-if="IoTInfrastructure.intro"
              class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
            >
              {{ IoTInfrastructure.intro.description }}
            </p>
            <a
              v-if="
                IoTInfrastructure.intro &&
                IoTInfrastructure.intro.link &&
                IoTInfrastructure.intro.link.href
              "
              :target="IoTInfrastructure.intro.link.target"
              class="mds-button mds-button-secondary mds-m-top-3xl mds-width-55"
              :href="IoTInfrastructure.intro.link.href"
            >
              {{ IoTInfrastructure.intro.link.text }}
            </a>
          </div>
          <div v-if="IoTInfrastructure.intro" class="hero-section-image">
            <img
              class="mds-height-100 mds-width-intro"
              :src="IoTInfrastructure.intro.image.src"
              :alt="IoTInfrastructure.intro.image.alt"
            />
          </div>
        </div>
      </div>
    </section>
    <section
      class="mds-section mds-background-secondary-shade mds-p-vertical-4xl"
    >
      <div class="mds-container">
        <div
          v-if="IoTInfrastructure.smartCoexistence"
          class="mds-p-vertical-4xl"
        >
          <h1 class="subHeader mds-m-bottom-lg mds-width-70">
            {{ IoTInfrastructure.smartCoexistence.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60"
          >
            {{ IoTInfrastructure.smartCoexistence.description }}
          </p>
        </div>
        <div class="mds-flex mds-flex-column mds-p-top-4xl">
          <div
            v-if="IoTInfrastructure.smartCoexistence"
            class="mds-grid mds-grid-size-2 mds-m-vertical-2xl"
          >
            <div
              v-for="feature in IoTInfrastructure.smartCoexistence.features"
              :key="feature.id"
              class="mds-flex mds-items-start mds-gap-around-sm"
            >
              <svg
                viewBox="0 0 29 35"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                class="pi pi-check mds-font-size-2xl"
                width="30px"
              >
                <path
                  d="M4.4 16.693l5.817 8.336L23.072 6.371"
                  stroke="currentColor"
                  stroke-width="4"
                  stroke-miterlimit="22.93"
                ></path>
              </svg>
              <div class="mds-width-80">
                <h4 class="mds-font-size-lg mds-font-weight-500">
                  {{ feature.title }}
                </h4>
                <p class="mds-font-size-base-2 mds-m-top-base">
                  {{ feature.description }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mds-container">
      <div
        v-if="IoTInfrastructure.strategicAllies"
        class="mds-section-content mds-p-top-lg"
      >
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
          >
            <div class="mds-section-image mds-self-center mds-p-around-lg">
              <img
                class="mds-border-radius-base"
                :src="IoTInfrastructure.strategicAllies.image.src"
                :alt="IoTInfrastructure.strategicAllies.image.alt"
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                {{ IoTInfrastructure.strategicAllies.header }}
              </h2>
              <p class="mds-font-weight-400 mds-font-size-base">
                {{ IoTInfrastructure.strategicAllies.description }}
              </p>
              <a
                v-if="
                  IoTInfrastructure.strategicAllies.link &&
                  IoTInfrastructure.strategicAllies.link.href
                "
                class="mds-button mds-button-primary_outline mds-m-top-xl"
                :href="IoTInfrastructure.strategicAllies.link.href"
              >
                {{ IoTInfrastructure.strategicAllies.link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="mds-section mds-background-pink-shade">
      <div
        v-if="IoTInfrastructure.iotSolutions"
        class="mds-section-content mds-container"
      >
        <div>
          <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-70">
            {{ IoTInfrastructure.iotSolutions.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl mds-width-70"
          >
            {{ IoTInfrastructure.iotSolutions.description }}
          </p>
        </div>
        <div
          class="mds-grid mds-grid-size-3 mds-m-vertical-2xl mds-gap-column-6xl"
        >
          <div
            v-for="solution in IoTInfrastructure.iotSolutions.solutions"
            :key="solution.id"
            class="mds-flex mds-items-start mds-flex-column mds-gap-around-md"
          >
            <img
              class="mds-border-radius-base mds-m-bottom-md"
              :src="solution.image.src"
              :alt="solution.image.alt"
            />
            <h1 class="defaultHeaderFont mds-font-size-lg">
              {{ solution.header }}
            </h1>
            <p>
              {{ solution.description }}
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="mds-container">
      <div
        v-if="IoTInfrastructure.carbonFootprint"
        class="mds-section-content mds-p-top-lg"
      >
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
          >
            <div class="mds-section-image mds-self-center mds-p-around-lg">
              <img
                class="mds-border-radius-base"
                :src="IoTInfrastructure.carbonFootprint.image.src"
                :alt="IoTInfrastructure.carbonFootprint.image.alt"
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <span
                class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
              >
                {{ IoTInfrastructure.carbonFootprint.label }}
              </span>
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                {{ IoTInfrastructure.carbonFootprint.header }}
              </h2>
              <p class="mds-font-weight-400 mds-font-size-base">
                {{ IoTInfrastructure.carbonFootprint.description }}
              </p>
              <a
                v-if="
                  IoTInfrastructure.carbonFootprint.link &&
                  IoTInfrastructure.carbonFootprint.link.href
                "
                class="mds-button mds-button-primary_outline mds-m-top-xl"
                :href="IoTInfrastructure.carbonFootprint.link.href"
              >
                {{ IoTInfrastructure.carbonFootprint.link.text }}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <contactUs />
    </section>
  </div>
</template>

<script setup>
import { ref } from "vue";
import contactUs from "@/components/ProductContactUs.vue";
import AppData from "@/assets/data/app-data.json";

const IoTInfrastructure = ref(AppData.IoTInfrastructure || {});
</script>
