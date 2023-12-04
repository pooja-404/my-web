import React from 'react'
import logo from '../assets/images/logo.png'
import arrow from '../assets/images/arrow.png'
import sun from '../assets/images/sun.png'

const Navsec = () => {
    return (
        <div>
            <div className='bg-image  min-110 pos-relative '>
                <div className='container '>
                    <div className='d-flex justify-content-between pb-50 py-20'>
                        <img src={logo} alt="logo" />

                        <div className="d-flex align-items-center">
                            <label for="menubar" class="z-index">
                                <span></span>
                                <span></span>
                                <span></span>

                            </label>
                            <input type="checkbox" id="menubar" hidden />
                            <ul className='d-flex align-items-center gap-46 mobile-view pt-26 pl-0'>
                                <li><a href="" className='fs-16 fw-normal ff-worksans color-black'>Home</a></li>
                                <li><a href="" className='fs-16 fw-normal ff-worksans color-black'>Modules</a></li>
                                <li><a href="" className='fs-16 fw-normal ff-worksans color-black'>Pricing</a></li>
                                <li><a href="" className='fs-16 fw-normal ff-worksans color-black'>Features</a></li>
                                <li><a href="" className='fs-16 fw-normal ff-worksans color-black'>Contact Us</a></li>
                            </ul>
                            <span className='d-flex align-items-center pl-12'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M8.70898 16.4198C10.484 16.4194 12.2078 15.8252 13.606 14.7318L18.002 19.1278L19.416 17.7138L15.02 13.3178C16.114 11.9195 16.7086 10.1952 16.709 8.4198C16.709 4.0088 13.12 0.4198 8.70898 0.4198C4.29798 0.4198 0.708984 4.0088 0.708984 8.4198C0.708984 12.8308 4.29798 16.4198 8.70898 16.4198ZM8.70898 2.4198C12.018 2.4198 14.709 5.1108 14.709 8.4198C14.709 11.7288 12.018 14.4198 8.70898 14.4198C5.39998 14.4198 2.70898 11.7288 2.70898 8.4198C2.70898 5.1108 5.39998 2.4198 8.70898 2.4198Z"
                                        fill="black" />
                                </svg>
                            </span>
                        </div>

                    </div>
                    <div className="container">
                        <div className=' pos-relative z-1'>
                            <p className=' ff-worksans fs-62 fs-38 fw-800 text-center  mw-776 pt-50 mx-auto'>Maitre D – Store Management for Barbers</p>
                            <img className='arrow d-none d-lg-block' src={arrow} alt="logo" />

                        </div>
                        <div className="d-flex justify-content-center  pt-50 pb-50">
                            <button className="submit-btn ff-worksans fw-700 fs-20 text-white cursor-pointer">Submit</button>
                        </div>
                    </div>
                </div>
                <img className='sun d-none d-lg-block' src={sun} alt="logo" />
            </div>
        </div>
    )
}

export default Navsec
