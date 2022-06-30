import "./Cart.css";
import cart from "../assets/cart.png";
import Counter from "./Counter";

function Cart() {
    return (
        <div>
            <div id="image">
                <img src={cart} id="cart" alt='cart' />
            </div>
            <div>
                <Counter courses={9} />
            </div>
        </div>
    )
}

export default Cart;