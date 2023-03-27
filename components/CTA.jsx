import Link from 'next/link'
import React from 'react'

function CTA({children, to, external, className, type}) {
  return (
    <Link
        href={to}
        target={external ? '_blank' : ''}
        className={`cta ${type ? type : 'cta-primary'}${className ? ' ' + className : ''}`}
    >{children}</Link>
  )
}

export default CTA