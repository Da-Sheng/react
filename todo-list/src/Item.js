import React from "react";
import Thing from './Thing';
import SelectSelf from './SelectSelf';
import DeleteSelf from './DeleteSelf';
const Item = (props) => {
	let inner = [];
	let options = {};
	const showX = () => { 
		props.callbackShow(props.index);
	};
	const hiddenX = () => { 
		props.callbackHidden(props.index);
	};
	
	const status = props.status;
	//create Item JSXDOM
	const creatItemDom = (options) => {
		inner[0] = <SelectSelf
								callbackSelectSelf={props.callbackSelectSelf}
								select_classname={options.select_classname}
								index={props.index}
								key='0'
							/>;
		inner[1] = <Thing
								id={props.id}
								key="1"
								thing_classname={options.thing_classname}
								tarValue={props.tarValue}
							/>;
		inner[3] = <DeleteSelf
								callbackDel={props.callbackDel}
								index={props.index}
								key="2"
								del_classname={props.del_classname}
								isHover={props.isHover}
							/>
	}

	switch (status) {
		case 'done':
			options = {
				select_classname: 'select-span has-selected',
				thing_classname: 'has-done'
			};
			creatItemDom(options);
			break;
		case 'undo':
			options = {
				select_classname: 'select-span unselected',
				thing_classname: 'not-done'
			};
			creatItemDom(options);
			break;
		default:
			break;
	}

	let oLi = <li
							onMouseOver={showX}
							onMouseOut={hiddenX}
							className='todo-li'
						>
		{inner}
	</li>
	return (
		oLi
	)
}

export default Item; 