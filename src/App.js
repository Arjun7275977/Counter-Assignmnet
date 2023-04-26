import React, { useState } from 'react';
import './Counterapp.css'; // import CSS file

 function App() {
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    setCount(count + 1);
  }

  const decreaseCount = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  }

  return (
    <div className="counter">
      <h1 className="count">Count: {count}</h1>
      <div className="button-container">
        <button className="increase-button" onClick={increaseCount}>Increase</button>
        <button className="decrease-button" onClick={decreaseCount}>Decrease</button>
      </div>
    </div>
  );
}

export default App;
