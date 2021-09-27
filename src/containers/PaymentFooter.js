import { useSelector } from "react-redux";

function selectorCartPrice(menu,cartByIds){
    let cartPrice =0;
    const cartKeys = Object.keys(cartByIds);

    cartKeys.forEach((id) => {
        const item = menu.items[id];
        const cartItem = cartByIds[id];

        const price = cartItem.quantity*item.price;

        cartPrice += price;
    });
    return cartPrice;
}

export function PaymentFooter() {
    const product = useSelector((state) => state.product);
    const {menu={}} = product;
    const cartByIds = useSelector((state) => state.changeTheNumber.cartByIds);
    const cartPrice = selectorCartPrice(menu,cartByIds);

    return(
        <footer>
            {cartPrice >0 && (
                <a href="payment" className="food-app-pay-btn" aria-live="polite">
                    Pay for food (${cartPrice})
                </a>
            )}
        </footer>
    )
}