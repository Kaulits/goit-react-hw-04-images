import React from 'react'
import style from './ImageGalleryItem.module.css'

const ImageGalleryItem = ({webformatURL, tags}) => {
  return (
      <li className={style.ImageGalleryItem}>
            <img className={style.ImageGalleryItem_image} src={webformatURL} alt={tags}  />
      </li>
  )
}

export default ImageGalleryItem
