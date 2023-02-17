import toDoService from "./toDoService";

export default {
    namespaced: true,
    
    state: {
        loading: false,
        list: []
    },

    getters: {
        list: state => state.list || [],
        loading: state => !!state.loading
    },

    mutations: {
        START_LIST(state) {
            state.loading = true; 
        },

        LIST_SUCCESS(state, payload) {
            state.list = payload;
            state.loading = false;
        },

        LIST_ERROR(state, payload) {
            console.error(payload);
            state.loading = false;
        },

        CREATE_START(state) {
            state.loading = true; 
        },

        CREATE_SUCCESS(state) {
            state.loading = false;
        },

        CREATE_ERROR(state, payload) {
            console.error(payload);
            state.loading = false;
        },

        DESTROY_START(state) {
            state.loading = true; 
        },

        DESTROY_SUCCESS(state) {
            state.loading = false;
        },

        DESTROY_ERROR(state, payload) {
            console.error(payload);
            state.loading = false;
        },
        
        



        

    },

    actions: {
        async doList({ commit }) {
            try {
                commit('START_LIST');
                const list = await toDoService.list();
                commit('LIST_SUCCESS', list);
            } catch (error) {
                commit('LIST_ERROR', error);
            }
        },

        async doCreate({ commit, dispatch }, payload) {
            try {
                
                commit('CREATE_START');
                await toDoService.addTodo(payload);
                dispatch('doList');

            } catch(error) {
                commit('CREATE_ERROR', error);
            }
        },
        async doDestroy({ commit, dispatch }, payload) {
            try {
                commit('DESTROY_START');
                await toDoService.delete(payload);
                dispatch('doList');
            } catch (error) {
                commit('DESTROY_ERROR', error);
            }
        },

    }

}