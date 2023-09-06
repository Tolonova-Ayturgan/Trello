import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx'
import { styled } from 'styled-components'


const ChangeBoard = () => {

      
  return (
    <div>
      <div>
        <ModalDiv>
            <TextAreaInput type="text" />
            <DivButtons>
                <ButtonAdd >Добавить список</ButtonAdd>
                <ButtonCross> <RxCross1 style={{paddingRight: "8px", fontSize: "18px"}}/> </ButtonCross>
            </DivButtons>
        </ModalDiv>
      </div>
    </div>
  )
}

export default ChangeBoard


const ModalDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #111119;
    border-radius: 11px;
    margin: 10px ;
    width: 260px;
    padding-bottom: 10px;

`

const TextAreaInput = styled.input`
    border-radius: 5px;
    background-color: #282626;
    height: 25px;
    width: 230px;
    color: white;
    text-align: start;
    margin: auto;
    margin: 8px;
    border: none;
    &:focus{
      border: 1px solid blue;
      background-color: #403f3f;
    }
`

const DivButtons = styled.div`
    display: flex;
    align-items: center;
    width: 239px;
`

const ButtonAdd = styled.button`
    background-color: #6161c7;
    border-radius: 6px;
    width: 150px;
    height: 35px;
    border: none;
    &:hover{
        background-color: #7272ae;
    }
    &:active{
        background-color: #9a9aa4;
    }
`

const ButtonCross = styled.button`
    background-color: #111119;
    border: none;
    color: white;
`