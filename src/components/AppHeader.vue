<template>
  <div class="header-desktop">
    <div class="mds-header-brand mds-container">
      <router-link to="/" class="mds-header-brand-link">
        <img
          class="mds-header-brand-logo"
          src="../assets/media/logo-light.svg"
          alt=""
        />
      </router-link>
      <div class="mds-header-brand-actions">
        <div class="mds-header-brand-actions-lang">Engilsh</div>
        <router-link to="/investors" rel="noopener noreferrer">{{
          headerLabels.investors
        }}</router-link>
        <router-link to="/partners" rel="noopener noreferrer">{{
          headerLabels.partners
        }}</router-link>
        <button class="mds-button mds-button-primary_outline">
          <i class="pi pi-search"></i>
        </button>
      </div>
    </div>
    <div class="mds-header-nav">
      <nav class="mds-container">
        <div class="mds-primary-nav">
          <router-link to="/" class="mds-header-brand-link">
            <img
              class="mds-header-brand-logo-sm"
              src="../assets/media/logo-light-sm.svg"
              alt=""
            />
          </router-link>
          <ul class="mds-header-nav-list">
            <li class="mds-header-nav-item">
              <button class="mds-button mds-button-nav">
                <span>{{ headerLabels.products }}</span>
                <i class="pi pi-angle-down"></i>
              </button>
              <div class="mds-navitem-wrapper">
                <ProdcutsNav />
              </div>
            </li>
            <li class="mds-header-nav-item">
              <button class="mds-button mds-button-nav">
                <span>{{ headerLabels.solutions }}</span>
                <i class="pi pi-angle-down"></i>
              </button>
              <div class="mds-navitem-wrapper">
                <SolutionsNav />
              </div>
            </li>
            <li class="mds-header-nav-item">
              <button class="mds-button mds-button-nav">
                <span>{{ headerLabels.insights }}</span>
              </button>
            </li>
            <li class="mds-header-nav-item">
              <button class="mds-button mds-button-nav">
                <span>{{ headerLabels.positiveCommerce }}</span>
                <i class="pi pi-angle-down"></i>
              </button>
              <div class="mds-navitem-wrapper">
                <PositiveCommerceNav />
              </div>
            </li>
            <li class="mds-header-nav-item">
              <router-link to="/careers" rel="noopener noreferrer">
                <span>{{ headerLabels.careers }}</span>
              </router-link>
            </li>
            <li class="mds-header-nav-item">
              <button class="mds-button mds-button-nav">
                <span>{{ headerLabels.company }}</span>
                <i class="pi pi-angle-down"></i>
              </button>
              <div class="mds-navitem-wrapper">
                <CompanyNav />
              </div>
            </li>
          </ul>
        </div>
        <router-link to="/contact-us" class="mds-button mds-button-secondary">
          {{ headerLabels.contact }}
        </router-link>
      </nav>
    </div>
  </div>

  <div class="mds-header-nav header-mobile">
    <div class="mds-header-brand mds-container">
      <router-link to="/" class="mds-header-brand-mobile">
        <img
          class="mds-header-brand-logo"
          src="../assets/media/logo-light.svg"
          alt=""
        />
      </router-link>

      <button class="hamburger" @click="toggleMobileMenu">
        <i :class="['pi', isMobileMenuOpen ? 'pi-times' : 'pi-bars']"></i>
      </button>
    </div>

    <div class="mds-header-nav-mobile" :class="{ open: isMobileMenuOpen }">
      <nav class="mds-container">
        <ul class="mds-header-nav-list">
          <li class="mds-header-nav-item">
            <button
              class="mds-button mds-button-nav"
              @click="isProductsOpen = !isProductsOpen"
            >
              <span>Products</span>
              <i class="pi pi-angle-down"></i>
            </button>
            <transition name="fade-slide">
              <div class="mds-navitem-wrapper" v-show="isProductsOpen">
                <ProdcutsNav />
              </div>
            </transition>
          </li>
          <li class="mds-header-nav-item">
            <button
              class="mds-button mds-button-nav"
              @click="isProductsOpen = !isProductsOpen"
            >
              <span>Solutions</span>
              <i class="pi pi-angle-down"></i>
            </button>
            <transition name="fade-slide">
              <div class="mds-navitem-wrapper" v-show="isProductsOpen">
                <SolutionsNav />
              </div>
            </transition>
          </li>
          <li class="mds-header-nav-item">
            <button class="mds-button mds-button-nav">
              <span>Insights</span>
            </button>
          </li>
          <li class="mds-header-nav-item">
            <button
              class="mds-button mds-button-nav"
              @click="isProductsOpen = !isProductsOpen"
            >
              <span>Positive Commerce</span>
              <i class="pi pi-angle-down"></i>
            </button>
            <transition name="fade-slide">
              <div class="mds-navitem-wrapper" v-show="isProductsOpen">
                <PositiveCommerceNav />
              </div>
            </transition>
          </li>
          <li class="mds-header-nav-item">
            <button class="mds-button mds-button-nav">
              <span>Careers</span>
            </button>
          </li>
          <li class="mds-header-nav-item">
            <button
              class="mds-button mds-button-nav"
              @click="isProductsOpen = !isProductsOpen"
            >
              <span>Company</span>
              <i class="pi pi-angle-down"></i>
            </button>
            <transition name="fade-slide">
              <div class="mds-navitem-wrapper" v-show="isProductsOpen">
                <CompanyNav />
              </div>
            </transition>
          </li>
        </ul>
        <router-link to="/contact-us" class="mds-button mds-button-secondary"
          >Contact Us</router-link
        >
      </nav>
      <!-- <div class="mds-background-primary">
        <button class="mds-button mds-button-primary_outline">
          <i class="pi pi-search"></i>
        </button>
        <div class="mds-header-brand-actions-lang">Engilsh</div>
        <router-link to="/investors" rel="noopener noreferrer">{{
          headerLabels.investors
        }}</router-link>
        <router-link to="/partners" rel="noopener noreferrer">{{
          headerLabels.partners
        }}</router-link>
      </div> -->
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import appData from "@/assets/data/app-data.json";
import CompanyNav from "./menus/CompanyNav.vue";
import PositiveCommerceNav from "./menus/PositiveCommerceNav.vue";
import ProdcutsNav from "./menus/ProdcutsNav.vue";
import SolutionsNav from "./menus/SolutionsNav.vue";

const isProductsOpen = ref(false);
const isMobileMenuOpen = ref(false);
const router = useRouter();

onMounted(() => {
  router.afterEach(() => {
    isMobileMenuOpen.value = false;
    isProductsOpen.value = false;
  });
});

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const headerLabels = appData.headerLabels || {};
</script>
