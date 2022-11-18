import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import styles from './Portfolio.module.css';
import $ from 'jquery'
import cabin from '../Imgs/cabin.png'
import cake from '../Imgs/cake.png'
import circus from '../Imgs/circus.png'
import game from '../Imgs/game.png'
import safe from '../Imgs/safe.png'
import submarine from '../Imgs/submarine.png'
import ItemPortfolio from './ItemPortfolio';
import ContentSlide from './ContentSlide'


export default function  Portfolio() {
  let [currentPort , setCurrentPort] = useState({})
  let [ports , setPort] = useState([])

  useEffect(()=>{
    let items = [
      {title: 'LOG CABIN' , path:cabin},
      {title: 'TASTY CAKE' , path:cake},
      {title: 'CIRCUS TENT' , path:circus},
      {title: 'CONTROLLER' , path:game},
      {title: 'LOCKED SAFE' , path:safe},
      {title: 'SUBMARINE' , path:submarine},

    ]
    setPort(items)

  },[setPort])

  function showSlide(index){
    $('.content').show();
    setCurrentPort(ports[index])
    console.log( currentPort);
}
  return (
    <>
    <div className='mb-5'>
    <div className={` text-center py-5 px-3  + ${styles.portSec}`}>
        <div className="d-flex flex-column justify-content-center align-items-center  p-3">
            <h2 className="text-center "> Portfolio  </h2>
            <div className="w-25  d-flex  justify-content-between align-items-center">
              <div className={` rounded-3 mx-2 ` + styles.Line}> </div>

              <FontAwesomeIcon icon={faStar} size={"2x"} className={styles.secondBg}/>
              <div className={`rounded-3 mx-2 ` + styles.Line}> </div>
            </div>
          </div>
      </div>
      <div className="container ">
        <div className="row g-5 mx-5">
          {
            ports.map((port,index)=>{
              return (
                <>
                {/* <ItemPortfolio title={port.title} path={port.path} key={index} show = {showSlide(index)} /> */}
              <div className="col-lg-4 col-md-6" key={index}>
                <div className={styles.portItme  + '  port'} onClick={()=>{showSlide(index)}}   >
                  <div>
                      <img src={port.path} className="w-100 rounded-5" alt={port.title} />
                  </div>
  
                  <div className={styles.layer +' layertry position-absolute rounded-5 '} onClick={()=>showSlide(index)}>
  
                      <div className="w-100 h-100 d-flex justify-content-center align-items-center">
  
                      <img src={require('../Imgs/icons8-plus-math-100.png')} alt='hi' />
  
                      </div>
  
                  </div>
  
                </div>
  
              </div>
                </>
              ) })
            }

                    
        </div>


      </div>

    </div>
    <ContentSlide  item={currentPort}/>
    
    </>
  )
}
