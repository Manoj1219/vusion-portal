<template>
  <section class="mds-section mds-background-primary">
    <div class="mds-container mds-grid mds-grid-size-2">
      <div
        class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white mds-p-right-6xl"
      >
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500 mds-p-top-4xl-sm"
        >
          {{ SustainableRetail.intro.subHeader }}
        </span>
        <h1 class="header mds-m-bottom-lg">
          {{ SustainableRetail.intro.header }}
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
        >
          {{ SustainableRetail.intro.description }}
        </p>
      </div>
      <div class="hero-section-image">
        <img
          class="mds-height-100 mds-width-intro"
          :src="SustainableRetail.intro.image"
          alt=""
        />
      </div>
    </div>
  </section>
  <section class="mds-section-content">
    <div class="mds-container defaul-b-border">
      <div class="retailBlock">
        <div class="mds-badge-large">
          <img
            class="mds-width-80"
            :src="SustainableRetail.Opportunities.icon"
            alt=""
          />
        </div>
        <span
          class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ SustainableRetail.Opportunities.subHeader }}
        </span>
        <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-70">
          {{ SustainableRetail.Opportunities.header }}
        </h2>
        <p
          class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-70"
        >
          {{ SustainableRetail.Opportunities.description }}
        </p>
      </div>
      <div
        class="mds-grid mds-grid-size-4 mds-m-vertical-6xl mds-gap-around-4xl"
      >
        <div
          v-for="block in SustainableRetail.Opportunities.eachBlockInfo"
          :key="block.id"
          class="mds-flex mds-flex-column mds-gap-around-lg"
        >
          <h1
            class="defaultHeaderFont mds-font-weight-600 mds-font-size-2xl mds-height-px-50"
          >
            {{ block.title }}
          </h1>
          <h4 class="defaultHeaderFont mds-font-weight-900">
            {{ block.subTitle }}
          </h4>

          <p class="mds-font-size-base mds-font-weight-300 mds-line-height-xl">
            {{ block.description }}
          </p>
        </div>
      </div>
      <div
        class="mds-grid mds-grid-size-4 mds-m-vertical-6xl mds-gap-around-4xl mob-grid-2"
      >
        <div
          v-for="block in SustainableRetail.Opportunities.certificate"
          :key="block.id"
          class="mds-flex mds-items-start mds-flex-column mds-gap-around-lg"
        >
          <div class="mds-height-px-150">
            <img
              class="mds-width-50 mob-icon-width-80"
              :src="block.image"
              alt=""
            />
          </div>

          <h1 class="defaultHeaderFont mds-font-weight-600 mds-font-size-lg">
            {{ block.title }}
          </h1>

          <a
            :href="block.downloadLink"
            target="_blank"
            download
            class="mds-font-size-base mds-font-weight-300 mds-line-height-xl"
          >
            <span
              class="text-underline mds-text-color-primary mds-flex mds-items-center mds-gap-md"
            >
              {{ block.subTitle }}

              <svg
                viewBox="0 0 14 16"
                fill="none"
                class="mds-m-left-sm"
                width="15px"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.923 14.846V4.461m4.138 6.101l-4.138 4.4-4.138-4.4"
                  stroke-width="1.5"
                  stroke-miterlimit="22.93"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="mds-section-content mds-p-top-lg">
      <h1 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
        {{ SustainableRetail.Features.mainHeader }}
      </h1>
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="SustainableRetail.Features.image"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ SustainableRetail.Features.subtitle }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ SustainableRetail.Features.header }}
            </h2>

            <p class="mds-font-weight-400 mds-font-size-base">
              {{ SustainableRetail.Features.description }}
            </p>
            <a
              target="_blank"
              class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
              :href="SustainableRetail.Features.link"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="mds-flex mds-flex-column">
      <div
        class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
      >
        <div class="mds-section-content mds-p-around-none">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ SustainableRetail.FeaturesTwo.subtitle }}
          </span>
          <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
            {{ SustainableRetail.FeaturesTwo.header }}
          </h2>
        </div>
        <div class="mds-section-image mds-self-center mds-p-around-lg">
          <img
            class="mds-border-radius-base"
            :src="SustainableRetail.FeaturesTwo.image"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="mds-flex mds-flex-column mds-p-top-4xl">
      <div class="mds-grid mds-grid-size-2 mds-m-vertical-2xl">
        <div
          class="mds-flex mds-items-start mds-gap-around-sm"
          v-for="block in SustainableRetail.FeaturesTwo.eachBlockInfo"
          :key="block.id"
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
          <p class="mds-font-size-base-2 mds-width-80">
            {{ block.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-p-vertical-4xl"
  >
    <div class="mds-container">
      <div class="mds-mobile-flex mds-column-gap-5 mds-m-top-lg">
        <div class="mds-section-content mds-p-around-none mds-width-40">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ SustainableRetail.OurCustomer.subtitle }}
          </span>
          <h2 class="defaultHeaderFont mds-font-size-3xl">
            {{ SustainableRetail.OurCustomer.header }}
          </h2>

          <p class="mds-font-weight-400 mds-font-size-base-2">
            {{ SustainableRetail.OurCustomer.name }}
          </p>
          <p class="mds-font-weight-400 mds-font-size-base-2 mds-m-top-base">
            {{ SustainableRetail.OurCustomer.position }}
          </p>
          <a
            target="_blank"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
            :href="SustainableRetail.OurCustomer.link"
          >
            View Press Release
          </a>
        </div>
        <div
          class="mds-section-image mds-self-center mds-width-60 mob-p-top-3xl"
        >
          <img :src="SustainableRetail.OurCustomer.image" alt="" />
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="mds-section-content mds-p-top-7xl">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="SustainableRetail.FoodWaste.image"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ SustainableRetail.FoodWaste.subtitle }}
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              {{ SustainableRetail.FoodWaste.header }}
            </h2>

            <p class="mds-font-weight-400 mds-font-size-base">
              {{ SustainableRetail.FoodWaste.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-p-vertical-4xl"
  >
    <div class="mds-container">
      <div class="mds-mobile-flex mds-column-gap-5 mds-m-top-lg">
        <div
          class="mds-section-image mds-self-center mds-width-60 mob-p-bottom-3xl"
        >
          <img :src="SustainableRetail.OurCustomerTwo.image" alt="" />
        </div>
        <div class="mds-section-content mds-p-around-none mds-width-40">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ SustainableRetail.OurCustomerTwo.subtitle }}
          </span>
          <h2 class="defaultHeaderFont mds-font-size-3xl">
            {{ SustainableRetail.OurCustomerTwo.header }}
          </h2>

          <p class="mds-font-weight-600 mds-font-size-base-2">
            {{ SustainableRetail.OurCustomerTwo.name }}
          </p>
          <p class="mds-font-weight-400 mds-font-size-base-2 mds-m-top-base">
            {{ SustainableRetail.OurCustomerTwo.position }}
          </p>
          <a
            target="_blank"
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-35"
            :href="SustainableRetail.OurCustomerTwo.link"
          >
            View video
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="mds-section-content mds-p-top-lg">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ SustainableRetail.Recycling.subtitle }}
            </span>
            <h2
              class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl mds-width-70"
            >
              {{ SustainableRetail.Recycling.header }}
            </h2>

            <p class="mds-font-weight-400 mds-font-size-base mds-width-85">
              Our
              <a
                href="/sesimagotag/electronic-shelf-labels"
                class="text-underline"
              >
                electronic shelf labels
              </a>
              {{ SustainableRetail.Recycling.description }}
            </p>
          </div>
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              :src="SustainableRetail.Recycling.image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
    <div
      class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-primary mds-overflow-hidden mds-box-shadow-base"
    >
      <div
        class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white mob-p-left-xl"
      >
        <span
          class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ SustainableRetail.Podcast.subtitle }}
        </span>
        <h2 class="subHeader mds-m-bottom-lg">
          {{ SustainableRetail.Podcast.header }}
        </h2>
        <p class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl">
          {{ SustainableRetail.Podcast.description }}
        </p>
        <a
          target="_blank"
          :href="SustainableRetail.Podcast.link"
          class="mds-button mds-button-secondary mds-m-top-3xl mds-width-55"
        >
          Explore 2023 ESG report
        </a>
      </div>
      <div>
        <img
          class="mds-img-position-cover mds-height-100"
          :src="SustainableRetail.Podcast.image"
          alt=""
        />
      </div>
    </div>
    <div class="retailBlock mds-section-content">
      <div>
        <div class="mds-badge-large mds-m-bottom-base">
          <img
            class="mds-width-90"
            :src="SustainableRetail.OurPolicies.icon"
            alt=""
          />
        </div>
        <span
          class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ SustainableRetail.OurPolicies.subHeader }}
        </span>
        <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-70">
          {{ SustainableRetail.OurPolicies.header }}
        </h2>
        <p
          class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-70"
        >
          {{ SustainableRetail.OurPolicies.description }}
        </p>
      </div>
      <div
        class="mds-grid mds-grid-size-2 mds-m-vertical-6xl mds-gap-around-2xl"
      >
        <div
          v-for="block in SustainableRetail.OurPolicies.certificate"
          :key="block.id"
          class="mds-flex mds-items-start mds-flex-column mds-gap-around-md"
        >
          <h1 class="defaultHeaderFont mds-font-size-lg">
            {{ block.title }}
          </h1>

          <a
            :href="block.downloadLink"
            target="_blank"
            download
            class="mds-font-size-base mds-font-weight-300 mds-line-height-xl"
          >
            <span
              class="text-underline mds-text-color-primary mds-flex mds-items-center mds-gap-md"
            >
              {{ block.subTitle }}

              <svg
                viewBox="0 0 14 16"
                fill="none"
                class="mds-m-left-sm"
                width="15px"
                stroke="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.923 14.846V4.461m4.138 6.101l-4.138 4.4-4.138-4.4"
                  stroke-width="1.5"
                  stroke-miterlimit="22.93"
                ></path>
              </svg>
            </span>
          </a>
        </div>
      </div>
    </div>
    <div class="mds-section-content mds-p-top-lg">
      <h1 class="subHeader mds-m-bottom-5xl mds-width-80">
        FAQ for Positive Commerce and ESG
      </h1>
      <FaqAccordion productKey="SustainableRetail" />
    </div>
  </section>
</template>
<script setup>
import AppData from "@/assets/data/app-data.json";
import FaqAccordion from "@/components/FaqAccordion.vue";
const SustainableRetail = AppData.positiveCommerce.SustainableRetail;
</script>
