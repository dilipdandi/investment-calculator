import { useState } from "react";
import Header from "./components/Header"
import UserInput from "./components/UserInput"
import Results from "./components/Results";



let userValue={
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const[userInput, setUserinput] = useState(userValue);

  const inputIsValid = userInput.duration >= 1;
    
    function handleChange(inputidentifier, newValue){
        setUserinput(prevUserInput => {
            return{
                ...prevUserInput,
                [inputidentifier] : +newValue
            }
        })
    }
  return (
    <>
     <Header/>
     <UserInput userInput={userInput} onChange={handleChange}/>
     {!inputIsValid && <p className="center">Please enter a duration greater than zero.</p>}
     {inputIsValid && <Results input={userInput}/>}
    </>
  )
}

export default App
