import Image from 'next/image'
import React from 'react'

function Avatar({img}) {
    const style = {
        backgroundImage: `url(${img})`
    }
  return (
    <span className="avatar" style={style}></span>
  )
}

export default Avatar