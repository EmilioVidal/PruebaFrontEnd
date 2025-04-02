import { useState } from 'react';
import './counterS.css';

function Counter() {
    const [count, setCount] = useState(0);
    const [color, setColor] = useState("green");
  
    const colors = ["red", "blue", "yellow", "green", "purple"];
    
    const handleClick = () => {
      setCount(count + 1);
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    };
  
    return (
      <div className="counter-container">
        <h2 className="counter-title">Clics registrados</h2>
        <p className="counter-number">{count}</p>
        <button
          onClick={handleClick}
          className="counter-button"
          style={{ backgroundColor: color }}
        >
          ¡Haz clic aquí!
        </button>
      </div>
    );
}

export default Counter;
