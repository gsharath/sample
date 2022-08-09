import React from 'react';

const RemoveButtonRenderer = (props) => {

  const buttonClicked = () => {
    props.removeUser(props.data);
  };

  return (
    <span>
      <button onClick={() => buttonClicked()}>Remove</button>
    </span>
  );
};
export default RemoveButtonRenderer;