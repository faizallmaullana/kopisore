<template>
  <div id="order" class="order">
    <h1>Available on</h1>
    <div class="marketplaces">
      <MarketplaceCard v-for="(marketplace, index) in marketplaces" :key="index" :data="marketplace" />
    </div>
  </div>
</template>

<script>
import MarketplaceCard from '@/components/home/partials/MarketplaceCard.vue';
import { createObserver } from "@/assets/js/transition.js";

export default {
  name: "OrderAvailable",

  components: {
    MarketplaceCard
  },
  data() {
    return {
      marketplaces: [
        {
          alt: 'shopee',
          link: 'https://shopee.co.id/warungkopisore',
          marketplace: 'shopee.svg',
          color: '#EF4C2C',
        },
        {
          alt: 'gofood',
          link: 'https://gofood.link/a/DxUV9j1',
          marketplace: 'gofood.svg',
          color: '#ED2836',
        },
        {
          alt: 'tokopedia',
          link: 'https://www.tokopedia.com/warungkopisore',
          marketplace: 'tokopedia.svg',
          color: '#42B549',
        }
      ]
    };
  },

  mounted() {
    const observer = createObserver('visible');
    const marketplace = document.querySelector('.order .marketplaces');
    const title = document.querySelector('.order h1');

    observer.observe(marketplace);
    observer.observe(title);
  }
};
</script>

<style>
.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 5em 0;
  border-bottom: 1px solid #888888;
  border-top: 1px solid #888888;
}

.order h1 {
  color: var(--color-black);
  margin: 0 0 50px 0;
}

.order .marketplaces {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: flex-end;
  justify-content: space-around;
  max-width: 1024px;
  margin: 2em 0;
}

.order .marketplace {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 270px;
  height: 320px;
  border-radius: 30px;
  color: var(--color-gray);
  margin: 1em;
}

.order .marketplace img {
  height: 150px;
  transition: 0.3s;
}

.order a .marketplace:hover img {
  transform: scale(1.1)
}
</style>

<style>
/* transition */

.order .marketplaces {
  opacity: 0;
  transition: 1s;
}

.order h1 {
  opacity: 0;
  transform: translateY(100px);
  transition: 1s;
}

.order .marketplaces.visible,
.order h1.visible {
  opacity: 1;
  transform: translate(0)
}
</style>

<style>
/* responsive */
@media screen and (max-width: 1024px) {
  .order .marketplace {
    width: 220px;
    height: 270px;
  }

  .order .marketplace img {
    width: 120px;
  }
}

@media screen and (max-width: 755px) {
  .order h1 {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 553px) {
  .order {
    padding: 3em 0;
  }

  .order .marketplace {
    width: 180px;
    height: 200px;
    margin: 0.5em;
  }

  .order .marketplace img {
    width: 80px;
  }
}
</style>