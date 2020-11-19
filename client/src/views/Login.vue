<template>
  <div class="login-page">
    <NavBar/>
    <div class="container">
      <div class="row justify-content-center">
        <div class="form-login-container shadow-lg rounded">
          <div class="login-text">
            <span>SIGN IN</span>
          </div>
          <div class="form-login-wrapper">
            <a-form
              id="components-form-demo-normal-login"
              :form="form"
              class="login-form"
              @submit.prevent="handleSubmit"
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
                <a-button type="primary" html-type="submit" class="login-form-button">SIGN IN</a-button>Or
                <a href @click.prevent="() => { $router.push('/register')}">sign up now!</a>
              </a-form-item>
            </a-form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
export default {
  beforeCreate () {
    this.form = this.$form.createForm(this, { name: 'Login' })
  },
  components: {
    NavBar
  },
  methods: {
    handleSubmit () {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values)
          return this.$store
            .dispatch('login', values)
            .then(() => {
              console.log('berhasil')
              this.form.email = ''
              this.form.password = ''
              // this.changeIsLogin(true)
              return this.$swal.fire({
                position: 'mid',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
              })
            })
            .then(() => {
              this.$router.push('/')
            })
            .catch(error => {
              console.log(error)
              this.form.email = ''
              this.form.password = ''
            })
        } else {
          console.log(err)
          this.form.email = ''
          this.form.password = ''
        }
      })
    }
  }
}
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
