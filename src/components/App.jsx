import React, { Component } from 'react'
import { Searchbar } from './SearchBar/SearchBar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { fetchPosts } from 'Services/api'

export class App extends Component {
  
  state = {
    items: [],
    total: 0,
    loading: false,
    error: null,
    page: 1,
    query: '',
    isOpen: false,
    content: null,
}

  async componentDidMount() {
 try {
   const {hits, total} = await fetchPosts()
   this.setState({items: hits, total: total})
 } catch (error) {
   this.setState({error})
 }
}

  render() {
    const { items } = this.state;
    return (
    <div>
        <Searchbar />
        <ImageGallery images={items}/>
<Button />
    </div >
    )
  }
}