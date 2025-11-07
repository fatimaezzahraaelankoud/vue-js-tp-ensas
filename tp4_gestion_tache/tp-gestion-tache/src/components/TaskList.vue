<template>
  <div class="task-list">
    <h2>Liste des tâches</h2>
    <div class="buttons">
    <button @click="filter_all">toutes les taches </button>
    <button @click="filter_all"> taches à faire</button>
    <button @click="filter_all"> taches terminées</button>
    </div>
    <div class="listestasks">
    <div class="listtache" v-for="tache in taches" :key="tache.id" >
      <h3>Titre: {{tache.title}}</h3>
      <div class="description_button">
      <p>{{tache.description}}</p>
      <button></button>
      </div>
      </div>
    </div>
   
  
  </div>
</template>

<script>
export default {
  name: "TaskList",
  data() {
    return {
     taches:[]
  
    };
  },
  computed: {
   
  },
  methods: {
  async fetchTache(){
     const res = await fetch("/listtache.json");
     this.taches = await res.json();
  }
  
  },
  mounted() {
    this.fetchTache();
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
  justify-content: space-between ;


}
button{
 background-color: #1f34d3ff ;
  color: #ffffff ;
  border: 1px solid #000000 ;
  border-radius: 8px ;
  cursor: pointer ;
  width: 32% ;
  height: 30px 
}

.listtache{
width: 90% ;
display: flex ;
flex-direction: column ;
}
.description_button{
display: flex ;
justify-content: center ;
text-align: center ;
justify-content: space-around ;


}
.description_button button{
width: 30px ;
height: 30px ;
background-color: #ffffffff ;
margin-top : 8px
}
.listtache h3{
margin-bottom: -10px
}

.listestasks{
border: 1px solid #000000 ;
border-radius: 8px ;
margin: 20px auto ;
width: 100%

}


</style>

