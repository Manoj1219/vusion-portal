<template>
  <div v-if="ContactUs">
    <section class="contactUs mds-section mds-background-primary">
      <div
        class="mds-container mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-7xl"
      >
        <div v-if="ContactUs.intro">
          <h1 class="header mds-m-bottom-lg mds-m-top-2xl">
            {{ ContactUs.intro.header }}
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl"
          >
            {{ ContactUs.intro.description }}
          </p>
          <div
            class="mds-flex mds-flex-column mds-gap-row-2xl mds-p-top-4xl mds-text-color-secondary"
          >
            <a
              v-for="link in ContactUs.intro.links"
              :key="link.id"
              class="mds-flex mds-text-color-secondary"
              :href="link.href"
              :target="link.target"
            >
              <span
                class="mds-font-size-base-2 mds-p-right-md anchor-underline"
              >
                {{ link.text }}
              </span>
              <svg
                viewBox="0 0 19 16"
                fill="currentColor"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
                ></path>
              </svg>
            </a>
          </div>
        </div>
        <div v-if="ContactUs.form" class="form-card">
          <form class="form-grid">
            <span class="mds-font-size-base">
              {{ ContactUs.form.description }}
            </span>
            <div
              v-for="field in ContactUs.form.fields"
              :key="field.id"
              class="form-group"
            >
              <label>{{ field.label }}</label>
              <component
                :is="field.type === 'textarea' ? 'textarea' : 'input'"
                :type="field.type !== 'textarea' ? field.type : undefined"
                :rows="field.type === 'textarea' ? field.rows : undefined"
                :required="field.required"
              />
            </div>
            <div v-if="ContactUs.form.marketingConsent" class="form-full">
              <label>
                <input
                  type="checkbox"
                  :required="ContactUs.form.marketingConsent.required"
                />
                <span class="mds-font-size-base">
                  {{ ContactUs.form.marketingConsent.label }}
                </span>
              </label>
            </div>
            <div v-if="ContactUs.form.privacyAgreement" class="form-full">
              <label>
                <input
                  type="checkbox"
                  :required="ContactUs.form.privacyAgreement.required"
                />
                <span class="mds-font-size-base">
                  {{ ContactUs.form.privacyAgreement.label }}
                </span>
                <a
                  :href="ContactUs.form.privacyAgreement.linkHref"
                  :target="ContactUs.form.privacyAgreement.linkTarget"
                >
                  {{ ContactUs.form.privacyAgreement.linkText }}
                </a>
              </label>
            </div>
            <div v-if="ContactUs.form.submitButton" class="form-footer">
              <button type="submit" class="mds-button mds-button-secondary">
                {{ ContactUs.form.submitButton.text }}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
    <section
      v-if="
        ContactUs.headquarters || ContactUs.globalOffices || ContactUs.support
      "
    >
      <div v-if="ContactUs.headquarters" class="mds-container defaul-b-border">
        <div
          class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-2xl"
        >
          <div
            class="mds-flex mds-items-start mds-flex-column mds-gap-around-md"
          >
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-secondary-shade"
            >
              <svg
                viewBox="0 0 48 48"
                fill="none"
                width="48"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 42V6h19.5v8.25H44V42H4zm3-3h13.5v-5.25H7V39zm0-8.25h13.5V25.5H7v5.25zm0-8.25h13.5v-5.25H7v5.25zm0-8.25h13.5V9H7v5.25zM23.5 39H41V17.25H23.5V39zm4-13.5v-3h8.25v3H27.5zm0 8.25v-3h8.25v3H27.5z"
                  fill="#000"
                ></path>
              </svg>
            </div>
            <h1 class="defaultHeaderFont mds-font-size-2xl mds-width-80">
              {{ ContactUs.headquarters.header }}
            </h1>
          </div>
          <div>
            <h1 class="defaultHeaderFont mds-font-size-xl">
              {{ ContactUs.headquarters.name }}
            </h1>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-70 mds-m-vertical-2xl"
            >
              {{ ContactUs.headquarters.address }}
            </p>
            <a
              v-if="ContactUs.headquarters.phone"
              class="mds-flex items-center mds-gap-column-lg"
              :href="ContactUs.headquarters.phone.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.23 15.26l-2.54-.29a1.99 1.99 0 00-1.64.57l-1.84 1.84a15.045 15.045 0 01-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 00-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                  fill="#0D2126"
                ></path>
              </svg>
              <span class="mds-text-color-primary">
                {{ ContactUs.headquarters.phone.number }}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div v-if="ContactUs.globalOffices" class="mds-container defaul-b-border">
        <div class="mds-mobile-flex mds-m-vertical-6xl mds-gap-around-2xl">
          <div
            class="mds-flex mds-items-start mds-flex-column mds-gap-around-md mds-width-40"
          >
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-secondary-shade"
            >
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.764 17.833a8.115 8.115 0 01-3.25-.656 8.416 8.416 0 01-2.646-1.781 8.415 8.415 0 01-1.781-2.646A8.115 8.115 0 011.43 9.5c0-1.153.218-2.236.656-3.25a8.415 8.415 0 011.781-2.646 8.415 8.415 0 012.646-1.781 8.115 8.115 0 013.25-.656c1.153 0 2.236.218 3.25.656a8.415 8.415 0 012.646 1.781A8.416 8.416 0 0117.44 6.25a8.115 8.115 0 01.656 3.25 8.115 8.115 0 01-.656 3.25 8.415 8.415 0 01-1.781 2.646 8.415 8.415 0 01-2.646 1.781 8.115 8.115 0 01-3.25.656zm-.896-1.27v-1.709c-.486 0-.896-.18-1.229-.541a1.813 1.813 0 01-.5-1.271v-.917l-4.27-4.27c-.07.277-.119.551-.147.822a8.06 8.06 0 00-.041.823c0 1.806.586 3.382 1.76 4.73 1.174 1.346 2.65 2.124 4.427 2.332zm6.125-2.25c.306-.334.573-.688.802-1.063a7.42 7.42 0 00.584-1.177c.16-.41.277-.83.354-1.26a7.55 7.55 0 00.114-1.313 7.043 7.043 0 00-1.208-4.01 7.029 7.029 0 00-3.23-2.636v.375c0 .486-.166.91-.5 1.271a1.607 1.607 0 01-1.228.542H8.868v1.812a.72.72 0 01-.281.583.98.98 0 01-.635.23h-1.73V9.5h5.375c.236 0 .43.09.584.27a.94.94 0 01.229.626v2.646h.896c.402 0 .757.118 1.062.354.306.236.514.541.625.916z"
                ></path>
              </svg>
            </div>
            <h1 class="defaultHeaderFont mds-font-size-2xl mds-width-80">
              {{ ContactUs.globalOffices.header }}
            </h1>
          </div>
          <div class="contactFaq mds-width-70">
            <div
              v-for="(region, index) in regions"
              :key="region.title"
              class="component-accordion"
            >
              <button
                type="button"
                class="tab-wrapper"
                :aria-expanded="openIndex === index"
                @click="toggle(index)"
              >
                <h2 class="text-left">{{ region.title }}</h2>
                <div
                  class="shrink-0"
                  :class="{ 'is-open': openIndex === index }"
                >
                  <svg
                    v-if="openIndex !== index"
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                  >
                    <path
                      stroke="#0D2126"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M1.375 14.364h26.25M14.5 27.49V1.24"
                    />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="28"
                    height="28"
                  >
                    <path
                      stroke="#0D2126"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M1.375 14.364h26.25"
                    />
                  </svg>
                </div>
              </button>
              <transition name="accordion">
                <div
                  v-show="openIndex === index"
                  class="content-wrapper layout-accordion__content mds-width-85"
                >
                  <div
                    class="mds-grid mds-grid-size-2 mds-m-vertical-2xl mds-gap-around-2xl"
                  >
                    <div v-for="office in region.offices" :key="office.id">
                      <h1 class="defaultHeaderFont mds-font-size-xl">
                        {{ office.name }}
                      </h1>
                      <p
                        class="mds-font-size-base mds-font-weight-300 mds-line-height-xl mds-width-80 mds-m-vertical-2xl"
                      >
                        {{ office.address }}
                      </p>
                      <a
                        v-if="office.phone"
                        class="mds-flex items-center mds-gap-column-lg"
                        :href="office.phone.href"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <svg
                          viewBox="0 0 24 24"
                          fill="none"
                          width="25"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M19.23 15.26l-2.54-.29a1.99 1.99 0 00-1.64.57l-1.84 1.84a15.045 15.045 0 01-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 00-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                            fill="#0D2126"
                          ></path>
                        </svg>
                        <span class="mds-text-color-primary">
                          {{ office.phone.number }}
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </transition>
            </div>
          </div>
        </div>
      </div>
      <div v-if="ContactUs.support" class="mds-container">
        <div
          class="mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-2xl"
        >
          <div
            class="mds-flex mds-items-start mds-flex-column mds-gap-around-md"
          >
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-secondary-shade"
            >
              <svg
                viewBox="0 0 38 45"
                fill="none"
                width="40px"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M19.104 44.515v-3.23h15.313v-2.864h-7.709V22.9h7.709v-3.334c0-4.202-1.493-7.839-4.48-10.912-2.986-3.073-6.597-4.61-10.833-4.61s-7.882 1.537-10.937 4.61c-3.056 3.073-4.584 6.71-4.584 10.912V22.9h7.709v15.52H3.583c-.902 0-1.692-.338-2.37-1.015-.677-.677-1.015-1.484-1.015-2.422V19.62c0-2.604.495-5.06 1.484-7.37.99-2.309 2.335-4.332 4.037-6.068 1.701-1.736 3.706-3.099 6.015-4.088 2.31-.99 4.766-1.485 7.37-1.485s5.044.495 7.318 1.485a18.933 18.933 0 015.963 4.062c1.702 1.719 3.039 3.733 4.01 6.042.973 2.309 1.46 4.766 1.46 7.37v21.51c0 .938-.34 1.745-1.016 2.422-.678.677-1.485 1.016-2.422 1.016H19.104zm-15.52-9.532h4.27v-8.645h-4.27v8.645zm26.562 0h4.27v-8.645h-4.27v8.645z"
                  fill="#0D2126"
                ></path>
              </svg>
            </div>
            <h1 class="defaultHeaderFont mds-font-size-3xl mds-width-80">
              {{ ContactUs.support.header }}
            </h1>
          </div>
          <div>
            <div class="dropdown" @click="toggleDropdown">
              <div class="dropdown-selected">
                {{ selected }}
                <svg
                  class="dropdown-icon"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 10l5 5 5-5H7z" fill="currentColor" />
                </svg>
              </div>
              <ul v-if="isOpen" class="dropdown-menu">
                <li
                  v-for="option in ContactUs.support.dropdownOptions"
                  :key="option"
                  :class="{ selected: option === selected }"
                  @click.stop="selectOption(option)"
                >
                  a
                  {{ option }}
                </li>
              </ul>
            </div>
            <h1 class="defaultHeaderFont mds-font-size-2xl">
              {{ ContactUs.support.supportDetails.header }}
            </h1>
            <a
              v-if="ContactUs.support.supportDetails.email"
              class="mds-flex items-center mds-gap-column-lg mds-m-vertical-2xl"
              :href="ContactUs.support.supportDetails.email.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-.4 4.25l-7.07 4.42c-.32.2-.74.2-1.06 0L4.4 8.25a.85.85 0 11.9-1.44L12 11l6.7-4.19a.85.85 0 11.9 1.44z"
                  fill="#0D2126"
                ></path>
              </svg>
              <span
                class="mds-text-color-primary mds-font-size-lg mds-font-weight-400"
              >
                {{ ContactUs.support.supportDetails.email.address }}
              </span>
            </a>
            <a
              v-if="ContactUs.support.supportDetails.phone"
              class="mds-flex items-center mds-gap-column-lg"
              :href="ContactUs.support.supportDetails.phone.href"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width="25"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M19.23 15.26l-2.54-.29a1.99 1.99 0 00-1.64.57l-1.84 1.84a15.045 15.045 0 01-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 00-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z"
                  fill="#0D2126"
                ></path>
              </svg>
              <span
                class="mds-text-color-primary mds-font-size-base-2 mds-font-weight-400"
              >
                {{ ContactUs.support.supportDetails.phone.number }}
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
    <section
      v-if="ContactUs.newsletter"
      class="mds-section newsletter theme-yellow"
    >
      <div x-data="newsletter" class="component-layout">
        <div class="mds-container">
          <div class="mds-mobile-flex mds-content-start mds-p-vertical-2xl">
            <div
              class="mds-flex mds-flex-column mds-items-start mds-p-right-6xl mds-width-50"
            >
              <h1 class="subHeader mds-m-bottom-lg mds-width-8">
                {{ ContactUs.newsletter.header }}
              </h1>
            </div>
            <div
              x-data="iFrameFormComponent"
              class="component-i-frame-form newsletter__form-wrapper mds-width-50"
            >
              <iframe
                x-ref="iframe"
                :src="ContactUs.newsletter.iframeSrc"
                id="iFrameResizer1"
                scrolling="no"
                style="
                  overflow: hidden;
                  height: 543px;
                  width: 100%;
                  border: none;
                "
              ></iframe>
            </div>
          </div>
        </div>
        <img class="newsletter__image" :src="ContactUs.newsletter.imageSrc" />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import AppData from "@/assets/data/app-data.json";

