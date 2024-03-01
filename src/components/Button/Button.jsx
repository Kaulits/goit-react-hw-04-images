import React from 'react'
import style from './Button.module.css'


export const Button = ({ onClick }) => (
  <button className={style.Button} onClick={onClick}>
    Load more
  </button>
);