import { Link } from '@remix-run/react';

import Logo from '../../public/imgs/logo.svg';
// styles
// import '../../src/styles/styles.css';
// export const links: LinksFunction = () => [{ rel: 'stylesheet', href: styles }];

const Navbar = () => {
    return (
        <>
            <nav className='navbar'>
                <Link to='/'>
                    <img src={Logo} className='logo' alt='site logo' />
                </Link>
                <Link to='/demo' className='nav-item'>
                    Subscription
                </Link>
                <Link to='/demo' className='nav-item'>
                    Shop
                </Link>
                <Link to='/demo' className='nav-item'>
                    Wholesale
                </Link>
                <Link to='/demo' className='nav-item'>
                    Guides
                </Link>
                <Link to='/demo' className='nav-item'>
                    About
                </Link>
                <Link to='/demo' className='nav-item'>
                    Contact Us
                </Link>
            </nav>
        </>
    );
};

export default Navbar;
