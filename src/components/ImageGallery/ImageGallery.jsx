import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import React from 'react'
import style from './ImageGallery.module.css'

export const ImageGallery = ({images}) => {
    return (
        <ul className={style.ImageGallery}>
          {images.map(image => <ImageGalleryItem key={image.id} {...image}/>)}
        </ul>
    );
}