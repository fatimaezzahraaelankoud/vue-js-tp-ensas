<template>
  <div>
    <h1>Liste des emplois</h1>

    <!-- Barre de recherche -->
    <FilterNav @search-jobs="searchJobs" />

    <div v-if="filteredJobs.length === 0">
      Aucun emploi trouvé.
    </div>

    <div v-for="job in filteredJobs" :key="job.id">
      <JobCard :job="job" />
    </div>
  </div>
</template>

<script>
import JobCard from '../components/JobCard.vue';
import FilterNav from '../components/FilterNav.vue';

export default {
  name: 'Home',
  components: { JobCard, FilterNav },
  data() {
    return {
      jobs: [],
      filteredJobs: []
    };
  },
  mounted() {
    this.fetchJobs();
  },
  methods: {
    async fetchJobs() {
      try {
        const response = await fetch('http://localhost:3000/jobs');
        const data = await response.json();
        this.jobs = data;
        this.filteredJobs = data;
      } catch (error) {
        console.error(error);
      }
    },
    searchJobs(query) {
      if (!query) {
        this.filteredJobs = this.jobs;
      } else {
        const q = query.toLowerCase();
        this.filteredJobs = this.jobs.filter(job => {
          // On vérifie que chaque champ existe avant d'utiliser .toLowerCase()
          const title = job.title ? job.title.toLowerCase() : '';
          const company = job.company ? job.company.toLowerCase() : '';
          const location = job.location ? job.location.toLowerCase() : '';
          const type = job.type ? job.type.toLowerCase() : '';

          return (
            title.includes(q) ||
            company.includes(q) ||
            location.includes(q) ||
            type.includes(q)
          );
        });
      }
    }
  }
};
</script>

<style>
h1 {
  text-align: center;
  color: #0000ff ;
}
</style>