const ContactUs = ref(AppData.ContactUs || {});
const openIndex = ref(-1);
const selected = ref(
  ContactUs.value.support?.defaultOption || "America’s support"
);
const isOpen = ref(false);

const regions = computed(() => [
  ContactUs.value.globalOffices?.asia || { title: "Asia", offices: [] },
  ContactUs.value.globalOffices?.europe || { title: "Europe", offices: [] },
  ContactUs.value.globalOffices?.northAmerica || {
    title: "North America",
    offices: [],
  },
]);

function toggle(index) {
  openIndex.value = openIndex.value === index ? -1 : index;
}

function toggleDropdown() {
  isOpen.value = !isOpen.value;
}

function selectOption(option) {
  selected.value = option;
  isOpen.value = false;
}
</script>

<style lang="scss">
.contactUs {
  border-top: 1px solid #425052;
  background-color: #0c1b24;
  padding: 2rem;
  color: #fff;
  font-family: sans-serif;

  .form-card {
    overflow: hidden;
    border-radius: 1.6rem;
    background-color: rgb(39 54 58);
    padding: 3.2rem;

    .form-grid {
      display: grid;
      gap: 1rem 5rem;
    }

    label {
      color: #fff;
      text-transform: uppercase;
      font-weight: 500;
      font-size: 14px;
      letter-spacing: 1px;
      margin-bottom: 8px;
      display: block;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea {
      font-family: "TWKEverett", sans-serif;
      background: #27363a;
      border: 1px solid #c8cdce;
      border-radius: 10px;
      color: #fff;
      font-size: 18px;
      letter-spacing: -0.2px;
      padding: 12px 16px;
      width: 100%;
      height: 42px;
    }

    textarea {
      resize: vertical;
      min-height: 150px;
    }

    .checkbox-grid {
      padding-left: 5rem;
      label {
        text-transform: capitalize;
      }
    }

    [type="checkbox"] {
      box-sizing: border-box;
      padding: 0;
      height: 15px;
      width: 15px;
      position: relative;
      top: 1.5px;
      right: 3px;
    }

    .form-full {
      label {
        text-transform: capitalize;
      }
    }

    .form-footer {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 2rem;
      flex-wrap: wrap;
      gap: 1rem;

      .submit-button {
        background: #ffc72c;
        color: #000;
        font-weight: bold;
        padding: 0.75rem 1.5rem;
        border: none;
        border-radius: 5px;
        cursor: pointer;

        &:hover {
          background: #e6b800;
        }
      }
    }
  }

  .Contactlinks {
    color: #e6b800;
    text-decoration: underline;
  }
}

.newsletter {
  overflow: hidden;
  position: relative;
}
.theme-yellow {
  background-color: rgb(253 205 56);
  color: var(--primary);
}
.newsletter__image {
  position: absolute;
  top: 330px;
  left: 35%;
  bottom: 0;
  z-index: 10;
  transform: scale(1.7);
  object-fit: contain;
  max-width: 100%;
  height: auto;
}
.newsletter.theme-yellow .newsletter__form-wrapper {
  background-color: rgb(254 225 135);
  overflow: hidden;
  border-radius: 1.6rem;
  padding: 3.2rem;
}

.component-accordion {
  margin-bottom: 1rem;
}
.tab-wrapper {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1rem;
  background: #fff;
  border: none;
  cursor: pointer;
}
.tab-wrapper h2 {
  margin: 0;
  font-size: 1.5rem;
}
.shrink-0 svg:last-child {
  display: none;
}
.shrink-0.is-open svg:first-child {
  display: none;
}
.shrink-0.is-open svg:last-child {
  display: block;
}
.accordion-enter-active,
.accordion-leave-active {
  transition: opacity 0.3s ease, max-height 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 500px; /* Adjust based on content height */
}
.layout-accordion__content {
  background: #f9f9f9;
  padding: 1rem;
}
</style>

<style scoped>
.dropdown {
  position: relative;
  width: 300px;
  font-family: sans-serif;
  border-radius: 6px;
  cursor: pointer;
  margin-bottom: 2.5rem;
}
.dropdown-selected {
  padding: 0.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  color: #666;
  border-radius: 10px;
  border: 1px solid rgb(66 80 82);
}
.dropdown-icon {
  transition: transform 0.2s;
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background: white;
  border: 1px solid #d3d3d3;
  border-radius: 0 0 6px 6px;
  box-shadow: 0px 8px 12px rgba(0, 0, 0, 0.1);
  z-index: 10;
}
.dropdown-menu li {
  padding: 0.75rem;
  cursor: pointer;
}
.dropdown-menu li:hover,
.dropdown-menu li.selected {
  background-color: #ffe564;
}
</style>
