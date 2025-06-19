<template>
  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-content">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase mds-p-top-4xl-sm"
          >
            <img
              :src="
                collaborationDataMonetization.collaborationDataMonetization
                  .labelImage
              "
              alt=""
            />
          </div>
          <h2
            class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500 mds-width-70"
          >
            {{
              collaborationDataMonetization.collaborationDataMonetization.header
            }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-600 mds-line-height-xl"
          >
            {{
              collaborationDataMonetization.collaborationDataMonetization
                .description
            }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img
            :src="
              collaborationDataMonetization.collaborationDataMonetization.image
            "
            alt=""
          />
        </div>
      </div>
      <div class="mds-m-top-4xl mds-p-bottom-7xl">
        <div
          class="mds-grid mds-grid-size-2 mds-border-radius-base mds-background-white mds-overflow-hidden mds-box-shadow-base"
        >
          <div
            class="mds-p-vertical-6xl mds-p-left-6xl mds-p-right-2xl mob-p-left-xl"
          >
            <h2 class="mds-m-bottom-lg mds-font-size-4xl">
              {{
                collaborationDataMonetization.collaborationDataMonetization
                  .expertise.header
              }}
            </h2>
            <p
              class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
            >
              {{
                collaborationDataMonetization.collaborationDataMonetization
                  .expertise.description
              }}
            </p>
          </div>
          <div>
            <img
              class="mds-height-100"
              :src="
                collaborationDataMonetization.collaborationDataMonetization
                  .expertise.image
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-secondary-gradient mds-p-top-5xl mds-p-bottom-7xl"
  >
    <div class="mds-container">
      <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-width-60">
        {{ collaborationDataMonetization.whyConsider.header }}
      </h2>
      <div class="mds-grid mds-grid-size-3 mds-m-vertical-6xl">
        <div class="mds-flex mds-flex-column mds-gap-around-lg">
          <img
            class="mds-width-15 mds-m-bottom-lg"
            :src="collaborationDataMonetization.whyConsider.items[0].icon"
            alt=""
          />
          <h4 class="mds-font-size-lg mds-font-weight-600">
            {{ collaborationDataMonetization.whyConsider.items[0].title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ collaborationDataMonetization.whyConsider.items[0].description }}
          </p>
        </div>
        <div class="mds-flex mds-flex-column mds-gap-around-lg">
          <img
            class="mds-width-15 mds-m-bottom-lg"
            :src="collaborationDataMonetization.whyConsider.items[1].icon"
            alt=""
          />
          <h4 class="mds-font-size-lg mds-font-weight-600">
            {{ collaborationDataMonetization.whyConsider.items[1].title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ collaborationDataMonetization.whyConsider.items[1].description }}
          </p>
        </div>
        <div class="mds-flex mds-flex-column mds-gap-around-lg">
          <img
            class="mds-width-15 mds-m-bottom-lg"
            :src="collaborationDataMonetization.whyConsider.items[2].icon"
            alt=""
          />
          <h4 class="mds-font-size-lg mds-font-weight-600">
            {{ collaborationDataMonetization.whyConsider.items[2].title }}
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            {{ collaborationDataMonetization.whyConsider.items[2].description }}
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-section-content">
        <h2 class="mds-m-bottom-lg mds-font-size-4xl">
          {{ collaborationDataMonetization.keyFigures.header }}
        </h2>
        <div class="mds-grid mds-grid-size-3 mds-gap-around-6xl mds-m-top-6xl">
          <div class="mds-flex mds-flex-column mds-gap-around-lg">
            <img
              class="mds-width-15 mds-m-bottom-lg"
              :src="collaborationDataMonetization.keyFigures.figures[0].icon"
              alt=""
            />
            <h4 class="mds-font-size-lg mds-font-weight-600">
              {{ collaborationDataMonetization.keyFigures.figures[0].title }}
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl"
            >
              {{
                collaborationDataMonetization.keyFigures.figures[0]
                  .descriptionOne
              }}
            </p>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg">
            <img
              class="mds-width-15 mds-m-bottom-lg"
              :src="collaborationDataMonetization.keyFigures.figures[1].icon"
              alt=""
            />
            <h4 class="mds-font-size-lg mds-font-weight-600">
              {{ collaborationDataMonetization.keyFigures.figures[1].title }}
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl"
            >
              {{
                collaborationDataMonetization.keyFigures.figures[1]
                  .descriptionOne
              }}
            </p>
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg">
            <img
              class="mds-width-15 mds-m-bottom-lg"
              :src="collaborationDataMonetization.keyFigures.figures[2].icon"
              alt=""
            />
            <h4 class="mds-font-size-lg mds-font-weight-600">
              {{ collaborationDataMonetization.keyFigures.figures[2].title }}
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl"
            >
              {{
                collaborationDataMonetization.keyFigures.figures[2]
                  .descriptionOne
              }}
            </p>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl"
            >
              {{
                collaborationDataMonetization.keyFigures.figures[2]
                  .descriptionTwo
              }}
            </p>
          </div>
        </div>
      </div>
      <div class="mds-section-content">
        <h2 class="mds-m-bottom-lg mds-width-65 mds-font-size-4xl">
          {{ collaborationDataMonetization.dataMonetizationDetails.header }}
        </h2>
        <div class="mds-flex mds-flex-column">
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-7xl"
          >
            <div class="mds-section-image mds-self-center">
              <img
                class="mds-border-radius-base"
                :src="
                  collaborationDataMonetization.dataMonetizationDetails
                    .sections[0].image
                "
                alt=""
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
                {{
                  collaborationDataMonetization.dataMonetizationDetails
                    .sections[0].header
                }}
              </h2>
              <div
                class="mds-flex mds-flex-column mds-m-top-5xl mds-gap-around-xl mds-p-bottom-2xl mds-height-px-200"
              >
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600 mds-font-size-lg">
                    {{
                      collaborationDataMonetization.dataMonetizationDetails
                        .sections[0].items[0].description
                    }}
                  </p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600 mds-font-size-lg">
                    {{
                      collaborationDataMonetization.dataMonetizationDetails
                        .sections[0].items[1].description
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-7xl"
          >
            <div class="mds-section-content mds-p-around-none">
              <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
                {{
                  collaborationDataMonetization.dataMonetizationDetails
                    .sections[1].header
                }}
              </h2>
              <div
                class="mds-flex mds-flex-column mds-m-top-5xl mds-gap-around-xl mds-p-bottom-2xl mds-height-px-200"
              >
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600 mds-font-size-lg">
                    {{
                      collaborationDataMonetization.dataMonetizationDetails
                        .sections[1].items[0].description
                    }}
                  </p>
                </div>
              </div>
            </div>
            <div class="mds-section-image mds-self-center">
              <img
                class="mds-border-radius-base"
                :src="
                  collaborationDataMonetization.dataMonetizationDetails
                    .sections[1].image
                "
                alt=""
              />
            </div>
          </div>
          <div
            class="mds-grid mds-grid-size-2 mds-gap-around-7xl mds-m-vertical-7xl"
          >
            <div class="mds-section-image mds-self-center">
              <img
                class="mds-border-radius-base"
                :src="
                  collaborationDataMonetization.dataMonetizationDetails
                    .sections[2].image
                "
                alt=""
              />
            </div>
            <div class="mds-section-content mds-p-around-none">
              <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
                {{
                  collaborationDataMonetization.dataMonetizationDetails
                    .sections[2].header
                }}
              </h2>
              <div
                class="mds-flex mds-flex-column mds-m-top-5xl mds-gap-around-xl mds-p-bottom-2xl mds-height-px-300"
              >
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600 mds-font-size-lg">
                    {{
                      collaborationDataMonetization.dataMonetizationDetails
                        .sections[2].items[0].description
                    }}
                  </p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600 mds-font-size-lg">
                    {{
                      collaborationDataMonetization.dataMonetizationDetails
                        .sections[2].items[1].description
                    }}
                  </p>
                </div>
                <div class="mds-flex mds-items-center mds-gap-around-xl">
                  <i class="pi pi-check mds-font-size-xl"></i>
                  <p class="mds-font-weight-600 mds-font-size-lg">
                    {{
                      collaborationDataMonetization.dataMonetizationDetails
                        .sections[2].items[2].description
                    }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <AppEnquiry />
  <AppFooterHelp />
</template>

<script setup>
import { ref } from "vue";
import AppEnquiry from "@/components/AppEnquiry.vue";
import AppFooterHelp from "@/components/AppFooterHelp.vue";
import AppData from "@/assets/data/app-data.json";

const collaborationDataMonetization = ref(
  AppData.allSolutions.collaborationDataMonetization || {}
);
</script>
