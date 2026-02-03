import React from "react"
import { caseStudies } from "@/assets/data/dummydata"
import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"

const Portfolio = () => {
  const casestudies = caseStudies

  return (
    <>
      <section className='showcase bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='PORTFOLIO' /> <br />
            <br />
            <Title title='Fresh ideas. Bold design. Smart realisation.' className='title-bg' />
          </div>
          <br />
          <br />
          <div className='grid-3'>
            {casestudies.map((item) => (
              <div className='card' key={item._id}>
                <div className='card-img'>
                  <img src={item.image} alt={item.title} />
                </div>
                <div className='card-details'>
                  <Link href={`case-studies/${item._id}`} className='title-link'>
                    <TitleSm title={item.title} />
                  </Link>
                  <span> {item.category} </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  )
}

export default Portfolio
