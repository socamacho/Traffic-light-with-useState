import React from "react";

import react, { useState } from "react";

export function Component() {
	const [color, setColor] = useState();

	let newClassR = "light bg-danger rounded-circle";
	let newClassY = "light bg-warning rounded-circle";
	let newClassG = "light bg-success rounded-circle";

	if (color === "red") {
		newClassR = "bg-danger rounded-circle light selected";
	} else {
		newClassR = "bg-danger rounded-circle light";
	}
	if (color === "yellow") {
		newClassY = "bg-warning rounded-circle light selected";
	} else {
		newClassY = "bg-warning rounded-circle light";
	}
	if (color === "green") {
		newClassG = "bg-success rounded-circle light selected";
	} else {
		newClassG = "bg-success rounded-circle light";
	}

	return (
		<div className="container">
			<div
				id="red"
				className={newClassR}
				onClick={e => {
					setColor(e.target.id);
				}}></div>
			<div
				id="yellow"
				className={newClassY}
				onClick={e => {
					setColor(e.target.id);
				}}></div>
			<div
				id="green"
				className={newClassG}
				onClick={e => {
					setColor(e.target.id);
				}}></div>
		</div>
        
	);
}

export default Component;

//Solucion> Creo el id para saber desde donde se genera el evento.
