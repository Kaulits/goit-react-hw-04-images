import React, { Component } from 'react'
import { Searchbar } from './SearchBar/SearchBar'
import { ImageGallery } from './ImageGallery/ImageGallery'
import { Button } from './Button/Button'
import { fetchPosts } from 'Services/api'
import Loader from './Loader/Loader'

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
      this.setState({ loading: true });
      const { hits, total } = await fetchPosts();
      this.setState({ items: hits, total: total });
    } catch (error) {
      this.setState({ error });
    } finally {
      this.setState({ loading: false });
    }
  }

  async componentDidUpdate(prevProps, prevState) {
    if ((prevState.page !== this.state.page || prevState.query !== this.state.query) && !this.state.loading) {
      try {
        this.setState({ loading: true });
        const { total, hits } = await fetchPosts({ page: this.state.page });
        this.setState(prev => ({ items: [...prev.items, ...hits], total: total }));
      } catch (error) {
      } finally {
        this.setState({ loading: false });
      }
    }
  }

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  }
  
  
  render() {
    const { items, loading } = this.state;
    return (
      <div>
        <Searchbar />
        <ImageGallery images={items} />
        {loading && <Loader />}
        {items.length ? <Button onClick={this.handleLoadMore} /> : null}
      </div>
    )
  }
}
