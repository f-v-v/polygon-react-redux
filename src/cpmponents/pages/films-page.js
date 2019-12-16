import React, {Component} from 'react';
import {connect} from 'react-redux'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {getAllFilms} from '../../actions/films';
import Row from '../row';
import PlanetDetails from './films-page-componets/planet-details';
import FilmDetails from './films-page-componets/film-details'
import PlanetsList from './films-page-componets/planets-list';
import FilmsList from './films-page-componets/films-list';
import './films-page.css';

class FilmsPage extends Component {
    
    componentDidMount = () => {
        this.props.getAllFilms();    
    }
        
    render() {
        const {isLoading, isError} = this.props;

        if (isLoading) {
            return <Spinner />
        }
        
        if (isError) {
            return <ErrorIndicator error={isError} />
        }
        return (
            <>
                <Row 
                    left={<FilmsList />} 
                    right={<FilmDetails />}
                />
                <Row 
                    left={<PlanetsList />} 
                    right={<PlanetDetails />}
                />
            </>
        )
    };

}


const mapStateToProps = ({filmsPage:{isLoading, isError}}) => {
    return {
        isLoading,
        isError,
    };
};
const mapDispatchToProps = {
    getAllFilms,
};

export default connect(mapStateToProps, mapDispatchToProps)(FilmsPage);
