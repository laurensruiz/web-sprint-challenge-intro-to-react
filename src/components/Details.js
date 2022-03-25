import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';


const Styled = styled.div`
background-color: white;
background-opacity: 50%;
`
export default function Details(props) {
    const {info, className} = props
   
      

    return (
        <Styled className={className}>
            <p></p>
            <p>Gender: {info.gender}</p>
            <p></p>
        </Styled>
    )
}

