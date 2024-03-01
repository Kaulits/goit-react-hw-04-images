import React from 'react'
import style from './SearchBar.module.css'

export class Searchbar extends React.Component {

  render() {
      return (
          <header className={style.Searchbar}>
               <form className={style.SearchForm}>
          <input className={style.SearchForm_input} type='text' />
              <button className={style.SearchForm_button}></button>
                <span className={style.SearchForm_button_label}>Search</span>
          </form>
        </header>
      );
    };
};