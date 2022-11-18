import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

export default function Portfolio() {
  return (
    <>
        <div className='mb-5'>
    <div className={` text-center py-5 px-3  + ${styles.portSec}`}>
        <div className="d-flex flex-column justify-content-center align-items-center  p-3">
            <h2 className="text-center "> Portfolio  </h2>
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
      </div>
      <div className="container">
        <div className="row g-5 mx-5">

          {/* {
            portiItems.map((port)=>{
              return(
                // console.log(port.title + port.path)
                <ItemPortfolio  title={port.title} pathItem={port.path} />

              )
            })
          } */}

                    
        </div>

        {/* <ContentSlide  item={currentPort}/> */}

      </div>

    </div>
    
    </>
  )
}
