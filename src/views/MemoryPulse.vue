<template>
  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-p-vertical-2xl">
        <div
          class="mds-section-content mds-flex mds-flex-column mds-items-start mds-p-right-6xl"
        >
          <span
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            Pulse Retail Intelligence
          </span>
          <h1 class="subHeader mds-m-bottom-lg mds-width-8">
            Optimize store performance
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
          >
            Increase sales and reduce waste with retail AI.
          </p>
        </div>
        <div class="hero-section-image">
          <img
            class="mds-height-100 mds-width-intro"
            src="https://www.vusion.com/wp-content/uploads/2023/11/header-V3-1440x1440-c-default.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-shade mds-m-vertical-6xl mds-p-vertical-4xl"
  >
    <div class="mds-container">
      <div class="mds-p-vertical-4xl">
        <span
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >
          High-performance retail analytics
        </span>
        <h1 class="subHeader mds-m-bottom-lg mds-width-60">
          Get actionable insights for store improvements
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60"
        >
          Our Pulse platform is an AI-powered analytics solution that helps
          identify inefficiencies and make recommendations on practical ways to
          improve the bottom line for retailers. Pulse analyzes data from the
          aisles, point of sale (POS) information, and third-party sources to
          reduce waste, improve inventory turnover, and optimize store
          workflows.
        </p>
      </div>
      <div class="mds-flex mds-flex-column mds-p-top-2xl">
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
            <div class="mds-width-80">
              <h4 class="mds-font-size-lg mds-font-weight-500">
                Reduce inventory waste
              </h4>
              <p class="mds-font-size-base-2 mds-m-top-base">
                Identify waste issues and get tailored recommendations on how to
                reduce waste for individual products.
              </p>
            </div>
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
            <div class="mds-width-80">
              <h4 class="mds-font-size-lg mds-font-weight-500">
                Set competitive pricing
              </h4>
              <p class="mds-font-size-base-2 mds-m-top-base">
                Compare prices against competitors and automatically display
                promotional messaging on the shelf to inform shoppers when your
                price is better.
              </p>
            </div>
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
            <div class="mds-width-80">
              <h4 class="mds-font-size-lg mds-font-weight-500">
                Make your data work harder
              </h4>
              <p class="mds-font-size-base-2 mds-m-top-base">
                Uncover the real value of data-driven choices by optimizing
                assortment, streamlining operations, and positively impacting
                the bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mds-overflow-hidden">
      <div class="mds-p-top-7xl mds-animation-loop mds-flex mds-items-center">
        <ul class="mds-logos mds-flex mds-items-center mds-gap-around-4xl">
          <li
            class="mds-width-px-150"
            v-for="logo in ElectronicShel.testimonials.logos"
            :key="logo.id"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
          <li
            class="mds-width-px-150"
            v-for="logo in ElectronicShel.testimonials.logos"
            :key="logo.id"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
          <li
            class="mds-width-px-150"
            v-for="logo in ElectronicShel.testimonials.logos"
            :key="logo.id"
          >
            <img :src="logo.image" :alt="logo.alt" />
          </li>
        </ul>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-2xl">
    <div
      class="mds-section-content mds-box-shadow-base mds-p-around-none mds-m-bottom-7xl"
    >
      <div class="mds-grid mds-grid-size-2">
        <div class="mds-section-content mds-p-left-7xl mob-p-left-xl">
          <span
            class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
          >
            Pulse Benefits
          </span>
          <h2 class="subHeader mds-m-bottom-lg mds-font-size-3xsl">
            How the Pulse family of products works in-store
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-80"
          >
            Software systems work together and easily integrate with your
            existing ERP to provide insights that optimize store performance.
          </p>
        </div>

        <div class="mds-section-image mds-self-center">
          <img
            src="https://www.vusion.com/wp-content/uploads/2023/11/Pulse_Information-1440x1440-c-default.png"
          />
        </div>
      </div>
    </div>
    <div class="mds-section-content">
      <h1 class="subHeader mds-m-bottom-lg mds-width-70">
        Why Pulse works for you
      </h1>
      <div
        class="mds-grid mds-grid-size-2 mds-gap-column-6xl mds-gap-row-4xl mds-m-top-6xl"
      >
        <div class="mds-mobile-flex mds-gap-around-lg">
          <div class="mds-width-15">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade"
            >
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/11/Pulse_Get_custom_analysis_and_Reporting-50x50-c-default.png"
                alt=""
              />
            </div>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4 class="mds-font-size-lg mds-font-weight-600">
              Get custom analysis and reporting
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
            >
              Tailor monitoring and reporting to your business needs. Measure
              sales performance and easily identify issues and priorities.
            </p>
          </div>
        </div>
        <div class="mds-mobile-flex mds-gap-around-lg">
          <div class="mds-width-15">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade"
            >
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/11/Pulse_Make_evidence-based_decisions-50x50-c-default.png"
                alt=""
              />
            </div>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4 class="mds-font-size-lg mds-font-weight-600">
              Make evidence-based decisions
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
            >
              Inform better decision-making with AI recommendations and simulate
              product or pricing models to see estimates on their ROI impact.
            </p>
          </div>
        </div>
        <div class="mds-mobile-flex mds-gap-around-lg">
          <div class="mds-width-15">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade"
            >
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/11/Pulse_Measure_impact_Immediately%E2%80%AF-50x50-c-default.png"
                alt=""
              />
            </div>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4 class="mds-font-size-lg mds-font-weight-600">
              Measure impact immediately
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
            >
              Harness the power of your data from IoT devices on the shop floor
              and trigger actions in the aisles for immediate impact on store
              performance.
            </p>
          </div>
        </div>
        <div class="mds-mobile-flex mds-gap-around-lg">
          <div class="mds-width-15">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-memory-shade"
            >
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/11/Pulse_-Drill_down_into_sales_data%E2%80%AF-50x50-c-default.png"
                alt=""
              />
            </div>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4 class="mds-font-size-lg mds-font-weight-600">
              Drill down into sales data
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
            >
              Get a complete view of your store sales information with a
              dashboard that displays sales, margin, and baskets data as well as
              waste, refunds, and voids.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container mds-p-top-2xl">
    <div class="mds-section-content mds-p-top-lg">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/11/manage-products-stocks-1540x1020-c-default.png"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              Efficiency
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              Ground your decision-making with trusted insights to boost
              efficiencies
            </h2>
            <p class="mds-font-weight-400 mds-font-size-md-2">
              Pulse products can help you:<br />
              – Manage store sales: Highlight products where inventory
              management can be improved.<br />
              – Improve pricing: Identify products where price can be increased
              or where costs have increased.<br />
              – Notify associates of actions: Display subtle messages to floor
              staff on your ESL to indicate an issue is present with a product
              and needs action.<br />
              – Measure promotions: Measure promotions and sales activity across
              multiple stores.<br />
              – Manage your store strategically: Understand store, category, or
              product performance and compare with previous trends.
            </p>
          </div>
        </div>
      </div>
    </div>
    <div class="mds-section-content mds-p-top-lg">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-content mds-p-around-none">
            <span
              class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >
              ROI
            </span>
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              See Pulse’s ROI impact
            </h2>
            <p class="mds-font-weight-400 mds-font-size-md-2">
              – 2% Increase in sales on categories by improving assortment
              choice<br />
              – 2% increase on sales thanks to merchandising <br />
              – 20% uplift on products with competitor messaging <br />
              – 97% sell-through in new store <br />
              – Up to 10 M€ monetization revenues <br />
              – 2% Increase in sales on categories operating the collaborative
              model <br />
            </p>
          </div>
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/12/Video02_01_BWRY__FullColour_Figma_Sub_00004-scaled-1540x1020-c-default.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
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
                Announcements
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Finding profit in the data – SES-imagotag launches its latest
                version of Pulse, a solution to optimize stores with AI-driven
                analytics
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">June 28, 2023 | 7 min read</div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/06/pulse-393x262-c-default.png"
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
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                MPK Garages selects SES-imagotag for the digitization and
                trading analytics of 30 stores across the UK
              </h3>
              <p
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
              >
                SES-imagotag (Euronext: SESL, FR0010282822), the global leader
                in digital solutions for physical retail, today announced that
                it has been selected to roll-out its cutting-edge technology in
                the stores of MPK
              </p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">June 22, 2022 | 4 min read</div>
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
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                SES-imagotag completes the acquisition of Irish data analytics
                start-up MarketHub with founder Roy Horgan to join
                SES-imagotag’s executive team
              </h3>
              <p
                class="insights-intro mds-font-weight-400 mds-font-size-base mds-m-bottom-5xl"
              >
                SES-imagotag, (Euronext: SESL, FR0010282822) the global leader
                in IoT solutions and smart labels for physical retail, deepens
                its investment into intelligent retail by completing the 100%
                acquisition of Irish data
              </p>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
              <div class="insights-meta">January 5, 2022 | 3 min read</div>
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
import { ref } from "vue";

import AppData from "@/assets/data/app-data.json";
import contactUs from "@/components/ProductContactUs.vue";
const ElectronicShel = ref(AppData.allProducts.ElectronicShel);
</script>
