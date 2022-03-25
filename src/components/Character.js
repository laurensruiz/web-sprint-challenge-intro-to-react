// Write your Character component here
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Details from "./Details";
import styles from "styled-components"

const Styled = styled.div`
background-color: rgba(255, 255, 255, 0.52);
width: 70%;
margin: 0 auto;
font-size: 200%;

button {
    padding: 1%;
    margin-bottom: 2%;
}

h1 {
    padding:2%;
}
.element-visible { 
    display: block }
.element-hidden { 
    display: none }

`
export default function Character({info}) {
  const [visible, setVisible] = useState(false)
    
return(
    <Styled className='character' >
        <p>{info.name}</p>
        <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
        {<Details info={info} className={visible ? 'element-visible' : 'element-hidden'}/>}
    </Styled>
     )
}
  