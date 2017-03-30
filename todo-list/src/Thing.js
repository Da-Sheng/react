import React from "react";

const Thing = (props) => {
	const delSelf = () => {
    props.callback2(props.index)
  }
	return (
		<span
			onClick={delSelf} 
			id={props.id} 
			className={props.clasame}
		>
		 	{props.tarValue}
		</span>
	)
}

export default Thing;
