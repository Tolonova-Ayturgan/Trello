import React, { useState } from 'react'
import { styled } from 'styled-components'
import { AiOutlinePlus } from 'react-icons/ai'
import Lists from './boards/Lists'
import { useDispatch, useSelector } from 'react-redux'
import ModalList from '../modalWindow/ModalList'


const DeskInputTwo = () => {

    const dispatch = useDispatch()
    const todoRegistrations = useSelector((state) => state.todoRegistrations)
    console.log(todoRegistrations);
  

    const [lists, setLists] = useState([]);

    const addList = () => {
      setLists([...lists, { title: `List ${lists.length + 1}`, cards: [] }]);
    };

    
  
  return (
    <div>
      <DivMain>
            {lists.map((list, index) => (
                <Lists key={index} title={list.title} cards={list.cards} />
                ))}
                <ButtonAdd onClick={addList}> <AiOutlinePlus style={{paddingRight: "8px", fontSize: "18px"}}/> Добавьте еще одну колонку </ButtonAdd>
      </DivMain>
    </div>
  )
}

export default DeskInputTwo


const DivMain = styled.div`
    display: flex;
    align-items: center;
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

