<template>
  <div class="list-banner mt-5">
    <button type="button" class="btn btn-primary mt-5" data-toggle="modal" data-target=".bd-example-modal-lg">Add Banner</button>
      <div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <form @submit.prevent="addBanner">
                <div class="form-group">
                  <label for="">Name</label>
                  <input v-model="newBanner.name" type="text" class="form-control">
                </div>
                <div class="form-group">
                  <label for="">Image URL</label>
                  <input v-model="newBanner.image_url" type="text" class="form-control">
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
              </form>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    <table class="table table-bordered table-striped mt-5">
      <thead>
        <tr>
          <th scope="col" >ID</th>
          <th scope="col" >Name</th>
          <th scope="col" >Image</th>
          <th scope="col" >Actions</th>
        </tr>
      </thead>
      <tbody>
        <BannerList v-for="banner in banners" :key="banner.id"
          :banner="banner"
        />
      </tbody>
    </table>
  </div>
</template>

<script>
import BannerList from '@/components/BannerList'
export default {
  name: 'BannerDashboard',
  data () {
    return {
      newBanner: {
        name: '',
        image_url: ''
      }
    }
  },
  components: {
    BannerList
  },
  methods: {
    fetchBanner () {
      this.$store.dispatch('fetchBanner')
    },
    addBanner () {
      const addNewBanner = this.newBanner
      this.$store.dispatch('addBanner', addNewBanner)
        .then(({ data }) => {
          location.reload()
        })
        .catch(console.log)
    }
  },
  computed: {
    banners () {
      return this.$store.state.banners
    }
  },
  created () {
    this.fetchBanner()
  }
}
</script>

<style>

</style>
