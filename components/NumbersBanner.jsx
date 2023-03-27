import React from 'react'
import CTA from './CTA'
import { Libre_Franklin } from 'next/font/google';

const libre = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
  })
  
function NumbersBanner() {
    const sectionStyles = {
        backgroundImage: `url(/img/deserve-bg.webp)`,
    }
    return (
        <section className="numbers-banner">
            <div className="container">
                <div className="content">
                    <h2 className='section-title'>Lo mereces, lo necesitas</h2>
                    <CTA to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F'
                        external={true}>Reservar ahora</CTA>
                </div>
                
            </div>
            <div className="overlay" style={sectionStyles}></div>

        </section>
    )
}

export default NumbersBanner