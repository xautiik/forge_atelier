import React from "react"
import { testimonials as testimonialData } from "@/assets/data/dummydata"
import { Title, TitleSm } from "./common/Title"
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

function SampleNextArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button className='next' onClick={onClick}>
        <RiArrowRightSLine size={25} />
      </button>
    </div>
    )
}

function SamplePrevArrow(props) {
  const { onClick } = props
  return (
    <div className='slick-arrow'>
      <button className='prev' onClick={onClick}>
        <RiArrowLeftSLine size={25} />
      </button>
    </div>
  )
}

const Testimonial = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  }

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating); 
    const halfStar = rating % 1 !== 0;    
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); 

    return (
      <>
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} color="#ccff00" />
        ))}
        {halfStar && <FaStarHalfAlt color="#ccff00" />}
        {[...Array(emptyStars)].map((_, index) => (
          <FaRegStar key={index + fullStars + 1} color="#e4e5e9" />
        ))}
      </>
    );
  };

  const testimonials = testimonialData

  return (
    <>
      <section className='testimonial'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='CLIENT TESTIMONIALS' />
          </div>
          <div className='cards'>
            <Slider {...settings}>
              {testimonials.map((item) => (
                <div key={item._id}>
                  <div className='card'>
                    <div className='image'>
                      <div className='img'>
                        <img src={item.image} alt='' />
                      </div>
                      <div className='img-text'>
                        <h3>{item.name}</h3>
                        <span>{item.company}</span>
                        <span> {renderStars(item.starRating)}</span>
                      </div>
                    </div>
                    <div className='details'>
                      <p>{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </section>
    </>
  )
}

export default Testimonial
