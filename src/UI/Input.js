import { TextField } from '@mui/material'
import React from 'react'

const Input = (props) => {
  return (
    <div>
        <TextField
            className={props.className}
            onChange={props.onChange}
            value={props.value}
            id={props.is}
            defaultValue={props.defaultValue}
            size={props.size}
            type={props.type}
            placeholder={props.placeholder}  
            border={props.border}
            outline={props.outline}
            style={props.style}
        />

    </div>
  )
}

export default Input
