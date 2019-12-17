import React from 'react';
import './item-list.css';

const ItemList = ({items, currentIndex, changeCurrentItem, setCurrentItem,
                children: renderLabel}) => {
    
    const viewItems = items.map((item, index) => {
        let classActive = '';
        if (currentIndex === index) {classActive = ' active'}
        return (
            <li className={`list-group-item${classActive}`}  
                key={item.id} 
                onClick = {() => {
                    setCurrentItem(index);
                }}
            >
                {renderLabel(item)} {/*! вызывается на каждом эл-те при перевыборе*/}
            </li>
        );
    })
    const keyDown = (e) => {
        e.preventDefault();
        switch (e.key) {
            case 'ArrowUp':
                changeCurrentItem(-1);
                break;
            case 'ArrowDown':
                changeCurrentItem(1);
                break;
            default:
        }
    }
    return (
        <ul className="item-list list-group" tabIndex="0"
            onKeyDown={keyDown}>
            {viewItems}
        </ul>
    )
}

export default ItemList;
