<template>
  <h2>To Do list</h2>

  <ListItems/>
  
  


</template>

<script>
  import toDoService from './todo/toDoService.js'
  import ListItems from './todo/components/ListItems.vue'
  // import AddItem from './todo/components/AddItem.vue'


  export default {
    name: 'App',

    components: {
      ListItems
    },

  }
</script>


<style>

body {
  padding: 24px;  
}

</style>
