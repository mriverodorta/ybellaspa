'use client';
import Image from 'next/image'
import React from 'react'
import { Raleway } from 'next/font/google';
import Avatar from './Avatar';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

function Testimonial({content, name, img}) {
  return (
    <div className="testimonial">
        <p className={raleway.className}>{content}</p>
        <div className="footer">
            <Avatar img={img} />
            <span className="testimonial-name">{name}</span>
        </div>
    </div>
  )
}

export default Testimonial