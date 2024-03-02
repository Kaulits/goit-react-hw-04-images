import React, { Component } from 'react'
import style from './SearchBar.module.css'

export default class Searchbar extends Component {

    state = {
        searchValue: '',
    }


    handleChangeValue = (e) => {
        this.setState({searchValue:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSetQuery(this.state.searchValue)

    }
  render() {
      return (
          <header className={style.searchbar}>
              <form className={style.form} onSubmit={this.handleSubmit}>
                  
                  <input
                      className={style.input}
                      type="text"
                      autoComplete="off"
                      autoFocus
                      placeholder="Search images and photos"
                      value={this.state.searchValue}
                      onChange={this.handleChangeValue}
                  /><button type="submit" className={style.button}>
                     
                  </button>
              </form>
          </header>
      );
    };
};