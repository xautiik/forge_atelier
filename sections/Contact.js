import { Title, TitleSm } from "@/components/common/Title"
import React, { useState, useEffect } from 'react';
import { AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import { BiUserCircle } from "react-icons/bi"
import { BsFacebook, BsTelegram } from "react-icons/bs"
import { FiHelpCircle, FiPhone } from "react-icons/fi"
import { IoLocationOutline } from "react-icons/io5"
import Link from 'next/link'
import axios from 'axios';

const Contact = () => {

  const [Cname, setCname] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [budget, setBudget] = useState('');
  const [timeFrame, setTimeframe] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    let timer;
    if (showModal) {
      timer = setTimeout(() => {
        setShowModal(false);
      }, 2000);
    }
    return () => clearTimeout(timer); 
  }, [showModal]);

  const closeModalAndRedirect = () => {
    setShowModal(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!Cname || !phone || !message){
      setError('Name, Phone and Message are required')
      return
    }

    const contactData = {
      Cname,
      phone,
      company,
      email,
      budget,
      timeFrame,
      message,
    }

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/contacts', contactData, {
        headers: {
          'Content-Type': 'application/json',
        },
      })
        setLoading(false);
        console.log('message sent successfully:', response.data)
        setShowModal(true); 
      } catch (err) {
        setLoading(false)
        setError('Error sending message')
        console.error(err)
      }
    }

    const styles = {
      error: {
        color: '#d9534f',
        fontSize: '14px',
        marginBottom: '20px',
        textAlign: 'center',
      }
    }

  return (
    <>
      <section className='bg-top contact'>
        <div className='container'>
          <div className='heading-title'>
            <TitleSm title='CONTACT' /> <br />
            <br />
            <Title title="We’d Love to Hear From You!" className='title-bg' />
          </div>
          <div className='content py flex1'>
            <div className='left w-30'>
              <div className='contact-details'>
                <div className='box'>
                  <FiPhone size={30} className='icons' />
                  <h3>+251 99 444 0000</h3>
                  <h3>+251 99 327 0000</h3>
                  <span>Call us: Monday - Friday <br /> 3:00 - 11:00 Local Time</span>
                </div>
                <div className='box'>
                  <IoLocationOutline size={30} className='icons' />
                  <h3>Addis Ababa</h3>
                  <span>P.O. Box 2, Nib International Bank Bldg, 3rd Floor </span>
                </div>
                <div className='box'>
                  <FiHelpCircle size={30} className='icons' />
                  <h3>hello@forgeatelier.com</h3>
                  <span>Drop us a line anytime!</span>
                </div>
                <div className='box'>
                  <BiUserCircle size={30} className='icons' />
                  <h3>forgeatelier.com/career</h3>
                  <span>Career at Forge Atelier</span>
                </div>
              </div>
              <ul>
                  <Link href="#">
                    <li className='icon'>
                      <BsFacebook size={25} />
                    </li>
                  </Link>
                  <Link href="#">
                    <li className='icon'>
                      <BsTelegram size={25} />
                    </li>
                  </Link>
                  <Link href="#">
                    <li className='icon'>
                      <AiFillInstagram size={25} />
                    </li>
                  </Link>
                  <Link href="#">
                    <li className='icon'>
                      <AiFillLinkedin size={25} />
                    </li>
                  </Link>
              </ul>
            </div>
            <div className='right w-70'>
              <TitleSm title='Start Your Inquiry Here' />
              <p className='desc-p'>
                Got questions, ideas, need a consultation, or are ready to embark on a transformative project, 
                we are here to support you every step of the way. Complete the Form Below to Receive Our Proposal. 
              </p>

              <form onSubmit={handleSubmit}>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Name*</span>
                    <input 
                      type='text' 
                      name='name' 
                      value={Cname} 
                      onChange={(e) => setCname(e.target.value)} 
                      required />
                  </div>
                  <div className='inputs'>
                    <span>Company</span>
                    <input 
                      type='text' 
                      name='company' 
                      value={company} 
                      onChange={(e) => setCompany(e.target.value)} 
                      required />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Phone Number*</span>
                    <input
                     type='text' 
                     name='phone' 
                     value={phone} 
                     onChange={(e) => setPhone(e.target.value)} 
                     required />
                  </div>
                  <div className='inputs'>
                    <span>Email</span>
                    <input
                     type='email' 
                     name='email' 
                     value={email} 
                     onChange={(e) => setEmail(e.target.value)} 
                     required />
                  </div>
                </div>
                <div className='grid-2'>
                  <div className='inputs'>
                    <span>Your Budget</span>
                    <input
                     type='text' 
                     name='budget' 
                     value={budget} 
                     onChange={(e) => setBudget(e.target.value)} />
                  </div>
                  <div className='inputs'>
                    <span>Timeframe</span>
                    <input
                     type='text' 
                     name='timeFrame' 
                     value={timeFrame} 
                     onChange={(e) => setTimeframe(e.target.value)} />
                  </div>
                </div>
                <div className='inputs'>
                  <span>TELL US A BIT ABOUT YOUR PROJECT*</span>
                  <textarea
                   name='message' 
                   cols='30' 
                   rows='10' 
                   value={message} 
                   onChange={(e) => setMessage(e.target.value)} 
                   required></textarea>
                </div>
                {error && <div style={styles.error}>{error}</div>}
                <button type="submit" className='button-primary' disabled={loading}>
                {loading ? 'Sending Message...' : 'Send'}
                </button>
              </form>

               {/* Modal with Auto-Close Timer and Progress Bar */}
              {showModal && (
                  <div className="modal success-modal">
                    <div className="modal-content">
                      <h4>Message sent successfully!</h4>
                   
                        <div className="edit-progressBar"></div>         
                    </div>
                  </div>
                )}
            </div>
          </div>

       <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d205.54915845806786!2d38.82994637225643!3d9.028417579003465!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b91582179b0c3%3A0x87240aec8044f178!2sSilicon%20Labs%20PCB%20Printing%20and%20assembly!5e1!3m2!1sen!2set!4v1730493598664!5m2!1sen!2set"
              width="100%"
              height="650"
              style={{border:0}}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Maps Location"
            ></iframe>
          </div>

        </div>
        <br />
        <br />
      </section>

      <style jsx>{`
        .map-container {
          margin: 0;
          width: 100%;
          max-width: 1500px;
          border-radius: 30px 0 30px 0;
        }

        @media (max-width: 768px) {
          .contact .content {
            flex-direction: column;
            gap: 24px;
          }
          .contact .left,
          .contact .right {
            width: 100%;
          }
          .contact .grid-2 {
            grid-template-columns: 1fr;
            gap: 12px;
          }
          .contact .inputs input,
          .contact .inputs textarea {
            width: 100%;
          }
          .contact ul {
            justify-content: flex-start;
            gap: 12px;
          }
          .contact button.button-primary {
            width: 100%;
          }
        }
      `}</style>
    </>
  )
}

export default Contact
