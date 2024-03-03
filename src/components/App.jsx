import React, { useState, useEffect } from 'react';

import { fetchImg } from 'Services/api';
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import Searchbar from "./SearchBar/SearchBar";
import Loader from "./Loader/Loader";
import Modal from "./Modal/Modal";

import style from './App.module.css'


export const App = () => {
  const [items, setItems] = useState([]);
  const [totalImg, setTotalImg] = useState(0);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);
  const [page, setPage] = useState(1);
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [content, setContent] = useState(null);
  // state = {
  //   items: [],
  //   totalImg: 0,
  //   loading: false,
  //   error: null,
  //   page: 1,
  //   query: '',
  //   isOpen: false,
  //   content: null,
  // }


  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { total, hits } = await fetchImg();
        setItems(hits);
        setTotalImg(total);
      } catch (error) {
        // setError(error);
           console.error("Error download more images:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  // async componentDidMount() {
  //   try {
  //     this.setState({loading:true})
  //     const {total, hits} = await fetchImg();
  //     this.setState({ items: hits, totalImg: total });
  //   } catch (error) {
  //     this.setState({ error });
  //   }
  //   finally {
  //     this.setState({loading:false})
  //   }
  // }

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { total, hits } = await fetchImg({ page, q: query });
        setItems(prevItems => [...prevItems, ...hits]);
        setTotalImg(total);
      } catch (error) {
        // setError(error);
         console.error("Error download more images:", error);
      } finally {
        setLoading(false);
      }
    };
    if (page > 1 || query !== '') {
      fetchData();
    }
  }, [page, query]);

  // async componentDidUpdate(prevProps, prevState) {
  //   if (prevState.page !== this.state.page || prevState.query!==this.state.query) {
  //     try {
  //       this.setState({ loading: true });
  //       const { total, hits } = await fetchImg({ page: this.state.page, q: this.state.query });
  //       this.setState(prev => ({ items: [...prev.items, ...hits], totalImg: total }));

  //     } catch (error) {
        
  //     }
  //     finally {
  //     this.setState({loading:false})
  //   }
  //   }
    
  // }

  const handleToggleModal = () => {
    // this.setState(prev => ({ isOpen: !prev.isOpen }))
      setIsOpen(prev => !prev);
	}

  const handleSetQuery = (query) => {
    // this.setState({query, items:[], page: 1})
     setQuery(query);
    setItems([]);
    setPage(1);
  }

  const handleLoadMore = () => {
    // this.setState(prev => ({ page: prev.page + 1 }));
     setPage(prevPage => prevPage + 1);
  }

  const handleSeeMoreInfo = content => {
    // this.setState({ isOpen: true, content })
       setContent(content);
    setIsOpen(true);
	}


    // const { items, loading, totalImg, isOpen, content } = this.state;
    return (
      <div className={style.app}>
        <Searchbar handleSetQuery={handleSetQuery} />
        <ImageGallery images={items}  openModal={handleSeeMoreInfo}/>
        
        {loading && <Loader/>}
        {items.length && items.length < totalImg && <Button onClick={handleLoadMore} />}
        
        {isOpen && <Modal closeModal={handleToggleModal} content={content}></Modal>}

    </div>
    )
  }
