import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

function Footer() {
    return (
        <footer>
            <hr className="border border-light" />
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <img className='img-fluid' height={40} width={140} src='/assets/images/enfinito.png' alt='enfinito_logo' />
                        <p className='ms-2'>Drive into excellence with <b>Enfinito.</b> <br />
                            Where expertise meets <b>Innovation</b></p>
                    </div>
                    <div className="col-12 col-md-6">
                        <div className="row">
                            <div className="col-12 col-md-4 mb-3">
                                <p className='fw-bold'>Authorized by</p>
                                <img className='mx-4' height={50} width={50} src='/assets/images/govt.png' alt='govt_bd_logo' />
                            </div>
                            <div className="col-12 col-md-4">
                                <p className='fw-bold'>Our Partners</p>
                                <img  height={50} width={100} src='/assets/images/google.png' alt='goggle_logo' />
                            </div>
                            <div className="col-12 col-md-4">
                                <p className='fw-bold'>Payment Partner</p>
                                <img  height={50} width={120} src='/assets/images/bkash.png' alt='bKash_logo' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-light" />
            <div className="container py-3 my-0">
                <div className='row'>
                    <div className="col-12 col-md-4">
                        <p className='fw-bold'>Contacts</p>
                        <p>
                            <span className="fw-bold">Email:</span> info@enfinito.com <br />
                            <span className="fw-bold">Phone:</span> +880 1540-110050 <br />
                            <span className="fw-bold">WhatsApp:</span> <a href="#" className='btn btn-primary rounded-5 py-0 px-3'>Massage Us</a></p>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="fw-bold">Head Office</p>
                        <address>Rupayan Prime, Level: 11, House: 02, <br />Road: 07, Greenroad, Dhanmondi, <br />Dhaka, Bangladesh</address>
                    </div>
                    <div className="col-12 col-md-4">
                        <p className="fw-bold">Social Media</p>
                        <div className="d-flex">
                            <a href="#"><img className='me-2' src='/assets/icons/facebook.png' width={35} height={35} alt='facebook_icon' /></a>
                            <a href="#"><img className='mx-2' src='/assets/icons/instagram.png' width={35} height={35} alt='instagram_icon' /></a>
                            <a href="#"><img className='mx-2' src='/assets/icons/twitter.png' width={35} height={35} alt='twitter_icon' /></a>
                            <a href="#"><img className='mx-2' src='/assets/icons/linkedin.png' width={35} height={35} alt='linkedin_icon' /></a>
                        </div>
                        <div className="d-flex mt-3">
                            <a href="#"><img className='me-2' src='/assets/icons/telegram.png' width={35} height={35} alt='telegram_icon' /></a>
                            <a href="#"><img className='mx-2' src='/assets/icons/youtube.png' width={35} height={35} alt='youtube_icon' /></a>
                            <a href="#"><img className='mx-2' src='/assets/icons/behance.png' width={35} height={35} alt='behance_icon' /></a>
                            <a href="#"><img className='mx-2' src='/assets/icons/discord.png' width={35} height={35} alt='discord_icon' /></a>
                        </div>
                    </div>
                </div>
            </div>
            <hr className="border border-light" />
            <p className='d-flex justify-content-center flex-wrap'>
                <Link href="#" className='px-3 nav-link nav-btn'>Privacy Policy</Link>| 
                <Link href="#" className='px-3 nav-link nav-btn'>Terms & Conditions</Link>| 
                <Link href="#" className='px-3 nav-link nav-btn'>Company Profile</Link>| 
                <Link href="#" className='px-3 nav-link nav-btn'>Community</Link>
            </p>
            <p className='text-center'>&copy; Copyright 2024. Enfinito. All rights reserved.</p>
        </footer>
    )
}

export default Footer;