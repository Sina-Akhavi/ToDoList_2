<template>
  <h2>To Do list</h2>

  <ListItems/>
  
  
</template>

<script>
  import ListItems from './todo/components/ListItems.vue'

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
