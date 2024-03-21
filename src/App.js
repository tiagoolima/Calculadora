import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";

import { Container, Content, Row } from "./styles";

const App = () => {

  const [currentNumber, setCurrentNumber] = useState("0");
  const [firstNumber, setFirstNumber] = useState("0");
  const [operation, setOperation] = useState("");
  const [isPositive, setIsPositive] = useState(true);


  const handleOnClean = () => {
    setCurrentNumber("0");
    setFirstNumber("0");
    setOperation("");
  }
  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === "0" ? "" : prev}${number}`)
  }

  const handleSumNumbers = () => {
    if (firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("+");
    } else {
      const sum = Number(firstNumber) + Number(currentNumber);
      setCurrentNumber(String(sum));
      setOperation("");
    }
  }

  const handleSubNumbers = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("-");
    } else {
      const sub = Number(firstNumber) - Number(currentNumber);
      setCurrentNumber(String(sub));
      setOperation("");
    }
  }

  const handleMultiNumber = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("*");
    } else {
      const multi = Number(firstNumber) * Number(currentNumber);
      setCurrentNumber(String(multi));
      setOperation("");
    }
  }

  const handleDivisionNumber = () => {
    if(firstNumber === "0") {
      setFirstNumber(String(currentNumber));
      setCurrentNumber("0");
      setOperation("/");
    } else {
      const division = Number(firstNumber) / Number(currentNumber);
      setCurrentNumber(String(division));
      setOperation("");
    }
  }

  const handleSignChange = () => {
    setIsPositive(prevState => !prevState);
    setCurrentNumber(prevCurrentNumber => {
      if (prevCurrentNumber === '0') return '0';
      if (isPositive) {
        return '-' + prevCurrentNumber;
      } else {
        return prevCurrentNumber.replace('-', '');
      }
    });
  };


  const handleEquals = () => {
    if (firstNumber !== "0" && operation !== "" && currentNumber !== "0"){
      switch(operation){
        case "+":
          handleSumNumbers();
          break;
          
        case "-":
          handleSubNumbers();
          break;
        
        case "*":
          handleMultiNumber();
          break;

        case "/":
          handleDivisionNumber();
          break;
          default: break;
      }
    }
  }


  return (
    <Container>
      <Content>
        <Input value={currentNumber}/>
        <Row>
          <Button label="AC" onClick={handleOnClean}/>
          <Button label="+/-" onClick={(handleSignChange)}/>
          <Button label="%" onClick={() => handleAddNumber("")}/>
          <Button label=":" onClick={(handleDivisionNumber)}/>
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber("7")}/>
          <Button label="8" onClick={() => handleAddNumber("8")}/>
          <Button label="9" onClick={() => handleAddNumber("9")}/>
          <Button label="X" onClick={(handleMultiNumber)}/>
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber("4")}/>
          <Button label="5" onClick={() => handleAddNumber("5")}/>
          <Button label="6" onClick={() => handleAddNumber("6")}/>
          <Button label="-" onClick={(handleSubNumbers)}/>
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber("1")}/>
          <Button label="2" onClick={() => handleAddNumber("2")}/>
          <Button label="3" onClick={() => handleAddNumber("3")}/>
          <Button label="+" onClick={(handleSumNumbers)}/>
        </Row>
        <Row>
          <Button label="0" onClick={() => handleAddNumber("")}/>
          <Button label="," onClick={() => handleAddNumber("")}/>
          <Button label="=" onClick={(handleEquals)}/>
        </Row>
      </Content>
    </Container>
  );
}

export default App;
