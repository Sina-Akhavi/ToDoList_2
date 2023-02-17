<template>
  <el-form :inline="true" :rules="rules" ref="formRef" :model="todo" 
    @submit.native.prevent="doSubmit('formRef')">

    <el-form-item label="Todo" :required="true" prop="text">
      <el-input v-model="todo.text"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" native-type="submit">Submit</el-button>
    </el-form-item>
  </el-form>
</template>


<script>
  export default {
    name: 'AddItems',

    emits: ['submit'],

    data() {
      return {
        rules: {

          text: [
            {
              required: true,
              message: 'This field can not be empty'
            },
            { 
              min: 2,
              max: 255,
              message: 'The legth is too short/long'
            }
          ]
        },

        todo: {
          text: ''
        }
      }

    },

    methods: {
      async doSubmit(formRef) {
        
        try {
          await this.$refs[formRef].validate();
          
        } catch (error) {
          console.error(error);
          return;
        }
        
        this.$emit('submit', {...this.todo});
        await this.$refs[formRef].resetFields();
      }
    }
  }

</script>

<style>

</style>