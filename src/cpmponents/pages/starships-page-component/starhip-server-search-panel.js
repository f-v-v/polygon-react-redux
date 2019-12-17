import React from 'react'
import {compose} from 'redux'
import { connect } from 'react-redux';
import SearchPanel from '../../search-panel';
import {setServerSearch} from '../../../actions/starships';
import { withRouter } from 'react-router-dom';

const StarshipServerSearchPanel = (props) => {
    
    const {serverSearch, setServerSearch, history} = props;
    
    const redirectToSearch = (history, serverSearch) => { 
        return () => {
            const searchString = `/starships/1/${serverSearch}`;
            history.push(searchString);
        }
    }

    return (
            <SearchPanel search={serverSearch}
                    onChangeSearch={setServerSearch}
                    onSubmitSearch={redirectToSearch(history, serverSearch)}
                    title="На сервере"
            />
    )
}

const mapStateToProps = ({starshipsPage:{serverSearch}}) => {
    return {
         serverSearch
    };
};
const mapDispatchToProps = {
    setServerSearch
};

export default compose(withRouter, connect(mapStateToProps, mapDispatchToProps))(StarshipServerSearchPanel); 