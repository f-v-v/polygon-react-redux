import React from 'react';
import {connect} from 'react-redux'
// import {getAllStarships} from '../../../actions/characters'
import {PaginationLink} from '../../paginetion';


const  StarshipsPagination = ({total, currentPage}) => {
    console.log(`frpm StarshipPagination total=${total} currentPage=${currentPage}`)
    return (
        <div className="row justify-content-center">
            <PaginationLink total={total}
                        currentPage={currentPage}
                        baseRefUrl="/starships/"
            />
        </div>
    );
}

const mapStateToProps = ({starshipsPage:{total}}) => {
    return {
        total
    };
};

export default connect(mapStateToProps)(StarshipsPagination);
