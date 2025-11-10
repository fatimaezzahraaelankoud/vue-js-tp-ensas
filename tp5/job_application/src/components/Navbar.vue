<template>
  <nav class="navbar">
    <router-link to="/"> Accueil</router-link>
    <router-link to="/add"> Ajouter un emploi</router-link>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar"
}
</script>

<style>
.navbar {
  background-color: #42b983;
  padding: 1em;
  display: flex;
  justify-content: center;
  gap: 20px;
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
