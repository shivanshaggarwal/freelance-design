import React from 'react'
import logoImage from '../../Images/logoImage.png'

const Header = () => {
    return (
        <div className='bg-dark text-white'>
            <div className='container p-4 text-center'>
                <div className='d-flex flex-column justify-content-center align-items-center'>
                    <div className='d-flex flex-row justify-content-center align-items-center'>
                        <div>
                            <img style={{ width: '100px', height: '70px' }} src={logoImage} alt="No error" />
                        </div>
                        <div className='ms-3'>
                            <h1 className='text-warning fs-1'>Caba Innovatives</h1>
                        </div>
                    </div>
                    <h6 className='fw-bold text-warning mt-2'>
                        (Multimedia Animation Institute Since 1993)
                    </h6>
                </div>
                <div className="p-2">
                    <p className='fs-5'>Caba Innovatives was the FIRST Multimedia Animation Institute in Delhi and India. Caba offers Graphic Design, Web Designing, Web Development, Video Editing, Motion Graphics, Animation, and Digital Marketing Courses in Delhi.
                        Caba <span className='text-danger'>(Computer Aided Business Animation)</span> Innovatives is the only Institute offering one-on-one individual training classes to each student.
                        Caba is also the only Institute that provides a 100% Job Guarantee <span className='text-danger'>(in writing)</span> or money back for all courses conducted by Caba Innovatives.
                        Caba was also the first Digital Studio Post-Production House based in Bengali Market, Connaught Place, New Delhi.
                    </p>
                </div>
                <div className="container p-6 d-flex align-items-center justify-content-between flex-wrap">
                    <div className='bg-light m-2 border rounded p-2 w-100'>
                        <img src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png" style={{ width: 25, height: 25 }} alt="No Error" />
                        <h5 className='ms-3 text-warning'>One-to-One Training</h5>
                        <p className='text-dark text-justify'>Caba's unique teaching pedagogy has has pioneered the vocational training industry. Our practical one-to-one training helps our candidates to attain professional calibre.</p>
                    </div>
                    <div className='bg-light m-2 border rounded p-2 w-100'>
                        <img src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png" style={{ width: 25, height: 25 }} alt="No Error" />
                        <h5 className='ms-3 text-primary'>Career Prospects</h5>
                        <p className='text-dark text-justify'>Caba Innovatives is the only Institute that provides a 100% Job Guarantee after the course in writing and not just verbal 100% Job Assurance.</p>
                    </div>
                    <div className='bg-light m-2 border rounded p-2 w-100'>
                        <img src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png" style={{ width: 25, height: 25 }} alt="No Error" />
                        <h5 className='ms-3 text-danger'>Professional Approach</h5>
                        <p className='text-dark text-justify'>Caba is the only Institute that provides practical, hands-on training on professional projects. Software training is only a part of the practical project-based training.</p>
                    </div>
                    <div className='bg-light m-2 border rounded p-2 w-100'>
                        <img src="https://cdn-icons-png.flaticon.com/512/9709/9709605.png" style={{ width: 25, height: 25 }} alt="No Error" />
                        <h5 className='ms-3 text-success'>
                            Awards</h5>
                        <p className='text-dark text-justify'>Caba has been commended several times since 1997 by well-known names in the industry like DD National, Zee Careers, PTV, Danik Bhaskar, Times Group, FICCI, ONGC</p>
                    </div>
                </div>
                <div className="container-fluid p-3">
                    <div className='row'>
                        <div className="col-md-6 d-flex flex-column align-items-center justify-content-center" style={{ height: '350px' }}>
                            <h1>100% WRITTEN JOB GUARANTEE COURSES</h1>
                            <p>
                                Although it is unusual for an educational multimedia institute to provide job assurance, Caba is different.
                                At Caba, we believe that merely verbally promising a job is no longer enough and is unfair to students. There has to be a written agreement between the student and the Institute.
                                Call today to get more information about our job guarantee courses.
                            </p>
                            <button type="button" class="btn btn-danger border rounded">Call Now</button>
                        </div>
                        <div className='col-md-6' style={{ position: 'sticky' }}>
                            <img style={{ width: '100%', height: '350px' }} src='https://www.caba.in/wp-content/uploads/2022/04/multimedia-courses-job-guarantee.png' alt="No error" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
