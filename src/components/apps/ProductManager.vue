<template>
  <div>
    <h1 class="float-left">Product Manager</h1>
    <form class="pure-form pure-form-aligned">
      <fieldset>
        <legend>New Product</legend>

        <div class="pure-control-group">
          <label for="name">Product Name:</label>
          <input id="name" type="text">
        </div>

        <div class="pure-control-group">
          <label for="slug">Slug:</label>
          <input id="slug" type="text">
        </div>

        <div class="pure-control-group">
          <label for="barcode">Barcode:</label>
          <input id="barcode" type="text">
        </div>

        <div class="pure-control-group">
          <label for="price">Price:</label>
          <input id="price" type="number">
        </div>

        <div class="pure-control-group">
          <label for="cost">Starting Cost:</label>
          <input id="cost" type="number">
        </div>

        <div class="pure-control-group">
          <label for="markup">Markup:</label>
          <input id="markup" type="text">
          <span class="innerform">%</span>
        </div>

        <div class="pure-control-group image">
          <label for="image">Image:</label>
          <input id="image" type="file">
        </div>

      </fieldset>

      <button class="pure-button pure-button-primary">Add New Product</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'product-manager',
  props: {
    showNewProduct: true
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  text-align: left;
  padding-left: 3px;
}

a {
  color: #42b983;
}

span.innerform {
  margin-left: -24px;
}

div.image {
  margin-left: 92px;
}
</style>
