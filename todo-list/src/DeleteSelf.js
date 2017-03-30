import React from 'react';

const DeleteSelf = (props) => {
  const delSelf = () => {
    props.callbackDel(props.index)
  }
  return (
    <span
      onClick={delSelf}
      className={props.clasame}
    >
      X
    </span>
  );
}

export default DeleteSelf;