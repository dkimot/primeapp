import axios from 'axios'

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
 *   quantity: Number,
 *   eta: Date,
 *   willShip: Boolean,
 *   stockArray: Array,
 *   marukup: Number,
 *   info: Mixed,
 *   img: duh
 * }
 */
const postProduct = (product, cb) => {
  // Make the POST request to DB
  return axios.post('api.primesystemsinc.com/products', product)
    .then((res) => {
      cb(res)
    })
    .catch((err) => {
      axios.post('api.primesystemsinc.com/err', err)
        .then().catch()
    })
}

export default {
  getApps (cb) {
    setTimeout(() => cb(apps), 200)
  },

  getProfile (cb) {
    cb(profile)
  },

  newProduct (cb) {
    postProduct(product, cb)
  }
}
