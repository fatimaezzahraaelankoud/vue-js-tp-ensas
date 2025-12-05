
<template>
  <div class="container">
    <h2>Connexion</h2>

    <input v-model="email" placeholder="Email ENSA" />
    <input type="password" v-model="password" placeholder="Mot de passe" />

    <button class="btn-primary" @click="login">Se connecter</button>
    <button class="btn-secondary" @click="$router.push('/')">Retour</button>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return { email: "", password: "" }
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push("/home")
      } catch (e) {
        alert("Erreur : " + e.message)
      }
    }
  }
};
</script>
