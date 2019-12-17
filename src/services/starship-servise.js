import baseSWApiService from './base-swapi-service';

export default class starshipsApi extends baseSWApiService {
    _subApiUrl= '/starships/';
    _subImgUrl = '/starships/';
    
    _transformData = (starship) => {
        const id = this._extractId(starship.url); 
        const newStarship = {
            id:id,
            img: this.fetchImgStarship(id),
            name: starship.name,
            model: starship.model,
            cost: starship.cost_in_credits,
            crew: starship.crew,
            manufacturer: starship.manufacturer,
            films: starship.films.map((e) => {
                return this._extractId(e);
        }),
        }
        return newStarship;
    }
    
    _transformDataShort = (starship) => {
        const id = this._extractId(starship.url); 
        const newStarship = {
            id:id,
            img: this.fetchImgStarship(id),
            name: starship.name
        }
        return newStarship;
    }

    _helperTransform = (data, short) => {
        const arr = data.results;
        const fn = short?this._transformDataShort:this._transformData;
        return {
            allStarships:arr.map(fn),
            totalStarships:data.count
            }

    }

    fetchAllStarships = async (page = 1, short = true) => {
        // debugger;
        let url = this._subApiUrl;
        if (page > 1) {
            url+=`?page=${page}`;
        }
        const data= await this._getResurse(url);
        return this._helperTransform (data, short);
    }
    
    fetchStarshipById = async (id, short = false) => {
        const starship = await this._getResurse(`${this._subApiUrl}${id}/`);
        if (short) {return this._transformDataShort(starship);}
        return this._transformData(starship);
    }

    fetchImgStarship = (id) => {
        return `${this._imageBase}${this._subImgUrl}${id}.jpg`;
    }

    fetchStarshipByArrayId = async (array, short=true) =>{
        const result = await Promise.all(array.map(e => this.fetchStarshipById(e, short)));
        return result;
    }

    fetchSearchStarship = async (searchName = '', page=1 , short = true) => {
        console.log(`from fetchSearchStarship short=${short}`)
        let url = this._subApiUrl;
        url+=`?search=${searchName}&page=${page}`;
        const data= await this._getResurse(url);
        console.log(`from fetchSearchStarship data=${data}`)
        return this._helperTransform (data, short);
    }
}