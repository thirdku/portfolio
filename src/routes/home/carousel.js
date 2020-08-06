import React, {Component, useState, render} from 'react'
import style from './style.css'
import ccat from '../../components/constants/ccat.jpg'
import wojak from '../../components/constants/wojak.jpg'
import wojak2 from '../../components/constants/wojak2.png'
import wojak3 from '../../components/constants/wojak3.jpg'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
 
const Gallery = () => {
  const handleOnDragStart = (e) => e.preventDefault()
  return (
    <AliceCarousel mouseTrackingEnabled
    buttonsDisabled={true}
    autoPlay={true}
    autoPlayInterval={4000}
    class={style.alice}
    stagePadding={{
      paddingLeft: 190,     // in pixels
      paddingRight: 0
  }}
    >
      <img src={ccat} onDragStart={handleOnDragStart} class={style.carousel} />
      <img src={wojak2} onDragStart={handleOnDragStart} class={style.carousel} />
      <img src={wojak3} onDragStart={handleOnDragStart} class={style.carousel} />
    </AliceCarousel>
  )
}
export default Gallery 