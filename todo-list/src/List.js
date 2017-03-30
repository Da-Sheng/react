import React from "react";
import Item from './Item';

const List = (props) => {
    let filter = props.filter;
    const todoArr = props.todoArr;
    let arr = [];
    //  const todoArr = props.todoArr.filter(function(value){
    //                     return value.status === filter;
    //                 });
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
    let list = arr.map((value, index) => {
        return (
            <Item
                key={index}
                status={value.status}
                tarValue={value.content}
                callbackDid={props.callbackDid}
                callbackDel={props.callbackDel}
                index={index}
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