import React from 'react'
import { Raleway } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})

function IntroTitle({className, children}) {
  return (
    <h5 className={`intro-title${className ? ' ' + className : ''} ` + raleway.className}>{children}</h5>
  )
}

export default IntroTitle