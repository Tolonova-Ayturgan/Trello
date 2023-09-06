import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo } from '../../store/slicces/RegistrTodo'


const ModalListDelete = () => {

    const dispatch = useDispatch()
    const todoRegistrations = useSelector((state) => state.todoRegistrations)

  return (
    <div>
      <div>
      </div>
    </div>
  )
}

export default ModalListDelete
