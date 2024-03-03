import React, { useState } from 'react';
import style from './SearchBar.module.css'

const Searchbar = ({ handleSetQuery }) => {

     const [searchValue, setSearchValue] = useState('');
    // state = {
    //     searchValue: '',
    // }


    const handleChangeValue = (e) => {
        // this.setState({searchValue:e.target.value})
         setSearchValue(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
         handleSetQuery(searchValue);
        // this.props.handleSetQuery(this.state.searchValue)

    }

      return (
          <header className={style.searchbar}>
              <form className={style.form} onSubmit={handleSubmit}>
                  
                  <input
                      className={style.input}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                       value={searchValue}
          onChange={handleChangeValue}
                  /><button type="submit" className={style.button}>
                     
                  </button>
              </form>
          </header>
      );
};
    
export default Searchbar;