<template>

  <AddItems @submit="submit"/>

  <div v-if="loading">loading...</div>
  <ul v-else>
    <li v-for="item of list" :key="item.id">
      {{ item.text }} <button @click="doDestroy(item.id)">&times;</button>
    </li>
  </ul>

</template>


<script>
import AddItems from './AddItems.vue'
import toDoService from '../toDoService'

export default {
  name: 'ListIems',
  
  data() {
    return {
      list: [],
      loading: false
    }
  },

  async created() {
    this.list = await toDoService.list();
  },

  components: {
    AddItems
  },

  methods: {
      async submit(todo) {
        this.loading = !this.loading;
        const data = await toDoService.addTodo(todo);
        this.list = await toDoService.list();
        this.loading = !this.loading;
      },

      async doDestroy(id) {
        this.loading = !this.loading;
        const data = await toDoService.delete(id);
        this.list = await toDoService.list();
        this.loading = !this.loading;

      }
  }

}

</script>

<style>

</style>