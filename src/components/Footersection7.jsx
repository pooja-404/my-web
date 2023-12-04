import React from 'react'
import footlogo from '../assets/images/footlogo.png'
import circleillipse from '../assets/images/circleillipse.png'
import smallcircle from '../assets/images/smallcircle.png'
import bigcircle from '../assets/images/bigcircle.png'
const Footersection7 = () => {
    return (
        <div>
            <div className='footer-bg pos-relative overflow-hidden'>
                <div className='container pt-53 text-center'>
                    <div className='pt-50'>
                        <img src={footlogo} alt="logo" />
                        <p className='ff-worksans fw-normal fs-14 color-white max-w-440 text-center mx-auto pt-3 lh-153'>Proudly Australian developed software. Focused on increasing efficiency and growing business within the beauty industry.</p>
                        <div className='d-flex pt-24 gap-50 max-w-375 text-center mx-auto '>
                            <p className='ff-worksans fw-normal fs-14 color-white text-center mx-auto  pt-16 cursor-pointer'>Navigation</p>
                            <p className='ff-worksans fw-normal fs-14 color-white text-center mx-auto pt-16 cursor-pointer'>Company</p>
                            <p className='ff-worksans fw-normal fs-14 color-white text-center mx-auto pt-16 cursor-pointer'>Contact</p>
                        </div>
                    </div>

                </div>
                <p className='ff-worksans color-white fw-normal fs-12 pt-75 pb-15  op-7 footer-line text-center'>Copyright 2020 All rights reserved, Greenfox Development Pty Ltd©</p>
                <img src={circleillipse} alt="footerellipse1" className='footerellipse1' />
                <img src={smallcircle} alt="f2" className='f2' />
                <img src={smallcircle} alt="f2" className='f3' />
                <img src={smallcircle} alt="f2" className='f5' />
                <img src={bigcircle} alt="f2" className='f4' />
            </div>
        </div>
    )

}
export default Footersection7