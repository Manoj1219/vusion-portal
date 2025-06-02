<template>
  <div class="component-layout layout-accordion">
    <div class="container py-60 md:py-120">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >Frequently asked questions</span
      >

      <div
        v-for="(faq, index) in faqs"
        :key="index"
        class="component-accordion"
      >
        <button
          type="button"
          class="tab-wrapper"
          :aria-expanded="openIndex === index"
          @click="toggle(index)"
        >
          <h2 class="text-left">{{ faq.question }}</h2>
          <div class="shrink-0" :class="{ 'is-open': openIndex === index }">
            <!-- PLUS icon (collapsed state) -->
            <svg
              v-if="openIndex !== index"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="28"
              height="28"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#0D2126"
                d="M1.375 14.364h26.25M14.5 27.49V1.24"
              />
            </svg>

            <!-- MINUS icon (expanded state) -->
            <svg
              v-else
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              width="28"
              height="28"
            >
              <path
                stroke-linejoin="round"
                stroke-linecap="round"
                stroke-width="2"
                stroke="#0D2126"
                d="M1.375 14.364h26.25"
              />
            </svg>
          </div>
        </button>

        <transition name="accordion">
          <div
            v-show="openIndex === index"
            class="content-wrapper layout-accordion__content"
          >
            <p v-html="faq.answer"></p>
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const openIndex = ref(-1);

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index;
}

const faqs = [
  {
    question:
      "What differentiates Memory from other retail intelligence software?",
    answer: `
      Memory sets itself apart from other retail intelligence software through several key differentiators.
      Firstly, we boast a modern and innovative in-house platform that utilizes different data sets to address specific use cases.
      Moreover, we excel in leveraging loyalty card data, a valuable asset in the retail landscape.
      Unlike other software, Memory actively supports decision-making processes, ensuring that our insights translate into actionable strategies.
      Our platform is highly agile and customizable, tailored to the unique needs and processes of each retailer and brand.
      With a team possessing strong expertise in retail, we prioritize innovation and focus on answering critical business questions through data-driven insights.
      Our agile platform allows for seamless customization to match our clients’ processes and needs, ensuring a tailored and effective solution.
    `,
  },
  {
    question: "How does Memory Retail Intelligence software impact pricing?",
    answer: `
      The Analyze solution and Inflation module assesses the price impact on categories.
      It allows defining optimal price points, considering factors like customer behavior in response to price changes.
      The inflation analysis module identifies the structure of the category and analyzes the impact of price inflation on the turnover.
    `,
  },
  {
    question:
      "How does Memory retail intelligence software impact sales and store performance?",
    answer: `
      <ul>
        <li>2% to 4% of sales growth through assortment optimization</li>
        <li>15% to 30% increase of promotions profitability</li>
        <li>50% to 70% productivity gain on category management tasks</li>
      </ul>
    `,
  },
];
</script>

<style scoped>
.component-accordion {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;
}

.tab-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
}

.tab-wrapper h2 {
  font-size: 2rem;
  margin: 0;
}

.shrink-0 svg {
  width: 28px;
  height: 28px;
  transition: transform 0.2s ease;
}

.shrink-0.is-open svg {
  transform: rotate(180deg);
}

body :is(.shrink-0) {
  flex-shrink: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  transition: max-height 0.3s ease;
  overflow: hidden;
}

.accordion-enter-from,
.accordion-leave-to {
  max-height: 0;
}

.accordion-enter-to,
.accordion-leave-from {
  max-height: 600px; /* adjust based on content */
}
</style>
