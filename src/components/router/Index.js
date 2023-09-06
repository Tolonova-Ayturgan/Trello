import React from 'react'
import { Route, Routes } from 'react-router-dom'
import FormRegistration from '../registration/FormRegistration'
import Render from '../MainTrello/Render'
import FormReg from '../registration/FormReg'

const Index = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<FormRegistration/>}/>
            <Route path='/maintrello' element={<Render/>}/>
        </Routes>

    </div>
  )
}

export default Index
