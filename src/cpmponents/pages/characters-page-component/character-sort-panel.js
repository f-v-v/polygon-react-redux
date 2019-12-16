import React from 'react'
import { connect } from 'react-redux';
import SortPanel from '../../sort-panel';
import {setSortBy} from '../../../actions/filter-characters';

const CharacterSortPanel = (props) => {
    
    const arreySortBy = [
        { name: '', label: 'Без сортировки' },
        { name: 'name', label: 'Имени' },
        { name: 'height', label: 'Росту' },
        { name: 'mass', label: 'Массе' }
      ];

    const {sortBy, setSortBy} = props;

    return (
            <SortPanel arraySortBy={arreySortBy}
                    sortBy={sortBy}
                    onSortByChange={setSortBy}
            />
    )
}

const mapStateToProps = ({filterCharacters:{sortBy}}) => {
    return {
        sortBy
    };
};
const mapDispatchToProps = {
    setSortBy,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterSortPanel); 