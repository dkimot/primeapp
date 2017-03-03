const apps = [
  {'id': 1, 'name': 'Product Manager', 'route': '/products', 'access': true},
  {'id': 2, 'name': 'Checkout', 'route': '/checkout', 'access': true}
]

const profile = {
  'firstName': 'Davis',
  'lastName': 'Kimoto',
  'access': {'title': 'admin', 'id': 0}
}

export default {
  getApps (cb) {
    setTimeout(() => cb(apps), 200)
  },

  getProfile (cb) {
    cb(profile)
  }
}
