import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled, { keyframes } from 'styled-components';


const Styled = styled.div`
.element-visible { display: block }
.element-hidden { display: none }

`
export default function Details(props) {
    const {info, className} = props
   
      

    return (
        <Styled className={className}>
        <p>{info.gender}</p>
        </Styled>
    )
}

