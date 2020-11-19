<template>
  <form class="column">
    <div>
      <label for="quantity">Quantity:</label>
      <input
        class="col-3 ml-2"
        type="number"
        min="0"
        :max="cart.Product.stock+cart.quantity"
        v-model="quantity"
      />
    </div>
    <div class="row my-2 container">
      <label for="status">Status:</label>
      <select class="form-control col-3" id="status" v-model="status">
        <option>unpaid</option>
        <option>paid</option>
      </select>
    </div>
    <div>
      <button
        type="button"
        class="bg-primary text-dark px-1 mx-1"
        @click.prevent="editSuccess(cart.id)"
      >
        OK
      </button>
      <button
        type="button"
        class="bg-primary text-dark px-1 mx-1"
        @click.prevent="cancel()"
      >
        Cancel
      </button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'EditForm',
  props: ['cart'],
  data () {
    return {
      quantity: 0,
      status: ''
    }
  },
  methods: {
    editSuccess (id) {
      const input = {
        id: id,
        status: this.status,
        quantity: this.quantity
      }
      this.$store.dispatch('editCart', input)
      this.$emit('closesForm', false)
    }
  },
  cancel () {
    this.$emit('closeForm', false)
  }
}
</script>

<style>
</style>
