<template>
  <div>
    <section
      id="authentication"
      class="row justify-content-center align-items-center"
    >
      <div id="container-auth">
        <FormRegister></FormRegister>
      </div>
    </section>
  </div>
</template>

<script>
import FormRegister from '../components/FormRegister'
export default {
  name: 'LandingPage',

  created() {},
  data() {
    return {}
  },
  components: {
    FormRegister,
  },
  methods: {},
}
</script>

<style></style>
