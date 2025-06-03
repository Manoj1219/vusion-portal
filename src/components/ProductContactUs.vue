<template>
  <div class="page-container mds-section mds-background-primary">
    <div class="mds-container">
      <h1 class="defaultHeaderFont mds-font-size-3xsl">
        We’re here to help make your store <br />
        smarter and more efficient.
      </h1>
      <div
        class="contactGrid mds-grid mds-grid-size-3 mds-m-vertical-6xl mds-gap-around-6xl"
      >
        <div class="mds-flex mds-flex-column mds-gap-around-lg">
          <div
            class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
          >
            <img
              src="https://www.vusion.com/wp-content/uploads/2025/05/Partnership-Community-2.svg"
              alt=""
            />
          </div>
          <h4 class="mds-font-size-lg mds-font-weight-600">
            We’ll be in touch soon.
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            Submit the contact form, and we’ll make sure it gets to the right
            person. They’ll be in touch as soon as possible.
          </p>
        </div>
        <div class="mds-flex mds-flex-column mds-gap-around-lg">
          <div
            class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
          >
            <img
              src="https://www.vusion.com/wp-content/uploads/2025/05/Physical-Retail-2.svg"
              alt=""
            />
          </div>

          <h4 class="mds-font-size-lg mds-font-weight-600">
            We’ll set up the right demo.
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            We’ll identify the right solutions and technologies to fit your
            business needs and show you how they can work for you.
          </p>
        </div>
        <div class="mds-flex mds-flex-column mds-gap-around-lg">
          <div
            class="mds-badge mds-badge-rounded mds-badge-large mds-background-contactBadge"
          >
            <img
              src="https://www.vusion.com/wp-content/uploads/2025/05/Customer-First-1.svg"
              alt=""
            />
          </div>
          <h4 class="mds-font-size-lg mds-font-weight-600">
            We’ll customize a plan.
          </h4>
          <p class="mds-font-size-base mds-font-weight-400 mds-line-height-xl">
            Every business and brand has unique needs. We’ll create a plan that
            helps you achieve your goals and makes immediate impact
          </p>
        </div>
      </div>

      <div class="form-card">
        <form class="form-grid">
          <!-- Inputs -->
          <div class="form-group">
            <label>First Name *</label><input type="text" required />
          </div>
          <div class="form-group">
            <label>Last Name *</label><input type="text" required />
          </div>
          <div class="form-group">
            <label>Email *</label><input type="email" required />
          </div>
          <div class="form-group">
            <label>Phone Number</label><input type="tel" />
          </div>
          <div class="form-group">
            <label>Company *</label><input type="text" required />
          </div>
          <div class="form-group">
            <label>Job Title</label><input type="text" />
          </div>
          <div class="form-group">
            <label>Management Level *</label><input type="text" required />
          </div>
          <div class="form-group">
            <label>Country *</label><input type="text" required />
          </div>

          <!-- Topic Checkboxes -->
          <div class="form-full">
            <label>What topic are you interested in?</label>
            <div class="checkbox-grid">
              <label><input type="checkbox" /> VusionCloud, IoT Platform</label>
              <label
                ><input type="checkbox" /> Captana, Computer Vision / AI</label
              >
              <label
                ><input type="checkbox" /> Engage, In-Store Retail Media</label
              >
              <label
                ><input type="checkbox" /> Memory, Retail Intelligence</label
              >
              <label
                ><input type="checkbox" /> SESimagotag, Electronic Shelf
                Labels</label
              >
              <label
                ><input type="checkbox" /> PDidigital, Industrial IoT</label
              >
            </div>
          </div>

          <!-- Help Textarea -->
          <div class="form-full">
            <label>How can we help you?</label>
            <textarea rows="4"></textarea>
          </div>

          <!-- Marketing Consent -->
          <div class="form-full">
            <label
              ><input type="checkbox" /> Yes, I would like to receive email
              communications about your products and services</label
            >
          </div>

          <!-- Privacy Agreement -->
          <div class="form-full">
            <label>
              <input type="checkbox" required />
              I have read, agree and accept that the information that I provide
              will be used as detailed in the
              <a href="/privacy-policy" target="_blank">privacy policy</a> *
            </label>
          </div>

          <!-- Captcha & Submit -->
          <div class="form-footer">
            <button type="submit" class="mds-button mds-button-secondary">
              Get in touch
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.page-container {
  background-color: #0c1b24;
  padding: 2rem;
  color: #fff;
  font-family: sans-serif;
  .mds-container {
    border-bottom: 1px solid #425052;
    padding-bottom: 5rem;
  }
  .contactGrid {
    img {
      height: 85px;
      width: 85px;
      padding: 5px;
      border-radius: 50px;
    }
  }

  .form-card {
    grid-column: 1 / -1;
    overflow: hidden;
    border-radius: 1.6rem;
    background-color: rgb(39 54 58);
    padding: 3.2rem;

    .form-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
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

  a {
    color: #c9e2ff;
    text-decoration: underline;
  }
}
</style>
