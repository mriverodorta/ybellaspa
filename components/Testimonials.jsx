'use client';
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Testimonial from './Testimonial';
import IntroTitle from './IntroTitle';

function Testimonials() {
    const breakpoints = {
        850: {
            slidesPerView: 2,
            spaceBetween: 20
          },
        1200: {
        slidesPerView: 3,
        spaceBetween: 30
        },
    }
  return (
    <section className="testimonials">
        <div className="container">
            <IntroTitle>Mucho más que clientas satisfechas</IntroTitle>
            <h2 className='section-heading'>Ellas nos quieren y no se lo callan</h2>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                breakpoints={breakpoints}
                >
                <SwiperSlide>
                    <Testimonial 
                        name='Nidy Ruiz'
                        content="Excelente servicio!! Desde que entras a Ybella Spa sientes seguridad!! Me hice el Microblading y la verdad me encanto su trabajo, lo profesional que es Yanelis Hernández y ahora me haré Eyeliner Se los recomiendo chicas...estoy súper feliz con mis cejas"
                        img="/img/testimonials/nidy.jpg" />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial 
                        name='Genesis Crespo'
                        content="I absolutely love this SPA!!!!!! I have been visiting Ybella spa weekly for a little over a year. I do wood therapy massages with Lyly (she is the best in Miami). I also do my eyebrows and facials. This spa has the best prices and 5 star quality. recommend this facility to anyone looking for excellent quality, services and prices."
                        img='/img/testimonials/genesis.png' />
                </SwiperSlide>
                <SwiperSlide>
                    <Testimonial 
                        name='Niurka Fonseca'
                        content="Me encanto este lugar!! Muy profesionales, muy atentos, el Ybella Deluxe Facial es espectacular!! Se los recomiendo !! Ahh y el café divino !! Gracias chicas por su servicio!!"
                        img='/img/testimonials/niurka.png' />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>
  )
}

export default Testimonials

                    
                    