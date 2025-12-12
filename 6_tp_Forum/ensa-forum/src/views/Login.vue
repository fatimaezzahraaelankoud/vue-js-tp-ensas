<template>
  <div class="container mt-5" style="max-width:420px">
    <h3 class="mb-3">Connexion</h3>
    <input v-model="email" class="form-control mb-2" placeholder="Email">
    <input v-model="password" type="password" class="form-control mb-3" placeholder="Mot de passe">
    <button class="btn btn-primary w-100" @click="login">Se connecter</button>
    <div class="mt-3 text-center">
      <a @click.prevent="$router.push('/reset')" href="#">Mot de passe oublié ?</a>
    </div>
  </div>
</template>

<script>
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase'
export default {
  data(){ return { email:'', password:'' } },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth,this.email,this.password)
        this.$router.push('/home')
      } catch(e) {
        alert(e.message)
      }
    }
  }
}
</script>
