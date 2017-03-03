<template>
  <div>
    <h1 class="float-left">Product Manager</h1>
    <button class="pure-button" @click="showNewProduct = !showNewProduct" id='action-btn'>Show New Product</button>
    <new-product v-if="showNewProduct"></new-product>
  </div>
</template>

<script>
import NewProduct from './products/NewProduct'

export default {
  name: 'product-manager',
  components: { NewProduct },
  props: {
    showNewProduct: false
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
