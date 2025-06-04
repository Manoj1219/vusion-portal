<template>
  <section class="contactUs mds-section mds-background-primary">
    <div class="mds-container">
      <div class="form-card">
        <form class="form-grid">
          <!-- Inputs -->
          <span>
            Our team is happy to answer your questions. Fill out the form and
            we’ll be in touch as soon as possible.
          </span>
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
  </section>
</template>

<style lang="scss" scoped>
.contactUs {
  border-top: 1px solid #425052;
  background-color: #0c1b24;
  padding: 2rem;
  color: #fff;
  font-family: sans-serif;

  .contactGrid {
    img {
      height: 85px;
      width: 85px;
      padding: 5px;
      border-radius: 50px;
    }
  }

  .form-card {
    grid-column: 1;
    overflow: hidden;
    border-radius: 1.6rem;
    background-color: rgb(39 54 58);
    padding: 3.2rem;
    width: 50%;

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

  a {
    color: #c9e2ff;
    text-decoration: underline;
  }
}
</style>
