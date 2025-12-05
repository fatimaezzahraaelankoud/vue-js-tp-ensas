
<template>
  <div class="container">
    <h2>Inscription</h2>

    <input v-model="email" placeholder="Email ENSA" />
    <input type="password" v-model="password" placeholder="Mot de passe" />

    <button class="btn-primary" @click="register">Créer un compte</button>
    <button class="btn-secondary" @click="$router.push('/')">Retour</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default {
  data() {
    return { email: "", password: "" }
  },
  methods: {
    async register() {
      try {
        if (!this.email.endsWith("@ensa.ucam.ac.ma")) {
          return alert("Vous devez utiliser un email ENSA !");
        }
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        this.$router.push("/home")
      } catch (e) {
        alert("Erreur : " + e.message)
      }
    }
  }
};
</script>
