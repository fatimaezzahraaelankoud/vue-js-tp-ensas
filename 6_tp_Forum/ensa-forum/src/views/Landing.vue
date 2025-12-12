<template>
  <div class="container mt-5">
    <h1 class="text-center mb-4">Bienvenue sur ENSA Forum</h1>
    <p class="text-center">Connecte-toi pour participer aux discussions.</p>

    <div class="d-flex gap-2 justify-content-center mt-4">
      <button class="btn btn-primary" @click="$router.push('/login')">Connexion</button>
      <button class="btn btn-secondary" @click="$router.push('/register')">Inscription</button>
    </div>
  </div>
</template>
