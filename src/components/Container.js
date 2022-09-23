import React, { useState } from "react";
import GroceryList from "./GroceryList";
import ShoppingCart from "./ShoppingCart";

const Container = () => {
    const [grocery, setGrocery] = useState([
        { id: 1, title: "Eggs" },
        { id: 2, title: "Cheese" },
        { id: 3, title: "Garlic" },
    ])
    const [cart, setCart] = useState([
        { id: 1, title: "Onions", amount: 1 },
        { id: 2, title: "Leeks", amount: 2 },
    ])

    const addItemToGrocery = (title) => {
        let newGrocery = [
            ...grocery,
            {
                id:
                    grocery.length +
                    cart.length +
                    1,
                title: title,
                amount: 1,
            },
        ]
        setGrocery(newGrocery)
    };


    const addAmountToItem = (item, amount) => {
        let existingtItems = [
            cart.map((listItem) => {
                if (listItem.title === item.title) {
                    return {
                        id: listItem.id,
                        title: listItem.title,
                        amount: listItem.amount + amount,
                    };
                }
                console.log("List Items", listItem)
                //return listItem;
            }),
        ]
        setCart(existingtItems)
    };

    const addGroceryItemToCart = (item) => {
        console.log(`addGroceryItemToCart: ${item.title}`);
        if (
            cart
                .map((item) => item.title)
                .includes(item.title)
        ) {
            addAmountToItem(item, 1);
        } else {

            let newItemCar = [
                ...cart,
                {
                    id: cart.length + 1,
                    title: item.title,
                    amount: 1,
                },
            ]
            console.log("new Item Car", newItemCar)
            setCart(newItemCar)
        }


    };

    return (
        <div className="container">
            <header>
                <h1>Grocery List</h1>
            </header>
            <main>
                <GroceryList
                    grocery={grocery}
                    addItemToGrocery={addItemToGrocery}
                    addGroceryItemToCart={addGroceryItemToCart}
                />
                <ShoppingCart
                    cart={cart}
                />
            </main>
        </div>
    );
}

export default Container;