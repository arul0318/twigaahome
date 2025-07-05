import React, { useEffect, useRef } from 'react';
const Header = () => {
    const logoRef = useRef(null);
    useEffect(() => {
        const handleScroll = () => {
            const logo = logoRef.current;
            if (!logo) return;

            if (window.scrollY === 0) {
                logo.style.height = '84px';
            } else {
                logo.style.height = '60px';
            }
        };
        handleScroll();
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3 sticky-top">
                <div className="container-fluid d-flex justify-content-center">
                    <ul className="nav" style={{ fontSize: '1.19rem', fontWeight: 'bold', gap:'.7rem' }}>
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">About Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Features</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Pricing</a>
                        </li>
                        <li className="nav-item mx-4">
                            <img src="./img/Twigaa_logo_higRes.png" ref={logoRef} alt="Logo" style={{
                                height: '84px',
                                transition: 'height 0.3s ease-in-out'
                            }} />
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link login-btn" href="#">Login</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link book-btn" href="#">Book a Demo</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
export default Header;