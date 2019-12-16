import axios from 'axios';

const _apiBase = 'https://swapi.co/api';
const _imageBase = 'https://starwars-visualguide.com/assets/img';

const instanceApi = axios.create({
    baseURL: _apiBase,
});

const instanceImg = axios.create({
    baseURL: _imageBase,
});

export {instanceApi, instanceImg};