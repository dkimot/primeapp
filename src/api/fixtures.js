import axios from 'axios'
const apiRoute = 'http://api.primesystemsinc.com';

const apps = [
  {'id': 1, 'name': 'Product Manager', 'route': '/products', 'access': true },
  {'id': 2, 'name': 'Checkout', 'route': '/checkout', 'access': true },
  {'id': 4, 'name': 'Time', 'route': '/time', 'access': true },
  {'id': 3, 'name': 'Settings', 'route': '/settings', 'access': true }
]

const profile = {
  'firstName': 'Davis',
  'lastName': 'Kimoto',
  'access': {'title': 'admin', 'id': 0}
}

const getProducts = (cb) => {
  return axios.get(apiRoute + '/products')
    .then((res) => {
      res = res.data.data;
      cb(res);
    })
    .catch((err) => {
      console.log(err)
    });
}

const putProduct = (product, cb) => {
  axios.delete(apirRoute + '/products/' + product.oldId)
    .then((res) => {
    })
    .catch((err) => {
      console.log(err);
    });
  delete product.oldId;
  postProduct(product, cb);
}

/* Is looking for data of this variety:
 * {
 *   barcodeId: String,
 *   barcodes: Array,
 *   name: String,
 *   slug: String,
 *   manufacturer: String,
 *   category: String,
 *   subCategory: String,
 *   price: Number,
 *   description: String,
 *   willShip: Boolean,
 *   info: Mixed,
 *   img: duh
 * }
 */
const postProduct = (product, cb) => {
  // Make the POST request to DB
  return axios.post(apiRoute + '/products', product)
    .then((res) => {
      cb(res)
    })
    .catch((err) => {
      axios.post(apiRoute + '/err', err)
        .then().catch()
    })
}

export default {
  getApps (cb) {
    setTimeout(() => cb(apps), 200)
  },

  getProfile (cb) {
    cb(profile);
  },

  newProduct (product, cb) {
    postProduct(product, cb);
  },

  getProducts (cb) {
    getProducts(cb);
  },

  submitProduct(product, cb) {
    putProduct(product, cb);
  }
}
