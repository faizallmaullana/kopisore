<template>
  <body>
    <NavBar />
    <div class="container">
      <router-view />
    </div>
    <FooterBar />
  </body>
</template>

<script>
import NavBar from './components/nav-foot/NavBar.vue';
import FooterBar from './components/nav-foot/FooterBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    FooterBar,
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;0,1000;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900;1,1000&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');
@import url('@/assets/css/button.css');

#App {
  background-color: var(--color-brown2);
}

:root {
  --color-black: #262a2b;
  --color-gray: #dfe1e1;
  --color-brown: #7e501e;
  --color-yellow: #fbba06;
  --color-brown2: #fff8e9;

  scrollbar-width: thin;
  scrollbar-color: var(--color-gray) var(--color-brown2);
  scroll-behavior: smooth;

  --font-nunito: 'Nunito', sans-serif;
  --font-inter: 'Inter', sans-serif;
  --font-opensans: 'Open Sans', sans-serif;
}

body {
  padding: 0;
  margin: 0;
  font-family: 'Inter', sans-serif;
  background-color: var(--color-brown2);
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: var(--font-opensans);
  margin-block: 0;
}

h1 {
  font-size: 32px;
}

p {
  font-family: var(--font-inter);
  margin-block: 0;
}

.container {
  width: 100%;
  min-height: 100vh;
  margin-bottom: 5em;
  overflow: hidden;
}

section {
  width: 100%;
  min-height: 100vh;
}

a {
  text-decoration: none;
}

.none {
  display: none;
}
</style>

<style>
/* responsive */

@media screen and (max-width: 768px) {
  h1 {
    font-size: 28px;
  }
}
</style>
