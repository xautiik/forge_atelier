import React from "react"
import { caseStudies } from "@/assets/data/dummydata"
import { Title, TitleSm } from "@/components/common/Title"
import Link from "next/link"
import { HiOutlineArrowRight } from "react-icons/hi"

const Portfolio = () => {
  const recentCases = caseStudies.slice(0, 6)

  return (
    <>
      <section className='showcase'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Selected Portfolio' />
          </div>
          <div className='hero-content grid-3 py'>
          {recentCases.map((item) => (
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
          <div className='card links'>
            <Link href='/portfolio'>
              VIEW ALL CASES <HiOutlineArrowRight className='link-icon' />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Portfolio
