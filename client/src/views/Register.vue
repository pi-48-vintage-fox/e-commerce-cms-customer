<template>
  <div class="login-page">
    <NavBar/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="form-login-container shadow-lg rounded">
          <div class="login-text">
            <span>SIGN UP</span>
          </div>
          <div class="form-login-wrapper">
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit="handleSubmit"
            >
              <a-form-item>
                <a-input
                  v-decorator="[
          'email',
          { rules: [{ required: true, message: 'Please input your email!' }] },
        ]"        
                  type="email"  
                  placeholder="Email"
                >
                  <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)"/>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-input
                  v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
                  type="password"
                  placeholder="Password"
                >
                  <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)"/>
                </a-input>
              </a-form-item>
              <a-form-item>
                <a-button type="primary" html-type="submit" class="login-form-button">SIGN UP</a-button>already have an account?
                <a href @click.prevent="() => {$router.push('/login')}">sign in now!</a>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: "Register" });
  },
  components: {
    NavBar
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log("Received values of form: ", values);
        }
      });
    }
  }
};
</script>
<style>
#components-form-demo-normal-login .login-form {
  max-width: 300px;
}
#components-form-demo-normal-login .login-form-forgot {
  float: right;
}
#components-form-demo-normal-login .login-form-button {
  width: 100%;
}
.form-login-container {
  width: 400px;
  background-color: #ffffff;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.form-login-wrapper {
  width: 250px;
  margin-top: 50px;
  height: 300px;
}
.login-text {
  margin-top: 30px;
}
/* .login-text span {
 
} */
</style>