import React from 'react';

const SelectSelf = (props) => {
	const selectDo = () => {
		props.callbackSelectSelf(props.index);
	}
	return (<span
						className={props.select_classname}
						onClick={selectDo}
					>
					✔️
					</span>)
}

export default SelectSelf;