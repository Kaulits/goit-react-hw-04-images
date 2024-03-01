import React from 'react'
import { Triangle } from 'react-loader-spinner'
import style from './Loader.module.css'


export default function Loader() {
    return (
        <div className={style.loader}>
           <Triangle
  visible={true}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="triangle-loading"
  wrapperStyle={{}}
  wrapperClass=""
  /></div>
    
    );
}