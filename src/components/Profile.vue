<template>
  <div>
    <h4>Welcome, <strong>{{ profile.firstName }}</strong></h4>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      profile: state => state.profile.data
    })
  },
  methods: mapActions([
    'getProfile'
  ]),
  created () {
    this.getProfile()
  }
}
</script>
