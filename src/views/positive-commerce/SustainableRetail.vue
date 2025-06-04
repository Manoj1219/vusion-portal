<template>
  <section class="mds-section mds-background-primary">
    <div class="mds-container mds-grid mds-grid-size-2">
      <div
        class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white mds-p-right-6xl"
      >
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
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
          <img class="mds-width-15 mds-m-bottom-lg" :src="block.image" alt="" />
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
        class="mds-grid mds-grid-size-4 mds-m-vertical-6xl mds-gap-around-4xl"
      >
        <div
          v-for="block in SustainableRetail.Opportunities.certificate"
          :key="block.id"
          class="mds-flex mds-items-start mds-flex-column mds-gap-around-lg"
        >
          <div class="mds-height-px-150">
            <img class="mds-width-60" :src="block.image" alt="" />
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
              class="mds-button mds-button-secondary mds-m-top-3xl mds-width-30"
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
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            Ultra-Energy-efficient solutions with battery-less IoT in the coming
            years
          </p>
        </div>
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            Our color e-paper technology for ESLs displays with minimal energy
          </p>
        </div>
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            Our R&D focuses on low-energy systems with more than 40% of our
            patents related to energy savings topics
          </p>
        </div>
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            Serverless/ infraless solutions avoid any additional infrastructure
          </p>
        </div>
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            We leverage your physical store to create micro-fulfillment centers
            and potentially avoid building order-picking warehouses
          </p>
        </div>
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            Our technologies are hosted on Microsoft’s Azure cloud, which has
            committed to powering 100% of its data centers with renewable
            electricity by 2025
          </p>
        </div>
        <div class="mds-flex mds-items-start mds-gap-around-sm">
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
          <p class="mds-font-size-base-2 mds-width-90">
            We are committed to decreasing our carbon intensity by 40% by 2027
            vs.2022
          </p>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-p-vertical-4xl"
  >
    <div class="mds-container">
      <div class="mds-flex mds-column-gap-5 mds-m-top-lg">
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
            class="mds-button mds-button-secondary mds-m-top-3xl mds-width-45"
            :href="SustainableRetail.OurCustomer.link"
          >
            View Press Release
          </a>
        </div>
        <div class="mds-section-image mds-self-center mds-width-60">
          <img :src="SustainableRetail.OurCustomer.image" alt="" />
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
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/10/image-1515-1540x1020-c-default.png"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              Food waste reduction
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              Reducing food waste
            </h2>

            <p class="mds-font-weight-400 mds-font-size-base">
              In partnership with Smartway, we developed Smartdetection Flash
              Evo, an award-winning solution for detecting products with short
              expiry dates in stores. Flashing labels signal soon-to-be expired
              products, and in less than 4 minutes, more than 500 products can
              be checked and discounted, eliminating hours spent in aisles
              identifying and removing soon-to-be-expired products.
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
      <div class="mds-flex mds-column-gap-5 mds-m-top-lg">
        <div class="mds-section-image mds-self-center mds-width-60">
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

          <p class="mds-font-weight-400 mds-font-size-base-2">
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
              Reduce, reuse, recycle
            </span>
            <h2
              class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl mds-width-70"
            >
              Recycling ESLs and reducing carbon footprint
            </h2>

            <p class="mds-font-weight-400 mds-font-size-base mds-width-85">
              Our
              <a href="" class="text-underline"> electronic shelf labels </a>
              are eco-designed to be repaired, reconditioned, and refurbished or
              recycled. Recycled ESLs are carefully inspected to recover
              components that can be reused for repairs in “second life” labels.
              We also decreased the volume of packaging used in the shipment of
              our products, saving on a yearly basis 212,152 kg of cardboard in
              2023 compared to 2021.
            </p>
          </div>
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/10/image-1516-1-1540x1020-c-default.png"
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
        class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mds-text-color-white"
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
      <faqAccordion productKey="SustainableRetail" />
    </div>
  </section>
</template>
<script setup>
import AppData from "@/assets/data/app-data.json";
import faqAccordion from "@/components/faqAccordion.vue";
const SustainableRetail = AppData.positiveCommerce.SustainableRetail;
</script>
