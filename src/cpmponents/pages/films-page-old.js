import React, {Component} from 'react';
import {connect} from 'react-redux'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ItemList from '../item-list';
import {getAllFilms, 
        setCurrentFilmWithRel,
        changeCurrentFilmWithRel,
        setCurrentRelPlanet,
        changeCurrentRelPlanet
        } from '../../actions/films';

import ItemDetails, {Record}  from '../item-details';
import Row from '../row';
import './films-page.css';
import PlanetDetails from './films-page-componets/planet-details';
import FilmDetails from './films-page-componets/film-details'
import PlanetsList from './films-page-componets/planets-list';
import FilmsList from './films-page-componets/films-list';

class FilmsPage extends Component {
    
    componentDidMount = () => {
        this.props.getAllFilms();    
    }
        
    render() {
        const {films, isLoading, isError, currentFilm, currentFilmFull,
            changeCurrentFilmWithRel, setCurrentFilmWithRel,
            relationPlanet, setCurrentRelPlanet, changeCurrentRelPlanet } = this.props;
        if (isLoading) {
        return <Spinner />
        }
        
        if (isError) {
        return <ErrorIndicator error={isError} />
        }
        return (
            <>
            <Row left={
    
                // <div className="list-item">
                //     <div> Films of STARS WAR </div>
                //     {/* <button className = "btn btn-outline-primary" onClick={this.onClick}>Download</button> */}
                //     <ItemList items={films} currentIndex={currentFilm.index}
                //         changeCurrentItem={changeCurrentFilmWithRel} setCurrentItem={setCurrentFilmWithRel}
                //     > 
                //         {renderTitle}
                //     </ItemList>
                // </div>
                <FilmsList />
            } 
            right={
                // <ItemDetails name={currentFilmFull.film.title} image={currentFilmFull.film.img} 
                //         isLoading={currentFilmFull.isLoading} isError={currentFilmFull.isError}
                //         item = {currentFilmFull.film}
                // >
                
                //     <Record field="dicription" label="Discription: "/>
                //     <Record field="director" label="Director film: "/>
                //     <Record field="producer" label="Producer film: "/>
                //     <Record field="release" label="Release data: "/>
                    
                // </ItemDetails>    
                <FilmDetails />
            }/>
            <Row left={
            //     <div className="list-item">
            //     <div> Plannets in film: "{currentFilmFull.film.title}" </div>
            //     <ItemList items={relationPlanet.planets} currentIndex={relationPlanet.currentPlanetIndex}
            //         isLoading={relationPlanet.isLoading} isError={relationPlanet.isError}
            //         changeCurrentItem={changeCurrentRelPlanet} setCurrentItem={setCurrentRelPlanet}
            //     > 
            //         {renderName}
            //     </ItemList>
            // </div>
                <PlanetsList />

            } right={
                // <ItemDetails name={relationPlanet.planets.length?relationPlanet.planets[relationPlanet.currentPlanetIndex].name:''} 
                //         image={relationPlanet.planets.length?relationPlanet.planets[relationPlanet.currentPlanetIndex].img:''} 
                //         item = {relationPlanet.planets[relationPlanet.currentPlanetIndex]}
                // >
                
                //     <Record field="diameter" label="Diameter: "/>
                //     <Record field="climate" label="Climate: "/>
                //     <Record field="terrain" label="Terrain: "/>
                //     <Record field="population" label="Population: "/>
                    
                // </ItemDetails>    
                <PlanetDetails />
            }/>
            </>
        )
    };

}

// const FilmsPage1 = ({films, isLoading, isError, currentFilm, currentFilmFull,
//     getAllFilms, changeCurrentFilmWithRel, setCurrentFilmWithRel }) => {
//     const onClick = () => {
//         getAllFilms();
//         };
        
//         if (isLoading) {
//         return <Spinner />
//         }
        
//         if (isError) {
//         return <ErrorIndicator error={isError} />
//     }
//     return (
//         <Row left={

//         <div className="jumbotron">
//             <div> Films of STARS WAR </div>
//             {/* <button className = "btn btn-outline-primary" onClick={onClick}>Download</button> */}
//             <ItemList items={films} curruntItem={currentFilm}
//                 changeCurrentItem={changeCurrentFilmWithRel} setCurrentItem={setCurrentFilmWithRel}
//             > 
//                 {renderTitle}
//             </ItemList>
//         </div>
//         } 
//         right={
//         <ItemDetails name={currentFilmFull.film.title} image={currentFilmFull.film.img} 
//                 isLoading={currentFilmFull.isLoading} isError={currentFilmFull.isError}
//                 item = {currentFilmFull.film}
//         >
        
//         <Record field="dicription" label="Discription: "/>
//         <Record field="director" label="Director film: "/>
//         <Record field="producer" label="Producer film: "/>
//         <Record field="release" label="Release data: "/>
        
//         </ItemDetails>

//         }/>
//     )
// };
const renderTitle = ({title}) => {
        // console.log('vtyz dspdfkb');
        return <span> {title} </span>
};

const renderName = ({name}) => {
    // console.log('vtyz dspdfkb');
    return <span> {name} </span>
};

const mapStateToProps = ({filmsPage:{films, isLoading, isError, currentFilm,
    currentFilmFull, relationPlanet}}) => {
    return {
        films,
        isLoading,
        isError,
        currentFilm,
        currentFilmFull,
        relationPlanet
    };
};
const mapDispatchToProps = {
    getAllFilms,
    setCurrentFilmWithRel,
    changeCurrentFilmWithRel,
    setCurrentRelPlanet,
    changeCurrentRelPlanet
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);
