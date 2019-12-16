import axios from 'axios';

export default class baseSWApiService {
    _apiBase = 'https://swapi.co/api';
    _imageBase = 'https://starwars-visualguide.com/assets/img';
    
    _instanceApi = axios.create({
        baseURL: this._apiBase,
    });

    _instanceImg = axios.create({
        baseURL: this._imageBase,
    });

    _getResurse = async (url) => {
        const res = await this._instanceApi.get(url);

        if (res.status === 200) {
            return res.data
        }

        throw new Error (`Could not fetch ${url}` +
        `, received ${res.status}`)
    }

    _extractId = (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        return +url.match(idRegExp)[1];
    };
     
}
