import React from "react";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";

const StripeCheckoutButton = ({price}) => {
	const priceForStripe = price * 100;
	const publishableKey =
		"pk_test_51KA8d2IRIXPwBHCIS47TRSj3zoUJvGUnGN51yWMeOJnaFDjLibRrVSAGxRSIba6De99Iveipg3rtGV1R2KD3IQjV00c2wzL59T";

	const onToken = (token) => {
		axios({
			url: "payment",
			method: "post",
			data: {
				amount: priceForStripe,
				token,
			},
		})
			.then((response) => {
				alert("Payment Successful");
			})
			.catch((error) => {
				console.log("Payment error :", JSON.parse(error));
				alert(
					"There was an issue with your payment. Please sure you use the provided credit card."
				);
			});
	};

	return (
		<StripeCheckout
			label="Pay Now"
			name="CRWN Clothing Ltd."
			billingAddress
			shippingAddress
			image="https://svgshare.com/i/CUz.svg"
			description={`Your total is $${price}`}
			amount={priceForStripe}
			panelLabel="Pay Now"
			token={onToken}
			stripeKey={publishableKey}
		/>
	);
};

export default StripeCheckoutButton;