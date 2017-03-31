import React from 'react';

const DeleteSelf = (props) => {
  const delSelf = () => {
    props.callbackDel(props.index)
  }
  return (
    <span
      onClick={delSelf}
      className={props.del_classname}
    >
      X
    </span>
  );
}

export default DeleteSelf;