<template>
  <li>
    <img src="images/bik1.jpg" alt="" />
    <div class="coffee-info">
      <div class="model">
        <h4>{{product.name}}<span>$249.00</span></h4>
      </div>
      <div class="model-info">
        <select>
          <option value="volvo">OPTION</option>
          <option value="saab">Option</option>
          <option value="opel">Option</option>
          <option value="audi">Option</option>
        </select>
        <a href="bicycles.html">BUY</a>
      </div>
      <div class="clearfix"></div>
    </div>
    <div class="viw">
      <a href="bicycles.html">Quick View</a>
    </div>
  </li>   
</template>

<script>
export default {
  name: "CoffeeCard",
  props: ['product'],
};
</script>

<style>
</style>