import React, {Component} from 'react';
import {connect} from 'react-redux'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import {getAllStarships} from '../../actions/starships';
import StarshipsGrid from './starships-page-component/starship-grid';
import StarshipPagination from './starships-page-component/starship-pagination';

// import './starships-page.css';

class StarshipsPage extends Component {
    // 1. Почему происходит 2 раза обновление??? Разобраться. 
    //  Видно по componentDidUpdate или shouldComponentUpdate
    //  Это при вызове Spiner-a!!!???
    
    // 2. Возможно ли(по практикам) сделать запрос на получение данных в shouldComponentUpdate???
    componentDidMount = () => {
        this.props.getAllStarships(this.props.page);
        // this.props.getAllStarships();
    }
    
    componentDidUpdate= (prevProps, prevState, snapshot) => {
        // console.log(`FromDidUpdate prevProps.Page=${prevProps.page}`);
        // console.log(`FromDidUpdate current=${this.props.page}`);
        if (prevProps.page !== this.props.page) {
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
        const {isLoading, isError, page } = this.props;
        //, page, search
        // debugger
        if (isLoading) {
            return <Spinner />
        }
        
        if (isError) {
            return <ErrorIndicator error={isError} />
        }

        return (

            <div>
                {/* <div className="btn-toolbar justify-content-between" role="toolbar" aria-label="Toolbar with button groups">
                    <StarshipSortPanel />
                    <StarshipInnerSearchPanel />
                    <StarshipServerSearchPanel />
                </div>
                <StarshipsGrid />
                <StarshipPagination /> */}
                <StarshipsGrid />
                <StarshipPagination currentPage={page}/>
                {/* <PaginationLink currentPage={page}/> */}
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
};

export default connect(mapStateToProps, mapDispatchToProps)(StarshipsPage);
