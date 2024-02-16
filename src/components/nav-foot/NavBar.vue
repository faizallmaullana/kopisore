<template>
  <nav :class="{ hidden: isNavHidden }" v-if="currentPage === 'LandingPage'">
    <div class="wrapper">
      <div class="icon">
        <h3>kopis</h3>
        <img src="@/assets/icons/logo/kopi-sore-brown.svg" alt="0">
        <h3>re</h3>
      </div>
      <div class="nav">
        <a href="#about-us">about-us</a>
        <a href="#menu">menu</a>
        <a href="#order">order</a>
        <a href="#location">location</a>
      </div>
      <div class="burger" @click="toggleNavMenu">
        <img src="@/assets/icons/burger.png" alt="more">
      </div>
    </div>
  </nav>

  <div class="nav-menu" v-if="showNavMenu">
    <img src="@/assets/icons/logo/kopi-sore.svg" alt="0">
    <a href="#about-us" @click="toggleNavMenu">about-us</a>
    <a href="#menu" @click="toggleNavMenu">menu</a>
    <a href="#order" @click="toggleNavMenu">order</a>
    <a href="#location" @click="toggleNavMenu">location</a>
    <h1>_</h1>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      isNavHidden: false,
      lastScrollPosition: 0,
      showNavMenu: false // Initially hide nav-menu
    };
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollPosition = window.pageYOffset;

      if (currentScrollPosition > this.lastScrollPosition) {
        this.isNavHidden = true;
      } else {
        this.isNavHidden = false;
      }

      this.lastScrollPosition = currentScrollPosition;
    },
    toggleNavMenu() {
      // Toggle the visibility of nav-menu
      this.showNavMenu = !this.showNavMenu;
    }
  },
  computed: {
    currentPage() {
      return this.$route.name;
    }
  }
};
</script>

<style>
nav {
  display: flex;
  flex: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 70px;
  box-shadow: 0 0 7px 0 #666666;
  position: fixed;
  background-color: var(--color-brown2);
  z-index: 99999;
  transition: 0.3s ease;
  transform: translateY(0);
}

nav.hidden {
  transform: translateY(-100%);
}

nav .wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1024px;
}

nav .icon {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 1em;
}

nav h3 {
  font-family: var(--font-opensans);
  font-weight: 700;
  color: var(--color-brown);
}

nav img {
  height: 1.5em;
  transform: translateY(-4px)
}

nav .nav {
  max-width: 80%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  padding-right: 1em;
}

nav a {
  margin: 0 0.5em;
  color: var(--color-black);
}

/* hovering */
nav a:hover {
  color: var(--color-yellow);
}

nav .burger {
  display: none;
  margin-right: 1em;
}

nav .burger img {
  transform: translateY(1px);
}

.nav-menu {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-yellow);
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: 99999;
  font-size: 18px;
  box-shadow: 0 0 7px 0 #666666;
  font-weight: 600;
  transition: 0.3s;
}

.nav-menu a {
  color: var(--color-black);
  margin: 0.5em;
}

.nav-menu img {
  width: 100px;
  margin-bottom: 28px;
}
</style>

<style>
/* responsive */

@media screen and (max-width: 550px) {
  nav .nav {
    display: none;
  }

  nav .burger {
    display: flex;
    align-items: center;
    justify-content: center;
  }
}
</style>
