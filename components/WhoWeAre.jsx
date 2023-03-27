import React from 'react'
import BulletList from './BulletList'
import BulletListItem from './BulletListItem'
import IntroTitle from './IntroTitle'
import SectionDivider from './SectionDivider'
import YoutubeEmbed from './YoutubeEmbed'
import { Raleway, Libre_Franklin } from 'next/font/google';

const raleway = Raleway({
  subsets: ['latin'],
  display: 'swap',
})
const libre = Libre_Franklin({
    subsets: ['latin'],
    display: 'swap',
  })

function WhoWeAre() {
  return (
    <section className='who-we-are'>
        <div className="container">
            <div className="content">
                <div className="left">
                    <div className="experience">
                        <span className={`years ` + libre.className}>5+</span>
                        <p className={`experience-description ` + raleway.className}>Años de Experiencia</p>
                    </div>
                    <div className="embed-video">
                        <YoutubeEmbed poster='/img/video-overlay.jpg' url="https://www.youtube.com/embed/_KEn2m9ZFec" />
                    </div>
                </div>
                <div className="right">
                    <IntroTitle>Quiénes Somos</IntroTitle>
                    <h2 className={libre.className}>Una experiencia exclusiva en cada visita</h2>
                    <p>En YBella preparamos todo para que tu experiencia sea memorable. Nos identifica el cuidado por los detalles y el acompañamiento personalizado con soluciones y tips para aplicar en casa luego de tu tratamiento en el spa.</p>
                    <SectionDivider/>
                    <BulletList>
                        <BulletListItem>5 salas de tratamiento</BulletListItem>
                        <BulletListItem>Productos naturales</BulletListItem>
                        <BulletListItem>Acompañamiento personalizado post-tratamiento</BulletListItem>
                        <BulletListItem>Terapeutas de belleza profesionales</BulletListItem>
                        <BulletListItem>Técnicas de maquillaje semipermanente certificadas</BulletListItem>
                    </BulletList>
                </div>
            </div>
        </div>
    </section>
  )
}

export default WhoWeAre