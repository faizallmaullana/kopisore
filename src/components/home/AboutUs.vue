<template>
  <div id="about-us" class="about-us">
    <h1>About Kopi Sore</h1>
    <div class="content">

      <div class="gallery">
        <div v-for="(item, index) in galleryItems" :key="index" class="gallery-item">
          <img :src="require(`@/assets/imgs/${item}`)" alt="Gallery Item">
        </div>
      </div>

      <div class="info">
        <p><em>Kopi Sore</em> adalah nama yang membangkitkan nostalgia akan secangkir kopi hangat di sore hari. Kedai kopi
          ini bukan sembarang tempat, melainkan sebuah produk UMKM yang didirikan pada tahun 2019 oleh Idam Kusdiana.
          Berbekal semangat dan kecintaan terhadap kopi, Idam membangun Kopisore menjadi tempat nongkrong asyik bagi para
          pecinta
          kopi di Kawali. Kopisore menawarkan suasana yang sejuk dan nyaman, <em>jauh dari hiruk pikuk keramaian
            kota</em>.
          Terletak dekat dengan situs <em>Astana Gede</em>, Kopisore menjadi tempat yang ideal untuk bersantai setelah
          mengunjungi
          situs bersejarah tersebut. Pengunjung dapat menikmati kopi sambil menjelajahi sejarah dan budaya di
          Astana Gede.</p>
      </div>
    </div>

    <div class="kawali-gallery">
      <div class="images">
        <div class="img1">
          <img src="@/assets/imgs/kopisore3.jpg" alt="">
        </div>

        <div class="img2">
          <img src="@/assets/imgs/kopi-sore1.jpg" alt="">
        </div>

        <div class="img3">
          <img src="@/assets/imgs/kopisore2.webp" alt="">
        </div>
      </div>

      <div class="desc">
        <p>Rasakan pengalaman <em>ngopi sore-sore</em> yang tak terlupakan. Nikmati kopi istimewa, suasana sejuk, dan keramahan
          komunitas Kopisore.</p>
      </div>
    </div>
  </div>
</template>

<script>
import { createObserver2 } from '@/assets/js/transition.js';

export default {
  name: "About-us",

  data() {
    return {
      galleryItems: [
        "kopisore12.jpg",
        "kopi-sore4.jpg",
        "kopisore8.jpg",
        "kopisore21.jpg",
        "kopisore24.jpg",
      ],
      currentIndex: 0
    };
  },

  mounted() {
    const observer = createObserver2('visible');
    const judul = document.querySelector('.about-us h1');
    const galeri = document.querySelector('.about-us .gallery');
    const info = document.querySelector('.about-us .info');
    const images = document.querySelector('.about-us .images');
    const desc = document.querySelector('.about-us .desc');

    observer.observe(judul);
    observer.observe(galeri);
    observer.observe(info);
    observer.observe(images);
    observer.observe(desc);

    var galleryItems = document.querySelectorAll('.gallery-item');
    var currentIndex = 0;

    function showNextImage() {
      galleryItems[currentIndex].style.display = 'none';
      currentIndex = (currentIndex + 1) % galleryItems.length;
      galleryItems[currentIndex].style.display = 'block';
    }

    // Hide all images except the first one
    for (var i = 1; i < galleryItems.length; i++) {
      galleryItems[i].style.display = 'none';
    }

    setInterval(showNextImage, 2500); // Change image every 3 seconds

  },
};
</script>

<style>
/* transition */

.about-us h1 {
  opacity: 0;
  transform: translateY(100px);
  transition: 1s;
}

.about-us .gallery {
  opacity: 0;
  transform: translateX(-100px);
  transition: 1s;
}

.about-us .desc,
.about-us .images {
  opacity: 0;
  transform: translateY(100px);
  transition: 1s;
  margin-bottom: 36px;
}

.about-us .info {
  opacity: 0;
  transform: translateX(100px);
  transition: 1s;
}

.about-us h1.visible,
.about-us .gallery.visible,
.about-us .desc.visible,
.about-us .images.visible,
.about-us .info.visible {
  opacity: 1;
  transform: translate(0)
}
</style>

