<template>
  <div>
    <Navbar />
    <div class="container mt-4">
      <div class="d-flex justify-content-between align-items-center mb-3">
        <h3>Dernières discussions</h3>
        <div>
          <select class="form-select" v-model="filterCategory" @change="applyFilter">
            <option value="">Toutes catégories</option>
            <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
          </select>
        </div>
      </div>

      <div>
        <DiscussionCard
          v-for="d in discussions"
          :key="d.id"
          :id="d.id"
          :title="d.title"
          :excerpt="d.content.slice(0,200) + (d.content.length>200?'...':'')"
          :author="d.userName"
          :date="new Date(d.createdAt && d.createdAt.seconds ? d.createdAt.seconds*1000 : d.createdAt).toLocaleString()"
          :replies="d.replyCount || 0"
          :category="d.category"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'
import DiscussionCard from '../components/DiscussionCard.vue'
import { db } from '../firebase'
import { collection, onSnapshot, query, orderBy } from 'firebase/firestore'

export default {
  components: { Navbar, DiscussionCard },
  data(){ return { discussions:[], categories: ['Informatique','Maths','Projets','Examens'], filterCategory:'' } },
  mounted() {
    const q = query(collection(db,'Discussions'), orderBy('createdAt','desc'))
    onSnapshot(q, snap => {
      this.discussions = snap.docs.map(doc => ({ id: doc.id, ...doc.data() }))
    })
  },
  methods: {
    applyFilter() {
      if (!this.filterCategory) return
      this.discussions = this.discussions.filter(d=>d.category===this.filterCategory)
    }
  }
}
</script>
