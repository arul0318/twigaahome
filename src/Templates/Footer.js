const Footer = () => {
    return (
        <>
            <footer className="py-4 pb-0 bg-dark text-white">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3">
                        <h6 className="fw-bold text-orange">Twigaa.ai</h6>
                        <p className="small">Twigaa.ai is a cutting-edge AI platform that provides innovative solutions for businesses and individuals. Our mission is to empower users with advanced AI tools to enhance productivity and creativity.</p>
                    </div>
                    <div className="col-md-3">
                        <div style={{ paddingLeft: '40%' }}>
                            <h6 className="fw-bold text-orange">Quick Links</h6>
                            <ul className="list-unstyled small">
                                <li><a>Home</a></li>
                                <li><a>About Us</a></li>
                                <li><a>Features</a></li>
                                <li><a>Pricing</a></li>
                                <li><a>Contact Us</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div style={{ paddingLeft: '20%' }}>
                            <h6 className="fw-bold text-orange">Follow Us</h6>
                            <ul className="list-unstyled small">
                                <li><a>Instagram</a></li>
                                <li><a>LinkedIn</a></li>
                                <li><a>Twitter</a></li>
                                <li><a>WhatsApp</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <h6 className="fw-bold text-orange">Contact Us</h6>
                        <ul className="list-unstyled small">
                            <li><a>Email: support@twigaa.ai</a></li>
                            <li><a>Phone: +1 234 567 890</a></li>
                        </ul>
                    </div>
                    <div className="col-12">
                       <p className="text-center mb-0 mt-3" style={{color: '#f8f9fa82'}}>© {new Date().getFullYear()} Twigaa.ai. All rights reserved.</p>
                    </div>
                    </div>
                </div>
            </footer>
        </>

    );
}

export default Footer;