<style>
.about-us {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--color-black);
  padding: 5em 0;
  overflow: hidden;
}

.about-us .content {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
  margin: 5em 0 0 0;
}

.about-us p {
  padding: 1em;
}

.about-us .info {
  max-width: 45%;
}

/* bagian 2 */

.about-us .kawali-gallery img {
  width: 300px;
  height: 400px;
  object-fit: cover;
  padding: 1em;
  background-color: white;
  margin: 1em;
  box-shadow: 0 0 7px 0 #666666;
}

.about-us .kawali-gallery .images {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 150px;
}

.about-us .kawali-gallery .img1 {
  transform: rotate(-14deg) translateX(40px);
}

.about-us .kawali-gallery .img2 {
  transform: rotate(2deg);
}

.about-us .kawali-gallery .img3 {
  transform: rotate(10deg) translateX(-40px);
}

.about-us .kawali-gallery .desc {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 50px;
}

.about-us .kawali-gallery p {
  padding: 1em;
  max-width: 726px;
  text-align: center;
}

.about-us em {
  color: var(--color-yellow);
  background-color: rgb(38, 42, 43);
  padding: 0 1em;
  font-weight: 700;
  font-style: normal;
}
</style>

<style>
/* responsive */

@media screen and (max-width: 1150px) {
  .about-us .kawali-gallery img {
    width: 220px;
    height: 300px;
    padding: 10px;
  }
}

@media screen and (max-width: 825px) {
  .about-us .kawali-gallery img {
    width: 200px;
    height: 250px;
    padding: 10px;
  }

  .about-us .content {
    margin-bottom: 0;
  }
}

@media screen and (max-width: 710px) {
  .about-us .kawali-gallery .img1 {
    transform: rotate(-14deg) translateX(120px);
    z-index: 22;
  }

  .about-us .kawali-gallery .img2 {
    transform: rotate(2deg);
  }

  .about-us .kawali-gallery .img3 {
    transform: rotate(10deg) translateX(-120px);
  }

  .about-us .kawali-gallery p {
    max-width: 90vw;
  }

}


@media screen and (max-width: 575px) {
  .about-us .kawali-gallery .images {
    flex-direction: column;
    margin-top: 0;
  }

  .about-us .kawali-gallery img {
    width: 220px;
    height: 300px;
    padding: 10px;
  }

  .about-us .kawali-gallery .img1 {
    transform: rotate(-8deg) translateY(70px);
  }

  .about-us .kawali-gallery .img2 {
    transform: rotate(2deg);
  }

  .about-us .kawali-gallery .img3 {
    transform: rotate(10deg) translateY(-70px);
  }

  .about-us .content {
    margin: 2em 0 0 0;
  }

  .about-us .kawali-gallery .desc {
    margin-top: 0;
  }
}



@media screen and (max-width: 680px) {
  .about-us {
    padding: 2em 0;
  }

  .about-us .content {
    flex-direction: column;
    margin: 3em 0 0 0;
  }

  .about-us .info {
    max-width: 80vw;
    margin-top: 1em;
  }

  .about-us p {
    text-align: center;
  }

  .about-us .gallery-item {
    width: 80vw;
  }

  .about-us .gallery-item img {
    width: 80vw;
  }
}

@media screen and (max-width: 550px) {
  .about-us {
    padding: 2em 0;
  }
}
</style>

<style>
.about-us .gallery-item {
  width: 420px;
  height: 520px;
  object-fit: cover;
  box-shadow: 0 0 7px 0 var(--color-black);
  margin: 0 1.5em;
  overflow: hidden;
  padding: 1em;
}

.about-us .gallery-item img {
  width: 420px;
  height: 520px;
  object-fit: cover;
}
</style>

<style>
/* responsive */

@media screen and (max-width: 875px) {
  .about-us .gallery-item {
    width: 320px;
    height: 460px;
  }

  .about-us .gallery-item img {
    width: 320px;
    height: 460px;
  }

  .about-us .desc p {
    transform: translateY(-28px);
  }

}
</style>