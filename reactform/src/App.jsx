import "./App.css";
import { useState } from "react";
import Card from "./components/card";
import WarningLine from "./components/warning";
import Password from "./components/password";
function App() {
  const [counter, setCounter] = useState(1);
  const [warning, setWarning] = useState(false)
  const AddValue = () => {
    if (counter >= 20) {
      setWarning(true)
      return;
    }
    setWarning(false)
    setCounter(counter + 1);
  };
  const RemoveValue = () => {

    if (counter <= 0) {
      setWarning(true)
      return;
    }
    setCounter(counter-1);
    setWarning(false)
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Basic Counter</h1>
        <h2> Counter : {counter}</h2>

        <WarningLine counter={counter} warning={warning}></WarningLine>
        <div className="container">
          <Card button="Boost me" onClick={AddValue} title="Add Card"></Card>
          <Card
            button="Reduce me"
            onClick={RemoveValue}
            title="Deduct Card"
          ></Card>
          <Password></Password>
        </div>
      </header>
    </div>
  );
}

export default App;
