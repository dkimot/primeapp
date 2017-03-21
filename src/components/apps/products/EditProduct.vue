<template>
  <div>
    <div v-if="!product.name">
      <form class="pure-form pure-form-aligned" onsubmit="return false">
        <fieldset>
          <legend>Edit Product</legend>

          <div class="pure-control-group">
            <label for="name">Search:</label>
            <input id="name" type="text" placeholder="Name or Barcode" v-model="query">
          </div>

          <button class="pure-button pure-button-primary" @click="searchProducts(query)">Find Product</button>
        </fieldset>
      </form>
      <div class="results" v-if="results.length > 0">
        <h4>Results:</h4>
        <ul class="results">
          <li v-for="result in results" class="result" v-on:click="editProduct(result)">
            {{ result.name }} | {{ result._id }}
          </li>
        </ul>
      </div>
    </div>
    <div v-else>
      <form class="pure-form pure-form-aligned edit" onsubmit="return false;" id="edit-form">
        <fieldset>
          <legend>Edit {{ product.slug }} | Close edit product: <i class="fa fa-times-circle-o" aria-hidden="true" @click="editProduct()"></i></legend>
          <div class="pure-control-group">
            <label for="name">Product Name:</label>
            <input id="name" type="text" :placeholder="product.name" v-model="edit.name">
            <p>{{ product.name }}</p>
          </div>

          <div class="pure-control-group">
            <label for="slug">Slug:</label>
            <input id="slug" type="text" :placeholder="product.slug" v-model="edit.slug">
          </div>

          <div class="pure-control-group">
            <label for="manufacturer">Manufacturer:</label>
            <input id="manufacturer" type="text" :placeholder="product.manufacturer" v-model="edit.manufacturer">
          </div>

          <div class="pure-control-group">
            <label for="category">Category:</label>
            <input id="category" type="text" :placeholder="product.category" v-model="edit.category">
          </div>

          <div class="pure-control-group">
            <label for="subCategory">Sub Category:</label>
            <input id="subCategory" type="text" :placeholder="product.subCategory" v-model="edit.subCategory">
          </div>

          <div class="pure-control-group">
            <label for="barcode">Barcode:</label>
            <input id="barcode" type="text" :placeholder="product.barcodeId" v-model="edit.barcodeId">
          </div>

          <div class="pure-control-group">
            <label for="price">Price:</label>
            <input id="price" type="text" :placeholder="product.price" v-model="edit.price">
          </div>

          <div class="pure-control-group">
            <label>Description:</label>
            <textarea rows="6" columns="50" :placeholder="product.description" v-bind="edit.description"/>
          </div>

          <div class="pure-control-group image">
            <label for="image">Image:</label>
            <img :src="product.imagePath">
          </div>

          <button class="pure-button" @click="submitProduct(edit)">Submit Edited Product</button>

        </fieldset>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';


export default {
  data: function() {
    return {
      results: [],
      query: '',
      product: {},
      edit: {}
    }
  },
  computed: mapState({
    products: state => state.products.all
  }),
  methods: {
    searchProducts(q) {
      console.log(q);
      const matchesName = (e, q) => {
        let temp = e.name.toLowerCase();
        q = q.toLowerCase();
        let found = true;
        for (let i = 0; i < 5 || found; i++) {
          if (temp.charAt(i) != q.charAt(i)) {
            return false;
          }
          if (i == 4) {
            this.results.push(e);
          }
        }
        return false;
      };

      this.products.forEach(e => {
        if (e.barcodeId == q) {
          this.results.push(e);
        } else if (matchesName(e, q)) {
          this.results.push(e);
        }
      });
    },


    editProduct(p) {
      if (this.product.name) {
        this.results = [];
        this.query = '';
        this.product = {};
        return;
      }
      this.product = p;
      this.edit.oldId = p._id;
      this.edit.name = p.name;
      this.edit.slug = p.slug;
      this.edit.barcodeId = p.barcodeId;
      this.edit.price = p.price;
      this.edit.description = p.description;
      this.edit.imagePath = p.imagePath;
    },


    ...mapActions([
      'submitProduct'
    ])
  }
}
</script>

<style lang="scss" scoped>

  div.results {
    width: 70%;
    margin: auto;
  }

  ul.results {
    > li {
      list-style: none;
      padding-top: 5px;
      margin-top: 8px;
      font-size: 20px;
      font-weight: 500;
      border-bottom: 2px solid #505050;
    }
  }

  span.innerform {
    margin-left: -24px;
  }

  div.image {
    margin-left: 92px;
  }

  form.edit {
    width: 30%;
    margin: auto;
  }

</style>
