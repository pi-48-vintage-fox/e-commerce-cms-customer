<template>
  <form class="column">
    <div>
      <label for="quantity">Quantity:</label>
      <input class="col-3 ml-2" type="number" min="0" :max="product.stock" v-model="quantity"/>
    </div>
    <div>
      <button type="button" class="bg-primary text-dark px-1 mx-1" @click.prevent="ok(product.id)"
        >OK</button
      >
      <button
        type="button"
        class="bg-primary text-dark px-1 mx-1" @click.prevent="cancel"
        >Cancel</button
      >
    </div>
  </form>
</template>

<script>
export default {
  name: 'AddCart',
  props: ['product'],
  data () {
    return {
      quantity: 0
    }
  },
  methods: {
    ok (id) {
      const input = {
        id: id,
        quantity: this.quantity
      }
      this.$store.dispatch('addCart', input)
        .then(data => {
          this.$router.push({ path: '/carts' })
        })
    },
    cancel () {
      this.$emit('cancel', false)
    }
  }
}
</script>

<style>
</style>
