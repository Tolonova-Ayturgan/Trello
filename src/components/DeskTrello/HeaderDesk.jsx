import React from 'react'
import { styled } from 'styled-components';
import { AiOutlineStar } from "react-icons/ai";
import { HiOutlineUsers } from "react-icons/hi";
import { LuTrello } from "react-icons/lu";
import { IoIosArrowDown } from 'react-icons/io'
import { GoRocket } from 'react-icons/go'
import { BsFillLightningFill } from 'react-icons/bs'
import { BiFilter } from 'react-icons/bi'
import { RiUserShared2Line } from 'react-icons/ri'
import { FaUserCircle } from 'react-icons/fa'
import { BsThreeDots } from 'react-icons/bs'
import DeskInput from './DeskInput';
import DeskInputTwo from './DeskInputTwo';
import ModalList from '../modalWindow/ModalList';


const HeaderDesk = ( {setModal} ) => {
  return (
    <div>
      <MainDiv>
        <DivStyleOwn>
            <StyleH1>Ayturgan</StyleH1>
            <ButtonStar> <AiOutlineStar style={{fontSize: "17px"}}/> </ButtonStar>
            
            <StyleP> <ButtonStar> <HiOutlineUsers style={{fontSize: "17px"}}/> </ButtonStar>  Для рабочего пространства</StyleP>
            <ButtonDesk> <LuTrello/> По доске </ButtonDesk>
            <ButtonStar> <IoIosArrowDown style={{fontSize: "20px"}}/> </ButtonStar>
        </DivStyleOwn>

        <div>
          <div style={{display: "flex", alignItems: "center"}}>
            <ButtonStar><StyleP> <GoRocket/> Улучшения</StyleP></ButtonStar> 
            <ButtonStar><StyleP> <BsFillLightningFill/> Автоматизация</StyleP></ButtonStar> 
            <ButtonStar><StyleP> <BiFilter/> Фильтр</StyleP></ButtonStar> 
            <ButtonStar> <FaUserCircle style={{fontSize: "25px", color: "#5656f3"}}/> </ButtonStar> 
            <ButtonDesk> <RiUserShared2Line style={{fontSize: "16px"}}/> Поделиться</ButtonDesk>
            <ButtonStar> <BsThreeDots style={{fontSize: "20px"}}/> </ButtonStar>
          </div>
        </div>

      </MainDiv>
      <DeskInputTwo/>

    </div>
  )
}

export default HeaderDesk



const MainDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    backdrop-filter: blur(14px);
    width: 1248px;
`
const DivStyleOwn = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 540px;
    height: 60px;
`

const StyleH1 = styled.h1`
    font-size: 20px;
    color: white;
`
const StyleP = styled.h1`
    color: white;
    font-size: 15px;
    font-weight: 400;
`

const ButtonStar = styled.button`
    background: none;
    color: white;
    border: none;
    font: 20px;
`

const ButtonDesk = styled.button`
    border-radius: 4px;
    border: none;
    width: 110px;
    height: 36px;
`