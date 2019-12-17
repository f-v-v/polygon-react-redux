import baseSWApiService from './base-swapi-service';

export default class planetsApi extends baseSWApiService {
    _subApiUrl= '/planets/';
    _subImgUrl = '/planets/';
    
    _transformData = (planet) => {
        const id = this._extractId(planet.url); 
        const newPlanet = {
            id:this._extractId(planet.url),
            img: this.fetchImgPlanet(id),
            name: planet.name,
            diameter: planet.diameter,
            climate: planet.climate,
            gravity: planet.gravity,
            terrain: planet.terrain,
            population: planet.population,
            characters: planet.residents.map((e) => {
                    return this._extractId(e);
            }),
            films: planet.films.map((e) => {
                return this._extractId(e);
        }),
        }
        return newPlanet;
    }
    
    _transformDataShort = (planet) => {
        const id = this._extractId(planet.url); 
        const newPlanet = {
            id:this._extractId(planet.url),
            img: this.fetchImgPlanet(id),
            name: planet.name
        }
        return newPlanet;
    }

    _helperTransform = (data, short) => {
        const arr = data.results;
        const fn = short?this._transformDataShort:this._transformData;
        return {
            allPlanets:arr.map(fn),
            totalPlanets:data.count
            }

    }

    fetchAllPlanets = async (page = 1, short = true) => {
        let url = this._subApiUrl;
        if (page > 1) {
            url+=`?page=${page}`;
        }
        const data= await this._getResurse(url);
        return this._helperTransform (data, short);
    }
    
    fetchPlanetById = async (id, short = false) => {
        const charater = await this._getResurse(`${this._subApiUrl}${id}/`);
        if (short) {return this._transformDataShort(charater);}
        return this._transformData(charater);
    }

    fetchImgPlanet = (id) => {
        return `${this._imageBase}${this._subImgUrl}${id}.jpg`;
    }

    fetchPlanetByArrayId = async (array, short=true) =>{
        const result = await Promise.all(array.map(e => this.fetchPlanetById(e, short)));
        return result;
    }

    fetchSearchPlanet = async (searchName = '', short = true) => {
        let url = this._subApiUrl;
        url+=`?search=${searchName}`;
        const data= await this._getResurse(url);
        return this._helperTransform (data, short);
    }
}