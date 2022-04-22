import React from 'react'
import './Testimonial.css'
import AVTR1 from '../../Assets/avatar1.jpg'
import AVTR2 from '../../Assets/avatar2.jpg'
import AVTR3 from '../../Assets/avatar3.jpg'
import AVTR4 from '../../Assets/avatar4.jpg'

import { Pagination } from 'swiper'

import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css'

import 'swiper/css/pagination'


const data = [
  {
    avatar: AVTR1,
    name: "George Victor",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore explicabo neque, harum dolorem molestiae sequi error a magnam aliquid unde quam exercitationem sed omnis distinctio eum impedit sit atque voluptas.",
  },
  {
    avatar: AVTR2,
    name: "Shatta Wale",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore explicabo neque, harum dolorem molestiae sequi error a magnam aliquid unde quam exercitationem sed omnis distinctio eum impedit sit atque voluptas.",
  },
  {
    avatar: AVTR3,
    name: "Tina showr",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore explicabo neque, harum dolorem molestiae sequi error a magnam aliquid unde quam exercitationem sed omnis distinctio eum impedit sit atque voluptas.",
  },
  {
    avatar: AVTR4,
    name: "James Bourne",
    review:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempore explicabo neque, harum dolorem molestiae sequi error a magnam aliquid unde quam exercitationem sed omnis distinctio eum impedit sit atque voluptas.",
  }
]; 

const Testimonial = () => {
  return (
    <section id="testimonial">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
        modules = {[Pagination]}
        spaceBetween = {40}
        slidesPerView = {1}
        pagination = {{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                  
                </div>
                <h5 className="client__name">{name}</h5>
                  <small className="client__review">
                    {review}
                  </small>
              </SwiperSlide>
            );
          })
        }
      </Swiper>
    </section>
  );
}

export default Testimonial