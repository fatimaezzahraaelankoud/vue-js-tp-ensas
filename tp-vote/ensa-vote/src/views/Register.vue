<template>
  <div class="register-bg d-flex justify-content-center align-items-center min-vh-100">

    <div class="register-card shadow-lg p-4 rounded-4 bg-white">

      <h2 class="text-center fw-bold text-primary mb-3">Créer un compte</h2>
      <p class="text-center text-muted mb-4">Rejoignez ENSA Vote</p>

      <div class="mb-3">
        <label class="form-label fw-semibold">Email ENSA</label>
        <input 
          v-model="email" 
          class="form-control form-control-lg rounded-pill"
          placeholder="ex: nom@uca.ac.ma"
        >
      </div>

      <div class="mb-4">
        <label class="form-label fw-semibold">Mot de passe</label>
        <input 
          type="password"
          v-model="password"
          class="form-control form-control-lg rounded-pill"
          placeholder="Min. 8 caractères"
        >
      </div>

      <button class="btn btn-primary btn-lg w-100 rounded-pill shadow-sm mb-3" @click="register">
        Créer un compte
      </button>

      <button class="btn btn-outline-secondary w-100 rounded-pill" @click="$router.push('/')">
        Retour
      </button>

    </div>

  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    async register() {

      if (!this.email.endsWith("@uca.ac.ma")) {
        return alert("Utilisez un email ENSA (@uca.ac.ma)");
      }

      if (this.password.length < 8) {
        return alert("Le mot de passe doit contenir au moins 8 caractères");
      }

      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          this.email,
          this.password
        );

        const user = userCredential.user;

        await setDoc(doc(db, "Users", user.uid), {
          email: this.email,
          role: "student",
          createdAt: new Date()
        });

        this.$router.push("/home");

      } catch (e) {
        alert("Erreur : " + e.message);
      }
    }
  }
};
</script>

<style scoped>
/* Dégradé bleu-ENSa */
.register-bg {
  background: linear-gradient(135deg, #004aad, #00a8ff);
  animation: fadeIn 0.8s ease-in-out;
}

/* Carte principale */
.register-card {
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
