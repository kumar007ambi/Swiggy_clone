import React from 'react'
import ItemList from './ItemList';

const ItemCateogoryList = ({items}) => {
    console.log("items", items);
 return (
			<div className="collapsible">
				{items.map((item) => (
                    <ItemList key={item?.card?.info?.id} data={item?.card?.info} item={item} />
				))}
			</div>
	);
}

export default ItemCateogoryList