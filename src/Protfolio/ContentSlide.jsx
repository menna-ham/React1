import React from 'react';
import styles from './Portfolio.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faXmark } from '@fortawesome/free-solid-svg-icons';
import { faStar } from '@fortawesome/free-solid-svg-icons';

import $ from 'jquery'


export default function ContentSlide(myProps) {
    
    let {item}=myProps;
console.log(item);

    function closeSlide(){
        $('.content').hide()

    }

  return (
    <>
    <div className={styles.content + " p-5 content mt-0"}>

    <div className="container bg-white rounded-3 position-relative">

        <div className=' text-center p-3'>
        <div className="d-flex flex-column justify-content-center align-items-center  p-3">
            <h2 className="text-center "> {item.title}  </h2>
            <div className="w-25  d-flex  justify-content-between align-items-center">
              <div className={` rounded-3 mx-2 ` + styles.Line}> </div>

              <FontAwesomeIcon
                icon={faStar}
                size={"2x"}
                className={styles.secondBg}
              />
              <div className={`rounded-3 mx-2 ` + styles.Line}> </div>
            </div>
          </div>
            

            <div className='w-50 my-5  mx-auto' >
                <div>
                <img src={item.path} className='w-100 rounded-5'alt={item.title} />
                </div>
                <p className='p-3 my-3'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo perspiciatis maxime magni vitae placeat natus eum dolore sunt obcaecati exercitationem, quia dolores vero quod minus reprehenderit veniam ipsam eligendi fugiat.</p>


                <div className='my-3 p-3'>
                    <button onClick={ ()=> { closeSlide()}} className={`btn text-white `+styles.closeBtn}>
                        <FontAwesomeIcon icon={faXmark} size='xl' className='me-1'/>
                        Close Window
                    </button>
                </div>
                
            </div>


        </div>

        <FontAwesomeIcon icon={faXmark} size='2x' className={` position-absolute top-0 end-0 m-3 `+ styles.closeIcon} onClick={ ()=> { closeSlide()}} />


    </div>
    </div>

    </>
  )
}
