import React from 'react'
import HeaderMenu from '../assets/icons/header_menu'
import { styled } from 'styled-components'
import downIcon from '../assets/icons/strelka.png'
import { FaUserCircle } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'

const HeaderTrello = () => {
  return (
        <div>
            <div style={{display: "flex", alignItems: "center", background: "#22272B",minHeight: "48px",maxHeight: "48px",overflow: "hidden",}}>
                <HeaderMenu/>
                <ImgLogo src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png" alt="img" />

                <div
        style={{
          display: "flex",
          alignItems: "center",
          // justifyContent: "space-around",
          marginLeft: "17px",
        }}
      >
        <StyleButtonHover>
          <StyleButton>
            Рабочие пространство
            <IoIosArrowDown style={{marginLeft: "8px",fontSize: "18px"}}/>
          </StyleButton>
        </StyleButtonHover>
        <StyleButtonHover>
          <StyleButton>
            Недавние
            <IoIosArrowDown style={{marginLeft: "8px",fontSize: "18px"}}/>
          </StyleButton>
        </StyleButtonHover>
        <StyleButtonHover>
          <StyleButton>
            В избранном
            <IoIosArrowDown style={{marginLeft: "8px",fontSize: "18px"}}/>
          </StyleButton>
        </StyleButtonHover>
        <StyleButtonHover>
          <StyleButton>
            Шаблоны
            <IoIosArrowDown style={{marginLeft: "8px",fontSize: "18px"}}/>
          </StyleButton>
        </StyleButtonHover>
        <button
          style={{
            width: "74px",
            height: "32px",
            color: "#1D2125",
            background: "#579DFF",
            border: "none",
            borderRadius: "3px",
          }}
        >
          Создать
        </button>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
           justifyContent:'end',
        //   marginLeft: "250px",
        }}
      >
        <InputDivStyle>
          <StyleSvg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            role="presentation"
          >
            <path
              d="M16.436 15.085l3.94 4.01a1 1 0 01-1.425 1.402l-3.938-4.006a7.5 7.5 0 111.423-1.406zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"
              fill="currentColor"
              fill-rule="evenodd"
            ></path>
          </StyleSvg>
          <Inputstyle placeholder="Поиск" type="text" class="input" />
        </InputDivStyle>
      <div style={{display:'flex', alignItems:'end', justifyContent:'space-around', marginLeft:'200px'}}>
      <svg
          width="24"
          color="#8C9BAB"
          height="24"
          viewBox="0 0 24 24"
          role="presentation"
        >
          <path
            d="M6.586 17.829a2 2 0 002.829 0L6.585 15a2 2 0 000 2.829zm4.798-12.351A5.036 5.036 0 0114.954 4c.972 0 1.945.28 2.788.839.02-.026.043-.05.066-.074a1.01 1.01 0 111.354 1.494 5.048 5.048 0 01-.64 6.356l-.725.725c-.782.783-1.813 2.21-2.312 3.207l-1.509 3.016c-.249.5-.773.584-1.171.187l-8.556-8.555c-.397-.397-.308-.924.187-1.172l3.017-1.508c.989-.494 2.42-1.526 3.206-2.312l.725-.725zm2.739 9.63c.517-.975 1.568-2.396 2.354-3.182l.725-.726a3.048 3.048 0 00.387-3.835c-.19-.286-.718-.766-.859-.86A3.043 3.043 0 0015.047 6a3.04 3.04 0 00-2.156.892l-.95.951c-.784.785-2.219 1.82-3.201 2.311l-1.74.87 6.07 6.069 1.053-1.985z"
            fill="currentColor"
            fill-rule="evenodd"
          ></path>
        </svg>
        <svg
          width="24"
          color="#8C9BAB"
          height="24"
          style={{margin:"0px 10px "}}
          role="presentation"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2 12C2 6.47667 6.47667 2 12 2C17.5233 2 22 6.47667 22 12C22 17.5233 17.5233 22 12 22C6.47667 22 2 17.5233 2 12ZM4 12C4 16.4188 7.58124 20 12 20C16.4188 20 20 16.4188 20 12C20 7.58124 16.4188 4 12 4C7.58124 4 4 7.58124 4 12ZM8 10C7.99999 7.48383 10.3214 5.51108 12.9389 6.10713C14.3829 6.43513 15.5569 7.60513 15.8899 9.04813C16.3809 11.1771 15.1719 13.0911 13.3589 13.7471C13.1549 13.8201 13.0099 14.0021 13.0099 14.2191V14.0001C13.0099 14.5521 12.5629 15.0001 12.0099 15.0001C11.4579 15.0001 11.0099 14.5521 11.0099 14.0001V12.9871C11.0179 12.4411 11.4599 12.0001 11.9999 12.0001C13.1029 12.0001 13.9999 11.1021 13.9999 10.0001C13.9999 8.89713 13.1029 8.00013 11.9999 8.00013C10.8959 8.00013 9.99935 8.92313 10.0004 10.0271C9.98522 10.5666 9.54291 11 9 11C8.47773 11 8.04856 10.599 8.00385 10.0882C8.00385 10.0882 8 10.0297 8 10ZM12 18C11.448 18 11 17.552 11 17C11 16.448 11.448 16 12 16C12.552 16 13 16.448 13 17C13 17.552 12.552 18 12 18Z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          width="24"
          height="24"
          role="presentation"
          color="#8C9BAB"
          focusable="false"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12 20V4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            fill="currentColor"
          ></path>
        </svg>
        <FaUserCircle style={{color: "#8C9BAB", width: "24", height: "24px", marginLeft:'10px', }}/>
      </div>
      </div>
    </div>
    </div>
  );
};


export default HeaderTrello;

const Inputstyle = styled.input`
  width: 200px;
  height: 32px;
  padding: 0 1rem;
  padding-left: 2.5rem;
  border-radius: 5px;
  font-size: 14px;
  border: 1px solid #8C9BAB;
  color: #8C9BAB;
  box-shadow: none;
  background-color: var(--ds-background-input);
  &:focus{
    width: 400px;
    border: 2px solid blue;
    outline: none;
  }
`;
const InputDivStyle = styled.div`
  display: flex;
  line-height: 28px;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  left: 170px;
  width: 470px;

`;
const StyleSvg = styled.svg`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: relative;
  left: 30px;
  fill: #9E9EA7;
  width: 1rem;
  height: 1rem;
  color: #8C9BAB;
`;
const StyleButton = styled.button`
  background: none;
  border: none;
  color: #9FADBC;
  font-size: 11px;
  line-height: 20px;
  font-weight: bold;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 3px;
  cursor: pointer;
  padding: 6px 12px;
`

const StyleButtonHover = styled.div`
  & :hover {
    background: #9fadbc42;
  }
`

const ImgLogo = styled.img`
    height: 60px;
    margin-bottom: 3px;
`
