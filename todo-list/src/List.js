import React from "react";
import Item from './Item';

const List = (props) => {
    let filter = props.filter;
    const todoArr = props.todoArr;
    let arr = [];
    switch (filter) {
        case 'all':
            arr = todoArr.filter(function (value) {
                return true;
            })
            break;
        case 'done':
            arr = todoArr.filter(function (value) {
                return value.status === 'done';
            })
            break;
        case 'undo':
            arr = todoArr.filter(function (value) {
                return value.status === 'undo';
            })
            break;
        default:
            break;
    }
    let list = arr.map((value, index,arr) => {
        return (
            <Item
                key={index}
                status={value.status}
                tarValue={value.content}
                callbackDid={props.callbackDid}
                callbackDel={props.callbackDel}
                callbackSelectSelf={props.callbackSelectSelf}
                callbackShow={props.callbackShow}
                callbackHidden={props.callbackHidden}
                index={value.index}
                del_classname={value.del_classname}
                isHover={value.ishover}
            />
        );
    });
    return (
        <ul className="myList">
            {list}
        </ul>
    )
}
export default List;