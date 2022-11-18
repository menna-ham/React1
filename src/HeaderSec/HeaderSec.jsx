import React from "react";
import styles from "./HeaderSec.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
export default function HeaderSec() {
  return (
    <>
      <div
        className={
          styles.Bg +
          ` d-flex flex-column justify-content-center align-items-center`
        }
      >
        <div>
          <img
            src="http://routeegypt.com/start-react/assets/img/avataaars.svg"
            className=" w-100 my-3 "
            alt="hi"
          />
        </div>
        <div className="text-center">
          <div className="d-flex flex-column justify-content-center align-items-center  p-3">
            <h2 className="text-center text-white "> Start React  </h2>
            <div className="w-50 my-2 d-flex  justify-content-between align-items-center">
              <div className={` rounded-3 mx-2 ` + styles.Line}> </div>

              <FontAwesomeIcon
                icon={faStar}
                size={"2x"}
                className={styles.secondBg}
              />
              <div className={`rounded-3 mx-2 ` + styles.Line}> </div>
            </div>
          </div>

          <h2 className="text-white my-3 ">
            Graphic Artist - Web Designer - Illustrator
          </h2>
        </div>
      </div>
    </>
  );
}
