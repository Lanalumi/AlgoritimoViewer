import { useState, useEffect } from "react";

const Button = ({onClick, children, isDisabled }) => {
  return(
    <button
    onClick={onClick}
    disabled={isDisabled}
    >
    {children}
    </button>
  );
};

function App() {

 const [count, setCount] = useState(0);
 
 
   return (
    <div>
      <button onClick={() => setCount(count + 1)}>+</button>
      <p>{count}</p>
      <Button
        onClick={() => setCount(count - 1)}
        isDisabled={count <=0}
      >
      -
      </Button>
    </div>
  )
}
export default App
