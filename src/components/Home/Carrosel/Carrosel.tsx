import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import imagesCarrosel from '@/database/imagesCarrosel'
import { iImagesCarrosel as ImageType } from '@/types/item'

const Carrosel = () => {
    const settings = {
        dots:true,
        infinite:true,
        speed:2000,
        slidesToShow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:10000
    }
  return (
    <div className='bg-mainColor' >
      <Slider {...settings}>
        {imagesCarrosel.map((img,index) =>{
            return(<Link href={img.link} key={index} className='carrosel'>
                <Image src={img.imgPath} alt={img.alt?img.alt:"Banner de fundo"} width={600} height={200}/>
            </Link>) 
        })}
      </Slider>
    </div>
  )
}

export default Carrosel
