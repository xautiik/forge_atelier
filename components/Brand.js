import React from "react"
import { brands } from "@/assets/data/dummydata"
import { Title } from "./common/Title"

const Brand = () => {

  return (
    <>
      <section className='brand'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='WE ARE PROUD TO WORK WITH THESE COMPANIES' />
          </div>
          <div className='brand-content grid-5 py'>
            {brands.map((item) => (
              <div className='brand-images' key={item.id}>
                <img src={item.logo} alt={item.name} title={item.name} width='100%' height='100%' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand
