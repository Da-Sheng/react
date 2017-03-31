import React from "react";

const Thing = (props) => {
	
	return (
		<span
			// onClick={delSelf} 
			id={props.id} 
			className={props.thing_classname}
		>
		 	{props.tarValue}
		</span>
	)
}

export default Thing;
