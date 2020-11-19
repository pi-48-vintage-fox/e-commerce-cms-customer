<template>
  <div class="cart-table mt-5 shadow rounded">
    <div class="item-wrapper">
      <div class="image mt-5">
        <img :src="cart.image_url" width="100" height="95">
      </div>
      <div class="text mt-5">
        <p>
          <strong>{{cart.product}}</strong>
        </p>
        <p>Rp {{cart.price.toLocaleString('id-ID')}}</p>
      </div>
    </div>
    <div class="icon-btn mt-2">
      <div class="icon-delete" @click="deleteCart(cart.id)">
        <svg
          width="2em"
          height="2em"
          viewBox="0 0 16 16"
          class="bi bi-trash"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
          ></path>
          <path
            fill-rule="evenodd"
            d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
          ></path>
        </svg>
      </div>
      <div v-if="cart.quantity <= 1" class="btn-wrapper-left">
        <button disabled class="btn btn-danger btn-plus-minus" @click.prevent="minus">-</button>
      </div>
      <div v-if="cart.quantity > 1" class="btn-wrapper-left">
        <button class="btn btn-danger btn-plus-minus" @click.prevent="minus(cart.id)">-</button>
      </div>
      <div class="number-text">
        {{cart.quantity}}
      </div>
      <div class="btn-wrapper-right" v-if="cart.quantity < cart.stock">
        <button class="btn btn-primary btn-plus-minus" @click.prevent="plus(cart.id)">+</button>
      </div>
       <div class="btn-wrapper-right" v-else-if="cart.stock  <= cart.quantity ">
        <button disabled class="btn btn-primary btn-plus-minus" @click.prevent="plus(cart.id)">+</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Table',
  props: ['cart'],
  methods: {
    minus (id) {
      this.cart.quantity -= 1
      console.log(this.cart.quantity)
      const payload = {
        quantity: this.cart.quantity,
        id: id,
        total: this.cart.quantity * this.cart.price
      }
      return this.$store.dispatch('minus', payload)
        .then(() => {
          return this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    plus (id) {
      this.cart.quantity += 1
      console.log(this.cart.quantity)
      const payload = {
        quantity: this.cart.quantity,
        id: id,
        total: this.cart.quantity * this.cart.price
      }
      return this.$store.dispatch('plus', payload)
        .then(() => {
          return this.$store.dispatch('fetchCart')
        })
        .catch(err => {
          console.log(err.response)
        })
    },
    deleteCart (id) {
      return this.$store.dispatch('deleteCart', id)
        .then(() => {
          return this.$store.dispatch('fetchCart')
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }
}
</script>
<style>
.cart-table {
  background-color: #ffffff;
  width: 85%;
  height: 200px;
  display: flex;
  flex-direction: column;
  margin-left: 80px
}
.item-wrapper {
  display: flex;
}
.image {
  height: 100px;
  width: 20%;
  margin-left: 5px;
}
.text {
  height: 100px;
  width: 70%;
  margin-left: 2px;
  text-align: justify;
}
.icon-btn {
  height: 40px;
  width: 50%;
  margin-left: 300px;
  display: flex;
  justify-content: flex-end;
}
.number-text {
  width: 15%;
  margin-top:5px;
}
input[type="number"] {
  background: transparent;
  border: none;
  border-bottom: 1px solid #000000;
}
.btn-plus-minus {
  width: 100%;
  height: 38px;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: -10px;
}
.btn-wrapper-left {
  width: 10%;
  margin-left: 10px;
  margin-right: 10px;
  border-radius: 40px;
}
.btn-wrapper-right {
  width: 10%;
  margin-left: -10px;
  margin-right: 10px;
  border-radius: 40px;
}
.icon-delete {
  margin-top: -5px;
  cursor: pointer;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>
