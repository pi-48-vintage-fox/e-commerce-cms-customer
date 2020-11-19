<template>
  <div class="card" style="width: 15rem">
    <div class="card-body" style="padding: 5px">
      <h5 class="card-title" style="margin-bottom: 5px">{{ transaction.Product.name }} {{ transaction.quantity }}x</h5>
      <p class="card-text">IDR {{ transaction.total_price }}</p>
      <h6>{{ transaction.updatedAt }}</h6>
    </div>
  </div>
  <!-- <div class="card" style="width: 15rem;">
          <div class="card-body" style="padding: 5px">
            <h5 class="card-title" style="margin-bottom: 5px">Yellow Tuna 3x</h5>
            <p class="card-text">IDR 3000000</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <div class="card-body" style="padding: 5px">
            <h5 class="card-title" style="margin-bottom: 5px">Yellow Tuna 3x</h5>
            <p class="card-text">IDR 3000000</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <div class="card-body" style="padding: 5px">
            <h5 class="card-title" style="margin-bottom: 5px">Yellow Tuna 3x</h5>
            <p class="card-text">IDR 3000000</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <div class="card-body" style="padding: 5px">
            <h5 class="card-title" style="margin-bottom: 5px">Yellow Tuna 3x</h5>
            <p class="card-text">IDR 3000000</p>
          </div>
        </div>
        <div class="card" style="width: 15rem;">
          <div class="card-body" style="padding: 5px">
            <h5 class="card-title" style="margin-bottom: 5px">Yellow Tuna 3x</h5>
            <p class="card-text">IDR 3000000</p>
          </div>
        </div> -->
</template>

<script>
export default {
  name: 'Transaction',
  methods: {
    fetchTransactions () {
      this.$store.dispatch('fetchTransactions')
    }
  },
  computed: {
    transactions () {
      return this.$store.state.transactions
    }
  },
  props: ['transaction'],
  created () {
    this.fetchTransactions()
  }
}
</script>

<style>
</style>
