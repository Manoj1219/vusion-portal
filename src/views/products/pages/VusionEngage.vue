<template>
  <section class="mds-section mds-background-orange-light">
    <div class="mds-container">
      <div
        class="mds-section-content mds-grid mds-grid-size-2 mds-gap-around-7xl"
      >
        <div class="mds-section-content">
          <h1 class="header mds-m-bottom-lg">
            {{ ProductEngage.intro.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-500 mds-line-height-xl mds-width-70"
          >
            {{ ProductEngage.intro.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img :src="ProductEngage.intro.image" alt="" />
        </div>
      </div>
      <div class="mds-m-top-7xl mds-p-bottom-7xl">
        <div
          class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-white mds-overflow-hidden mds-box-shadow-base"
        >
          <div class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ ProductEngage.retailAnalytics.subtitle }}
            </span>
            <h2 class="subHeader mds-m-bottom-lg">
              {{ ProductEngage.retailAnalytics.header }}
            </h2>
            <p
              class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
            >
              {{ ProductEngage.retailAnalytics.description }}
            </p>
          </div>
          <div>
            <img
              class="mds-img-position-cover mds-height-100"
              :src="ProductEngage.retailAnalytics.image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-engage-shade mds-p-top-3xl mds-p-bottom-3xl"
  >
    <div class="mds-container">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ ProductEngage.Opportunities.subHeader }}
      </span>
      <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
        {{ ProductEngage.Opportunities.header }}
      </h2>
      <div
        class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl"
      >
        <div
          v-for="block in ProductEngage.Opportunities.eachBlockInfo"
          :key="block.id"
          class="mds-flex mds-flex-column mds-gap-around-lg"
        >
          <img class="mds-width-15 mds-m-bottom-lg" :src="block.image" alt="" />
          <h4 class="mds-font-size-lg mds-font-weight-600">
            {{ block.title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ block.description }}
            <a href="" class="mds-underline-link-dark">
              {{ block.linkedText }}
            </a>
            {{ block.descriptionBefore }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-flex mds-column-gap-5 mds-m-top-lg">
        <div class="mds-section-content mds-p-around-none mds-width-40">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            {{ ProductEngage.MemoryBenefits.subtitle }}
          </span>
          <h2 class="subHeader">
            {{ ProductEngage.MemoryBenefits.header }}
          </h2>
          <div class="mds-flex mds-flex-column">
            <div class="mds-flex mds-items-center mds-gap-around-xl">
              <p class="mds-font-weight-400 mds-font-size-lg">
                {{ ProductEngage.MemoryBenefits.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="mds-section-image mds-self-center mds-width-60">
          <img
            class="mds-border-radius-base"
            :src="ProductEngage.MemoryBenefits.image"
            alt=""
          />
        </div>
      </div>
      <div class="mds-section-content">
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          {{ ProductEngage.nextGenBlock.header }}
        </h1>
        <div
          class="mds-grid mds-grid-size-2 mds-gap-column-6xl mds-gap-row-4xl mds-m-top-6xl"
        >
          <div
            class="mds-flex mds-gap-around-lg"
            v-for="block in ProductEngage.nextGenBlock.eachBlockInfo"
            :key="block.id"
          >
            <div class="mds-width-15">
              <div
                class="mds-badge mds-badge-rounded mds-badge-large mds-background-orange-light"
              >
                <img class="mds-width-80" :src="block.image" alt="" />
              </div>
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                {{ block.title }}
              </h4>
              <p
                class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
              >
                {{ block.description }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="mds-section-content mds-p-top-lg">
        <h1 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
          {{ ProductEngage.Features.mainHeader }}
        </h1>
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-5xl"
          >
            <div class="mds-section-content mds-p-around-none">
              <span
                class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
              >
                {{ ProductEngage.Features.subtitle }}
              </span>
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                {{ ProductEngage.Features.header }}
              </h2>
              <div
                class="mds-flex mds-flex-column mds-gap-around-xl mds-p-bottom-2xl"
              >
                <div class="mds-flex mds-items-center mds-gap-around-md">
                  <p class="mds-font-weight-400 mds-font-size-md-2">
                    {{ ProductEngage.Features.description }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mds-section-image mds-self-center mds-p-around-lg">
              <img
                class="mds-border-radius-base"
                :src="ProductEngage.Features.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mds-section-content mds-p-top-lg">
        <div class="mds-flex mds-flex-column">
          <div class="mds-grid mds-grid-size-2 mds-gap-around-5xl">
            <div class="mds-section-image mds-self-center mds-p-around-lg">
              <img
                class="mds-border-radius-base"
                :src="ProductEngage.benchMark.image"
                alt=""
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <span
                class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
              >
                {{ ProductEngage.benchMark.subtitle }}
              </span>
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                {{ ProductEngage.benchMark.header }}
              </h2>
              <div
                class="mds-flex mds-flex-column mds-gap-around-xl mds-p-bottom-2xl"
              >
                <div class="mds-flex mds-items-center mds-gap-around-md">
                  <p class="mds-font-weight-400 mds-font-size-md-2">
                    {{ ProductEngage.benchMark.description }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mds-section-content mds-p-top-lg">
        <div class="mds-flex mds-flex-column">
          <div class="mds-flex mds-gap-around-5xl">
            <div
              class="mds-section-image mds-self-center mds-p-around-lg mds-width-55"
            >
              <img
                src="https://www.vusion.com/wp-content/uploads/2024/01/Revitalift-1440x1440-c-default.jpg"
                alt=""
              />
            </div>
            <div class="mds-section-content mds-p-around-none mds-width-45">
              <span
                class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
              >
                Case study
              </span>
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                Monoprix + <br />
                Revitalift
              </h2>
              <div
                class="mds-flex mds-flex-column mds-gap-around-xl mds-p-bottom-2xl"
              >
                <div class="">
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    The challenge: Trial campaign on the impact of content
                  </p>
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    Customer goal: Price promotion with consumer &
                    benefit-oriented content
                  </p>
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    Results: 65.21% of sales uplift in 4 months (with 2 baseline
                    campaigns and 2 promotions)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="mds-flex mds-flex-column">
          <div class="mds-flex mds-gap-around-5xl">
            <div class="mds-section-content mds-p-around-none mds-width-45">
              <span
                class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
              >
                Case study
              </span>
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                CCEP Belsize Park
              </h2>
              <div
                class="mds-flex mds-flex-column mds-gap-around-xl mds-p-bottom-2xl"
              >
                <div class="">
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    The challenges: Campaign on product upsell
                  </p>
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    Customer goal: Product push, upsell on a particular product
                    advertised on the rails.
                  </p>
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    Results: 188% increase in sales on the main product
                    advertised in 60 days vs. previous sales trends.
                  </p>
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    *Compared to products of the same brand (diet, zero, etc.),
                    the promoted products performed better by a minimum of 21%.
                  </p>
                  <p
                    class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-lg"
                  >
                    *Other products of the same brands (diet, zero, etc.) have
                    all seen an upsell between 33% and 165% over the same
                    period.
                  </p>
                </div>
              </div>
            </div>
            <div
              class="mds-section-image mds-self-center mds-p-around-lg mds-width-55"
            >
              <img
                class="mds-border-radius-base"
                src="https://www.vusion.com/wp-content/uploads/2024/01/Belzize-1440x1440-c-default.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mds-section-content mds-p-top-lg">
        <faqAccordion productKey="ProductEngage" />
      </div>
      <div
        class="mds-section-content productBlock engage mds-p-around-none mds-m-bottom-4xl"
      >
        <div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
          <div class="mds-section-content mds-p-left-7xl mds-text-color-white">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              {{ ProductEngage.EngageProduct.subtitle }}
            </span>
            <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
              {{ ProductEngage.EngageProduct.header }}
            </h2>
          </div>

          <div class="mds-section-image mds-self-center">
            <img
              class="mds-border-radius-base"
              :src="ProductEngage.EngageProduct.image"
              alt=""
            />
          </div>
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
import faqAccordion from "@/components/faqAccordion.vue";
import contactUs from "@/components/ProductContactUs.vue";
const ProductEngage = AppData.allProducts.ProductEngage;
</script>
