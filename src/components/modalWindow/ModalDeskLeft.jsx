import React from 'react'
import { styled } from 'styled-components'
import TrellDesk from '../assets/img/trelloDesk.png'

const ModalDeskLeft = () => {
  return (
    <div>
      <div>
        <ModalDiv>
            <h4>Создать доску</h4>
            <DivImg></DivImg>
            <p>Фон</p>
        </ModalDiv>
      </div>
    </div>
  )
}

export default ModalDeskLeft


const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 280px;
    height: 400px;
    background-color: #2e2c2c;
    z-index: -1;
    color: white;
`

const DivImg = styled.div`
    background-image: url(${TrellDesk});
    height: 140px;
    width: 200px;
    background-size: 100%;
    background-repeat: no-repeat;
    border-radius: 3px;
`