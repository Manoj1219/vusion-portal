<template>
    <div class="contactUs">
        <div class="mds-container mds-grid mds-grid-size-2 mds-gap-around-5xl mds-m-vertical-7xl">
            <div>
                <h1 class="header mds-m-bottom-lg">Request a Demo from our experts</h1>
                <p class="mds-font-size-base-2 mds-font-weight-300 mds-m-top-md mds-line-height-xl">
                    Complete this form to be contact from a member of our team.
                </p>
            </div>
            <div class="form-card">
                <form class="form-grid">
                    <div class="form-group">
                        <label>First Name *</label><input type="text" required />
                    </div>
                    <div class="form-group">
                        <label>Last Name *</label><input type="text" required />
                    </div>
                    <div class="form-group">
                        <label>Email *</label><input type="email" required />
                    </div>
                    <div class="form-group"><label>Phone</label><input type="tel" /></div>
                    <div class="form-group">
                        <label>Company *</label><input type="text" required />
                    </div>
                    <div class="form-group">
                        <label>Job Title</label><input type="text" />
                    </div>
                    <div class="form-group">
                        <label>Country *</label><input type="text" required />
                    </div>
                    <div class="form-group">
                        <label>Industry </label><input type="text" required />
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