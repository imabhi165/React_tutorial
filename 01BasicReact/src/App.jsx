import React, { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  const addItem = () => {
    console.log("Clicked:", counter + 1);
    setCounter(counter + 1);
  };

  const removeItem = () => {
    console.log("Value Removed:", counter - 1);
    setCounter(counter - 1);
  };

  return (
    <div>
      <h1>Cart: {counter}</h1>

       <br /> <br />

      <button onClick={addItem}>Add to Cart</button>
      <button onClick={removeItem}>Remove from Cart</button>
    </div>
  );
}

export default App;
