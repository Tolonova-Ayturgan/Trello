import React from 'react'
import { Button } from '@mui/material';
import styled from 'styled-components';

const Buttons = (props) => {
  return (
    <div>
        <StyledButton className={props.className}  onClick={props.onClick} variant={props.variant} disabled={props.disabled} {...props} >{props.children}</StyledButton>    
    </div>
  )
}

export default Buttons

const StyledButton = styled.button`
  width: ${(props) => props.width || "320px"};
  height: ${(props) => props.height || "40px"};
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
  background: ${(props) => props.background || "white"};
  border: ${(props) => props.border || "0px solid"};
  color: ${(props) => props.color || "black"};
  border-radius: ${(props) => props.borderRadius || "5px"};
  font-weight: ${(props) => props.fontWeight || "400"};
  cursor: pointer;

  &:disabled{
        cursor: no-drop;
    }
`