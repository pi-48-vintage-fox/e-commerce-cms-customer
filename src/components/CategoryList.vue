<template>
  <tr>
    <td>{{ category.id }}</td>
    <td>{{ category.name }}</td>
    <td><a href="" class="fas fa-trash"></a> | <a href="" class="fas fa-edit"></a></td>
  </tr>
</template>

<script>
export default {
  name: 'CategoryList',
  props: ['category']
}
</script>

<style>

</style>
