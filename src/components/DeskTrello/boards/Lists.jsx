import React, { useState } from 'react'
import Card from './Card';
import { styled } from 'styled-components';
import { BsThreeDots } from 'react-icons/bs'
import { FaTrain } from 'react-icons/fa'
import { RiDeleteBin6Fill } from 'react-icons/ri'
import ModalHeader from '../../modalWindow/ModalHeader';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../../store/slicces/RegistrTodo';
import ModalList from '../../modalWindow/ModalList';


const Lists = ({ title, cards }) => {

    const [cardText, setCardText] = useState('');
    const [listCards, setListCards] = useState(cards);
    const [openModal, setOpenModal] = useState(false)
    const [openModalList, setOpenModalList] = useState(false)
    const [state, setState] = useState("")

    const dispatch = useDispatch()
    const todoRegistrations = useSelector((state) => state.todoRegistrations)
    console.log(todoRegistrations);
  

    const addCard = () => {
      setListCards([...listCards, cardText]);
      setCardText('');
    };

  
    const handleCardTextChange = (e) => {
      setCardText(e.target.value);
    };
  
    const openModalTrain = () =>{
      setOpenModal((prev) => !prev)
    }

    const modalList = () =>{
      setOpenModalList((prev) => !prev)
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
      <DivTrain>
      <RevDiv>
        <DivMain>
            <TextArea></TextArea>
            <ButtonThree onClick={modalList}> <BsThreeDots/> </ButtonThree>
        </DivMain>

        {listCards.map((card, index) => (
            <Card key={index} text={card} />
            ))}

          <MapDel>
            <TextAreaInput onKeyDown={enteredvalue} type="text" value={cardText}  onChange={handleCardTextChange} placeholder='Ввести заголовок страницы'  /> 
            {/* <button><RiDeleteBin6Fill style={{backgroundColor: "white"}}/></button> */}
          </MapDel>
        <DivDob>
            <ButtonPlus onClick={addCard}> + Добавить карточку </ButtonPlus>
            <ButtonThree onClick={openModalTrain}> <FaTrain/> </ButtonThree>
          </DivDob>

      </RevDiv>
        {openModal &&<ModalHeader/>}
      </DivTrain>
      {openModalList && <ModalList  modal={setOpenModalList}/>}
    </DivHeader>
  )
}

export default Lists

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
const DivTrain = styled.div`
    display: flex;
    flex-direction: column;
`

const DivHeader = styled.div`
    display: flex;
    align-items: self-start;

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
    background-color: #343436;
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

const MapDel = styled.div`
  display: flex;
  justify-content: space-between;
`