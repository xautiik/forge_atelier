import { Title, TitleSm } from "@/components/common/Title"
import React from "react"
import { services as servicesData } from "@/assets/data/dummydata"
import Link from "next/link"

const Services = () => {
  const services = servicesData

  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='SERVICES' /> <br />
            <br />
            <Title title='Innovative Technologies & a Modern Approach' className='title-bg' />
            <p>
              We believe in the power of collaboration and partnership. Our team will work closely with you, 
              listening to your goals and providing guidance every step of the way. Together, we will navigate the 
              ever-evolving technological landscape, turning challenges into opportunities and transforming your 
              business for success.
            </p>
          </div>
          <div className='grid-2 py'>
            {services.map((item) => (
              <div className='card' key={item._id}>
                <div className='card-img'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='card-details'>
                  <Link href={`services/${item._id}`} className='title-link'>
                    <TitleSm title={item.title} />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Services
