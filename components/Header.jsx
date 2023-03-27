import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logoHeader from '../public/img/logo-header.png'
import IntroTitle from './IntroTitle'

function Header() {
  return (
    <header className="main-header">
      <div className="container">
        <div className="content">
          <div className="logo-container">
            <Link href="/">
              <Image
                className='logo-header'
                width={175}
                src={logoHeader}
                alt="Ybella Spa"
              />
            </Link>
          </div>
          <div className="location">
            <IntroTitle>YBella SPA</IntroTitle>
            <Link href='https://www.google.com/search?q=ybellaspa' className='glink' target='_blank'>7500 NW 25th St Suite 104, Doral, FL 33122</Link>
            <p className='phone'>Teléfono: <Link className='plink' href='callto:17863140418'>+1 786-314-0418</Link></p>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header