import React from 'react'

function BulletList({children}) {
  return (
    <div className='bullet-list-container'>
        <ul className='bullet-list' role='list'>
            {children}
        </ul>
    </div>
  )
}

export default BulletList