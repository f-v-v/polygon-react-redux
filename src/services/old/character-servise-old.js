import {instanceApi} from './base-swapi-service';

const _subUrl= '/people/';
// const _transform = (data) => {
//     const newData = data.map((e) => {

//     })
// }
const fetchAllCharacters = () => {
    return instanceApi.get(_subUrl)
    .then(res => {
        // console.log(res);
        if (res.status === 200) {
            return res.data.results;
        }
        throw new Error('Same error');
    }
    );
}

export {fetchAllCharacters};