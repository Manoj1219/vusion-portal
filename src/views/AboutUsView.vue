<template>
  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-content">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          >
            {{ aboutUs.about.label }}
          </div>
          <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
            {{ aboutUs.about.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            {{ aboutUs.about.description }}
          </p>
        </div>
        <div class="mds-section-image">
          <img class="mds-height-100" :src="aboutUs.about.image" alt="" />
        </div>
      </div>
    </div>
  </section>

  <section
    class="mds-section"
    :class="`mds-background-${aboutUs.mission.background}`"
  >
    <div class="mds-container">
      <div class="mds-section-content mds-width-75 mds-p-right-base">
        <div
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          :class="`mds-text-color-${aboutUs.mission.textColor}`"
        >
          {{ aboutUs.mission.label }}
        </div>
        <h2
          class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500"
          :class="`mds-text-color-${aboutUs.mission.textColor}`"
        >
          {{ aboutUs.mission.header }}
        </h2>
      </div>
    </div>
  </section>

  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-section-content">
        <div class="mds-m-bottom-7xl mds-width-75">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          >
            {{ aboutUs.keyFigures.label }}
          </div>
          <h2
            class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500 mds-width-85"
          >
            {{ aboutUs.keyFigures.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-line-height-xl"
            v-html="aboutUs.keyFigures.description"
          ></p>
        </div>
        <div class="mds-grid mds-grid-size-3 mds-gap-around-7xl">
          <div
            v-for="figure in aboutUs.keyFigures.figures"
            :key="figure.id"
            class="mds-flex mds-flex-column"
          >
            <img width="60px" :src="figure.icon" alt="" />

            <div class="mds-m-top-xl">
              <h4 class="mds-font-size-xl mds-m-bottom-md mds-m-top-md">
                {{ figure.value }}
              </h4>
              <p>{{ figure.label }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-content">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          >
            {{ aboutUs.vision.label }}
          </div>
          <h2
            class="mds-m-bottom-lg mds-font-size-3xsl mds-font-weight-500 mds-remove-br mds-width-85"
          >
            {{ aboutUs.vision.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
          >
            {{ aboutUs.vision.description }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="aboutUs.vision.image"
            alt=""
          />
        </div>
      </div>
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="aboutUs.visionTwo.image"
            alt=""
          />
        </div>
        <div class="mds-section-content">
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
          >
            {{ aboutUs.visionTwo.descriptionOne }}
          </p>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl mds-m-top-2xl"
          >
            {{ aboutUs.visionTwo.descriptionTwo }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-content">
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          >
            {{ aboutUs.solutions.label }}
          </div>
          <h2
            class="mds-m-bottom-lg mds-font-size-3xsl mds-font-weight-500 mds-remove-br mds-width-85"
          >
            {{ aboutUs.solutions.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
          >
            {{ aboutUs.solutions.descriptionOne }}
          </p>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl mds-m-top-2xl"
          >
            {{ aboutUs.solutions.descriptionTwo }}
          </p>
        </div>
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="aboutUs.solutions.image"
            alt=""
          />
        </div>
      </div>
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-image mds-self-center">
          <img
            class="mds-border-radius-base"
            :src="aboutUs.solutionsTwo.image"
            alt=""
          />
        </div>
        <div class="mds-section-content">
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl"
          >
            {{ aboutUs.solutionsTwo.description }}
          </p>
        </div>
      </div>
    </div>
  </section>

  <!-- <component :is="aboutUs.newsletter.component" /> -->

  <section class="mds-section">
    <div class="mds-container">
      <div class="mds-section-content">
        <div
          class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
        >
          {{ aboutUs.team.label }}
        </div>
        <h2
          class="mds-m-bottom-lg mds-font-size-4xl mds-remove-br mds-font-weight-500"
        >
          {{ aboutUs.team.header }}
        </h2>
        <div class="mds-grid mds-grid-size-4 mds-gap-around-3xl mds-m-top-6xl">
          <div
            v-for="member in aboutUs.team.members"
            :key="member.id"
            class="mds-flex mds-flex-column"
          >
            <img class="mds-team-image" :src="member.image" alt="" />
            <div class="mds-m-top-xl">
              <h3 class="mds-font-size-base-2">
                {{ member.name }}
              </h3>
              <p class="mds-m-vertical-md">
                {{ member.position }}
              </p>
              <div
                class="mds-flex mds-items-center mds-gap-around-sm mds-m-top-2xl"
              >
                <a
                  class="mds-underline-link mds-text-color-dark"
                  :href="member.linkedin"
                >
                  Linkedin
                </a>
                <i class="pi pi-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2 mds-gap-around-7xl">
        <div class="mds-section-image">
          <img class="mds-height-100" :src="aboutUs.careers.image" alt="" />
        </div>
        <div
          class="mds-flex mds-flex-column mds-items-start mds-section-content"
        >
          <div
            class="mds-m-bottom-lg mds-font-size-mds-2 mds-text-transform-uppercase"
          >
            {{ aboutUs.careers.label }}
          </div>
          <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
            {{ aboutUs.careers.header }}
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            {{ aboutUs.careers.description }}
          </p>
          <router-link
            :to="aboutUs.careers.link"
            class="mds-button mds-button-secondary mds-m-top-xl"
          >
            {{ aboutUs.careers.linkText }}
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import AppData from "@/assets/data/app-data.json";

const aboutUs = ref(AppData.aboutUs || {});
</script>
