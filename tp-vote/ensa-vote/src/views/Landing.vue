
<template>
  <div class="container">
    <h1>Bienvenue à ENSA Vote</h1>
    <p style="text-align:center;">Votez pour les événements de l'école en un clic !</p>

    <button class="btn-primary" @click="$router.push('/login')">Connexion</button>
    <button class="btn-secondary" @click="$router.push('/register')">Inscription</button>
  </div>
</template>
