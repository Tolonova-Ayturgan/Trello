import React from 'react'
import { RxCross1 } from 'react-icons/rx'
import { BsArrowUpRight } from 'react-icons/bs'
import { styled } from 'styled-components'


const ModalList = ({ modal}) => {

    const closeModal = () =>{
        modal(false)
    }

    
  return (
    <MainDivModal>
        <DivButton>
            <p>Действие со списком  </p>
            <ButtonCross onClick={closeModal}> <RxCross1/> </ButtonCross>
        </DivButton>

      <div>

        <DivP>
            <p>Добавить карточку...</p>
            <p>Копировать список...</p>
            <p>Переместить карточку...</p>
            <p>Подписаться</p>

            <Line></Line>

            <p>Когда карточка добавлена в колонку...</p>
            <p>Каждый день сортировать по..</p>
            <p>Каждый понедельник, сортировать по...</p>
            <p>Создать правило <BsArrowUpRight/> </p>

            <Line></Line>

            <p>Переместить все карточки списка...</p>
            <p>Архивировать все карточки списка...</p>

            <Line></Line>

            <p>Архивировать список</p>

        </DivP>
      </div>
    </MainDivModal>
  )
}

export default ModalList


const MainDivModal = styled.div`
    position: absolute;
    border-radius: 10px;
    width: 320px;
    height: 510px;
    background-color: #2d2b30;
    color: white;
    font-size: 14.7px;
    margin-left: 70px;
`

const DivButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const DivP = styled.div`
    text-align: start;
    padding-left: 15px;
`

const Line = styled.div`
    background-color: #d5d4d8;
    width: 290px;
    height: 0.7px;
`

const ButtonCross = styled.button`
      background-color: #2d2b30;
      border: none;
      color: white;
      border-radius: 2px;
      margin-left: 3px;
      font-size: 16px;
      &:hover{
        background-color: #5c5c5d;
      }
`
