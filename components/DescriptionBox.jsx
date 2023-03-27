import React from 'react'
import YBIcon from './YBIcon'
import { Libre_Franklin } from 'next/font/google';

const libre = Libre_Franklin({
  subsets: ['latin'],
  display: 'swap',
})

function DescriptionBox({boxIcon, boxTitle, boxDescription, type}) {
  return (
    <div className={`description-box${type ? ' type-' + type : ''} `}>
        <div className="icon">
            <YBIcon name={boxIcon} />
        </div>
        <div className="content">
            <h3 className={'title ' + libre.className}>{boxTitle}</h3>
            <p className="description">{boxDescription}</p>
        </div>
    </div>
  )
}

export default DescriptionBox