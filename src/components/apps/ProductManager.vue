<template>
  <div>
    <h1 class="float-left">Product Manager</h1>
    <new-product></new-product><br />
    <edit-product></edit-product>
  </div>
</template>

<script>
import NewProduct from './products/NewProduct';
import EditProduct from './products/EditProduct';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'product-manager',
  components: {
    NewProduct,
    EditProduct
  },
  methods: mapActions([
    'getProducts'
  ]),
  created: function() {
    this.getProducts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1, h2 {
  font-weight: normal;
  text-align: left;
  padding-left: 3px;
}

a {
  color: #42b983;
}

button {
  margin-bottom: 10px;
  display: inline;

  #action-btn.active {
    display: none;
  }
}
</style>
