import React from 'react'
import { styled } from 'styled-components'


const Card = ({text}) => {
  return (
    <div>
      <Text>
        {text}

      </Text>
    </div>
  )
}

export default Card


const Text = styled.textarea`
    border-radius: 5px;
    background-color: #282626;
    border: none;
    width: 230px;
    color: white;
    text-align: start;
    margin: auto;
    border: none;
    margin: 2px;
    &:focus{
      border: 1px solid blue;
      background-color: #403f3f;
    }
`