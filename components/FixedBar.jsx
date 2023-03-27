import Image from 'next/image'
import React from 'react'
import leftImg from '../public/img/ybellaspa-logo-2.webp'
import CTA from './CTA'

function FixedBar() {
  return (
    <section className="fixed-bar">
        <div className="container">
            <div className="content">
                <Image width={92} src={leftImg} alt='ybella logo' />
                <CTA 
                    to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F'
                    type='cta-primary'
                    external={true}
                    >Reservar</CTA>
            </div>
        </div>
    </section>
  )
}

export default FixedBar