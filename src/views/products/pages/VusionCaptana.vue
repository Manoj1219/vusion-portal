<template>
  <section class="mds-section mds-background-captana-shade">
    <div class="mds-container">
      <div
        class="mds-section-content mds-grid mds-grid-size-2 mds-gap-around-7xl"
      >
        <div class="mds-section-content">
          <h1 class="header mds-m-bottom-lg">
            {{ ProductCaptana.intro.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-500 mds-line-height-xl mds-width-70"
          >
            {{ ProductCaptana.intro.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img :src="ProductCaptana.intro.image" alt="" />
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
              {{ ProductCaptana.retailAnalytics.subtitle }}
            </span>
            <h2 class="subHeader mds-m-bottom-lg">
              {{ ProductCaptana.retailAnalytics.header }}
            </h2>
            <p
              class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
            >
              {{ ProductCaptana.retailAnalytics.description }}
            </p>
          </div>
          <div>
            <img
              class="mds-img-position-cover mds-height-100"
              :src="ProductCaptana.retailAnalytics.image"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-captana-shade mds-p-top-3xl mds-p-bottom-3xl"
  >
    <div class="mds-container">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
      >
        {{ ProductCaptana.Opportunities.subHeader }}
      </span>
      <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
        {{ ProductCaptana.Opportunities.header }}
      </h2>
      <div
        class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl"
      >
        <div
          v-for="block in ProductCaptana.Opportunities.eachBlockInfo"
          :key="block.id"
          class="mds-flex mds-flex-column mds-gap-around-lg"
        >
          <img class="mds-width-15 mds-m-bottom-lg" :src="block.image" alt="" />
          <h4 class="mds-font-size-lg mds-font-weight-600">
            {{ block.title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ block.description }}
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
            {{ ProductCaptana.MemoryBenefits.subtitle }}
          </span>
          <h2 class="subHeader">
            {{ ProductCaptana.MemoryBenefits.header }}
          </h2>
          <div class="mds-flex mds-flex-column">
            <div class="mds-flex mds-items-center mds-gap-around-xl">
              <p class="mds-font-weight-400 mds-font-size-lg">
                {{ ProductCaptana.MemoryBenefits.description }}
              </p>
            </div>
          </div>
        </div>
        <div class="mds-section-image mds-self-center mds-width-60">
          <img
            class="mds-border-radius-base"
            :src="ProductCaptana.MemoryBenefits.image"
            alt=""
          />
        </div>
      </div>
      <div class="mds-section-content">
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          {{ ProductCaptana.nextGenBlock.header }}
        </h1>
        <div
          class="mds-grid mds-grid-size-2 mds-gap-column-6xl mds-gap-row-4xl mds-m-top-6xl"
        >
          <div
            class="mds-flex mds-gap-around-lg"
            v-for="block in ProductCaptana.nextGenBlock.eachBlockInfo"
            :key="block.id"
          >
            <div class="mds-width-15">
              <div
                class="mds-badge mds-badge-rounded mds-badge-large mds-background-captana-shade"
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
        <span
          class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          Captana Features
        </span>
        <h1 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-70">
          {{ ProductCaptana.CaptanaProduct.mainHeader }}
        </h1>
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-7xl"
          >
            <div class="mds-section-content mds-p-around-none">
              <span
                class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
              >
                {{ ProductCaptana.CaptanaProduct.subtitle }}
              </span>
              <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
                {{ ProductCaptana.CaptanaProduct.header }}
              </h2>
              <div class="mds-flex mds-items-center mds-gap-around-xl">
                <p class="mds-font-size-lg">
                  {{ ProductCaptana.CaptanaProduct.description }}
                </p>
              </div>
            </div>
            <div class="mds-section-image mds-self-center mds-p-around-lg">
              <img
                class="mds-border-radius-base"
                :src="ProductCaptana.Features.image"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div class="mds-section-content mds-p-top-lg">
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-2xl"
          >
            <div class="mds-section-image mds-self-center">
              <img
                class="mds-border-radius-base"
                src="https://www.vusion.com/wp-content/uploads/2023/11/CaptanaPage-Eye-PNG-1540x1020-c-default.png"
                alt=""
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <h2 class="subHeader mds-m-bottom-lg">
                Run your store more efficiently
              </h2>
              <div
                class="mds-flex mds-flex-column mds-m-top-5xl mds-gap-around-xl mds-p-bottom-2xl"
              >
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <svg
                    viewBox="0 0 29 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="pi pi-check mds-font-size-2xl mds-text-color-info"
                    width="35px"
                  >
                    <path
                      d="M4.4 16.693l5.817 8.336L23.072 6.371"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-miterlimit="22.93"
                    ></path>
                  </svg>
                  <p class="mds-font-size-lg">Increase labor efficiency +9%</p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <svg
                    viewBox="0 0 29 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="pi pi-check mds-font-size-2xl mds-text-color-info"
                    width="35px"
                  >
                    <path
                      d="M4.4 16.693l5.817 8.336L23.072 6.371"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-miterlimit="22.93"
                    ></path>
                  </svg>
                  <p class="mds-font-size-lg">
                    Increase on-shelf availability +4% on average
                  </p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <svg
                    viewBox="0 0 29 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="pi pi-check mds-font-size-2xl mds-text-color-info"
                    width="35px"
                  >
                    <path
                      d="M4.4 16.693l5.817 8.336L23.072 6.371"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-miterlimit="22.93"
                    ></path>
                  </svg>
                  <p class="mds-font-size-lg">Increase sales +2%</p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <svg
                    viewBox="0 0 29 35"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    class="pi pi-check mds-font-size-2xl mds-text-color-info"
                    width="35px"
                  >
                    <path
                      d="M4.4 16.693l5.817 8.336L23.072 6.371"
                      stroke="currentColor"
                      stroke-width="4"
                      stroke-miterlimit="22.93"
                    ></path>
                  </svg>
                  <p class="mds-font-size-lg">
                    Increase customer satisfaction +10-20 NPS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        class="mds-section-content productBlock captana mds-p-around-none mds-m-bottom-4xl"
      >
        <div class="mds-grid mds-grid-size-2 mds-p-top-2xl">
          <div class="mds-section-content mds-p-left-7xl mds-text-color-white">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              Captana Products
            </span>
            <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
              Get detailed information on the Captana family of products
            </h2>
          </div>

          <div class="mds-section-image mds-self-center">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_L2_Captana_Callout@2x-1440x1440-c-default.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div class="insights-section">
        <span
          class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          RELATED INSIGHTS
        </span>
        <div class="mds-grid mds-gap_around-4xl mds-m-top-6xl">
          <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
            <a href="#" class="mds-flex-column">
              <div class="insights-content insights-content-image">
                <div
                  class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
                >
                  Customer success story
                </div>
                <h3
                  class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg"
                >
                  EUROSPAR & Captana: Increased on-shelf availability & boosted
                  sales
                </h3>
                <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
                <div class="insights-meta">March 6, 2024 | 4 min read</div>
              </div>
              <div class="insights-image">
                <img
                  src="https://www.vusion.com/wp-content/uploads/2024/02/153-sales-uplift-for-ISHKA-WATER-after-Captanas-recommendations-3-1179x786-c-default.png"
                  alt=""
                />
              </div>
            </a>
            <a href="#">
              <div class="insights-content">
                <div
                  class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
                >
                  Customer success story
                </div>
                <h3
                  class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg"
                >
                  Monoprix deepens the digitization of its stores with the
                  Captana Sensor Cloud solution from SES-imagotag
                </h3>
                <p
                  class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
                >
                  The Captana Sensor Cloud platform will enable Monoprix to
                  monitor the shelves of its stores in real time, therefore
                  improving customer satisfaction through better product
                  availability and optimized inventory management. SES-imagotag,
                </p>
                <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
                <div class="insights-meta">November 30, 2021 | 5 min read</div>
              </div>
            </a>
            <a href="#">
              <div class="insights-content">
                <div
                  class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
                >
                  Announcements
                </div>
                <h3
                  class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg"
                >
                  Carrefour Pénestin: ultra-efficient date control with
                  Smartdetection Flash Evo
                </h3>
                <p
                  class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
                >
                  Insights from Industry Leaders Curious how technology is
                  transforming the in-store experience? Watch our NRF 2025
                  keynote, “Enhancing the Associate & Customer Experiences at
                  Walmart with Store Digitalization,” featuring: Cedric Clark,
                  EVP
                </p>
                <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
                <div class="insights-meta">March 14, 2025 | 4 min read</div>
              </div>
            </a>
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
import contactUs from "@/components/ProductContactUs.vue";
const ProductCaptana = AppData.allProducts.ProductCaptana;
</script>
