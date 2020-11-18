<template>
  <option :value="category.id">{{ category.name }}</option>
</template>

<script>
export default {
  name: 'ListCategory',
  props: ['category']
}
</script>

<style>

</style>
