<template>
  <div id="menu" class="menu-bg">
    <div class="menu">
      <h1>Menu</h1>

      <div class="ini-menu bottom">
        <div class="content-menu" v-if="jsonFiles.length > 0">
          <MenuComponent v-for="(menu, index) in jsonFiles" :key="index" :jsonFile="menu.jsonFile" :title="menu.title" />
        </div>
      </div>

      <button @click="goToMenu" class="button-5" role="button">go to menu</button>
    </div>
  </div>
</template>

<script>
import MenuComponent from '@/components/home/partials/DaftarMenu.vue';
import { createObserver2 } from '@/assets/js/transition.js';

export default {
  name: 'MenuList',
  components: {
    MenuComponent
  },

  data() {
    return {
      jsonFiles: [
        { jsonFile: require('@/assets/json/speciality-es-kopi.json'), title: 'Speciality Es Kopi' },
        { jsonFile: require('@/assets/json/eatery.json'), title: 'Eatery' },
        { jsonFile: require('@/assets/json/coffee-base.json'), title: 'Coffee Base' },
        { jsonFile: require('@/assets/json/non-coffee.json'), title: 'Non Coffee' }
      ]
    };
  },

  mounted() {
    const observer = createObserver2('visible');
    const trans_top = document.querySelector('.menu h1');
    const menu = document.querySelector('.menu .content-menu');
    // const menu2 = document.querySelector('.menu .tr2');

    observer.observe(trans_top);
    observer.observe(menu);
    // observer.observe(menu2);
  },

  methods: {
    goToMenu() {
      window.location.href = 'https://olshopin.com/t/460590';
    }
  }
};
</script>

<style>
.menu-bg {
  background-image: url("@/assets/imgs/kopi-sore6.jpeg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: rgb(251, 186, 6, 0.8);
  width: 100%;
  height: 100%;
  padding: 5em 0;
  overflow: hidden;
}

.menu .ini-menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 660px;
}

.menu .content-menu {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
  justify-content: space-between;
  margin: 2em 0;
  width: 100%;
}

.menu h1 {
  margin-bottom: 40px;
  font-size: 35px;
}

.menu .div {
  padding: 1em;
}

.menu button {
  margin: 2em 0 0 0;
}
</style>

<style>
/* transition */

.menu h1,
.menu .tr2,
.menu .content-menu {
  transform: translateY(100px);
  opacity: 0;
  transition: 1s;
}

.menu h1.visible,
.menu .tr2.visible,
.menu .content-menu.visible {
  opacity: 1;
  transform: translate(0)
}
</style>

<style>
/* responsive */

@media screen and (max-width: 1024px) {
  .menu .div {
    margin-top: 1em;

  }

  .menu .div h2 {
    text-align: center;
  }

  .menu .content-menu {
    align-items: flex-start;
    justify-content: center;
    margin-top: 0;
  }

  .menu h1 {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 615px) {
  .menu .div {
    margin: 0;
  }
}
</style>
