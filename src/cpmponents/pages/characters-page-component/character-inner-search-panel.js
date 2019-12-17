import React from 'react'
import { connect } from 'react-redux';
// import SearchPanel from '../../search-panel';
import SearchInput from '../../search-input';
import {setInnerSearch} from '../../../actions/filter-characters';

const CharacterInnerSearchPanel = (props) => {
    
    const {innerSearch, setInnerSearch} = props;

    return (
        <div className="input-group">
            <div className="input-group-prepend">
                <span className="input-group-text">На странице</span>
            </div>
            <SearchInput search={innerSearch}
                    onChangeSearch={setInnerSearch}
            />    
        </div>

            

    )
}

const mapStateToProps = ({filterCharacters:{innerSearch}}) => {
    return {
        innerSearch
    };
};
const mapDispatchToProps = {
    setInnerSearch,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterInnerSearchPanel); 