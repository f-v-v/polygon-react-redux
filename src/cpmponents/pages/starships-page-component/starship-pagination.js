import React from 'react';
import {connect} from 'react-redux'
import {PaginationLink} from '../../paginetion';


const  StarshipsPagination = ({total, currentPage, search}) => {
    console.log(`frpm StarshipPagination total=${total} currentPage=${currentPage}`)
    return (
        <div className="row justify-content-center">
            <PaginationLink total={total}
                        currentPage={currentPage}
                        baseRefUrl="/starships/"
                        search={search}
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
