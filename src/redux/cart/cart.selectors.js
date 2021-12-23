import {createSelector} from "reselect";

const selectCart = (state) => state.cart;

const selectUser = (state) => state.user;

export const selectCartItems = createSelector(
	[selectCart],
	(cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
	[selectCartItems],
	(cartItems) =>
		cartItems.reduce(
			(accumaltedQuantity, cartItem) => accumaltedQuantity + cartItem.quantity,
			0
		)
);