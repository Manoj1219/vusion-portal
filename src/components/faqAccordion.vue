<template>
  <h2
    class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
  >
    {{ data.subHeader }}
  </h2>

  <div
    v-for="(block, index) in data.eachBlockInfo"
    :key="block.id"
    class="component-accordion"
  >
    <button
      type="button"
      class="tab-wrapper"
      :aria-expanded="openIndex === index"
      @click="toggle(index)"
    >
      <h2 class="text-left">{{ block.label || block.title }}</h2>
      <div class="shrink-0" :class="{ 'is-open': openIndex === index }">
        <!-- plus/minus icons -->
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
        class="content-wrapper layout-accordion__content mds-width-80"
      >
        <p>{{ block.description }}</p>
        <ul>
          <li
            class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm"
            v-if="block.description1"
          >
            {{ block.description1 }}
          </li>
          <li
            class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm"
            v-if="block.description2"
          >
            {{ block.description2 }}
          </li>
          <li
            class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm"
            v-if="block.description3"
          >
            {{ block.description3 }}
          </li>
          <li
            class="mds-font-weight-400 mds-font-size-base-2 mds-m-bottom-sm"
            v-if="block.description3"
          >
            {{ block.description4 }}
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AppData from "@/assets/data/app-data.json";

const props = defineProps({
  productKey: {
    type: String,
    default: "productMemory",
  },
});

const openIndex = ref(-1);

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index;
}

const data = computed(() => {
  return (
    AppData.allProducts[props.productKey]?.faqAccordion || {
      subHeader: "",
      eachBlockInfo: [],
    }
  );
});
</script>

<style lang="scss" scoped>
.component-accordion {
  border-bottom: 1px solid #ccc;
  padding: 20px 0;

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

    h2 {
      font-size: 1.8rem;
      margin: 0;
    }

    div {
      border-width: 1px;
      border-color: currentColor;
      border-radius: 0.5rem 8px;
      padding: 9px;
      height: 46px;
      width: 46px;
      position: relative;

      svg {
        transition-property: all;
        transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        transition-duration: 500ms;
        position: absolute;
        height: 2.8rem;
        width: 2.8rem;

        path {
          stroke: currentColor;
        }

        &[data-v-42d109e2] {
          transition-property: all;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
          transition-duration: 500ms;
          position: absolute;
          height: 1.8rem;
          width: 1.8rem;
        }
      }

      &.is-open svg:first-child {
        --tw-scale-x: 1;
        --tw-scale-y: 1;
        opacity: 1;
      }
    }
  }
}

.shrink-0 {
  svg {
    width: 28px;
    height: 28px;
    transition: transform 0.2s ease;
  }

  &.is-open svg {
    transform: rotate(180deg);
  }
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
  max-height: 600px;
}
.layout-accordion__content {
  padding-bottom: 2rem;
}
.layout-accordion__content p {
  font-family: TWKEverett, ui-sans-serif, system-ui, sans-serif;
  font-weight: 400;
  font-size: 1.15rem;
  line-height: 1.65;
  letter-spacing: -0.02rem;
  --tw-text-opacity: 1;
  color: rgb(0 0 0 / var(--tw-text-opacity));
  margin: 2rem 0;
}
</style>
