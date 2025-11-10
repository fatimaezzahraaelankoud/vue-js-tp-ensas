<template>
  <div class="filter-nav">
    <input
      type="text"
      v-model="searchQuery"
      @input="applySearch"
      placeholder="Rechercher un emploi"
    />
  </div>
</template>

<script>
export default {
  name: "FilterNav",
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    applySearch() {
      // On émet la valeur du champ de recherche au parent (Home.vue)
      this.$emit('search-jobs', this.searchQuery.trim().toLowerCase());
    }
  }
};
</script>

<style>
.filter-nav {
  margin-bottom: 1rem;
  text-align: center;
}
input {
  width: 60%;
  padding: 8px 20px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  height: 35px
}
input:focus {
  outline: none;
  border-color: #007bff;
  box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
}
</style>


