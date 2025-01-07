import React, { useState } from 'react';

const AppFunction = () => {
  const [state, setState] = useState({
    count: 0,
    text: 'Initial Text',
  });

  const handleClick = () => {
    setState((prevState) => ({
      ...prevState, // Giữ nguyên các giá trị cũ trong state
      count: prevState.count + 1,
    }));
  };

  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Text: {state.text}</p>
      <button onClick={handleClick}>Increase Count</button>
    </div>
  );
};

export default AppFunction;
