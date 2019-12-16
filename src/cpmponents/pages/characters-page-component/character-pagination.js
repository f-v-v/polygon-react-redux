import React from 'react';
import {connect} from 'react-redux'
import {getAllCharacters} from '../../../actions/characters'
import Pagination from '../../paginetion';


const  CharactersPagination = ({total, currentPage, getAllCharacters}) => {
    return (
        <div className="row justify-content-center">
            <Pagination total={total}
                        currentPage={currentPage}
                        getData={getAllCharacters}
            />
        </div>
    );
}

const mapStateToProps = ({charactersPage:{total, currentPage}}) => {
    return {
        total,
        currentPage
    };
};
const mapDispatchToProps = {
    getAllCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPagination);
