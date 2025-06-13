<template>
  <section class="mds-pos-relative">
    <video
      class="mds-width-100 mds-width-300-md"
      src="https://player.vimeo.com/progressive_redirect/playback/883266366/rendition/720p/file.mp4?loc=external&log_user=0&signature=a8f4996ca4525c6d9d74276c20a39726a695502a028dd5325c1ce380493baeb1#t=0.001"
      autoplay
      muted
      playsinline
      loop
    ></video>

    <div class="mds-container">
      <div class="mds-pos-absolute mds-pos-top">
        <h1 class="header mds-m-bottom-lg mds-width-75 mds-p-top-4xl-sm">
          We are VusionGroup.
        </h1>

        <a
          target="_blank"
          href="https://careers.smartrecruiters.com/VusionGroupSA/all-job-offers"
          class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
        >
          <span> Search All Jobs </span>
          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section class="mds-p-top-2xl careers-carousal">
    <div class="mds-container">
      <div class="mds-m-vertical-5xl">
        <h1 class="subHeader mds-m-bottom-lg mds-width-70">
          Ready for whatever comes next.
        </h1>
        <p
          class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-60"
        >
          VusionGroup is a fast-growing, fast-paced retail tech company.
        </p>
        <p
          class="mds-font-size-base-2 mds-font-weight-600 mds-m-top-md mds-line-height-xl mds-width-70"
        >
          We invent technologies that create a positive impact on society by
          enabling sustainable and human-centered commerce.
        </p>
        <p
          class="mds-font-size-base-2 mds-font-weight-400 mds-m-top-lg mds-line-height-xl mds-width-70"
        >
          When we bring together innovative, global talent and put the power of
          an IoT and data solutions leader behind great ideas, we see what
          happens: technologies emerge, partnerships forge, experiences improve,
          and communities thrive.
        </p>
        <p
          class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-70"
        >
          We believe entrepreneurship is a calling—and
          <span class="mds-font-weight-600">
            our start-up spirit will empower your ambition.
          </span>
        </p>
      </div>
    </div>
    <div class="mds-carousal mds-products-carousal mds-m-vertical-7xl">
      <Swiper
        :space-between="30"
        :slidesPerView="'auto'"
        :loop="false"
        :modules="modules"
        navigation
        class="mds-swiper default-swiper video-carousel"
        @slideChange="() => stopAllVideos()"
        @swiper="onSwiperInit"
        pagination
      >
        <SwiperSlide
          v-for="(video, index) in career.videos"
          :key="index"
          class="swiper-slide swiper-slide-active"
        >
          <div class="video-button">
            <video
              :ref="(el) => (videoRefs[index] = el)"
              class="video"
              :poster="video.poster"
              :src="video.src"
              playsinline
              muted
              @click="togglePlay(index)"
            ></video>

            <div
              class="component-video__play"
              v-if="playingIndex !== index"
              @click.stop="togglePlay(index)"
            >
              <svg viewBox="0 0 17 18" fill="currentColor">
                <path d="M17 9L4.25 16.361V1.64L17 9z" />
              </svg>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>

      <div class="mds-container mds-flex mds-items-center mds-p-left-xl">
        <div class="mds-button-group-carousel">
          <button
            class="mds-button mds-button-primary_outline"
            @click="slideTo(activeSlide - 1)"
          >
            <i class="pi pi-chevron-left"></i>
          </button>
          <button
            class="mds-button mds-button-primary_outline"
            @click="slideTo(activeSlide + 1)"
          >
            <i class="pi pi-chevron-right"></i>
          </button>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section mds-background-gray mds-p-top-3xl mds-p-bottom-3xl"
  >
    <div class="mds-container mds-p-top-2xl">
      <span
        class="mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
        >EXPLORE CAREER PATHS</span
      >
      <h2 class="subHeader mds-m-bottom-lg mds-font-size-4xl mds-width-65">
        We accelerate. <br />
        We shape our own careers.
      </h2>
      <p
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-60"
      >
        Experience the freedom to shape the future of your career.
      </p>
      <p
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-60"
      >
        Take advantage of e-learning programs, workshops, and seminars. Explore
        global mobility and internal opportunities to grow your career.
      </p>
      <p
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-60"
      >
        If you enjoy taking on new challenges and doing what’s right in
        everything you say and do — find what’s next for you at VusionGroup.
      </p>
    </div>
    <div class="insights-section mds-container mds-m-vertical-md">
      <div class="mds-grid mds-gap_around-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/software-and-hardware-engineering"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                See our job offers
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Software, cloud, data & hardware engineering
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2024/01/LEA170423C13574-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/sales-and-account-management"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                See our job offers
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Sales & account management
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/career-paths-2-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/corporate-functions"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                See our job offers
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Corporate functions (HR, finance, legal, marketing)
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/career-paths-3-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/technical-customer-support"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                See our job offers
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Technical customer support
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/12/Sans-titre-3-800x0-c-default.png"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/supply-chain-and-manufacturing"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                See our job offers
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Supply chain & manufacturing
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/career-paths-6-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/project-management"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <div
                class="mds-letter-spacing-1 mds-font-weight-400 mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase"
              >
                See our job offers
              </div>
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Project management
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/career-paths-5-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-container">
    <div class="mds-flex mds-flex-column">
      <div
        class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
      >
        <div class="mds-section-image mds-self-center mds-p-around-lg">
          <img
            class="mds-border-radius-base"
            src="https://www.vusion.com/wp-content/uploads/2023/10/LEA170423C0346-1540x1020-c-default.jpg"
            alt=""
          />
        </div>
        <div class="mds-section-content mds-p-around-none">
          <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
            We visualize. <br />
            We make it happen.
          </h2>
          <p class="mds-font-weight-400 mds-font-size-base">
            We are innovators, entrepreneurs, and doers with a global mindset.
            We are an international team curious about the world. Cultural
            diversity is part of our DNA. It is a tremendous strength as we work
            together to serve retailers everywhere. By thinking big and working
            as one team, we will build the largest retail IoT platform and
            continue to make a positive impact on the planet.
          </p>
        </div>
      </div>
    </div>
    <div class="mds-m-vertical-5xl">
      <h1 class="subHeader mds-m-bottom-lg mds-width-70">
        We impact.
        <br />
        We help communities thrive.
      </h1>
      <p
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-60"
      >
        Our mission is to transform physical stores into high-value digital
        assets.
      </p>
      <p
        class="mds-font-size-base-2 mds-m-top-md mds-line-height-xl mds-width-70"
      >
        You are the key to our success: agile thinkers, tech makers, and change
        agents who dream about the future of retail—who aren’t afraid to take
        risks, fail, and learn from mistakes.
      </p>
      <p
        class="mds-font-size-base-2 mds-m-top-lg mds-line-height-xl mds-width-70"
      >
        No matter your role at VusionGroup, you will reinvent and reimagine
        modern commerce—sustainably and ethically.
      </p>
      <div class="mds-mobile-flex mds-m-top-xl mds-gap-around-xl">
        <a
          href="https://www.vusion.com/insights/ses-imagotag-to-further-strengthen-commitment-to-gender-equality-in-signing-un-womens-empowerment-principles/"
          class="mds-button mds-button-primary_outline"
        >
          Read our commitment to gender equality
          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            class="mds-m-left-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
        <a
          href="https://www.vusion.com/positive-commerce/"
          class="mds-button mds-button-primary_outline"
        >
          Learn more about ESG
          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            class="mds-m-left-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section class="mds-section-content mds-background-primary">
    <div class="mds-container">
      <h1 class="subHeader mds-m-bottom-lg mds-width-70 mds-text-color-white">
        VusionGroup at a glance.
      </h1>
      <div
        class="mds-grid mds-grid-size-3 mds-gap-column-6xl mds-gap-row-6xl mds-m-top-6xl"
      >
        <div>
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img
              class="mds-width-80"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Employees_Icon-1.svg"
              alt=""
            />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              1000
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              employees
            </p>
          </div>
        </div>
        <div>
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img
              class="mds-width-80"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Languages_Icon-1.svg"
              alt=""
            />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              24+
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              languages spoken
            </p>
          </div>
        </div>
        <div>
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img
              class="mds-width-80"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Nationalities_Icon-1.svg"
              alt=""
            />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              59+
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              nationalities
            </p>
          </div>
        </div>
        <div>
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img
              class="mds-width-80"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Women_Icon-1.svg"
              alt=""
            />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              +34%
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              of employees are women
            </p>
          </div>
        </div>
        <div>
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img
              class="mds-width-80"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Offices_Icon-1.svg"
              alt=""
            />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              25
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              offices in 18 countries
            </p>
          </div>
        </div>
        <div>
          <div class="mds-width-20 mds-m-bottom-2xl">
            <img
              class="mds-width-80"
              src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Stores_Icon-1.svg"
              alt=""
            />
          </div>
          <div class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85">
            <h4
              class="mds-font-size-lg mds-font-weight-600 mds-text-color-white"
            >
              50,000
            </h4>
            <p
              class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90 mds-text-color-white"
            >
              stores in 60+ countries
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section-content mds-p-top-lg">
    <div class="mds-container">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/10/LEA170423C0150-1540x1020-c-default.jpg"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              We lead.<br />
              We don’t stop.
            </h2>
            <p class="mds-font-weight-300 mds-font-size-base-2 mds-width-80">
              Now, more than ever, digitalization is top of mind for retailers
              and brands. As the global leader in
              <a
                class="mds-font-weight-500 mds-underline-text mds-text-color-primary"
                href="/sesimagotag/electronic-shelf-labels"
              >
                Electronic Shelf Labels (ESL)
              </a>
              and digital solutions for physical commerce, we consider the
              customer first in every decision. We bring physical and digital
              retail together to enable next-gen stores.
            </p>
            <a
              target="_blank"
              class="mds-button mds-button-secondary mds-m-top-3xl mds-width-max"
              href="https://www.weforum.org/stories/2022/09/retail-stores-into-ecommerce-centres-avoid-carbon-emissions/"
            >
              Explore what we do
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-background-secondary-shade">
    <div class="insights-section mds-container mds-p-vertical-4xl">
      <h2 class="defaultHeaderFont mds-p-bottom-2xl mds-font-size-3xsl">
        See us in action on Instagram.
      </h2>
      <div class="mds-grid mds-gap_around-6xl">
        <div class="mds-grid mds-grid-size-3 mds-gap_column-lg">
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/software-and-hardware-engineering"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                Integration day in Paris for our newest employees from all over
                the world.
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/careers-cards-1-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/sales-and-account-management"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                A truly global onboarding day with newcomers from Europe, Asia
                and the Americas!
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/careers-cards-2-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/corporate-functions"
            class="mds-flex-column"
          >
            <div class="insights-content insights-content-image">
              <h3
                class="mds-font-size-xl mds-font-weight-500 mds-m-bottom-lg truncate"
              >
                There is no Sales, without administration.
              </h3>
              <div class="mds-border-top mds-m-top-3xl mds-p-bottom-md"></div>
            </div>
            <div class="insights-image">
              <img
                src="https://www.vusion.com/wp-content/uploads/2023/11/careers-cards-3-800x0-c-default.jpg"
                alt=""
              />
            </div>
          </a>
        </div>
      </div>
      <div class="mds-flex mds-justify-center mds-p-top-3xl">
        <a
          href="https://www.vusion.com/insights/ses-imagotag-to-further-strengthen-commitment-to-gender-equality-in-signing-un-womens-empowerment-principles/"
          class="mds-button mds-button-primary_outlineWhite"
        >
          Follow us on Instagram

          <svg
            viewBox="0 0 19 16"
            fill="currentColor"
            width="16px"
            class="mds-m-left-sm"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.707 8.707a1 1 0 000-1.414L12.343.929a1 1 0 10-1.414 1.414L16.586 8l-5.657 5.657a1 1 0 001.414 1.414l6.364-6.364zM0 9h18V7H0v2z"
            ></path>
          </svg>
        </a>
      </div>
    </div>
  </section>
  <section
    class="mds-section-content mds-background-primary mds-text-color-white"
  >
    <div class="mds-container">
      <div class="mds-grid mds-grid-size-2">
        <div class="mds-p-vertical-4xl">
          <span
            class="mds-m-bottom-lg mds-font-size-md-2 mds-text-transform-uppercase mds-letter-spacing-1 mds-font-weight-500"
            >build with our tech</span
          >
          <h1
            class="defaultHeader mds-m-vertical-lg mds-width-60 mds-font-size-3xl"
          >
            We invent.<br />
            We pave the way.
          </h1>
          <p
            class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl mds-width-90"
          >
            We are VusionGroup, the leading IoT cloud platform. Our engineers
            push the boundaries of technology to help retailers transform their
            physical stores into data-driven, connected shopping experiences.
            Teaming up with our world-class engineering and product teams, we
            relentlessly strive to meet and exceed the dynamic needs of our
            customers. With an eye on tomorrow, and fuelled by the
            transformative potential of data, our mission is to continuously
            disrupt retail—leveraging the power scaled IoT Management, Computer
            Vision, AI, Predictive Analytics, and beyond.
          </p>
        </div>
        <div
          class="mds-grid mds-grid-size-1 mds-m-vertical-2xl mds-p-left-2xl mds-gap-row-4xl"
        >
          <div class="mds-flex mds-items-start mds-gap-around-sm">
            <svg
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pi pi-check mds-font-size-2xl mds-text-color-secondary"
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
                Back-end: Java, NodeJS
              </h4>
            </div>
          </div>
          <div class="mds-flex mds-items-start mds-gap-around-sm">
            <svg
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pi pi-check mds-font-size-2xl mds-text-color-secondary"
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
                Front-end: Angular 12 and 14, typescript/CSS
              </h4>
            </div>
          </div>
          <div class="mds-flex mds-items-start mds-gap-around-sm">
            <svg
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pi pi-check mds-font-size-2xl mds-text-color-secondary"
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
                Cloud: Azure stack (service Bus, VSTS for QA), GCP
              </h4>
            </div>
          </div>
          <div class="mds-flex mds-items-start mds-gap-around-sm">
            <svg
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pi pi-check mds-font-size-2xl mds-text-color-secondary"
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
                Database: elasticsearch, MongoDB, CosmoDB
              </h4>
            </div>
          </div>
          <div class="mds-flex mds-items-start mds-gap-around-sm">
            <svg
              viewBox="0 0 29 35"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="pi pi-check mds-font-size-2xl mds-text-color-secondary"
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
                Dockers: Azure Kubernetes
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section-content mds-p-top-lg">
    <div class="mds-container">
      <div class="mds-flex mds-flex-column">
        <div
          class="mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-2xl"
        >
          <div class="mds-section-image mds-self-center mds-p-around-lg">
            <img
              class="mds-border-radius-base"
              src="https://www.vusion.com/wp-content/uploads/2023/10/LEA170423C0068-1540x1020-c-default.jpg"
              alt=""
            />
          </div>
          <div class="mds-section-content mds-p-around-none">
            <h2 class="defaultHeaderFont mds-m-bottom-lg mds-font-size-3xsl">
              We listen.<br />
              We respect one
              <br />
              another.
            </h2>
            <p class="mds-font-weight-300 mds-font-size-base-2 mds-width-80">
              VusionGroup is large enough to offer stability, yet human enough
              to know you and your work. Here, you’ll be part of a globally
              distributed team that builds trust-based relationships. Your
              co-workers are intellectually curious, committed, and
              collaborative. The work is fast-paced, challenging, and ambitious.
              It will take agility and flexibility to keep up with our pace of
              change. You will move confidently in and out of autonomous and
              team work. Each day, you will feel valued for your contributions
              and make a positive impact.
            </p>
          </div>
        </div>
      </div>
      <div class="mds-section-content">
        <div class="mds-m-bottom-7xl mds-width-75">
          <h2 class="mds-m-bottom-lg mds-font-size-4xl mds-font-weight-500">
            We trust. We feel supported.
          </h2>
          <p
            class="mds-font-size-base-2 mds-font-weight-500 mds-line-height-xl mds-width-90"
          >
            VusionGroup is a place where people feel safe, happy, and respected.
            People treat others as they would like to be treated. And, as an
            organization, there are programs in place to support you.
          </p>
          <p
            class="mds-font-size-base-2 mds-font-weight-500 mds-line-height-xl mds-p-top-xl"
          >
            Our benefits are designed for whatever comes next in your life.
          </p>
        </div>
        <div
          class="mds-grid mds-grid-size-3 mds-gap-column-6xl mds-gap-row-6xl mds-m-top-6xl"
        >
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Compensation_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Competitive compensation
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Shareholder_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Shareholder equity
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Hybrid_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">Hybrid work</h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Schedule_Flexibility_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Schedule flexibility
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Work_Life_Balance_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Work-life balance
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Health_and_Wellness_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Health & wellness benefits
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Social_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Highest social standards
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Family_First_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Family-first benefits
              </h4>
            </div>
          </div>
          <div>
            <div class="mds-width-20 mds-m-bottom-2xl">
              <img
                class="mds-width-80"
                src="https://www.vusion.com/wp-content/uploads/2023/10/Vusion_Learning_Development_Icon.svg"
                alt=""
              />
            </div>
            <div
              class="mds-flex mds-flex-column mds-gap-around-lg mds-width-85"
            >
              <h4 class="mds-font-size-lg mds-font-weight-600">
                Learning & development
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    class="mds-section-content mds-background-primary mds-text-color-white"
  >
    <div class="mds-container">
      <h2 class="Header mds-font-size-4xl mds-width-65 mds-font-weight-500">
        How we hire
      </h2>

      <div class="mds-grid mds-grid-size-2 mds-gap-around-6xl mds-p-top-3xl">
        <div class="mds-flex mds-gap-column-4xl">
          <div class="mds-width-20">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
            >
              <img
                class="mds-width-35"
                src="https://www.vusion.com/wp-content/uploads/2023/10/1.svg"
                alt=""
              />
            </div>
          </div>

          <p
            class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            Take the next step and submit your application along with your
            resume or CV.
          </p>
        </div>
        <div class="mds-flex mds-gap-column-4xl">
          <div class="mds-width-20">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
            >
              <img
                class="mds-width-45"
                src="https://www.vusion.com/wp-content/uploads/2023/10/2.svg"
                alt=""
              />
            </div>
          </div>

          <p
            class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            From there, a Talent Acquisition team member will review it.
          </p>
        </div>
        <div class="mds-flex mds-gap-column-4xl">
          <div class="mds-width-20">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
            >
              <img
                class="mds-width-45"
                src="https://www.vusion.com/wp-content/uploads/2023/10/3.svg"
                alt=""
              />
            </div>
          </div>

          <p
            class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            If your background is a match for a current job opening, we will
            email you.
          </p>
        </div>
        <div class="mds-flex mds-gap-column-4xl">
          <div class="mds-width-20">
            <div
              class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
            >
              <img
                class="mds-width-45"
                src="https://www.vusion.com/wp-content/uploads/2023/10/4.svg"
                alt=""
              />
            </div>
          </div>

          <p
            class="mds-font-size-base mds-font-weight-400 mds-line-height-xl mds-width-90"
          >
            Please know, we take time to review and consider everyone who
            applies.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="mds-section mds-background-secondary-shade">
    <div class="mds-container mds-grid mds-grid-size-2 mds-gap-around-7xl">
      <div class="mds-section-image">
        <img
          class="mds-height-100"
          src="https://www.vusion.com/wp-content/uploads/2023/10/LEA170423C12985-1440x1440-c-default.jpg"
          alt=""
        />
      </div>
      <div class="mds-section-content mds-flex mds-flex-column mds-items-start">
        <h2 class="mds-m-bottom-lg mds-font-size-4xl">
          Are you ready for what’s next?
        </h2>
        <p class="mds-font-size-base-2 mds-line-height-xl">
          Join us and develop the future of retail.
        </p>
        <div class="mds-mobile-flex mds-m-top-xl mds-gap-around-xl">
          <a
            href="https://careers.smartrecruiters.com/VusionGroupSA/all-job-offers"
            class="mds-button mds-button-secondary"
          >
            Search all jobs
          </a>
          <a
            href="https://www.vusion.com/hr-data-privacy-policy/"
            class="mds-button mds-button-secondary"
          >
            Read Our HR Data Privacy Policy
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import AppData from "@/assets/data/app-data.json";

