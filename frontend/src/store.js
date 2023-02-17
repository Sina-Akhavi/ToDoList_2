// import Vue from 'vue';
import { createStore } from 'vuex';
import toDoStore from './todo/toDoStore';

const store = createStore({
    modules: {
        todo: toDoStore
    }
})

export default store;

