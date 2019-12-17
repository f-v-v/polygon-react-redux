import baseSWApiService from './base-swapi-service';

export default class charactersApi extends baseSWApiService {
    _subApiUrl= '/people/';
    _subImgUrl = '/characters/';
    
    _transformData = (character) => {
        const id = this._extractId(character.url); 
        const newCharacter = {
            id:this._extractId(character.url),
            img: this.fetchImgCharacter(id),
            name: character.name,
            gender: character.gender,
            height: character.height,
            mass: character.mass,
            birthYear: character.birth_year,
            homeworld: this._extractId(character.homeworld),
            films: character.films.map((e) => {
                    return this._extractId(e);
            }),
        }
        return newCharacter;
    }
    
    _transformDataShort = (character) => {
        const id = this._extractId(character.url); 
        const newCharacter = {
            id:this._extractId(character.url),
            img: this.fetchImgCharacter(id),
            name: character.name
        }
        return newCharacter;
    }

    _helperTransform = (data, short) => {
        const arr = data.results;
        const fn = short?this._transformDataShort:this._transformData;
        return {
            allCharacters:arr.map(fn),
            totalCharacters:data.count
            }

    }

    fetchAllCharacters = async (page = 1, short = true) => {
        let url = this._subApiUrl;
        if (page > 1) {
            url+=`?page=${page}`;
        }
        const data= await this._getResurse(url);
        // const arr = data.results;
        // const fn = short?this._transformDataShort:this._transformData;
        // return {
        //     allCharacters:arr.map(fn),
        //     tottalCharacters:data.count
        //     }
        return this._helperTransform (data, short);
    }
    
    fetchCharacterById = async (id, short = false) => {
        const charater = await this._getResurse(`${this._subApiUrl}${id}/`);
        if (short) {return this._transformDataShort(charater);}
        return this._transformData(charater);
    }

    fetchImgCharacter = (id) => {
        return `${this._imageBase}${this._subImgUrl}${id}.jpg`;
    }

    fetchCharactersByArrayId = async (array, short=true) =>{
        const result = await Promise.all(array.map(e => this.fetchCharacterById(e, short)));
        return result;
    }

    fetchSearchCharacter = async (searchName = '',page=1 , short = true) => {
        let url = this._subApiUrl;
        url+=`?search=${searchName}&page=${page}`;
        // console.log(`from service=${url}`)
        const data= await this._getResurse(url);
        // const arr = data.results;
        // const fn = short?this._transformDataShort:this._transformData;
        // return {
        //     allCharacters:arr.map(fn),
        //     tottalCharacters:data.count
        //     }
        return this._helperTransform (data, short);
    }
}