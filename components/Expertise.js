import React from "react"
import { services as servicesData } from "@/assets/data/dummydata"
import { Title, TitleSm } from "./common/Title"
import Link from "next/link"

const Expertise = () => {
  const services = servicesData

  return (
    <>
      <section className='expertise' id="services">
        <div className='container'>
          <div className='heading-title'>
            <Title title='Our Services' />
            <p>
              Experience the best in what we offer. We deliver tailored solutions designed to meet your needs 
              and exceed expectations. With expertise and a commitment to quality, our services provide exceptional 
              results for every client.
            </p>
            <p>
              Let’s work together to bring your vision to life.
            </p>
          </div>
            <div className='hero-content grid-4'>
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

export default Expertise
