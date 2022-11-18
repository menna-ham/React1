import React from 'react';
import styles from './NavBar.module.css';

import {  Link, NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
    <nav className={`navbar navbar-expand-lg  text-white py-3 `+ styles.bg}>
        <div className="container">
            <Link className={`navbar-brand text-white ` + styles.uperNav + " "+styles.fontBig} to={'/'}>Start React</Link>
            <button className={`navbar-toggler ` + styles.greenBg} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className='text-white me-2'>Menu</span>
              <span className={`navbar-toggler-icon `+ styles.togglrColor}> </span> 
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? `nav-link active text-white fs-5 fw-bold rounded-3 p-2 text-uppercase ${styles.ActiveLink +" "+ styles.hoverLink}`: ` nav-link active text-white fs-5 fw-bold text-uppercase ${styles.hoverLink}`} aria-current="page" to={'/portfolio'}>Portfolio</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? `nav-link active text-white fs-5 fw-bold rounded-3 p-2 text-uppercase ${styles.ActiveLink +" "+ styles.hoverLink}`: ` nav-link active text-white fs-5 fw-bold text-uppercase ${styles.hoverLink}`} to={'/about'}>About</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className={({isActive})=>isActive ? `nav-link active text-white fs-5 fw-bold rounded-3 p-2 text-uppercase ${styles.ActiveLink +" "+ styles.hoverLink}`: ` nav-link active text-white fs-5 fw-bold text-uppercase ${styles.hoverLink}`} to={'/contact'}>contact</NavLink>
                </li>

            </ul>

            </div>
        </div>
    </nav>



    </>
  )
}
