import "./App.css"
import { useState } from "react";
import Card from "./components/card";
import WarningLine from "./components/warning";
function App() {

  const [counter, setCounter] = useState(1)
  const [warningCount, setWarningCount] = useState(1)
  const AddValue = () => {
    warningCount < 21 ? setWarningCount(warningCount + 1) : setWarningCount(warningCount)
    counter < 20 ?
      setCounter(counter + 1) : setCounter(counter)

  }
  const RemoveValue = () => {
    warningCount > -1 ? setWarningCount(warningCount - 1) : setWarningCount(warningCount)

    counter > 0 ? setCounter(counter - 1) : setCounter(counter)
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Counter</h1>
        <h2> Counter : {counter}</h2>
        {console.log(warningCount)}{warningCount < 0 ? <WarningLine counter={warningCount}></WarningLine> : ""}
        {warningCount > 20 ? <WarningLine counter={warningCount}></WarningLine> : ""}

        <div className="container">

          <Card button="Boost me" onClick={AddValue} title="Add Card" ></Card>
          <Card button="Reduce me" onClick={RemoveValue} title="Deduct Card" ></Card>
        </div>
      </header>


    </div>
  );
}

export default App;
