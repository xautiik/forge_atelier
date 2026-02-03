import Banner from "@/components/Banner"
import Brand from "@/components/Brand"
import Testimonial from "@/components/Testimonial"
import { Title, TitleSm } from "@/components/common/Title"

const About = () => {
  return (
    <>
      <section className='agency bg-top'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='ABOUT US' /> <br />
            <br />
            <Title title='Empower Your Future with Innovative Solutions!' className='title-bg' />
          </div>

          <div className='content flex1'>
            <div className='left w-60 py'>
              <TitleSm title='Transforming Your Business Ideas into Intelligent Digital Solutions' />
              <p className='desc-p'>
              Forge Atelier is a dynamic and innovative technology company specializing in cutting-edge solutions 
              and services for various sectors. Our expertise lies in providing advanced technology solutions.
              With an impressive portfolio of successful projects, we have gained recognition for our exceptional 
              work. Our commitment to excellence has earned us the trust of companies across diverse sectors, and 
              we continue to exceed expectations with our innovative solutions.
              </p>
              <div className='grid-3'>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Years of experience</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>100+</h1>
                  <h3>Successful projects</h3>
                </div>
                <div className='box'>
                  <h1 className='indigo'>10+</h1>
                  <h3>Industry awards</h3>
                </div>
              </div>
            </div>
            <div className='right w-40 ml'>
              <img src='/images/s1.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>

          <div className='content flex'>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
            <div className='right w-60 ml'>
              <TitleSm title='Our Vision' />
              <br />
              <p className='misson-p'>
              Our vision is to be a leading force in shaping the future of technology, revolutionizing industries, and 
              connecting the world through our innovative solutions.
              We aim to be at the forefront of technological advancements, delivering groundbreaking products and
              services that transform industries, enhance human experiences, and create a more connected and sustainable world.
              </p>
            </div>
          </div>

          <div className='content flex'>
            <div className='right w-60 ml'>
              <TitleSm title='Our Mission' />
              <br />
              <p className='misson-p'>
              Our mission at Forge Atelier is to empower businesses and industries with excellent 
              technology solutions that drive innovation, efficiency, and growth. We strive to be 
              a trusted partner, providing tailored services and products that address the unique 
              needs of our clients, enabling them to thrive in the rapidly evolving digital landscape.
              At Forge Atelier, We are committed to excellence and driven by a passion for technology. 
              Our team focuses on delivering exceptional products and services that not only meet but 
              exceed our clients' expectations. 
              </p>
            </div>
            <div className='left w-40 py'>
              <img src='/images/s4.jpg' alt='Img' className='round' width='100%' height='100%' />
            </div>
          </div>
        </div>
      </section>

      <Brand />
      <Testimonial />
      <Banner />
      <br />
      <br />
      <br />
      <br />
    </>
  )
}

export default About
