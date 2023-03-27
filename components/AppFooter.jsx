import Image from 'next/image'
import React from 'react'
import leftImg from '../public/img/logo-footer.png'

function AppFooter() {
    const date = new Date();
  return (
    <footer className='app-footer'>
        <div className="container">
            <div className="content">
                <div className="left">
                    <Image src={leftImg} alt='ybella logo' />
                </div>
                <div className="right">
                    <p className="copy">Copyright © {date.getFullYear()} YBella Group LLC, Todos los derechos reservados.</p>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default AppFooter