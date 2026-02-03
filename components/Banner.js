import React from "react"
import { Title, BannerTitle } from "./common/BannerTitle"
import Link from "next/link"

const Banner = () => {
  return (
    <>
      <section className='banner'>
        <div className='container'>
          <div>
            <Title title='We are looking forward to start a new project' /> <br />
            <BannerTitle title='Let’s elevate your business to new heights!' />
          </div>
          <div>
            <Link href="/contact">
              <button className='button-primary'>Request a quote</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default Banner
