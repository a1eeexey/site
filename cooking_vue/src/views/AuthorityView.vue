<template>
  <svg style="display: none;">

    <symbol id="eye" viewBox="0 0 512.001 512.001">
      <g>
        <path d="M256,192.012c-35.313,0-64.002,28.688-64.002,64s28.689,63.969,64.002,63.969s64-28.656,64-63.969
		S291.313,192.012,256,192.012z" />
        <path d="M505.381,236.512c-56.082-72.938-125.065-140.438-249.225-140.5h-0.016h-0.016c0-0.031-0.094-0.031-0.125,0
		c0,0-0.078,0-0.109,0c-0.016,0-0.016,0-0.016,0h-0.016c-0.016,0-0.016,0-0.016,0C131.684,96.075,62.7,163.575,6.62,236.512
		c-8.826,11.5-8.826,27.5,0,39c56.08,72.938,125.065,140.438,249.225,140.5c0,0,0,0,0.016,0h0.016c0,0,0,0,0.016,0h0.016
		c0.016,0,0.094,0,0.094,0c0.016,0,0.031,0,0.064,0h0.029h0.016h0.016h0.016h0.016c0.109,0,0.219,0,0.344,0
		c0.141-0.031,0.281-0.031,0.422,0c123.66-0.336,192.486-67.719,248.459-140.5C514.207,264.012,514.207,248.012,505.381,236.512z
		M256.094,352.012h-0.018h-0.012h-0.018h-0.031H256c-0.031,0-0.065,0-0.065,0h-0.014c0,0,0,0-0.016,0
		c-52.879-0.063-95.908-43.125-95.908-96s43.029-95.938,95.908-96c0.029,0,0.078,0,0.141,0h0.047
		c52.877,0.063,95.906,43.125,95.906,96S308.971,351.95,256.094,352.012z" />
      </g>
    </symbol>

  </svg>

  <center>
    <article class="container">

      <div class="block">
        <section class="block__item block-item">
          <h2 class="block-item__title">Have you prepared to eat with us?</h2>
          <button class="block-item__btn signin-btn" @click="signInBtn">Sign In</button>
          <div class="errors" v-if="errors_signup.length">
            <p v-for="error in errors_signup" v-bind:key="error">{{ error }}</p>
          </div>
        </section>
        <section class="block__item block-item">
          <h2 class="block-item__title">What do you mean you haven't cooked with us yet?</h2>
          <button class="block-item__btn signup-btn" @click="signUpBtn">Sign Up</button>
          <div class="errors" v-if="errors_signin.length">
            <p v-for="error in errors_signin" v-bind:key="error">{{ error }}</p>
          </div>
        </section>
      </div>

      <div class="form-box" id="form-box">
        <form class="form form_signin" @submit.prevent="submitFormSignIn">
          <h3 class="form__title">Sign In</h3>

          <p>
            <input type="text" class="form__input" name="" placeholder="Username" v-model="username" />
          </p>
          <p class="password__toggle">
            <input type="password" class="form__input" name="" id="password" placeholder="Password"
              v-model="password" />
            <svg class="toggle__icon" id="icon" @click="togglePassword">
              <use xlink:href="#eye"></use>
            </svg>
          </p>
          <p>
            <button class="form__btn">Sign In</button>
          </p>
        </form>

        <form class="form form_signup" @submit.prevent="submitFormSignUp">
          <h3 class="form__title">Sign Up</h3>

          <p>
            <input type="text" class="form__input" placeholder="Username" v-model="username" />
          </p>
          <p class="password__toggle">
            <input type="password" id="repeat__password" class="form__input" placeholder="Password"
              v-model="password" />
            <svg class="toggle__icon_signup" id="repeat__icon" @click="togglePasswordRepeat">
              <use xlink:href="#eye"></use>
            </svg>
          </p>
          <p>
            <input type="password" id="repeat__password_double" class="form__input" placeholder="Repeat password"
              v-model="password2" />
          </p>
          <p>
            <button class="form__btn form__btn_signup">Sign Up</button>
          </p>
        </form>
      </div>

    </article>
  </center>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Authority',
  data() {
    return {
      username: '',
      password: '',
      password2: '',
      errors_signin: [],
      errors_signup: [],
    };
  },
  mounted() {
    document.title = 'Authority | CookKing';
  },
  methods: {
    togglePassword() {
      var input = document.getElementById('password');
      var icon = document.getElementById('icon');

      if (input.type === "password") {
        input.type = "text";
        icon.classList = "toggle__icon_active";
      } else {
        input.type = "password";
        icon.classList = "toggle__icon";
      }
    },
    togglePasswordRepeat() {
      var repeat__input = document.getElementById('repeat__password');
      var repeat__input_double = document.getElementById('repeat__password_double');
      var repeat__icon = document.getElementById('repeat__icon');

      if (repeat__input.type === "password") {
        repeat__input.type = "text";
        repeat__input_double.type = "text";
        repeat__icon.classList = "toggle__icon_active_repeat";
      } else {
        repeat__input.type = "password";
        repeat__input_double.type = "password";
        repeat__icon.classList = "toggle__icon_signup";
      }
    },
    signInBtn() {
      const formBox = document.getElementById("form-box");
      formBox.classList = "form-box";
    },
    signUpBtn() {
      const formBox = document.getElementById("form-box");
      formBox.classList = "form-box_active";
    },
    submitFormSignUp() {
      this.errors_signup = [];

      if (this.username === '') {
        this.errors_signup.push('The username is missing');
      }

      if (this.password === '') {
        this.errors_signup.push('The password is too short');
      }

      if (this.password !== this.password2) {
        this.errors_signup.push('The passwords doesn\'t match');
      }

      if (!this.errors_signup.length) {
        const formData = {
          username: this.username,
          password: this.password,
        };

        axios
          .post("/api/v1/users/", formData)
          .then(response => {
            toast({
              message: 'Account created, please Sign In!',
              type: 'is-success',
              dismissible: true,
              pauseOnHover: true,
              duration: 2000,
              position: 'bottom-right',
            });

          })
          .catch(errors => {
            if (errors.response) {
              for (const property in errors.response.data) {
                this.errors_signup.push(`${property}: ${errors.response.data[property]}`);
              }

            } else if (errors.message) {
              this.errors_signup.push('You have successfully registered!');
            }
          });

        this.username = '';
        this.password = '';
        this.password2 = '';

      }
    },
    async submitFormSignIn() {
      this.errors_signin = [];

      axios.defaults.headers.common["Authorization"] = "";

      localStorage.removeItem("token");

      const formData = {
        username: this.username,
        password: this.password,
      };

      await axios
        .post("/api/v1/token/login/", formData)
        .then(response => {
          const token = response.data.auth_token;

          this.$store.commit('setToken', token);

          axios.defaults.headers.common["Authorization"] = "Token " + token;

          localStorage.setItem("token", token);

          const toPath = this.$route.query.to || '/my-account';

          this.$router.push(toPath);
        })
        .catch(error => {
          if (error.response) {
            for (const property in error.response.data) {
              this.errors_signin.push(`${property}: ${error.response.data[property]}`);
            }
          } else {
            this.errors_signin.push('Something went wrong. Please try again');
          }
        })
    },
  },
}
</script>

