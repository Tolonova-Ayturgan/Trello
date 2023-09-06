import React, { useState } from 'react'
import './Form.css'
import Input from '../../UI/Input'
import Button from '../../UI/Button'
import { FcGoogle } from "react-icons/fc";
import { FaMicrosoft } from "react-icons/fa";
import { BsApple } from "react-icons/bs";
import { BsSlack } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { addTodo } from '../../store/slicces/RegistrTodo';
import RegistrationFooter from './RegistrationFooter';
import { styled } from 'styled-components';
import { Link } from 'react-router-dom';

const FormRegistration = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailValid, setEmailValid] = useState(undefined);
  const [passwordValid, setPasswordValid] = useState(undefined);

  const dispatch = useDispatch()
  const todoRegistrations = useSelector((state) => state.todoRegistrations)
  console.log(todoRegistrations);
  console.log(email);

  const handlePassword = (el) =>{
    setPassword(el.target.value)
  }

  const handleChangeInput = (el) => {
    setEmail(el.target.value);
    
  };

const handleAddTodo = () => {
  if (email) {
    setEmail('')
    dispatch(addTodo(email));
    dispatch(addTodo(password));
    setPassword("")
    setPasswordValid(password.length > 6)
    setEmailValid(email.includes("@gmail.com"));
  } 
};

  return (
    <>
      <ImgLogo src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png" alt="img" />
      <div className='mainFormDiv'>
        <div className='form'>
          <h3>Вход в Trello</h3>
          <Input className='input_email' style={{border: emailValid === false ? "1px solid red" : "1px solid hsl(202,92%,85%)", outline: "none", }} id="outlined-size-small" size="small" type="text" placeholder="Укажите адрес электронной почты"  onChange={handleChangeInput}/>
          <Input className='input_email' style={{border: passwordValid === false ? "1px solid red" : "1px solid hsl(202,92%,85%)", outline: "none", }} id="outlined-size-small" size="small" type="password" placeholder="Укажите пароль"  onChange={handlePassword}/>
          <Button onClick={handleAddTodo} background="charteuse" className='button_registr ' color="white"> <Link to='maintrello'>Продолжить</Link> </Button>
          <div>ИЛИ</div>
          <Button>  <h4> <FcGoogle/> Войти через Google</h4></Button>
          <Button> <FaMicrosoft/> Войти через  Microsoft</Button>
          <Button> <BsApple/> Войти через Apple </Button>
          <Button> <BsSlack/> Войти через Slack</Button>
          <div style={{background: "gray", width: "320px", height: "0.5px", display: "flex", justifyContent: "center",  marginLeft: "37px",}}></div>
            <div className='div_a'>
              <a href="#">Не удается войти?</a>
              <a href="#"> <ul> <li>Зарегистрировать аккаунт</li> </ul></a>
            </div>
        </div>
      </div>


      <RegistrationFooter/>

    </>
  )
}

export default FormRegistration;

const ImgLogo = styled.img`
    height: 115px;
`
