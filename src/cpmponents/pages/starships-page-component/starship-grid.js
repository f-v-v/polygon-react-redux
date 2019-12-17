import React from 'react';
import GridCards from '../../grid-cards';
import { connect } from 'react-redux';

const mapFields = [
    {field:"model", label:"Model: "},
    {field:"cost", label:"Cost: "},
    {field:"crew", label:"Crew: "},
    {field:"manufacturer", label:"Manufacturer: "},
]

// const compareName = (a, b) => {
//     if (a.name < b.name) return -1;
//     if (a.name > b.name) return 1;
//     return 0;
// };

// const myParseInt = (x) => {
//     x = parseInt(x);
//     if (isNaN(x)) return 0;
//     return x
// }

// const compareNum = (a, b) => a-b

// const compareMass = (a, b) => {
//     a = myParseInt(a.mass);
//     b = myParseInt(b.mass);
//     return compareNum(a, b);
// };

// const compareHeight = (a, b) => {
//     a = myParseInt(a.height);
//     b = myParseInt(b.height);
//     return compareNum(a, b);
// };

// const innerSearch = (array, search) => {
//     if (search.length === 0) {
//         return array;
//     } 
//     return array.filter((array) => {
//         return array.name.toLowerCase().indexOf(search.toLowerCase()) > -1;
//     }); 
// }

// const filter = (array, field, search) => {
//     return sort( innerSearch(array, search), field);
// }

// const sort = (array, field) => {
//     const newArray = [...array];
//     switch (field) {
//         case 'name':
//             return newArray.sort(compareName);
//         case 'mass':
//             return newArray.sort(compareMass);
//         case 'height':
//             return newArray.sort(compareHeight);
//         case '':
//         default:
//             return array;
//     }
// }

const StarshipsGrid = (props) => {
    const {starships} = props;
    return (
        <div className="">
            <GridCards items={starships} mapFields={mapFields}/>
        </div>
    )
}

// const mapStateToProps = ({starshipsPage:{starships}, filterStarships:{sortBy, innerSearch}}) => {
const mapStateToProps = ({starshipsPage:{starships}}) => {
    return {
        // starships: filter(starships, sortBy, innerSearch),
        starships: starships
    };
};

export default connect(mapStateToProps)(StarshipsGrid);