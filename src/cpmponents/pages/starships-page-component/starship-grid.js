import React from 'react';
import GridCards from '../../grid-cards';
import { connect } from 'react-redux';

const mapFields = [
    {field:"model", label:"Model: "},
    {field:"cost", label:"Cost: "},
    {field:"crew", label:"Crew: "},
    {field:"manufacturer", label:"Manufacturer: "},
]


const StarshipsGrid = (props) => {
    const {starships} = props;
    return (
        <div className="">
            <GridCards items={starships} mapFields={mapFields}/>
        </div>
    )
}

const mapStateToProps = ({starshipsPage:{starships}}) => {
    return {
        starships: starships
    };
};

export default connect(mapStateToProps)(StarshipsGrid);