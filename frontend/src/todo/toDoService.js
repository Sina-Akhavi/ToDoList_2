import axios from 'axios'

const url = 'http://localhost:3000';

export default {
    async list() {
        const response = await axios.get(`${url}/todo`);

        return response.data;
    },

    async addTodo(todo) {
        const response = await axios.post(`${url}/todo`, todo);
        return response.data;
    },

    async delete(id) {
        await axios.delete(`${url}/todo/${id}`);
    }
}