<style scoped>
.container {
  width: 800px;
  height: 500px;
  margin-top: 110px;
  margin-bottom: 50px;
  padding: 40px 0;
  position: relative;
}

.block {
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  border-radius: 15px;
}

.block-item {
  text-align: center;
}

.block__item {
  width: 50%;
}

.block-item__title {
  font-size: 1.2rem;
  color: #7e7d6d;
  font-family: 'Lobster', cursive;
  font-weight: bold;
}

.block-item__btn {
  border: 1px solid #bc4b51;
  cursor: pointer;
  padding: 10px 20px;
  color: #bc4b51;
  opacity: 0.9;
  background: none;
  font-size: 16px;
  font-weight: 500;
  border-radius: 12px;
}

.block-item__btn:hover {
  border-color: #91907d;
  color: #91907d;
  background-color: #f9e3dc;
}

.form-box {
  background-color: #ffcc99;
  height: 100%;
  width: 50%;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
}

.form-box_active {
  left: 50%;
  background-color: #ffcc99;
  height: 100%;
  width: 50%;
  box-shadow: 0 5px 45px rgba(0, 0, 0, 0.25);
  position: absolute;
  top: 0;
  z-index: 1000;
  transition: all 0.5s ease-in-out;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 15px;
}

.form {
  width: 100%;
  padding: 50px;
  font-size: 16px;
  position: absolute;
  transition: 0.5s linear;
}

.form_signin {
  left: 0;
  transition-delay: 0.25s;
}

.form_signup {
  left: 100%;
  transition-delay: 0s;
}

.form-box_active .form_signin {
  left: -100%;
  transition-delay: 0s;
}

.form-box_active .form_signup {
  left: 0;
  transition-delay: 0.25s;
}

.form__title {
  font-size: 1.5rem;
  font-family: 'Lobster', cursive;
  font-weight: bold;
}

.form__input {
  width: 100%;
  padding: 10px;
  border: 1px solid #91907d;
  font-size: inherit;
  opacity: 0.75;
  outline: none;
  color: #91907d;
  border-radius: 12px;
  background: none;
}

.form__input:focus {
  width: 280px;
  border-color: #f9e3dc;
}

.form__btn {
  border: 1px solid #bc4b51;
  border-radius: 15px;
  cursor: pointer;
  font-size: inherit;
  opacity: 0.9;
  padding: 10px 50px;
  color: #bc4b51;
  background: none;
}

.form__btn:hover {
  border-color: #91907d;
  color: #bc4b51;
  background-color: #f9e3dc;
}

.toggle__icon {
  width: 20px;
  height: 20px;
  opacity: 0.75;
  position: absolute;
  bottom: 38%;
  right: 65px;
}

.toggle__icon_signup {
  width: 20px;
  height: 20px;
  opacity: 0.75;
  position: absolute;
  bottom: 47%;
  right: 65px;
}

.toggle__icon_active {
  width: 20px;
  height: 20px;
  opacity: 0.75;
  position: absolute;
  bottom: 38%;
  right: 65px;
  fill: #bc4b51;
}

.toggle__icon_active_repeat {
  width: 20px;
  height: 20px;
  opacity: 0.75;
  position: absolute;
  bottom: 47%;
  right: 65px;
  fill: #bc4b51;
}

.password__toggle {
  display: inline;
  justify-content: space-between;
}

.errors {
  text-transform: uppercase;
  color: rgb(248, 61, 61);
  font-weight: bold;
}
</style>