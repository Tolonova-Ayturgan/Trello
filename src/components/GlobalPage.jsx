import { styled } from 'styled-components';
import Global from './assets/img/Global.jpg'
import React from 'react'
import Index from './router/Index';

const GlobalPage = () => {
  return (
    <Appstyle className="App">
        <Index/>
    </Appstyle>
  )
}

export default GlobalPage

const Appstyle = styled.div`
    background-image: url(${Global});
    height: 100%;
    width: 100%;
    background-size:100%;
    background-attachment: fixed;
    background-repeat: no-repeat;
`