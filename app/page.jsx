import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.sass'
import HomeHero from '@/components/HomeHero'
import BoxDescriptionContainer from '@/components/BoxDescriptionContainer'
import DescriptionBox from '@/components/DescriptionBox'
import WhoWeAre from '@/components/WhoWeAre'
import CherryBanner from '@/components/CherryBanner'
import NumbersBanner from '@/components/NumbersBanner'
import CareSection from '@/components/CareSection'
import Testimonials from '@/components/Testimonials'
import LocationMap from '@/components/LocationMap'
import AppFooter from '@/components/AppFooter'
import FloatingNumbers from '@/components/FloatingNumbers'
import FixedBar from '@/components/FixedBar'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <section className="page-content">
        <HomeHero/>
        <BoxDescriptionContainer>
          <DescriptionBox
            boxIcon="ybicon-message"
            boxTitle="Escríbenos"
            boxDescription="Estamos disponibles en nuestro chat ¡toda la semana!"
          />
          <DescriptionBox
            type='blue'
            boxIcon="ybicon-spa"
            boxTitle="Servicios"
            boxDescription="Microblading, tratamientos faciales y corporales diseñados para cualquier necesidad cutánea"
          />
          <DescriptionBox
            boxIcon="ybicon-cart"
            boxTitle="Tienda"
            boxDescription="Productos increibles de autocuidado, belleza y bienestar"
          />
        </BoxDescriptionContainer>
        <WhoWeAre/>
        <CherryBanner/>
        <NumbersBanner />
        <FloatingNumbers/>
        <CareSection/>
        <Testimonials/>
        <LocationMap/>
       
      </section>
  )
}
