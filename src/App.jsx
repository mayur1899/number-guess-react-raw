import { useEffect, useState } from "react";
import "./App.css";
import Heading from "./components/Heading";
import ReButton from "./components/ReButton";
import { driver } from "driver.js";
import 'driver.js/dist/driver.css'

const external_styles = {
  main_div: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    width: '100%',
    backgroundColor: '#000531',
    flexDirection: 'column',
  },
};

const randomNum = () => {
  return Math.floor(Math.random() * 20) + 1;
}

function App() {
  const [mystryNum, setMystryNum] = useState(randomNum())
  const [count, setCount] = useState(0)
  const [headingText, setHeadingText] = useState('GUESS THE NUMBER')
  const [guessed, setGuessed] = useState(false) 

  const driverObj = driver({
    showProgress: true,
    steps: [
      {
        element: '#my-head-div',
        popover: {
          title: 'Heading Screen',
          description: 'This is Your Main Screen Which shows your progress'
        }
      },
      {
        element: "#my-re-btn-div",
        popover: {
          title: "Regenerate Button",
          description: 'This Renerating Button Regnerates the number'
        }
      },
      {
        element: '#sub-btn', 
        popover: {
          title: 'Decriment Button',
          description: 'This Button Decreases you count value'
        }
      },
      {
        element: '#add-btn', 
        popover: {
          title: 'Increament Button',
          description: 'This Button Increases your count value'
        }
      },
      {
        element: '#num-screen', 
        popover: {
          title: 'Number Screen',
          description: "This Screen Shows your count's current value"
        }
      },
      {
        element: '#submit-btn-div',
        popover: {
          title: 'Submit Button',
          description: "This Button Submits your count value"
        }
      }
    ]
  });  

  useEffect(()=>{driverObj.drive()}, [])

  const countInc = () => {
    if (guessed == true){
      setCount(count)
    }else{
      if (count == 20) {
        setCount(20)
      }else {
        setCount(count + 1)
      }
    }
  }

  const countDec = () => {
    if (guessed == true){
      setCount(count)
    }else{
      if (count == 0) {
        setCount(0)
      }else {
        setCount(count - 1)
      }
    }
  }

  const regnerate = () => {
    setMystryNum(randomNum())
    setCount(0)
    setGuessed(false)
    setHeadingText("GUESS THE NUMBER")
  }

  const submit = () => {
    if (guessed == true){
      setHeadingText("You Guessed Right")
    }else if (count  > mystryNum){
      setHeadingText("Number is Small")
    }else if (count < mystryNum) {
      setHeadingText("Number is Big")
    }else if (count == mystryNum) {
      setHeadingText("You Guessed Right")
      setGuessed(true)
      setCount(0)
    }
  }

  return (
    <>
      <div style={external_styles.main_div}>

        <div id="my-head-div"><Heading text={headingText}/></div>

        <div id="re-btn-div">
          <div id="my-re-btn-div"><ReButton func={()=>regnerate()}/></div>
          <h1>Regnerate Number</h1>
        </div>

        <div id="num-screen-div">
          <button id="sub-btn" onClick={()=>countDec()}>-</button>
          <h1 id="num-screen">{count}</h1>
          <button id="add-btn" onClick={()=>countInc()}>+</button>
        </div>

        <div id="submit-btn-div">
          <button id="submit-btn" onClick={()=>submit()}>SUBMIT</button>
        </div>

        <div>
          {guessed && <div id="emoji">🤩</div>}
        </div>

      </div>
    </>
  );
}

export default App;
