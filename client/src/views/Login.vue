<template>
  <div class="container">
    <form @submit.prevent="loggingIn">
      <!-- TEXT FIELD GROUPS -->
      <h2 class="text-center">Login</h2>
      <div class="form-group">
        <label for="email">Email address</label>
        <input
          class="form-control form-control"
          type="email"
          id="email"
          placeholder="Enter email"
          v-model="email"
        />
        <small class="form-text text-muted"
          >Your email will not ever be shared</small
        >
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input
          class="form-control"
          type="password"
          id="password"
          placeholder="Password"
          v-model="password"
        />
      </div>
      <button class="btn btn-primary" type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  props: ["login", "emitSetEmail", "emitSetPassword"],
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    loggingIn() {
      this.$emit("emitSetEmail", this.email);
      this.$emit("emitSetPassword", this.password);
      this.login();
    },
  },
};
</script>

<style>
</style>