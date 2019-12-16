import React from 'react'
import { connect } from 'react-redux';
import SearchPanel from '../../search-panel';
import {setServerSearch, getAllCharacters} from '../../../actions/characters';

const CharacterServerSearchPanel = (props) => {
    
    const {serverSearch, setServerSearch, getAllCharacters} = props;

    return (
            <SearchPanel search={serverSearch}
                    onChangeSearch={setServerSearch}
                    onSubmitSearch={getAllCharacters}
                    title="На сервере"
            />
    )
}

const mapStateToProps = ({charactersPage:{serverSearch}}) => {
    return {
        serverSearch
    };
};
const mapDispatchToProps = {
    getAllCharacters,
    setServerSearch
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterServerSearchPanel); 