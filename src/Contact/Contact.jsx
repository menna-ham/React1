import React, { useEffect } from 'react'
import styles from './Contact.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
// import $ from 'jquery'


export default function Contact() {

  let nameRegex= /^(?=.*?[A-Za-z\s])[A-Za-z+\s]{3,20}$/;
  let EmailRegex= /^[a-zA-Z0-9@#$%^&-+=()._]+@[A-Za-z0-9.-]+(.com)$/;
  let phoneRegex=/^01[0125][0-9]{8}$/;

  let Name = document.getElementById('Name');
  let Email = document.getElementById('Email');
  let Phone = document.getElementById('Phone');
  let msg = document.getElementById('msg');
  //let sendBtn = document.getElementById('sendBtn')
  

  useEffect(()=>{
    let allInputs =Array.from( document.querySelectorAll('input'));
    let myText = document.querySelector('textarea');

    let nameValid = document.getElementById('nameValid');
    let mailValid = document.getElementById('mailValid');
    let phoneValid =document.getElementById('phoneValid');
    let msgValid = document.getElementById('msgValid')

    for (let i = 0; i< allInputs.length; i++) {

      allInputs[i].addEventListener('keyup',()=>{
        popUpLabel(i);
      })
  
    }

    
  if(Name){
    Name.addEventListener('keyup',()=>{
      if(nameRegex.test(Name.value) !==true){
        // alert('hii')
        nameValid.classList.remove('d-none');
        nameValid.classList.add('d-block');

      }else{
        nameValid.classList.remove('d-block');
        nameValid.classList.add('d-none');
      }
    })
  }
  if(Email){
    Email.addEventListener('keyup',()=>{
      if(EmailRegex.test(Email.value) !==true){
        // alert('hii')
        mailValid.classList.remove('d-none');
        mailValid.classList.add('d-block');

      }else{
        mailValid.classList.remove('d-block');
        mailValid.classList.add('d-none');
      }
    })
  }

  if(Phone){
    Phone.addEventListener('keyup',()=>{
      if(phoneRegex.test(Phone.value) !==true){
        // alert('hii')
        phoneValid.classList.remove('d-none');
        phoneValid.classList.add('d-block');

      }else{
        phoneValid.classList.remove('d-block');
        phoneValid.classList.add('d-none');
      }
    })
  }
  if(msg){
    msg.addEventListener('keyup',()=>{
     if(msg.value !==''){
      msgValid.classList.remove('d-block')
      msgValid.classList.add('d-none')
     }else{
      msgValid.classList.remove('d-none');
      msgValid.classList.add('d-block');

     }
    })
  }

  function popUpLabel(i){
    let parent = allInputs[i].parentElement;
    let Mylabel = parent.querySelector('label');

    if(allInputs[i].value!==""){
      // $(Mylabel).show(200)
      Mylabel.classList.remove('d-none')
      Mylabel.classList.add('d-block')

    }else if(allInputs[i].value===""){

      Mylabel.classList.remove('d-block')
      Mylabel.classList.add('d-none')

    }
  }

    if(myText)
    {
      myText.addEventListener('keyup',()=>{
        let parent = myText.parentElement;
        let Mylabel = parent.querySelector('label');
      // console.log(parent.querySelector('label'));

        if(myText.value!=='')
        {
          Mylabel.classList.remove('d-none')
          Mylabel.classList.add('d-block')

        }else if(myText.value===''){
          
          Mylabel.classList.remove('d-block')
          Mylabel.classList.add('d-none')
        }
      })
    }

    // if(sendBtn){
    //   sendBtn.addEventListener('click', disabledBtn())
    // }

  })


  // function disabledBtn() {
  //   if(nameRegex.test(Name)&& EmailRegex.test(Email) && phoneRegex.test(Phone) &&msg.value!=='')
  //   {

  //     console.log('true');
  //   }else{
  //     console.log('try again');
  //   }
  // }



  return (
    <>

      <div className=' p-5'>
    <div className="d-flex flex-column justify-content-center align-items-center  p-3">

      <h2 className="text-center"> Contact Us </h2>
      <div className="w-25 my-2 d-flex  justify-content-between align-items-center">

        <div className={` rounded-3 mx-2 `+styles.Line}> </div>

        <FontAwesomeIcon icon={faStar} size={'2x'} className={styles.secondBg}/>

        <div className={`rounded-3 mx-2 `+styles.Line}> </div>


      </div>

    </div>
      <div className=' p-3 '>
          <div className="container">
              <div className="row g-2">

              <div className={`col-md-8 mx-auto  ` + styles.inputDiv}>
                <div className="mb-3 position-relative">
                    <label htmlFor="Name" className="form-label d-none">Name </label>
                    <input type="text" className="form-control shadow-none" id="Name"  placeholder='Name'/>
                    <p className='text-danger d-none' id='nameValid'> your name should be atleast char</p>
                  </div>
                </div>

              <div className={"col-md-8 mx-auto " + styles.inputDiv}>
                <div className="mb-3 position-relative">
                    <label htmlFor="Email" className="form-label d-none">Email</label>
                    <input type="email" className="form-control shadow-none" id="Email" placeholder='Email' />
                    <p className='text-danger d-none' id='mailValid'> Not Valid Email </p>
                  </div>
              </div>

              <div className={"col-md-8 mx-auto " + styles.inputDiv}>
                <div className="mb-3 position-relative">
                    <label htmlFor="Phone" className="form-label d-none">Phone</label>
                    <input type="text" className="form-control shadow-none" id="Phone" placeholder='Phone'/>
                    <p className='text-danger d-none' id='phoneValid'> Not Valid Phone </p>

                  </div>
              </div>

              <div className={"col-md-8 mx-auto " + styles.inputDiv}>
                <div className="mb-3 position-relative">
                    <label htmlFor="msg" className="form-label d-none">Message </label>
                    <textarea rows={7} className="form-control shadow-none bg-transparent border-0 shadow-none" id="msg" placeholder='Message' />
                    <p className='text-danger d-block' id='msgValid'> Enter Your Msg </p>
                </div>
              </div>

              <div className='col-md-8 mx-auto '>
                <button id='sendBtn' className='btn text-white p-3 my-3'> Send</button>

              </div> 


              </div>
          </div>
          
        </div>

      </div>
    </>
  )
}
