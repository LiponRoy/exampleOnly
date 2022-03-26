import React, { useState } from 'react';

const Cart = ({ cart, emptyCart, ChooseOne }) => {
	const [ran, setRandom] = useState(0);
	// let randomNumber = 0;
	//const arr = [12, 13, 14, 15, 16];

	//var randomNumber = 0;
	const [num, setname] = useState(1);

	const ranME = () => {};

	const genRandom = () => {
		let randomNumber = Math.floor(Math.random() * cart.length);
		setRandom(randomNumber);
		setname(3);
	};

	// let Total_price = 0;
	// let Shipping = 0;

	// for (let i of cart) {
	// 	Total_price = Total_price + parseInt(i.price);
	// 	Shipping = Shipping + parseInt(i.Shipping);
	// }

	// let tex = (Total_price * 5) / 100;
	// let grandTotal = Total_price + Shipping + tex;
	// const randddom =()=>{

	// }

	return (
		<div>
			{cart.map(dat => (
				<div key={dat.id} className='cartItem'>
					<img className='rounded-circle' src={dat.img} alt='' width='50px' height='45px' />
					<span>{dat.name}</span>
				</div>
			))}
			<button onClick={emptyCart}>Remove all</button>
			<br></br>
			{/* <button onClick={ChooseOne}>Choose 1 for me</button> */}
			{/* {cart ? (
				<div className='mt-4'>
					<h6>Please choose it</h6>
					<img src={cart[ran].img} alt='' width='50px' />
					<span>{cart[ran].name}</span>
				</div>
			) : (
				<span>not found</span>
			)} */}
			{cart && num > 1 && cart?.length > 0 ? (
				<div id='randomItemId' className='mt-4 randomItem'>
					<h6>Please choose it</h6>
					<img src={cart[ran].img} alt='' width='50px' />
					<span>{cart[ran].name}</span>
				</div>
			) : (
				<span>not found</span>
			)}

			<br></br>
			<button onClick={genRandom}>Choose 1 for me</button>
		</div>
	);
};

export default Cart;
