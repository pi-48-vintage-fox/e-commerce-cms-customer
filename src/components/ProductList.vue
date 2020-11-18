<template>
  <tr>
      <td>{{ product.id }}</td>
      <td>{{ product.name }}</td>
      <td><img :src="product.image_url" style="height: 50px" alt=""></td>
      <td>{{ product.price }}</td>
      <td>{{ product.stock }}</td>
      <td>{{ product.Category.name }}</td>
      <td><a href="#" @click.prevent="deleteProduct(product.id)" class="fas fa-trash"></a> | <a href="#" @click.prevent="editProduct(product.id)" class="fas fa-edit"></a></td>
  </tr>
</template>

<script>
import swal from 'sweetalert'
export default {
  name: 'ProductList',
  props: ['product'],
  methods: {
    editProduct (id) {
      this.$router.push({ path: `edit-product/${id}` })
    },
    deleteProduct (id) {
      swal({
        title: 'Are you sure?',
        text: 'Once deleted, you will not be able to recover this imaginary file!',
        icon: 'warning',
        buttons: true,
        dangerMode: true
      })
        .then((willDelete) => {
          if (willDelete) {
            this.$store.dispatch('deleteProduct', id)
              .then(({ data }) => {
                swal('Poof! Your imaginary file has been deleted!', {
                  icon: 'success'
                })
                location.reload()
              })
              .catch(console.log)
          } else {
            swal('Your imaginary file is safe!')
          }
        })
    }
  }
}
</script>

<style>

</style>
