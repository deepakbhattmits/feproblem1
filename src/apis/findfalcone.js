import axios from 'axios';

export default axios.create({
    baseURL: 'https://findfalcone.herokuapp.com',
    headers: {
        Accept : "application/json",
    }
}) 