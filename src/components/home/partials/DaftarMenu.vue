<template>
  <div class="div">
    <div v-if="jsonFile.length > 0 && jsonFile[0].hasOwnProperty('ice')">
      <h2>{{ title }}</h2>
      <table>
        <tr>
          <th></th>
          <th>HOT</th>
          <th>ICE</th>
        </tr>
        <tr v-for="(item, index) in jsonFile" :key="index">
          <td class="padding-right emp">{{ item.menu }}</td>
          <td>{{ item.hot }}</td>
          <td>{{ item.ice }}</td>
        </tr>
      </table>
    </div>

    <div v-else-if="jsonFile.length > 0 && jsonFile[0].hasOwnProperty('caption')">
      <h2>{{ title }}</h2>
      <div v-for="(item, index) in jsonFile" :key="index" class="caption">
        <div class="menu-sp">
          <h3>{{ item.menu }}</h3>
          <p>{{ item.caption }}</p>
        </div>
        <p>{{ item.price }}</p>
      </div>
    </div>

    <div v-else>
      <h2>{{ title }}</h2>
      <table>
        <tr v-for="(item, index) in jsonFile" :key="index">
          <td class="padding-right emp">{{ item.menu }}</td>
          <td>{{ item.price }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "DaftarMenu",
  props: {
    jsonFile: Array,
    title: String
  },
};
</script>

<style>
.menu .div {
  margin-bottom: 1em;
}

.menu .caption {
  width: 320px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
}

/* .menu .caption .menu-sp {
        display: flex
    } */

.menu .padding-right {
  padding-right: 3em;
}

.menu h2 {
  text-align: left;
  margin-bottom: 0.5em;
}

.menu .emp {
  font-weight: 600;
}
</style>
