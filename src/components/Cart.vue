<template>
  <div id="cart">
    <table class="uk-table uk-table-divider uk-table-middle">
      <thead>
        <tr>
            <th class="uk-table-expand">Product Image</th>
            <th class="uk-table-expand">Product Name</th>
            <th class="uk-table-expand">Product Price</th>
            <th class="uk-table-expand">Amount</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in cart" :key="item.id">
            <td><img id="product-image" :src="item.Product.image_url" alt="" width="300px" height="200px" uk-img></td>
            <td>{{ item.Product.name }}</td>
            <td>{{ toRupiahs(item.Product.price) }}</td>
            <td>
              <a class="action" href="#" @click.prevent="amountDecrement(item.amount, item.Product)"><span uk-icon="minus"></span></a>
              <span id="item-amount">{{ item.amount }}</span>
              <a class="action" href="#" @click.prevent="amountIncrement(item.amount, item.Product)"><span uk-icon="plus"></span></a>
            </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td>Total: </td>
          <td></td>
          <td>{{ totalPrice }}</td>
          <td><button @click="checkout" class="uk-button">Checkout</button></td>
        </tr>
      </tfoot>
    </table>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  methods: {
    toRupiahs (rp) {
      let rupiah = ''
      const angkarev = rp.toString().split('').reverse().join('')
      for (var i = 0; i < angkarev.length; i++) if (i % 3 === 0) rupiah += angkarev.substr(i, 3) + '.'
      return 'Rp. ' + rupiah.split('', rupiah.length - 1).reverse().join('') + ',-'
    },
    amountDecrement (amount, product) {
      if (amount > 1) {
        this.$store.dispatch('decrementAmount', product.id)
      } else {
        this.$store.dispatch('removeFromCart', product.id)
      }
    },
    amountIncrement (amount, product) {
      if (amount === product.stock) {
        throw new Error("You cannot buy item for more than it's available stock")
      } else {
        this.$store.dispatch('incrementAmount', product.id)
      }
    },
    checkout () {
      this.$store.dispatch('checkout')
    }
  },
  computed: {
    cart () {
      return this.$store.state.cart
    },
    totalPrice () {
      let priceCounter = 0
      this.cart.forEach(element => {
        priceCounter += (element.Product.price * element.amount)
      })
      return this.toRupiahs(priceCounter)
    }
  }
}
</script>

<style scoped>
#cart {
  margin-left: 20px;
  width: 100%;
}

#item-amount {
  margin: 0 10px;
}

.action {
  text-decoration: none;
  color: black;
}

.action:hover {
  color: #ff9966;
  transition: 300ms;
}

.uk-table-expand {
  text-align: center;
}

.uk-button {
  background-color: black;
  color: white;
  font-family: 'Alfa Slab One', cursive;
}

.uk-button:hover {
  background-color: #ff9966;
  color: black;
  transition: 300ms;
}
</style>
