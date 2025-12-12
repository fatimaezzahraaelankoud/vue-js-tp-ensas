<template>
  <div class="login-bg d-flex justify-content-center align-items-center min-vh-100">

    <div class="login-card shadow-lg p-4 rounded-4 bg-white">

      <h2 class="text-center fw-bold text-primary mb-3">Connexion</h2>
      <p class="text-center text-muted mb-4">Accédez à votre espace ENSA Vote</p>

      <!-- Email -->
      <div class="mb-3">
        <label class="form-label fw-semibold">Email ENSA</label>
        <input 
          v-model="email" 
          class="form-control form-control-lg rounded-pill"
          placeholder="ex: nom@uca.ac.ma"
        >
      </div>

      <!-- Password -->
      <div class="mb-4">
        <label class="form-label fw-semibold">Mot de passe</label>
        <input 
          type="password"
          v-model="password"
          class="form-control form-control-lg rounded-pill"
          placeholder="Votre mot de passe"
        >
      </div>

      <!-- Login Button -->
      <button class="btn btn-primary btn-lg w-100 rounded-pill shadow-sm mb-3" @click="login">
        Se connecter
      </button>

      <!-- Back Button -->
      <button class="btn btn-outline-secondary w-100 rounded-pill" @click="$router.push('/')">
        Retour
      </button>

    </div>

  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return { email: "", password: "" };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push("/home");
      } catch (e) {
        alert("Erreur : " + e.message);
      }
    }
  }
};
</script>

<style scoped>
/* Dégradé ENSA Vote */
.login-bg {
  background: linear-gradient(135deg, #0056d2, #00aaff);
  animation: fadeIn 0.8s ease-in-out;
}

/* Carte de connexion */
.login-card {
  width: 420px;
  animation: slideUp 0.6s ease;
}

/* Animations */
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

@keyframes slideUp {
  from { opacity: 0; transform: translateY(25px); }
  to   { opacity: 1; transform: translateY(0); }
}
</style>


