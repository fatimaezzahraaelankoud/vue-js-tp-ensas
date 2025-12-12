<template>
  <div class="container mt-5" style="max-width:480px">
    <h3 class="mb-3">Inscription</h3>
    <input v-model="email" class="form-control mb-2" placeholder="Email ENSA">
    <input v-model="name" class="form-control mb-2" placeholder="Nom complet">
    <input v-model="password" type="password" class="form-control mb-3" placeholder="Mot de passe (min 6)">
    <button class="btn btn-primary w-100" @click="register">Créer un compte</button>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth, db } from '../firebase'
import { doc, setDoc } from 'firebase/firestore'

export default {
  data(){ return { email:'', name:'', password:'' } },
  methods: {
    async register() {
      if (!this.email || !this.password || this.password.length < 6) {
        return alert('Email et mot de passe (>=6) requis')
      }
      try {
        const uc = await createUserWithEmailAndPassword(auth,this.email,this.password)
        const user = uc.user
        await setDoc(doc(db,'Users',user.uid), {
          email: this.email,
          name: this.name || '',
          role: this.email === 'admin@ensa.ac.ma' ? 'admin' : 'student',
          createdAt: new Date()
        })
        this.$router.push('/home')
      } catch(e) {
        alert(e.message)
      }
    }
  }
}
</script>
