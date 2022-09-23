import List from "./List";

function ShoppingCart({ cart }) {
    return (
        <div className="shopping-cart">
            <h2>Shopping cart</h2>
            <button >Empty the shopping cart</button>
            <List items={cart} />
        </div>
    );
}

export default ShoppingCart;