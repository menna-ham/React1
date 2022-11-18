import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styles from "./About.module.css";

export default function About() {
  return (
    <>
      <div className={styles.about + ` py-5 px-3 `}>
        <div className="position-relative p-3 text-center">
        <div className="d-flex flex-column justify-content-center align-items-center  p-3">
            <h2 className="text-center text-white "> About  </h2>
            <div className="w-25 my-2 d-flex  justify-content-between align-items-center">
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
        <div className=" w-75 m-auto p-3 py-3 d-flex flex-column flex-lg-row  justify-content-between align-items-center ">
          <p className="text-white fs-5 me-2">Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p className="text-white fs-5 ms-2">
          You can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!
          </p>
        </div>
      </div>
    </>
  );
}
