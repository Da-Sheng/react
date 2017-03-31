import React from "react";
import Thing from './Thing';
import SelectSelf from './SelectSelf';
import DeleteSelf from './DeleteSelf';
const Item = (props) => {
	let inner = [];
	let options = {};
	const status = props.status;
	//creat Item JSXDOM
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
								del_classname='delete-self'
								callbackDel={props.callbackDel}
								index={props.index}
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

	let oLi = <li id={props.id} >
							{inner}
						</li>
	return (
		oLi
	)
}

export default Item; 