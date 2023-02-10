<template>
  
    <input type="text" name="" v-model="todo.text">
    <button type="submit" v-on:click="doSubmit"> Add Item</button>
  
</template>


<script>
  export default {
    name: 'AddItems',

    emits: ['submit'],

    data() {
      return {
        todo: {
          text: ''
        }
      }
    },

    methods: {
      doSubmit() {
        this.$emit('submit', {...this.todo});
        this.todo.text = '';
      }
    }
  }

</script>

<style>

</style>