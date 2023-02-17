<template>

   <AddItems/> <!-- deleted submit  -->
  <div>
    <el-table v-loading="loading" 
      element-loading-text="Loading..."
      :element-loading-spinner="svg"
      :data="list" style="width: 100%">
      <el-table-column prop="id" label="Id" width="250" />
      <el-table-column prop="text" label="Text" width="250" />
      <el-table-column fixed="right" width="120">
        <template #default="scope">
          <el-button type="danger" size="small" 
            @click="doDestroy(scope.row.id)">&times;
          </el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>

</template>


<script>
import AddItems from './AddItems.vue';
// import toDoService from '../toDoService';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ListIems',
  
  components: {
    AddItems
  },

  async created() {
    this.doList();
  },
  
  computed: {
    ...mapGetters({
      loading: 'todo/loading',
      list: 'todo/list'
    })
  },
    
  methods: {
    ...mapActions({
      doList: 'todo/doList',
      doDestroy: 'todo/doDestroy'
    }),


    // async submit(todo) {
    //   this.loading = !this.loading;
    //   const data = await toDoService.addTodo(todo);
    //   this.doList();
    //   // this.list = await toDoService.list();
    //   // this.loading = !this.loading;

    // },

    // async doDestroy(id) {
    //   this.loading = !this.loading;
    //   const data = await toDoService.delete(id);

    //   this.doList();

    // }
  }

}

</script>

<style>

</style>