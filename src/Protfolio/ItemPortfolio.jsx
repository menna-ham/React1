import React from 'react'
import styles from './Portfolio.module.css'

export default function ItemPortfolio(myProps) {
// console.log(myProps);
let{ pathItem , show , index} = myProps;

  return (
    <>
    
    <div className="col-lg-4 col-md-6">
            <div className={styles.portItme  + '  port'} onClick={()=>{show(index)}}   >
                <div>
                    <img src={require(pathItem)} className="w-100 rounded-5" />
                </div>

                <div className={styles.layer +' layertry position-absolute rounded-5 '} onClick={()=>show(index)}>

                    <div className="w-100 h-100 d-flex justify-content-center align-items-center">

                    <img src={require('../Imgs/icons8-plus-math-100.png')} />

                    </div>

                </div>

            </div>

    </div>

    </>
  )
}
