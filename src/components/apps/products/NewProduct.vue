<template>
  <form class="pure-form pure-form-aligned">
    <fieldset>
      <legend>New Product</legend>

      <div class="pure-control-group">
        <label for="name">Product Name:</label>
        <input id="name" type="text" v-model="name">
      </div>

      <div class="pure-control-group">
        <label for="slug">Slug:</label>
        <input id="slug" type="text" v-model="slug">
      </div>

      <div class="pure-control-group">
        <label for="barcode">Barcode:</label>
        <input id="barcode" type="text" v-model="barcode">
      </div>

      <div class="pure-control-group">
        <label for="price">Price:</label>
        <input id="price" type="number" v-model="price">
      </div>

      <div class="pure-control-group">
        <label for="cost">Starting Cost:</label>
        <input id="cost" type="number" v-model="cost">
      </div>

      <div class="pure-control-group">
        <label for="markup">Markup:</label>
        <input id="markup" type="text" v-model="markup">
        <span class="innerform">%</span>
      </div>

      <div class="pure-control-group image">
        <label for="image">Image:</label>
        <input id="image" type="file" @change="img">
      </div>

    </fieldset>

    <button class="pure-button pure-button-primary" @click="">Add New Product</button>
  </form>
</template>

<script>

export default {
  name: 'NewProduct',
  props: {
    name: '',
    slug: '',
    barcode: '',
    price: null,
    cost: null,
    markup: null,
    img: null
  }
}
</script>

<style scoped>
span.innerform {
  margin-left: -24px;
}

div.image {
  margin-left: 92px;
}
</style>
