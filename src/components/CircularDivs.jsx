import React from 'react'

const CircularDivs = (props) => {
  return (
    <div id={props.id} className={props.class} onClick={props.buttonClickHandler}>
      {props.title}
    </div>
  )
}

export default CircularDivs