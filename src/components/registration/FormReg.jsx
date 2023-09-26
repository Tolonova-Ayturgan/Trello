import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';


const FormReg = () => {

  const [loading, setLoading] = useState(false);
  const [emailText, setEmail] = useState("");
  const [passwordText, setPassword] = useState("");
  const [state, setState] = useState(false);

  const todos = useSelector((state) => state);
  const email = useSelector((state) => state.todos.email);
  const password = useSelector((state) => state.todos.password);

  console.log(todos);
  console.log(email);
  console.log(password);

  const data = useNavigate();

  const clickHandler = () => {
    if (emailText === email && passwordText === password) {
      setLoading((prev) => !prev);
      setTimeout(() => {
        data("/creat-first-team");
      }, 5000);
      console.log(setTimeout);
    } else {
      setState(true);
    }
  };

  return (
    <div>
      <ImgStyle src="https://1000logos.net/wp-content/uploads/2021/05/Trello-logo.png" alt="img" />
      <section style={{ display: "flex", justifyContent: "center" }}>
        <BackStyle>
          {state && (
            <ErrorStyle>
              <span>
                Аккаунт с таким адрессом электронной почты не существует
              </span>
            </ErrorStyle>
          )}
          <NameStyle>Вход в Trello</NameStyle>
          <InpStyle
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            value={emailText}
            placeholder="Укажите адрес электронной почты"
          />
          <InpStyle
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={passwordText}
            placeholder="Введите пароль"
          />
          <Buttonstyle onClick={clickHandler}>Продолжить</Buttonstyle>
            <Backdrop
              sx={{ color: "#4345B9", background:'#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={loading}
              onClick={clickHandler}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
          <div>
            <Styleh1>ИЛИ</Styleh1>
            <div style={{ marginLeft: "40px" }}>
              <StyleSpan href="#">
                <img
                  style={{ width: "17px", height: "17px" }}
                //   src={google}
                  alt="img"
                />
                <StyleSpan2>Войти через Google</StyleSpan2>
              </StyleSpan>
              <StyleSpan href="#">
                <img
                  style={{ width: "25px", height: "25px" }}
                //   src={microsoft}
                  alt="img"
                />
                <StyleSpan2>Войти через Microsoft</StyleSpan2>
              </StyleSpan>
              <StyleSpan href="#">
                <img
                  style={{ width: "25px", height: "20px" }}
                //   src={apple}
                  alt="img"
                />
                <StyleSpan2>Войти через Apple</StyleSpan2>
              </StyleSpan>
              <StyleSpan href="#">
                <img
                  style={{ width: "17px", height: "17px" }}
                //   src={slack}
                  alt="img"
                />
                <StyleSpan2>Войти через Slack</StyleSpan2>
              </StyleSpan>
            </div>
            <StyleHr />
            <ul>
              <StyleLi>
                <StyleA href="#">Не удается войти?</StyleA>
              </StyleLi>
              <StyleLi style={{ marginLeft: "10px" }}>
                <StyleA href="#"> Зарегистрировать аккаунт</StyleA>
              </StyleLi>
            </ul>
          </div>
        </BackStyle>
      </section>
    </div>
  );
};
export default FormReg;


const ImgStyle = styled.img`
  width: 160px;
  height: 90px;
  display: block;
  /* height: 43px; */
  margin-left: auto;
  margin-right: auto;
  margin-top: 40px;
  margin-bottom: 40px;
`;
const ErrorStyle = styled.div`
  border: 1px solid #EB5A46;
  background: #EB5A46;
  display: inline-block;
  padding: 0.5em 1em;
  font-size: 14px;
  height: 40px;
  width: 320px;
  border-radius: 3px;
  color: white;
`;
const BackStyle = styled.div`
  background-color: #FFFFFF;
  border-radius: 3px;
  padding: 25px 40px;
  box-shadow: rgba(0, 0, 0, 0.1) 0 0 10px;
  width: 400px;
  height: 520px;
`;
const NameStyle = styled.h1`
  text-align: center;
  color: #5E6C84;
  font-size: 16px;
  letter-spacing: -0.01em;
  line-height: 28px;
  margin-top: 10px;
  margin-bottom: 25px;
`;
const InpStyle = styled.input`
  font-size: 14px;
  background-color: #FAFBFC;
  border: 2px solid #DFE1E6;
  box-sizing: border-box;
  border-radius: 3px;
  height: 40px;
  width: 320px;
  color: BLACK;
  padding: 0.5em;
  margin-bottom: 16px;
`;
const Buttonstyle = styled.button`
    background: #5AAC44;
    color: white;
    cursor: pointer;
    box-shadow: none;
    height: 40px;
    width:320px;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: 0.6em 1.3em;
    position: relative;
    text-decoration: none;
    border: 0px;
`;
const Styleh1 = styled.h1`
  text-align: center;
  font-size: 12px;
  line-height: 1;
  margin-top: 16px;
  margin-bottom: 16px;
  color: #4D4D4D;
  font-weight: 300;
`;
const StyleSpan = styled.a`
  background: #fff;
  color: rgba(0, 0, 0, 0.54);
  box-shadow: rgba(0, 0, 0, 0.2) 1px 1px 5px 0;
  border-color: transparent;
  border-radius: 3px;
  width: 99%;
  height: 39px;
  padding-top: 0;
  margin-bottom: 12px;
  display: block;
  text-decoration: none;
  height: 40px;
  width: 320px;
  display: block;
  display: inline-block;
  /* vertical-align: middle; */
  font-size: 14px;
  font-family: inherit;
  font-weight: bold;
  color: #505F79;
  padding: 3px;
  height: 32px;
  line-height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const StyleSpan2 = styled.span`
  padding-left: 8px;
`;
const StyleHr = styled.hr`
  /* margin-top: 45px; */
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid hsl(0, 0%, 80%);
  /* margin: 1em 0; */
  padding: 0;
  width: 320px;
  height: 2px;
  margin: 25px 40px;
`;
const StyleA = styled.a`
  text-decoration: none;
  color: #0052CC;
  cursor: pointer;
  font-weight: 300;
  line-height: 1.44em;
  font-size: 14px;
`;
const StyleLi = styled.li`
  display: inline-block;
  list-style: none;
  text-align: -webkit-match-parent;
`;