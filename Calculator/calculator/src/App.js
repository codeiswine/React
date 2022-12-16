import { useState } from "react";
import "./styles.css"

function App() {

  const [previousOperand, setPreviousOperand] = useState()
  const [currentOperand, setCurrentOperand] = useState(0)
  const [operation, setOperation] = useState()
  const [equal, setEqual] = useState(false)

  function AC(){
    setEqual(false)
    setPreviousOperand()
    setCurrentOperand(0)
    setOperation()
  }

  function operationSet(e){
    if (equal === true) {
      setOperation(e.target.innerHTML)
    }else{
      setPreviousOperand(currentOperand)
      setCurrentOperand(0)
      setOperation(e.target.innerHTML)
    }
  }

  function currentOperandSet(e){
    if (currentOperand === 0) {
      setCurrentOperand(e.target.innerHTML)
    }else{
      setCurrentOperand(currentOperand + e.target.innerHTML);
    }
  }

  function deci(e){
    if(currentOperand.includes(".")){
      setCurrentOperand(currentOperand);
    }else{
      setCurrentOperand(currentOperand + e.target.innerHTML);
    }
  }

  function result(e){
    if (operation === '+') {
      setEqual(false)
      setPreviousOperand(parseFloat(previousOperand) + parseFloat(currentOperand))
      setCurrentOperand(0)
      setOperation()
    } else if (operation === '-') {
      setEqual(false)
      setPreviousOperand(parseFloat(previousOperand) - parseFloat(currentOperand))
      setCurrentOperand(0)
      setOperation()
    } else if (operation === '*') {
      setEqual(false)
      setPreviousOperand(parseFloat(previousOperand) * parseFloat(currentOperand))
      setCurrentOperand(0)
      setOperation()
    } else if (operation === '÷') {
      setEqual(false)
      setPreviousOperand(parseFloat(previousOperand) / parseFloat(currentOperand))
      setCurrentOperand(0)
      setOperation()
    }
  }

  function ansSet(){
    if (previousOperand) {
      setCurrentOperand(previousOperand)
    }else{
      setCurrentOperand(0);
    }
  }

  function delSet(e){
    if (currentOperand === 0) {
      setCurrentOperand(0)
    }else{
      setCurrentOperand(currentOperand.slice(0, -1));
    }
  }

  
  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand} {operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button onClick={AC}>AC</button>
      <button onClick={ansSet}>Ans</button>
      <button onClick={delSet}>DEL</button>
      <button onClick={(e) => operationSet(e)}>÷</button>
      <button onClick={(e) => currentOperandSet(e)}>1</button>
      <button onClick={(e) => currentOperandSet(e)}>2</button>
      <button onClick={(e) => currentOperandSet(e)}>3</button>
      <button onClick={(e) => operationSet(e)}>*</button>
      <button onClick={(e) => currentOperandSet(e)}>4</button>
      <button onClick={(e) => currentOperandSet(e)}>5</button>
      <button onClick={(e) => currentOperandSet(e)}>6</button>
      <button onClick={(e) => operationSet(e)}>+</button>
      <button onClick={(e) => currentOperandSet(e)}>7</button>
      <button onClick={(e) => currentOperandSet(e)}>8</button>
      <button onClick={(e) => currentOperandSet(e)}>9</button>
      <button onClick={(e) => operationSet(e)}>-</button>
      <button onClick={(e) => deci(e)}>.</button>
      <button onClick={(e) => currentOperandSet(e)}>0</button>
      <button className="span-two" onClick={(e) => result(e)}>=</button>
    </div>
  );
}

export default App;
