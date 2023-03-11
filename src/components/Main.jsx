import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useGlobalContext } from "../content";
import "../styles/Main.css";
import CircularDivs from "./CircularDivs";

const Main = () => {

  const navigate = useNavigate()

  const { setColor, divList, name, setName } = useGlobalContext()

  const [displayIndicator, setDisplayIndicator] = useState(false);

  

  function delay(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }

  const buttonClickHandler = async (e) => {
    console.log(e)
    setName(e.currentTarget.innerText)
    console.log(name)
    setColor(e.currentTarget.id)
    e.currentTarget.classList.add("active");
    await delay(3000);
    setDisplayIndicator(true);
    await delay(5000);
    navigate("/page")
  };
 
  return (
    <div>
        <div>
          {
          divList.map((div) => {
            return <CircularDivs  key={div.id} id={div.id} buttonClickHandler={buttonClickHandler} title={div.title} class={div.class}></CircularDivs>
          })
          }
          {
            displayIndicator ? <div id="hideMeAfter5Seconds">
            <div id="indicator-title">
              This will take you to your designated page {name}
            </div>
            <div className="Div"></div>
            <div className="Div"></div>
            <div className="Div"></div>
            <div className="Div"></div>
            <div className="Div"></div>
          </div> :
          <div></div>
          }
        </div>
    </div>
  );
};

export default Main;
