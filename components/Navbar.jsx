'use client'
import React from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link';

function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="navbar navbar-expand-lg navbar-dark py-3 position-sticky top-0 bg-black z-3 ">
            <div className="container">
                <img className='img-fluid' src='/assets/images/enfinito.png' alt='enfinito_logo' width={140} height={40} />
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon text-white"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto fw-bold">
                        <li className="nav-item nav-btn text-center mx-2">
                            <Link className={`nav-link  ${pathname === '/' ? 'text-primary nav-active' : 'text-white'}`} aria-current="page" href="/">Home</Link>
                        </li>
                        <li className="nav-item nav-btn text-center mx-2">
                            <Link className={`nav-link  ${pathname === '/about' ? 'text-primary nav-active' : 'text-white'}`} aria-current="page" href="/about">About us</Link>
                        </li>
                        <li className="nav-item nav-btn text-center mx-2">
                            <Link className={`nav-link  ${pathname === '/services' ? 'text-primary nav-active' : 'text-white'}`} aria-current="page" href="/services">Services</Link>
                        </li>
                        <li className="nav-item nav-btn text-center mx-2">
                            <Link className={`nav-link  ${pathname === '/portfolio' ? 'text-primary nav-active' : 'text-white'}`} aria-current="page" href="/portfolio">Portfolio</Link>
                        </li>
                        <li className="nav-item nav-btn text-center mx-2">
                            <Link className={`nav-link  ${pathname === '/careers' ? 'text-primary nav-active' : 'text-white'}`} aria-current="page" href="/careers">Careers</Link>
                        </li>
                        <li className="nav-item nav-btn text-center mx-2">
                            <Link className={`nav-link  ${pathname === '/blog' ? 'text-primary nav-active' : 'text-white'}`} aria-current="page" href="/blog">Blog</Link>
                        </li>
                    </ul>
                    <Link className="btn btn-outline-light fw-bold border-2 px-3 text-center" href={'/contact'}>Let's Talk</Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;