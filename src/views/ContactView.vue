<template>
  <div class="contact-page">
    <div class="container mt-4">
      <div class="row">
        <div class="col-md-12 text-center">
          <h2 class="section-title">WE'RE HERE TO ASSIST YOU</h2>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-6">
          <div class="contact-info">
            <h3 class="contact-heading">REACH US BY PHONE</h3>
            <p class="contact-text">Call us at <span class="phone-number">+27 (0)21 700 4800</span></p>
            <p class="contact-text">Monday - Friday, 8 AM - 5 PM (SAST)</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="contact-info">
            <h3 class="contact-heading">SEND US AN EMAIL</h3>
            <p class="contact-text">For support inquiries, please email us. We aim to respond within 48 business hours.</p>
            <p class="contact-text">Email: <a href="mailto:support@sharenet.co.za" class="email-link">support@sharenet.co.za</a></p>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-md-6">
          <div class="office-address">
            <h2 class="office-heading">CAPE TOWN HEAD OFFICE</h2>
            <p class="office-text"><strong>Sharenet (Pty) Ltd</strong></p>
            <p class="office-text">301, 3rd Floor Imperial Terraces</p>
            <p class="office-text">Tyger Waterfront, Carl Cronje Drive</p>
            <p class="office-text">Bellville, Cape Town, 7530</p>
            <p class="office-text">Telephone: (021) 700 4800</p>
            <p class="office-text">International: +27 21 700 4800</p>
          </div>
        </div>

        <div class="col-md-6">
          <div class="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1656.247475024707!2d18.628870254283434!3d-33.876904616323024!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc41e6218f7ab3%3A0xbdd802ca53b92d43!2sSharenet%20(Pty)%20Ltd!5e0!3m2!1sen!2sza!4v1742443196602!5m2!1sen!2sza"
              width="100%"
              height="350"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>

      <div class="row mt-4">
        <div class="col-md-12 text-center">
          <router-link to="/" class="back-home-btn">RETURN TO HOME</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactPage",
};
</script>

<style scoped>
.contact-page {
  /* background-color: #1a1a1a; */
  color: #e0e0e0;
  padding-bottom: 30px;
}
.container {
  background-color: #152d4d;
  border-radius: 10px;
}


.contact-heading,
.office-heading {
  color: white;
  font-weight: 600;
  margin-bottom: 20px;
}

.contact-text,
.office-text {
  color: #bdbdbd;
  line-height: 1.6;
}

.phone-number {
  color: #ff4d4d;
}

.email-link {
  color: #ff4d4d;
  text-decoration: none;
}

.email-link:hover {
  text-decoration: underline;
}

.map-container {
  border-radius: 8px;
  overflow: hidden;
}

.back-home-btn {
  background-color: #ff4d4d;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.back-home-btn:hover {
  background-color: #cc0000;
}
</style>