import styled from '@emotion/styled'
import React from 'react'

const ModalHeader = () => {
  return (
    <div>
        <MainModalDiv>
            <H5>Шаблоны карточек</H5>
            <P>У вас пока нет шаблонов. Создайте шаблон, чтобы вам было проще копировать карточки.</P>
            <button>Создать новый шаблон</button>
        </MainModalDiv>
    </div>
  )
}

export default ModalHeader


const MainModalDiv = styled.div`
  position: absolute;
  background-color: #282626;
  color: white;
  border-radius: 11px;
  margin: 15px ;
  width: 290px;
  padding-bottom: 10px;
`

const H5 = styled.h5`
    font-weight: 400;
`

const P = styled.p`
    font-size: 16px;
`