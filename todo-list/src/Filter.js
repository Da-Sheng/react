import React from 'react';

const Filter = (props) => {
	const selectCurrent0 = () => {
		props.callbackFilterBtn(0);
		props.callbackFilterAll();
	}
	const selectCurrent1 = () => {
		props.callbackFilterBtn(1);
		props.callbackFilterUndo();
	}
	const selectCurrent2 = () => {
		props.callbackFilterBtn(2);
		props.callbackFilterDone();
	}
	return (
		<div>
			<span
				className={props.filter_classname[0]}
				onClick={selectCurrent0}
			>
				全部
			</span>
			<span
				className={props.filter_classname[1]}
				onClick={selectCurrent1}
			>
				未做
			</span>
			<span
				className={props.filter_classname[2]}
				onClick={selectCurrent2}
			>
				已做
			</span>
			<span 
				className='clear-done'
				onClick={props.callbackClearDone}
			>
				清除已做
			</span>
			<span
				className='all-done'
				onClick={props.callbackDoneAll}
			>
				全选
			</span>
		</div>
	)
}

export default Filter;