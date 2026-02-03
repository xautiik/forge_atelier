import { home } from "@/assets/data/dummydata"
import Banner from "@/components/Banner"
import Expertise from "@/components/Expertise"
import Portfolio from "@/components/Portfolio"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"
import { HeroTitleLogo } from "@/components/common/HeroTitle"
import { BlogCard, Brand, BlogSection } from "@/components/router"
import React from "react"
import Link from "next/link"


const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <HeroTitleLogo title='ATELIER' caption='FORGE ' className='logobg' />
          <h1 className='hero-title'>EMPOWER YOUR FUTURE</h1>
          <div className='sub-heading'>
            <Link href="#services">
              <button className='button-primary'>Get Started</button>
            </Link>
          </div>
        </div>
      </section>
      <section className='hero-sec'>
        <div className='container'>
          <div className='heading-title'>
            <Title title='Empower Your Future with Innovative Solutions' />
            <p>
              At Forge Atelier, we transform ideas into reality, delivering cutting-edge technology solutions tailored to your needs.
              We are delighted to have you here, and we look forward to embarking on a journey of digital transformation together.
            </p>
          </div>
          <div className='hero-content grid-4'>
            {home.map((item, i) => (
              <div className='box' key={i}>
                <span className='green'>{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Brand />
      <Testimonial />
      <Portfolio />
      <br />
      <div className='text-center'>
        <Title title='Latest News & Articles' />
      </div>
      <BlogSection />
    </>
  )
}

export default Hero
