<template>
  <form class="pure-form pure-form-aligned" onsubmit="return false;" id="newProductForm">
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
        <label for="manufacturer">Manufacturer:</label>
        <input id="manufacturer" type="text">
      </div>

      <div class="pure-control-group">
        <label for="category">Category:</label>
        <input id="category" type="text">
      </div>

      <div class="pure-control-group">
        <label for="subCategory">Sub Category:</label>
        <input id="subCategory" type="text">
      </div>

      <div class="pure-control-group">
        <label for="barcode">Barcode:</label>
        <input id="barcode" type="text">
      </div>

      <div class="pure-control-group">
        <label for="price">Price:</label>
        <input id="price" type="text">
      </div>

      <div class="pure-control-group image">
        <label for="description">Description:</label>
        <textarea id="description" rows="6" columns="60" />
      </div>

      <div class="pure-control-group image">
        <label for="image">Image:</label>
        <input id="image" type="file">
      </div>

      <img src="" alt="Image preview..." id="preview"><br/>

      <button @click="readFile()">Read File</button>

    </fieldset>

    <button class="pure-button pure-button-primary" @click="prepProduct()">Add New Product</button>
  </form>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'NewProduct',
  methods: {
    readFile() {
      let input = document.getElementById('image');
      let reader = new FileReader();
      let preview = document.getElementById('preview');

      reader.addEventListener("load", function() {
        preview.src = reader.result;
      });
      reader.readAsDataURL(input.files[0]);
    },

    prepProduct() {
      let $inputs = $('#newProductForm :input');
      let product = {};
      let image;

      console.log($inputs);

      let reader = new FileReader();
      reader.addEventListener("load", () => {
        image = reader.result;
      });
      reader.readAsBinaryString($inputs[4].files[0]);

      product.name = $inputs[0];
      product.slug = $inputs[1];
      product.barcode = $inputs[2];
      product.price = $inputs[3];
      setTimeout(()=> {
        product.image = $inputs[4];
        console.log('image read');
      }, 400);
    },

    ...mapActions([
      'addProduct'
    ])
  },
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
