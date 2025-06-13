<template>
  <section class="mds-section mds-background-primary">
    <div class="mds-container mds-grid mds-grid-size-2">
      <div
        class="mds-section-content mds-flex mds-flex-column mds-items-start mds-text-color-white mds-p-right-6xl"
      >
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ positiveCommerceData.intro.label }}
        </span>
        <h1 class="mds-font-weight-700 mds-font-size-4xl">
          {{ positiveCommerceData.intro.header }}
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-md mds-line-height-xl"
        >
          {{ positiveCommerceData.intro.description }}
        </p>
      </div>
      <div class="hero-section-image">
        <img
          class="mds-height-100 mds-width-intro"
          :src="positiveCommerceData.intro.image"
          alt=""
        />
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-overflow-hidden"
  >
    <div class="mds-container mds-grid mds-grid-size-2">
      <div
        class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl"
      >
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          {{ positiveCommerceData.ourMission.label }}
        </span>
        <h1 class="mds-font-weight-700 mds-font-size-3xl">
          {{ positiveCommerceData.ourMission.header }}
        </h1>
      </div>
      <div
        class="mds-background-white mds-full-width-content mds-p-bottom-7xl mds-p-horizontal-7xl"
      >
        <div
          class="mds-flex mds-flex-column mds-gap-around-lg mds-m-top-7xl mds-width-50"
          v-for="mission in positiveCommerceData.ourMission.list"
          :key="mission.id"
        >
          <div class="mds-flex mds-items-center mds-gap-around-xl">
            <i class="pi pi-check mds-font-size-xl"></i>
            <p class="mds-font-weight-600 mds-font-size-lg">
              {{ mission.header }}
            </p>
          </div>
          <p
            class="mds-font-size-base mds-font-weight-500 mds-line-height-xl mds-p-right-2xl mds-p-left-5xl"
          >
            {{ mission.description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-background-primary mds-text-color-white">
    <div class="mds-container mds-p-vertical-7xl">
      <div>
        <div class="mds-width-15">
          <img
            class="mds-width-45 mds-m-bottom-lg"
            src="https://www.vusion.com/wp-content/uploads/2023/11/globe-dark.svg"
            alt=""
          />
        </div>
        <div class="mds-width-85">
          <span
            class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            Our Commitments
          </span>
        </div>
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          We’re committed to making a positive impact on commerce
        </h1>
      </div>
      <div class="mds-grid mds-grid-size-2 mds-gap-column-2xl">
        <div
          class="mds-border-around mds-background-contactBadge mds-border-radius-base mds-m-top-3xl mds-overflow-hidden"
        >
          <div class="insights-content insights-content-image mds-p-around-3xl">
            <h3
              class="mds-font-size-2xl mds-font-weight-500 mds-m-bottom-lg truncate"
            >
              Learn how we’re driving sustainable retail
            </h3>
            <p
              class="insights-intro mds-font-weight-300 mds-font-size-base mds-m-bottom-2xl"
            >
              We're reducing waste and improving efficiency to enable more
              sustainable stores.
            </p>
            <a
              href="https://www.vusion.com/positive-commerce/sustainable-retail/"
              class="router-link-active mds-button mds-button-primary_outlineWhiteBtn"
            >
              Learn more
            </a>
            <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            <p
              class="mds-flex mds-item-center mds-gap-column-lg mds-font-size-base-2 mds-line-height-xl mds-m-vertical-xl"
            >
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/ESG-icon.svg"
              />
              <a
                class="anchor-underline"
                href="https://www.vusion.com/standard-terms-conditions-and-warranty-conditions/"
                >Explore our ESG Executive Summary 2023</a
              >
            </p>
            <p
              class="mds-flex mds-item-center mds-gap-column-lg mds-font-size-base-2 mds-line-height-xl mds-m-vertical-xl"
            >
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/ESG-icon.svg"
              />
              <a
                class="anchor-underline"
                href="https://www.vusion.com/standard-terms-conditions-and-warranty-conditions/"
                >Explore our ESG report</a
              >
            </p>
          </div>
          <div class="insights-image">
            <img
              width="100%"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Insights_FPO_IMG_2-400x0-c-default.png"
              alt=""
            />
          </div>
        </div>
        <div
          class="mds-border-around mds-background-contactBadge mds-border-radius-base mds-m-top-3xl mds-overflow-hidden"
        >
          <div class="insights-content insights-content-image mds-p-around-3xl">
            <h3
              class="mds-font-size-2xl mds-font-weight-500 mds-m-bottom-lg truncate"
            >
              See how we’re creating positive social impact
            </h3>
            <p
              class="insights-intro mds-font-weight-300 mds-font-size-base mds-m-bottom-2xl"
            >
              We’re making stores more sustainable to benefit people and their
              local communities.
            </p>
            <a
              href="/products"
              class="router-link-active mds-button mds-button-primary_outlineWhiteBtn"
            >
              Learn more
            </a>
            <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            <p class="mds-height-px-125">&nbsp;</p>
          </div>
          <div class="insights-image">
            <img
              width="100%"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Stocksy_comp_4632429-2-400x0-c-default.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="insights-section">
    <div class="mds-container">
      <div
        class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        RELATED INSIGHTS
      </div>
      <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-width-60">
        Learn how positive commerce solutions can impact your business
      </h2>
      <div class="mds-m-top-6xl">
        <a
          href="https://www.vusion.com/insights/driving-performance-sustainability-in-e-commerce-with-store-digitalization/"
          class="mds-m-top-6xl mds-m-bottom-2xl"
        >
          <div class="mds-mobile-flex mds-height-px-500">
            <div class="insights-content mds-width-30 mds-border-none">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                Announcements
              </div>
              <h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
                Driving Performance & Sustainability in e-Commerce with Store
                Digitalization
              </h3>
              <p
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
              >
                &nbsp;
              </p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">April 23, 2024 | 4 min read</div>
            </div>
            <div class="mds-width-70">
              <img
                src="https://www.vusion.com/wp-content/uploads/2024/04/Capture-decran-2024-04-18-a-15.04.19-393x262-c-default.png"
                class="mds-width-100 mds-height-100"
                alt=""
              />
            </div>
          </div>
        </a>
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            href="https://www.vusion.com/insights/prathibha-rajashekhar-svp-automation-innovation-walmart-us-interview-at-nrf2024/"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                Customer success story
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Reduced food waste, enhanced operational efficiency: how
                Kavanagh’s in Belsize Park saves 1 ton of CO2 eq. per month with
                VusionGroup and Smartway?
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">March 12, 2024 | 3 min read</div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/10/Imagotag-Belsize_001.00_27_06_13.Still002-393x262-c-default.png"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://www.vusion.com/insights/ses-imagotag-achieves-ecovadis-platinum-sustainability-rating-for-the-second-consecutive-year/"
          >
            <div class="insights-content">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                Announcements
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Prathibha Rajashekhar, SVP Automation & Innovation Walmart US,
                interview at NRF2024
              </h3>
              <p
                class="insights-intro mds-font-weight-300 mds-font-size-base mds-m-bottom-5xl"
              >
                At NRF2024, we had the privilege of hosting Omni Talk Retail’s
                Anne Mezzenga and Chris Walton on our booth as they interviewed
                retail executives throughout the show. Among them, Prathibha
              </p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">January 22, 2024 | 2 min read</div>
            </div>
          </a>
          <a href="#">
            <div class="insights-content">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                Announcements
              </div>
              <h3 class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg">
                SES-imagotag achieves EcoVadis Platinum sustainability rating
                for the second consecutive year
              </h3>
              <p
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
              >
                The leading provider of business sustainability ratings EcoVadis
                has once again awarded SES-imagotag the Platinum rating for its
                high commitment to sustainability, placing it in the top 1% of
                the
              </p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">December 14, 2023 | 3 min read</div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <contactUs />
  </section>
</template>
<script setup>
import AppData from "@/assets/data/app-data.json";
import contactUs from "@/components/ProductContactUs.vue";
const positiveCommerceData = AppData.positiveCommerce;
</script>
