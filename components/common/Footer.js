import Link from "next/link"
import { TitleLogo } from "./Title"
import { BsFacebook, BsTelegram } from "react-icons/bs"
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import Image from "next/image"


const Footer = () => {
  return (
    <>
      <footer>
        <div className='container'>
          <div className='grid-4'>
            <div className='logo'>
              <Image src="/SL-Logo.png" width={100} height={100}/>
              <br />
              <span>
                Call us <br /> Monday – Friday <br /> from 3:00am to 11:00pm Local Time
              </span>
              <br />
              <br />
              <h3>+251 99 444 7601</h3>
              <h3>+251 99 327 9197</h3>
              <br />
              <Link href="/contact">
              <button className='button-primary'>Request A Quote</button>
              </Link>
            </div>
            <ul>
              <h3>QUICK LINKS</h3>
              <li>
                <Link href='/'>Home</Link>
              </li>
              <li>
                <Link href='/about'>About us</Link>
              </li>
              <li>
                <Link href='/team'>Our team</Link>
              </li>
              <li>
                <Link href='/services'>Services</Link>
              </li>
              <li>
                <Link href='/portfolio'>Portfolio</Link>
              </li>
              <li>
                <Link href='/blogs'>Blog</Link>
              </li>
              <li>
                <Link href='/contact'>Contact</Link>
              </li>
            </ul>
            <ul>
              <h3>SERVICES</h3>
              <li>
                <Link href='/services'>Software Development</Link>
              </li>
              <li>
                <Link href='/services'>Digital Marketing</Link>
              </li>
              <li>
                <Link href='/services'>3D Printing</Link>
              </li>
              <li>
                <Link href='/services'>CNC Machining</Link>
              </li>
              <li>
                <Link href='/services'>PCB Design & Manufacturing</Link>
              </li>
            </ul>
            <ul>
              <h3>FOLLOW US</h3>
              <div className='connect'>
                <li>
                  <Link href='https://facebook.com/'>
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://t.me/'>
                    <BsTelegram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://instagram.com/'>
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href='https://linkedin.in/'>
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className='legal connect py'>
            <div className='text'>
              <span>© 2024 FORGE ATELIER. ALL RIGHTS RESERVED.</span>
            </div>
            <div className='connect'>
              <span>FORGE ATELIER</span>
              <span> &nbsp; | &nbsp; </span>
              <span>YOUR TECHNOLOGY PARTNER</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
