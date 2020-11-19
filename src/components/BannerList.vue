<template>
  <tr>
    <td>{{ banner.id }}</td>
    <td>{{ banner.name }}</td>
    <td><img :src="banner.image_url" alt="" style="height: 50px"></td>
    <td><a href="#" @click.prevent="deleteBanner(banner.id)" class="fas fa-trash"></a> | <a href="" class="fas fa-edit"></a></td>
  </tr>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'BannerList',
  props: ['banner'],
  methods: {
    deleteBanner (id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((wilDelete) => {
          if (wilDelete) {
            return this.$store.dispatch('deleteBanner', id)
          }
        })
        .then(({ data }) => {
          if (data) {
            swal('Poof! Your imaginary file has been deleted!', {
              icon: 'success'
            })
            location.reload()
          } else {
            swal('Your imaginary file is safe!')
          }
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
