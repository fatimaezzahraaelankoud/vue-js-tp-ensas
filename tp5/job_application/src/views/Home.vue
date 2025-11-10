<template>
  <div class="home">
    <h1>Liste des emplois</h1>
    <router-link to="/add" class="btn"> Ajouter un emploi</router-link>

    <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
        <h3>{{ job.title }}</h3>
        <p>{{ job.description }}</p>
        <router-link :to="`/jobs/${job.id}`">Détails</router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable vue/multi-word-component-names */
export default {
 
  data() {
    return { jobs: [] };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err));
  },
};
</script>

<style>
.job {
  border: 1px solid #ccc;
  padding: 10px;
  margin: 10px 0;
}
.btn {
  display: inline-block;
  margin-bottom: 15px;
  background: #42b983;
  color: white;
  padding: 8px 12px;
  border-radius: 4px;
  text-decoration: none;
}
</style>

