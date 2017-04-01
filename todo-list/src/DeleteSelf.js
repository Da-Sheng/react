import React from 'react';

const DeleteSelf = (props) => {
  const delSelf = () => {
    props.callbackDel(props.index)
  }
  let isHover = props.isHover;
  let classname = '';
  if(isHover){
    classname = 'delete-self visibility-visible';
  }else{
    classname = 'delete-self visibility-hidden';
  }
  return (
    <span
      onClick={delSelf}
      className={classname}
    >
      X
    </span>
  );
}

export default DeleteSelf;