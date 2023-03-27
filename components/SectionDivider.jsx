import React from 'react'

function SectionDivider({type}) {
  return (
    <div className={`section-divider divider-${type ? type : 'horizontal'}`}></div>
  )
}

export default SectionDivider