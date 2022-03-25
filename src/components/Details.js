import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';


const Styled2 = styled.div`
background-color: rgba(255, 255, 255, 0.52);
width: 100%;
margin: 0 auto;
padding: 0.25%;
font-size: 50%;

`

export default function Details(props) {
    const {info, className} = props
   
    return (
        <Styled2 className={className}>
            <p>Birth Year: {info.birth_year}</p>
            <p>Gender: {info.gender}</p>
            <p>Height: {info.height}</p>
            <p></p>
        </Styled2>
    )
}

