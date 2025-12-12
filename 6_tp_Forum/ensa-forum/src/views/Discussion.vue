<template>
  <div>
    <Navbar />
    <div class="container mt-4" style="max-width:900px">
      <div v-if="discussion" class="card p-3 mb-3">
        <h4>{{ discussion.title }}</h4>
        <p class="text-muted">par {{ discussion.userName }}</p>
        <p>{{ discussion.content }}</p>
      </div>

      <div class="card p-3 mb-3">
        <h5>Réponses ({{ replies.length }})</h5>

        <div v-for="r in replies" :key="r.id" class="mb-2">
          <div class="card p-2">
            <p>{{ r.content }}</p>
            <div class="d-flex justify-content-between">
              <small class="text-muted">{{ r.userName }}</small>
              <div>
                <button v-if="isOwn(r)" class="btn btn-sm btn-outline-primary me-1" @click="startEdit(r)">Edit</button>
                <button v-if="isOwn(r) || isModerator" class="btn btn-sm btn-outline-danger" @click="deleteReply(r.id)">Suppr</button>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-3">
          <textarea v-model="newReply" class="form-control mb-2" rows="3" placeholder="Écrire une réponse..."></textarea>
          <button class="btn btn-primary" @click="postReply">Répondre</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import { db, auth } from '../firebase'
import { doc, getDoc, collection, query, where, onSnapshot, addDoc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore'

export default {
  components: { Navbar },
  data(){ return { discussion:null, replies:[], newReply:'', isModerator:false } },
  async mounted() {
    const id = this.$route.params.id
    const dref = doc(db,'Discussions',id)
    const d = await getDoc(dref)
    if (d.exists()) this.discussion = { id: d.id, ...d.data() }

    const q = query(collection(db,'Replies'), where('discussionId','==',id))
    onSnapshot(q, snap => {
      this.replies = snap.docs.map(doc=>({ id: doc.id, ...doc.data() }))
    })

    const user = auth.currentUser
    if (user && user.email === 'moderator@ensa.ac.ma') this.isModerator = true
  },
  methods: {
    isOwn(r) {
      return auth.currentUser && auth.currentUser.uid === r.userId
    },
    async startEdit(r) {
      const t = prompt('Modifier votre réponse', r.content)
      if (!t) return
      await updateDoc(doc(db,'Replies',r.id), { content: t })
    },
    async postReply() {
      if (!auth.currentUser) return alert('Connectez-vous pour répondre')
      if (!this.newReply) return alert('Écrivez quelque chose')
      await addDoc(collection(db,'Replies'), {
        discussionId: this.discussion.id,
        content: this.newReply,
        userId: auth.currentUser.uid,
        userName: auth.currentUser.email,
        createdAt: serverTimestamp()
      })
      const dref = doc(db,'Discussions', this.discussion.id)
      const d = await getDoc(dref)
      if (d.exists()) {
        const count = (d.data().replyCount || 0) + 1
        await updateDoc(dref, { replyCount: count })
      }
      this.newReply = ''
    },
    async deleteReply(id) {
      if (!confirm('Supprimer cette réponse ?')) return
      await deleteDoc(doc(db,'Replies',id))
    }
  }
}
</script>
