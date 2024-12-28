<template>
  <div class="aboutUs">
    <h3 class="title">Welcome to "Shop"</h3>
    <p class="description">
      Your online shopping experience comes to life at "Shop." We're passionate
      about delivering top-notch products and an unparalleled shopping journey
      to our customers.
    </p>

    <h4 class="titleBlock">Our Commitment</h4>
    <p class="description">
      At the heart of "Shop" is a commitment to quality, variety, and customer
      satisfaction. We aim to provide a diverse range of products that cater to
      your needs, from trendy fashion to cutting-edge electronics, all sourced
      from our trusted partners.
    </p>

    <h4 class="titleBlock">What Sets Us Apart</h4>
    <ul class="features">
      <li>
        <strong>Handpicked Selection:</strong> Our team curates a selection of
        products, ensuring each item meets our high standards for quality,
        style, and functionality.
      </li>
      <li>
        <strong>User-Friendly Interface:</strong> "Shop" is designed with you in
        mind. Our intuitive and user-friendly website makes your shopping
        experience seamless and enjoyable.
      </li>
      <li>
        <strong>Secure Transactions:</strong> Your security is our priority.
        Shop with confidence knowing that your transactions are safe and your
        personal information is protected.
      </li>
    </ul>

    <h4 class="titleBlock">Contact Us</h4>
    <p class="description">
      Have questions, feedback, or suggestions? Our customer support team is
      here to assist you.
    </p>
  </div>
</template>

<script setup></script>

<style scoped>
.aboutUs {
  max-width: 100%;
  margin: 0 auto;
  line-height: 1.6;
  padding-left: 10px;
  padding-right: 10px;
}

.title {
  font-size: 22px;
  margin-bottom: 10px;
}

.description {
  font-size: 18px;
  color: var(--secondary);
}

.titleBlock {
  font-size: 22px;
  /* font-weight: bold; */
  margin-top: 20px;
}

.features {
  list-style-type: disc;
  margin-left: 20px;
  font-size: 18px;
}
</style>
