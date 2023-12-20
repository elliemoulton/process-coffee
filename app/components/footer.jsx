import { Link } from '@remix-run/react';

import { InstagramFill, FacebookFill, TiktokFill } from 'akar-icons';
import Logo from '../../public/imgs/logo.svg';

const Footer = () => {
    return (
        <>
            <footer>
                <div className='top'>
                    <div className='column column-1'>
                        <h5>Shop</h5>
                        <Link to='/demo'>
                            <p>Coffee Beans</p>
                        </Link>
                        <Link to='/demo'>
                            <p>Subscriptions</p>
                        </Link>
                        <Link to='/demo'>
                            <p>Cold Brew</p>
                        </Link>
                        <Link to='/demo'>
                            <p>Wholesale</p>
                        </Link>
                    </div>
                    <div className='column'>
                        <h5>About</h5>
                        <Link to='/demo'>
                            <p>About Us</p>
                        </Link>
                        <Link to='/demo'>
                            <p>Contact</p>
                        </Link>
                    </div>
                    <div className='column'>
                        <h5>Resources</h5>
                        <Link to='/demo'>
                            <p>Coffee Brew Guides</p>
                        </Link>
                        <Link to='/demo'>
                            <p>Coffee Calculator</p>
                        </Link>
                    </div>
                    <div className='column'>
                        <h5>Follow Us</h5>
                        <Link
                            to='https://www.instagram.com/processcoffeeroasters/'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <InstagramFill
                                strokeWidth={2}
                                size={28}
                                className='icon'
                            />
                        </Link>
                        <Link
                            to='/demo'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <FacebookFill
                                strokeWidth={2}
                                size={28}
                                className='icon'
                            />
                        </Link>
                        <Link
                            to='/demo'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            <TiktokFill
                                strokeWidth={2}
                                size={28}
                                className='icon'
                            />
                        </Link>
                    </div>
                </div>
                <div className='bottom'>
                    <img src={Logo} alt='logo' />
                    <p>©Process Coffee Roasters</p>
                    <p>Terms & Conditions</p>
                    <p>Privacy Policy</p>
                </div>
            </footer>
        </>
    );
};

export default Footer;
