<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <header>
    <h2>Encode/Decode</h2>
    <summary>simple letter for letter substitution ciphers</summary>
  </header>

  <RouterView />
  <hr />
  <footer>
    <aside>
      This app is for entertainment and learning purposes only and comes with no
      warranty.
    </aside>
    <small>
      This project is under an MIT licence and is hosted at
      <a href="https://github.com/mcshaz/letter-swap-decoder">
        github.com/mcshaz/letter-swap-decoder </a
      >. More detail can be found there.
    </small>
    <p>version 0.1.2</p>
  </footer>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

h2 {
  width: 100%;
}

summary {
  width: 100%;
  color: #333;
  font-style: italic;
  font-size: 1rem;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
