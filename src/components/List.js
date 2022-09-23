import React from "react";
import ListItem from "./ListItem.js";

const List = ({ items, addGroceryItemToCart }) => {
    return (
        <div>
            <ul className="app-list">
                {items.map((item) => (
                    <ListItem
                        key={item.id}
                        item={item}
                        clickItem={() => addGroceryItemToCart(item)}
                    />
                ))}
            </ul>
        </div>
    );
}

export default List;