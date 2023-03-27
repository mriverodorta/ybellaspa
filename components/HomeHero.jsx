'use client';
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import leftImg from '../public/img/ybella-services-promo.png'
import CTA from './CTA'
import IntroTitle from './IntroTitle'
import { Libre_Franklin } from 'next/font/google';
import Lottie from "lottie-react";
import animation from '../src/LTAnimation.json'

const libre = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
  })

function HomeHero() {
  return (
    <section className="home-hero">
        <div className="container">
            <div className="content">
                <div className="left">
                    <IntroTitle>Bienvenida a YBella SPA</IntroTitle>
                    <h1 className={'hero-title ' + libre.className}>Tu oasis de relajación en el centro de Miami</h1>
                    <p className="hero-description">Microblading, body contour, cobertura de estrías, tratamientos faciales y corporales para cualquier tipo de piel con profesionales de la belleza.</p>
                    <CTA 
                    to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F'
                    type='cta-primary'
                    external={true}
                    >Reservar</CTA>
                </div>
                <div className="right">
                    <div className="img-container">
                        <Lottie className='hero-bg-animation' animationData={animation} loop={true} />
                        <Image
                            // fill={true}
                            src={leftImg}
                            alt="Hero Image"
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  )
}

export default HomeHero