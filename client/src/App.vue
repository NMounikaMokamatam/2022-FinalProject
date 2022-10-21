<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav class="navbar is-white has-shadow is-spaced" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <a class="navbar-item">
        <h><strong>WORKOUT APP</strong></h>
      </a>
      <a
        role="button"
        class="navbar-burger"
        aria-label="menu"
        aria-expanded="false"
        data-target="navbarMenu"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div id="navbarMenu" class="navbar-menu">
      <div class="navbar-start">
        <RouterLink class="navbar-item" to="/">Home</RouterLink>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="buttons">
            <RouterLink class="button is-primary" to="/signup"><strong>Sign up</strong></RouterLink>
            <RouterLink class="button is-light" to="/signin">Sign in</RouterLink>
          </div>
        </div>
      </div>
    </div>
  </nav>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
