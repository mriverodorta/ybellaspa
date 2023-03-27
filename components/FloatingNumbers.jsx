import React from 'react'
import { Libre_Franklin } from 'next/font/google';

const libre = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
  })
function FloatingNumbers() {
  return (
    <section className="floating-bubble">
        <div className="container">
            <div className="bubble-content">
                <h3 className={`bubble-title ` + libre.className}>Somos la solución más cercana para el cuidado de tu cuerpo</h3>
                <div className="the-numbers">
                    <div className="number-showcase">
                        <p className={libre.className}>5</p>
                        <p className={libre.className}>2.5K+</p>
                        <p className="description">NOS PUNTÚAN</p>
                        <p className="description">NOS RECOMIENDAN</p>
                    </div>
                    {/* <div className="number-showcase">
                    </div> */}
                </div>
            </div>
        </div>
    </section>
  )
}

export default FloatingNumbers