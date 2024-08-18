import Link from 'next/link'

export default function NotFound() {
    return <div className='container home_banner d-flex justify-content-center align-items-center flex-column'>
        <h1 className='fs-1 gradient-1' >Not found - 404!</h1>
        <div>
            <Link href="/" className='nav-link fs-4 text-decoration-underline'>&larr; Go back to Home</Link>
        </div>
    </div>
}