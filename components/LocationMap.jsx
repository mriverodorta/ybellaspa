'use client';
import React from 'react'

function LocationMap() {
  return (
    <section className="location-map">
        <div className="container">
            <iframe title='Cherry Frame' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3592.2027647378636!2d-80.32163308497836!3d25.796883883620836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b9eaa2d98ee9%3A0xcfbeeceb66055de!2sYBella%20SPA!5e0!3m2!1sen!2sus!4v1679758072134!5m2!1sen!2sus" style={{ border :0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    </section>
  )
}

export default LocationMap