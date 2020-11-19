<template>
  <div>
    <v-form @submit.prevent="login">
      <v-container>
        <v-text-field
          v-model="email"
          label="email"
          hint="Must be format email"
          required
          class="mb-3"
        >
        </v-text-field>
        <v-text-field
          v-model="password"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[rules.required, rules.min]"
          :type="show1 ? 'text' : 'password'"
          name="input-10-1"
          label="Password"
          hint="Password Required"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn type="submit">submit</v-btn>
      </v-container>
    </v-form>
    <v-container>
      <p class="red--text" color="">{{ messageError }}</p>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      show1: false,
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 1 || "Password required",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    login() {
      const payload = {
        email: this.email,
        password: this.password,
      };
      this.$store.dispatch("login", payload);
      this.email = "";
      this.password = "";
    },
  },
  computed: {
    messageError() {
      return this.$store.state.messageError;
    },
  },
};
</script>

<style></style>
