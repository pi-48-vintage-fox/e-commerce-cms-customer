<template>
  <div>
    <h1>Register</h1>
    <section id="authentication">
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
