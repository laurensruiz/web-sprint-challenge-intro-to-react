// Write your Character component here
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import Details from "./Details";
import styles from "styled-components"

const Styled = styled.div`
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
  