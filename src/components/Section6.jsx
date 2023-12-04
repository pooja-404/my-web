import React from 'react'
import email from '../assets/images/email.png'
const Section6 = () => {
  return (
    <div>
      <div className='container pt-53 pb-50'>
        <div className='row'>
          <div className='col-lg-6 col-12 d-flex justify-content-center flex-column '>
            <div className='d-flex align-items-center gap-14'>
              <p className='ff-worksans fs-16 color-gradient fw-600'>Contact US</p>
              <div className='line-3'></div>
            </div>
            <h2 className='ff-worksans fs-40 fw-700 pt-12'>Get in touch!</h2>
            <form className='pr-40'>
              <div className='d-flex align-items-center w-100 gap-5 pt-24'>
                <input type="text" placeholder='Full Name ' className='form-text ff-worksans fw-normal fs-16 color-black op-7 color-gray pb-10 w-50' />
                <input type="e-mail" placeholder='Email Address' className='form-text ff-worksans fw-normal fs-16 color-black color-gray op-7 pb-10 ml-8 w-50' />
              </div>
              <input type="text" placeholder='Company Name' className='form-text ff-worksans fw-normal fs-16 color-black color-gray op-7 pb-10 pt-24 w-100' />
              <textarea name="text" id="" cols="30" rows="10" placeholder='Message' className='form-text ff-worksans fw-normal color-gray fs-16 color-black op-7 pb-10 pt-24 w-100 resize-none'></textarea>
            </form>
          </div>
          <div className='col-lg-6 col-12'>
            <img className='w-100' src={email} alt="formsectionimage" />

          </div>
        </div>
      </div>
    



    </div>
  )
}

export default Section6
