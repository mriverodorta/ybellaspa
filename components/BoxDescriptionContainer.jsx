import React from 'react'

function BoxDescriptionContainer({ children }) {
  return (
    <section className="box-description-container">
        <div className="container">
          <div className="content">
            {children}
          </div>
        </div>
    </section>
  )
}

export default BoxDescriptionContainer