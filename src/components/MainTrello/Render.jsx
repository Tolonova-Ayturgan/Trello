import React from 'react'
import HeaderTrello from './HeaderTrello'
import DeskLeft from './DeskLeft'
import { styled } from 'styled-components'
import HeaderDesk from '../DeskTrello/HeaderDesk'

const Render = () => {
  return (
    <div>
      <HeaderTrello/>
            <StyleOcean>
                    <DeskLeft/>
                    <HeaderDesk />
            </StyleOcean> 
    </div>
  )
}

export default Render


const StyleOcean = styled.div`
    display: flex;
    background-image: url("https://images.unsplash.com/photo-1685472065771-f57d15b4c585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=433&q=80");
    height: 100%;
    width: 100%;
    background-size: 100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
`

