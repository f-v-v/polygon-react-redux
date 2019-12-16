import React, {Component} from 'react';
import {connect} from 'react-redux'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {getAllCharacters} from '../../actions/characters';
import CharacterSortPanel from './characters-page-component/character-sort-panel';
import CharactersGrid from './characters-page-component/character-grid';
import CharacterInnerSearchPanel from './characters-page-component/character-inner-search-panel'
import CharacterServerSearchPanel from './characters-page-component/character-server-search-panel'
import CharacterPagination from './characters-page-component/character-pagination';

import './characters-page.css';

class CharactersPage extends Component {
    // 1. Почему происходит 2 раза обновление??? Разобраться. 
    //  Видно по componentDidUpdate или shouldComponentUpdate
    //  Это при вызове Spiner-a!!!???
    
    // 2. Возможно ли(по практикам) сделать запрос на получение данных в shouldComponentUpdate???
    componentDidMount = () => {
        // this.props.getAllCharacters(this.props.page);
        this.props.getAllCharacters();
    }
    
    // componentDidUpdate= (prevProps, prevState, snapshot) => {
    //     console.log(`FromDidUpdate prevProps.Page=${prevProps.page}`);
    //     console.log(`FromDidUpdate current=${this.props.page}`);
    //     if (prevProps.page !== this.props.page) {
    //         this.props.getAllCharacters(this.props.page);
    //     }
    // }

    // С shouldComponentUpdate перестает работать Spiner!!!

    // shouldComponentUpdate(nextProps, nextState) {
    //     console.log(`From shouldComponentUpdatenextProps.Page=${nextProps.page}`)
    //     if (nextProps.page === this.props.page) {
    //         console.log(`пропускаем`);
    //         return  false;
    //     };
    //     return true;

    // }

    render() {
        const {isLoading, isError} = this.props;

        if (isLoading) {
            return <Spinner />
        }
        
        if (isError) {
            return <ErrorIndicator error={isError} />
        }

        return (

            <div>
                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <CharacterSortPanel />
                    <CharacterInnerSearchPanel />
                    <CharacterServerSearchPanel />
                </div>
                <CharactersGrid />
                <CharacterPagination />
            </div>
        )
    };

}


const mapStateToProps = ({charactersPage:{isLoading, isError, characters}}) => {
    return {
        isLoading,
        isError,
        characters
    };
};
const mapDispatchToProps = {
    getAllCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);