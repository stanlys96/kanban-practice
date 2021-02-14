<template>
  <div>
    <Navbar v-bind:setPage="setPage"></Navbar>
    <Register
      v-if="!isLogin && page === 'register'"
      v-bind:register="register"
      v-bind:setFullName="setFullName"
      v-bind:setEmail="setEmail"
      v-bind:setPassword="setPassword"
    ></Register>
    <Login
      v-if="!isLogin && page === 'login'"
      :login="login"
      @emitSetEmail="setEmail"
      @emitSetPassword="setPassword"
    ></Login>
  </div>
</template>

<script>
import Navbar from "./components/Navbar";
import Register from "./views/Register";
import Login from "./views/Login";
import axios from "axios";
export default {
  data() {
    return {
      isLogin: false,
      page: "register",
      url: "http://localhost:3000",
      full_name: "",
      email_register_login: "",
      password_register_login: "",
    };
  },
  components: {
    Register,
    Login,
    Navbar,
  },
  methods: {
    register() {
      axios({
        url: this.url + "/user/register",
        method: "POST",
        data: {
          full_name: this.full_name,
          email: this.email_register_login,
          password: this.password_register_login,
        },
      })
        .then((response) => {
          console.log(response);
          this.page = "login";
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.full_name = "";
          this.email_register_login = "";
          this.password_register_login = "";
        });
    },
    login() {
      axios({
        url: this.url + "/user/login",
        method: "POST",
        data: {
          email: this.email_register_login,
          password: this.password_register_login,
        },
      })
        .then((response) => {
          localStorage.setItem("access_token", response.data.access_token);
          this.page = "kanban";
        })
        .catch((err) => {
          console.log(err);
        })
        .then(() => {
          this.email_register_login = "";
          this.password_register_login = "";
        });
    },
    setFullName(newName) {
      this.full_name = newName;
    },
    setEmail(newEmail) {
      this.email_register_login = newEmail;
    },
    setPassword(newPassword) {
      this.password_register_login = newPassword;
    },
    setPage(page) {
      this.page = page;
    },
  },
};
</script>

<style>
</style>