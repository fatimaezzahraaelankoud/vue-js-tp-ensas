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
  background-color: #4056e8ff;
  padding: 28px ;
  display: flex;
  justify-content: center ;
  gap: 80px;
  
}
.navbar a {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
</style>
