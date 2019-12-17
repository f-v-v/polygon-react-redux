import baseSWApiService from './base-swapi-service';

export default class filmsApi extends baseSWApiService {
    _subApiUrl= '/films/';
    _subImgUrl = '/films/';
    
    _transformData = (film) => {
        const id = this._extractId(film.url); 
        const newFilm = {
            id:id,
            img: this.fetchImgFilm(id),
            title: film.title,
            dicription: film.opening_crawl,
            director: film.director,
            producer: film.producer,
            release: film.release_date,
            characters: film.characters.map((e) => {
                    return this._extractId(e);
            }),
            planets: film.planets.map((e) => {
                return this._extractId(e);
        }),
        }
        return newFilm;
    }
    
    _transformDataShort = (film) => {
        const id = this._extractId(film.url); 
        const newFilm = {
            id:id,
            img: this.fetchImgFilm(id),
            title: film.title
        }
        return newFilm;
    }

    _helperTransform = (data, short) => {
        const arr = data.results;
        const fn = short?this._transformDataShort:this._transformData;
        return {
            allFilms:arr.map(fn),
            totalFilms:data.count
            }

    }

    fetchAllFilms = async (page = 1, short = true) => {
        let url = this._subApiUrl;
        if (page > 1) {
            url+=`?page=${page}`;
        }
        const data= await this._getResurse(url);
        return this._helperTransform (data, short);
    }
    
    fetchFilmById = async (id, short = false) => {
        const film = await this._getResurse(`${this._subApiUrl}${id}/`);
        if (short) {return this._transformDataShort(film);}
        return this._transformData(film);
    }

    fetchImgFilm = (id) => {
        return `${this._imageBase}${this._subImgUrl}${id}.jpg`;
    }

    fetchFilmByArrayId = async (array, short=true) =>{
        const result = await Promise.all(array.map(e => this.fetchFilmById(e, short)));
        return result;
    }

    fetchSearchFilm = async (searchName = '', short = true) => {
        let url = this._subApiUrl;
        url+=`?search=${searchName}`;
        const data= await this._getResurse(url);
        return this._helperTransform (data, short);
    }
}