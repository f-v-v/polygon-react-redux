import React from 'react';
import {connect} from 'react-redux'
import ItemDetails, {Record}  from '../../item-details';

const PlanetDetails= (props) => {
    const {relationPlanet:{planets, currentPlanetIndex}} = props;
    return (
        <ItemDetails name={planets.length?planets[currentPlanetIndex].name:''} 
                image={planets.length?planets[currentPlanetIndex].img:''} 
                item = {planets[currentPlanetIndex]}
        >
        
            <Record field="diameter" label="Diameter: "/>
            <Record field="climate" label="Climate: "/>
            <Record field="terrain" label="Terrain: "/>
            <Record field="population" label="Population: "/>
            
        </ItemDetails>    
    )
}

const mapStateToProps = ({filmsPage:{relationPlanet}}) => {
    return {
        relationPlanet
    };
};

export default connect(mapStateToProps)(PlanetDetails);