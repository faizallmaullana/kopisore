<template>
  <div class="gallery-item">
    <p>tes</p>
  </div>
</template>

<script>
export default {
  name: "GalleryItems",
}
</script>

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

}
</style>
