<template>
  <AddItems/>
  <ul>
    <li v-for="item of list" :key="item.id">{{ item.text }}</li>
  </ul>

</template>


<script>
import AddItems from './AddItems.vue'

export default {


  name: 'ListIems',
  components: {
    AddItems
  },
  
  props: ['list'],

}

</script>

<style>

</style>