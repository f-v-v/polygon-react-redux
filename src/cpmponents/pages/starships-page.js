import React, {Component} from 'react';
import {connect} from 'react-redux'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {getAllStarships, setServerSearch} from '../../actions/starships';
import StarshipsGrid from './starships-page-component/starship-grid';
import StarshipPagination from './starships-page-component/starship-pagination';
import StarshipServerSearchPanel from './starships-page-component/starhip-server-search-panel'

// import './starships-page.css';

class StarshipsPage extends Component {
    // 1. Почему происходит 2 раза обновление??? Разобраться. 
    //  Видно по componentDidUpdate или shouldComponentUpdate
    //  Это при вызове Spiner-a!!!???
    
    // 2. Возможно ли(по практикам) сделать запрос на получение данных в shouldComponentUpdate???
    componentDidMount = () => {
        const search = this.props.search ? this.props.search:'';
        console.log('from didmount', search);
        this.props.setServerSearch(search);
        this.props.getAllStarships(this.props.page);
    }
    
    componentDidUpdate= (prevProps, prevState, snapshot) => {
        const search = this.props.search ? this.props.search:'';
        if ((prevProps.page !== this.props.page) || (prevProps.search !== this.props.search)) {
            this.props.setServerSearch(search);
            this.props.getAllStarships(this.props.page);
        }
    }

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
        const {isLoading, isError, page, search } = this.props;
        if (isLoading) {
            return <Spinner />
        }
        
        if (isError) {
            return <ErrorIndicator error={isError} />
        }

        const searchIn = search ? search:'';
        return (
            <div>
                <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <StarshipServerSearchPanel  search={searchIn}/>
                </div>
                <StarshipsGrid />
                <StarshipPagination currentPage={page} search={searchIn}/>
            </div>
        )
    };

}


const mapStateToProps = ({starshipsPage:{isLoading, isError, starships}}) => {
    return {
        isLoading,
        isError,
        starships
    };
};
const mapDispatchToProps = {
    getAllStarships,
    setServerSearch

};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsPage);
