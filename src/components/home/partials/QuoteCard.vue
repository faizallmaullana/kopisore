<template>
  <div class="quote">
    <div class="content">
        <p><em>" "</em></p>
        <p>{{ quote }}</p>
        <br>
        <p>___</p>
    </div>
</div>
</template>

<script>
export default {
  name: "QuoteCard",
  
  props: {
    quote: String
  }
}
</script>

<style>
.quote {
  width: 100%;
  margin: 62px 0;
  max-width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.quote .content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 90%;
}

.quote p {
  text-align: center;
  font-size: 22px;
  font-style: italic;
  color: var(--color-black);
  max-width: 1000px;
}

.quote em {
  font-size: 2em;
}
</style>

<style>
@media screen and (max-width: 750px) {
  .quote p {
    font-size: 17px;
  }
}
</style>