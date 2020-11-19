<template>
  <div>
    <NavBar/>
    <div class="container-cart">
      <div class="row-wrapper">
        <div class="col col-table">
          <Table v-for="cart in carts" :key="cart.id" :cart="cart"/>
        </div>
        <div class="box-ringkasan-belanja mt-5 shadow-lg rounded">
          <div class="text-ringkasan">
            <h5><strong>Ringkasan Belanja</strong></h5>
            <p class="p-left">Total Harga </p> <p class="p-right"> Rp {{totalBelanja.toLocaleString('id-ID')}} </p>
            <div class="button-checkout">
              <button class="btn btn-primary" style="width: 100%;" @click.prevent="checkOut">Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import NavBar from "@/components/NavBar.vue";
import Table from "@/components/Table.vue";
export default {
  name: "Cart",
  components: {
    NavBar,
    Table
  },
  methods: {
    fetchCart() {
      this.$store.dispatch("fetchCart");
    },
    checkOut () {
      const payload = {
          carts: this.carts
      }
      console.log(payload);
      this.$store.dispatch('checkOut', payload)
        .then(() => {
          return this.$store.dispatch('fetchProducts')
        })
        .then(() => {
          this.$router.push('/')
        })
        .catch((err => {
          console.log(err);
        }))
    }
  },
  computed: {
    carts() {
      return this.$store.state.carts;
    },
    totalBelanja () {
      let totalPrice = 0
      for(let i = 0; i < this.$store.state.carts.length; i++){
        let total = this.$store.state.carts[i].total
        totalPrice += total 
      }
      return totalPrice
    }
  },
  created() {
    this.fetchCart();
  }
};
</script>
<style>
.container-cart {

  width: 100%;
  height: 100%;
}
.box-ringkasan-belanja {
  height: 200px;
  width: 25%;
  color: black;
  background-color: #ffffff;
  margin-right: 200px;
  text-align: justify
}
.row-wrapper {
  display: flex;
  margin-left: 100px 
}
.col-table {
  width: 40%;
}
.text-ringkasan {
  margin-left: 10px;
  margin-top: 20px; 
}
.p-left {
  float: left;
}
.p-right {
  margin-right: 20px ;
  float: right;
}
.button-checkout {
  margin-top: 100px;
  width: 97%
}
</style>



