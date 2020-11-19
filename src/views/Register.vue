<template>
  <div>
    <v-form @submit.prevent="register">
      <v-container>
        <v-text-field v-model="name" label="name" required class="mb-3">
        </v-text-field>
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
          hint="At least 4 characters"
          counter
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field v-model="image" label="image" required class="mb-3">
        </v-text-field>
        <v-btn type="submit">submit</v-btn>
        <!-- https://image.freepik.com/free-photo/i-love-sale-so-much_329181-2334.jpg    -->
      </v-container>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      show1: false,
      name: "",
      image: "",
      email: "",
      password: "",
      rules: {
        required: (value) => !!value || "Required.",
        min: (v) => v.length >= 4 || "Min 8 characters",
        emailMatch: () => `The email and password you entered don't match`,
      },
    };
  },
  methods: {
    register() {
      const payload = {
        name: this.name,
        email: this.email,
        password: this.password,
        image: this.image,
      };
      this.$store.dispatch("register", payload);
      this.name = "";
      this.email = "";
      this.password = "";
      this.image = "";
    },
  },
};
</script>

<style></style>
