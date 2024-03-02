import React from 'react'
import style from './Button.module.css'

export const Button = ({onClick}) => {
  return (
      <button onClick={onClick} className={style.button}>Load more</button>
  )
}