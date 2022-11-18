import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './Footer.module.css'
import { faB } from '@fortawesome/free-solid-svg-icons'
import { faDribbble, faFacebook, faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons'


export default function Footer() {
  return (
    <>
    <div className=''>
    <div className={`p-5 text-white ` +styles.lightBg}>
       <div className="container ">
        <div className="row">
            <div className="col-md-4">
                <div className="footItem  text-white text-center p-2">
                    <h2 className='text-white py-2'> Location</h2>
                    <p className='fs-5 m-3 p-2'>
                    2215 John Daniel Drive Clark, MO 65243
                    </p>

                </div>
            </div>

            <div className="col-md-4">
                <div className="footItem  text-white text-center p-2">
                    <h2 className='text-white py-2 mb-4'> AROUND THE WEB</h2>
                    <div className=" d-flex flex-row justify-content-evenly">
                        <FontAwesomeIcon icon={faFacebookF} size={'1x'}className={' p-3 ' + styles.social} />
                        <FontAwesomeIcon icon={faTwitter} size={'1x'}className={' p-3 ' + styles.social} />
                        <FontAwesomeIcon icon={faLinkedinIn} size={'1x'}className={' p-3 ' + styles.social} />
                        <FontAwesomeIcon icon={faDribbble} size={'1x'}className={' p-3 ' + styles.social} />

                    </div>

                </div>
            </div>

            <div className="col-md-4">
                <div className="footItem  text-white text-center p-2">
                    <h2 className='text-white py-2'> ABOUT FREELANCER</h2>
                    <p className='fs-5 m-3 p-2'>
                    Freelance is a free to use, MIT licensed Bootstrap theme created by Route
                    </p>

                </div>
            </div>

        </div>
       </div>
    </div>

    <div className='bg-dark text-white text-center p-3 pb-4'>
        <p className='pt-3'>Copyright © Your Website 2021</p>
    </div> 
    </div>
  

    </>
  )
}
