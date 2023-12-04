import React from 'react'
import announcement from '../assets/images/announcement.png'

const Section2 = () => {
    return (
        <div>
            <div class="bg">
                <div className='container'>
                    <div className='row justify-content-center'>
                        <div className='col-lg-6 col-12 d-flex justify-content-center '>
                            <img className='w-100' src={announcement} alt="logo" />
                        </div>
                        <div className='col-lg-6 col-12  d-flex justify-content-center flex-column pt-50 pt-lg-0'>
                            <div className='d-flex align-items-center justify-c-content-center  gap-14 text-c-center'>
                                <p className=' fw-600 fs-16 ff-worksans  color-gradient  color-gradient'>About Us</p>
                                <div className="line-3"></div>
                            </div>
                            <h2 className=' fs-40 fw-700 ff-worksans pt-12 text-c-center'>What is <span className='color-gradient'> Maître D?</span></h2>
                            <p className='fs-16 mw-456 fw-normal color-gray op-7 text-c-center'>Maître D is a full service solution, designed specifically for
                                salons and
                                barbershops. Our approach is modular, which
                                means you only pay for the functionality that you need. Each module is completely integrated
                                into the solution, so your
                                entire business always remains syncronized. Maître D allows you to see everything within
                                your
                                business, from one
                                location.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}
export default Section2