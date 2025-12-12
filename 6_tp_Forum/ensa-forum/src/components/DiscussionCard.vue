<template>
  <div class="card mb-3">
    <div class="card-body">
      <h5 class="card-title" @click="$router.push('/discussion/' + id)" style="cursor:pointer">{{ title }}</h5>
      <p class="card-text text-muted">par {{ author }} • {{ date }}</p>
      <p>{{ excerpt }}</p>
      <div class="d-flex justify-content-between">
        <small class="text-muted">{{ replies }} réponses</small>
        <small class="text-muted">{{ category }}</small>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['id','title','excerpt','author','date','replies','category']
}
</script>