const modules = [Pagination, Navigation];
const swiperRef = ref(null);
const activeSlide = ref(0);
const playingIndex = ref(null);
const videoRefs = ref([]);
const career = ref(AppData.career);

const onSwiperInit = (swiper) => {
  swiperRef.value = swiper;
};

const togglePlay = (index) => {
  videoRefs.value.forEach((video, i) => {
    if (video) {
      if (i === index) {
        if (video.paused) {
          video.play();
          playingIndex.value = i;
        } else {
          video.pause();
          playingIndex.value = null;
        }
      } else {
        video.pause();
      }
    }
  });
};

const stopAllVideos = () => {
  videoRefs.value.forEach((video) => video?.pause());
  playingIndex.value = null;
};

const slideTo = (index) => {
  const clampedIndex = Math.max(
    0,
    Math.min(index, career.value.videos.length - 1)
  );
  activeSlide.value = clampedIndex;
  if (swiperRef.value && swiperRef.value.slideTo) {
    swiperRef.value.slideTo(clampedIndex);
  }
};
</script>

<style lang="scss" scoped>
.video-carousel {
  .video-button {
    position: relative;
    width: 100%;
    border: none;
    padding: 0;
    background: none;
    video {
      width: 100%;
      border-radius: 1rem;
    }

    .component-video__play {
      z-index: 10;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 5.6rem;
      height: 5.6rem;
      border-radius: 9999px;
      background-color: rgba(255, 255, 255, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;

      svg {
        width: 2rem;
        height: 2rem;
      }
    }
  }
}
</style>
