import React from 'react'
import classes from './Input.module.css'

function Input(props) {
  return (
    <div>
         <div
          className={`${classes.control} ${
            props.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor={props.id}>{props.label}</label>
          <input
            type={props.email}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onblur}
          />
        </div>
        <div
          className={`${classes.control} ${
           passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
    </div>
  )
}

export default Input