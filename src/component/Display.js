import React from 'react';

const Display = ({ clickHendler, product }) => {
	const { id, name, Shipping, img, price } = product;
	return (
		<div>
			<img src={img} alt='' width='350px' />
			<h4>id: {id}</h4>
			<h4>name: {name}</h4>
			<h4>Price: {price}</h4>
			<h4>Shipping: {Shipping}</h4>
			<button onClick={() => clickHendler(product)}>ClickME</button>
		</div>
	);
};

export default Display;
