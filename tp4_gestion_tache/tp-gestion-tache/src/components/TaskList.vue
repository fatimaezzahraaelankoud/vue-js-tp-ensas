<template>
  <div class="task-list">
    <h2>Liste des tâches</h2>
    <div class="buttons">
    <button>toutes les taches </button>
    <button> taches pas terminees</button>
    <button> taches terminees</button>
    </div>
   
  
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
     
    };
  },
  computed: {
   
  },
  methods: {
  }
};
</script>

<style scoped>

.task-list{
  border: 1px solid #000000 ;
  display: flex ;
  flex-direction: column ;
  justify-contend: center ;
  padding: 12px 8% ;
  width: 40% ;
  margin: 0% auto ;
  text-align: center ;
  border-radius: 8px  ;
  background-color: #ffffffff
}
h2{
  color: #1f34d3ff

}
.buttons{
 
  display: flex ;
  justify-content: space-between 

}
button{
 background-color: #1f34d3ff ;
  color: #ffffff ;
  padding: 4px ;
  border: 1px solid #000000 ;
  border-radius: 8px
}

</style>

