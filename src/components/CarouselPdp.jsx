import React from 'react'
import { Carousel } from 'react-bootstrap'

export const CarouselPdp = ({ data }) => {
  const { id, title, image } = data;
  const imageData = {
    id: id,
    title: title,
    imgUrl: [image]
  }
  return (
    <Carousel>
      {

        imageData.imgUrl.map((prod, index) => (
          <Carousel.Item key={index}>
            <img className='carousel-image' src={prod} alt={imageData.title} />
          </Carousel.Item>
        ))
      }
    </Carousel>
  )
}
