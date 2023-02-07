import axios from 'axios'

const url = 'http://localhost:3000';

export default {
    async list() {
        // console.log('salam');
        const response = await axios.get(`${url}/todo`);
        console.log(response.data);

        return response.data;
    }
}

