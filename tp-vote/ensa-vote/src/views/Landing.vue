<template>
  <div class="vote-landing d-flex justify-content-center align-items-center min-vh-100">
    <div class="vote-card shadow-lg p-5 rounded-4 bg-white text-center">



      <h1 class="fw-bold text-primary mb-3">Bienvenue à ENSA Vote</h1>

      <p class="text-muted mb-4">
        Connectez-vous pour participer aux votes et consulter les événements.
      </p>

      <button class="btn btn-primary btn-lg w-100 rounded-pill shadow-sm mb-3"
              @click="$router.push('/login')">
        Connexion
      </button>

      <button class="btn btn-outline-primary btn-lg w-100 rounded-pill"
              @click="$router.push('/register')">
        Inscription
      </button>

    </div>
  </div>
</template>

<style scoped>
/* Arrière-plan dégradé élégant */
.vote-landing {
  background: linear-gradient(135deg, #004aad, #00a8ff);
  animation: fadeIn 0.8s ease-in-out;
}

/* Carte blanche centrale */
.vote-card {
  width: 420px;
  animation: slideUp 0.6s ease-in-out;
}

/* Logo ENSA */
.vote-logo {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

/* Animations subtiles */
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(25px); }
  to { opacity: 1; transform: translateY(0); }
}
</style>


