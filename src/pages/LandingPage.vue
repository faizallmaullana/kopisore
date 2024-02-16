<template>
  <HeroImage />
  <AboutUs />
  <MenuList />
  <QuoteCard :quote="Quote" />
  <OrderAvailable />
  <LocationKopi />
  <p style="text-align: center;">enjoy your coffee</p>
</template>

<script>
import HeroImage from '@/components/home/HeroImage.vue';
import AboutUs from '@/components/home/AboutUs.vue';
import MenuList from '@/components/home/MenuList.vue';
import OrderAvailable from '@/components/home/OrderAvailable.vue';
import LocationKopi from '@/components/home/LocationKopi.vue';
import QuoteCard from '@/components/home/partials/QuoteCard.vue';

export default {
  name: 'LandingPage',
  components: {
    HeroImage,
    AboutUs,
    MenuList,
    OrderAvailable,
    LocationKopi,
    QuoteCard,
  },

  data() {
    return {
      Quote: "Ngopi dulu, jalan-jalan kemudian"
    }
  }
}
</script>