import React, { useState } from 'react'
import Input from '../../UI/Input'
import { styled } from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../../store/slicces/RegistrTodo'
import { BsThreeDots } from 'react-icons/bs'
import { FaTrain } from 'react-icons/fa'
import { AiOutlinePlus } from 'react-icons/ai'
import ModalHeader from '../modalWindow/ModalHeader'


const DeskInput = () => {

  const [state, setState] = useState("")
  const [input, setInput] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [openTitle, setOpenTitle] = useState(false)
  const [openButton, setOpenButton] = useState(false)

  const dispatch = useDispatch()
  const todoRegistrations = useSelector((state) => state.todoRegistrations)
  console.log(todoRegistrations);
  console.log(state);

  const handeInput = () =>{
    setInput(true)
  }

  const handeButton = () =>{
    setOpenButton(true)
  }

  const openTitleButton = () =>{
    setOpenTitle(true)
  }

  const openModalTrain = () =>{
    setOpenModal((prev) => !prev)
  }



  const enteredvalue = (e) => {
    if(e.key === "Enter"){
      setState(e.target.value)
      dispatch(addTodo(state, Math.random().toString()))
      setState("")
    }
  }



  return (
    <DivHeader>
      <RevDiv>
        <DivMain>
          <TextArea></TextArea>
          <ButtonThree> <BsThreeDots/> </ButtonThree>
        </DivMain>

              {todoRegistrations.map((el) => {
                return(
                  <div>
                    <textarea>{el.text}</textarea>
                  </div>
                )
              })}
            {input && <TextAreaInput></TextAreaInput>}

          <DivDob>
            <ButtonPlus onClick={handeInput}> + Добавить карточку </ButtonPlus>
            <ButtonThree onClick={openModalTrain}> <FaTrain/> </ButtonThree>
          </DivDob>
      </RevDiv>
      {openModal &&<ModalHeader/>}

          {openTitle && <Input onKeyDown={enteredvalue}></Input>}
    </DivHeader>

          
  )
}

export default DeskInput


const RevDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #111119;
  border-radius: 11px;
  margin: 10px ;
  width: 260px;
  padding-bottom: 10px;
  
`


const DivHeader = styled.div`
    display: flex;
    align-items: self-start;

`
const ButtonAdd = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    font-weight: 400;
    color: black;
    border: none;
    background-color: #c2c2c9;
    border-radius: 6px;
    width: 260px;
    margin: 10px;
    height: 45px;

    &:hover{
      background-color: #7f7f81;
    }
    &:active{
      -webkit-transform: translate3d(0em, 0.75em);
      transform: translate3d(0, 0.75);
    }
    
`

const DivMain = styled.div`
  display: flex;
  justify-content: space-between;
  width: 240px;
  height: 25px;
  margin: 16px;
`

const ButtonThree = styled.button`
      background-color: #111119;
      border: none;
      color: white;
      border-radius: 2px;
      margin-left: 3px;
      &:hover{
        background-color: #3b3b3b;
      }
`


const ButtonPlus = styled.button`
    text-align: start;
    border: 1px solid red;
    width: 227px;
    font-weight: 200;
    font-size: 13px;
    height: 30px;
    border-radius: 2px;
    background-color: #111119;
    border: none;
    color: white;
    &:hover{
        background-color: #3b3b3b;
      }

`

const DivDob = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
  height: 25px;
  margin: 8px;
`

const SpanMap = styled.textarea`
  color: white;
  display: flex;
  width: 235px;
  height: 28px;
  border-radius: 4px;
  font-size: 14.5px;
  background-color: #262331;
  padding-left: 5px;
`

const DivMap = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 5px;
`

const TextArea = styled.textarea`
    border-radius: 2px;
    background-color: #111119;
    border: none;
    width: 200px;
    color: white;
    
    &:focus{
      border: 1px solid blue;
      background-color: #282626;
    }

`
const TextAreaInput = styled.textarea`
    border-radius: 5px;
    background-color: #282626;
    border: none;
    width: 230px;
    color: white;
    text-align: start;
    margin: auto;
    border: none;
    &:focus{
      border: 1px solid blue;
      background-color: #403f3f;
    }
`