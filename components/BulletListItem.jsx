import React from 'react'
import YBIcon from './YBIcon'

function BulletListItem({children}) {
  return (
    <li className='bullet-list-item'>
      <YBIcon name='ybicon-check'/>
      {children}
    </li>
  )
}

export default BulletListItem