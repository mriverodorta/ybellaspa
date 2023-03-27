import React from 'react'
import YBIcon from './YBIcon'
import { Libre_Franklin } from 'next/font/google';

const libre = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

function Card({children, icon, title}) {
  return (
    <div className="card">
        <YBIcon name={icon} />
        <h4 className={libre.className}>{title}</h4>
        {children}
    </div>
  )
}

export default Card