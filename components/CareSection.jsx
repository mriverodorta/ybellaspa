import React from 'react'
import Card from './Card'
import CTA from './CTA'
import IntroTitle from './IntroTitle'

function CareSection() {
  return (
    <section className="care-section">
        <div className="container">
          <div className="content">
            <IntroTitle>Qué ofrecemos</IntroTitle>
            <h2 className='section-heading'>Cuidarte no es un lujo, es vida</h2>
            <div className="cards">
                <Card title='Cejas y pestañas' icon='ybicon-eye-open'>
                  <p>Somos especialistas en Microblading Eyebrows y Eyelashes Extensions. Usamos tecnología moderna y los tratamientos más avanzados para el cuidado de tus cejas y pestañas.</p>
                  <CTA to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F' external={true}>Reservar ahora</CTA>
                </Card>
                <Card title='Faciales' icon='ybicon-face'>
                  <p>Tratamientos personalizados según tu tipo de piel y previa evaluación de tus necesidades cutáneas con terapeutas de belleza profesionales.</p>
                  <CTA to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F' external={true}>Reservar ahora</CTA>
                </Card>
                <Card title='Body contour' icon='ybicon-body'>
                  <p>Masajes combinados con maderoterapia, cavitación, radiofrecuencia, parafina y más. Ayudan a desinflamar, eliminar la celulitis, la flacidez y reducir tallas.</p>
                  <CTA to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F' external={true}>Reservar ahora</CTA>
                </Card>
                <Card title='Laser Hair removal' icon='ybicon-laser-pointer'>
                  <p>Planes de tratamiento de depilación láser personalizados. Eliminamos el vello no deseado adaptando las ondas láser al tipo de piel, con resultados permanentes.</p>
                  <CTA to='https://api.whatsapp.com/send?phone=17863140418&text=Hola%20YBella%21%20Me%20gustar%C3%ADa%20saber%20c%C3%B3mo%20trabajan%20ustedes%3F' external={true}>Reservar ahora</CTA>
                </Card>
            </div>
          </div>
        </div>
    </section>
  )
}

export default CareSection