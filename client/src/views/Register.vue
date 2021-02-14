<template>
  <div class="container">
    <form @submit.prevent="registering">
      <!-- TEXT FIELD GROUPS -->
      <h2 class="text-center">Register</h2>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          class="form-control"
          type="text"
          id="name"
          placeholder="Enter name"
          v-model="name"
        />
      </div>
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
  props: ["register", "setFullName", "setEmail", "setPassword"],
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    registering() {
      this.setFullName(this.name);
      this.setEmail(this.email);
      this.setPassword(this.password);
      this.register();
    },
  },
};
</script>

<style>
</style>