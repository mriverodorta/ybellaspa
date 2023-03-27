import React from 'react'

function YBIcon({name, className}) {
  return (
    <i className={`${name}${className ? ' ' + className : ''}`}></i>
  )
}

export default YBIcon