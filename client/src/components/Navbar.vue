<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="setPage('register')"
            >Register</a
          >
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" @click.prevent="setPage('login')"
            >Login</a
          >
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  props: ["setPage"],
};
</script>

<style>
</style>