<template>
  <div class="container mt-4">
    <h1>Transaction History</h1>
    <b-table striped hover :items="$store.state.histories" :fields="fields" class="text-center">
      <template #cell(productPrice)="data">
        {{ data.item.Product.price | toCurrency }}
      </template>
      <template #cell(subtotal)="data">
        {{ (data.item.Product.price * data.item.qty) | toCurrency }}
      </template>
    </b-table>
    <h2 class="text-right mr-5">Total Purchasement: {{ total | toCurrency}}</h2>
  </div>
</template>

<script>
export default {
  name: 'History',
  data () {
    return {
      fields: [
        { key: 'Product.name', label: 'Name' },
        { key: 'qty', label: 'Qty' },
        {
          key: 'productPrice',
          label: 'Price'
        },
        {
          key: 'subtotal',
          label: 'Sub Total'
        }
      ]
    }
  },
  computed: {
    total () {
      let totalPrice = 0
      this.$store.state.histories.forEach(element => {
        const subTotal = element.qty * element.Product.price
        totalPrice += subTotal
      })
      return totalPrice
    }
  },
  created () {
    this.$store.dispatch('fetchHistories')
  }
}
</script>

<style>
</style>
