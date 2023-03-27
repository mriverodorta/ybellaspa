import Image from 'next/image'
import React from 'react'
import cherryImage from '../public/img/group-of-friends-cherry-hero.webp'
import CTA from './CTA'

function CherryBanner() {
  return (
    <section className="cherry-banner">
        <div className="container">
          <div className="content">
            <h2>Treat Now, Pay Later<br/>with Cherry & YBella</h2>
            <CTA to='/payment-plans' type='cta-secondary'>Learn more & Apply</CTA>
          </div>
        </div>
        <div className="cherry-img">
            <Image src={cherryImage} alt="Cherry Hero Image" />
        </div>
    </section>
  )
}

export default CherryBanner