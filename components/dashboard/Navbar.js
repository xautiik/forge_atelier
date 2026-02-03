import React from 'react';
import Profile from './Profile';
import NotificationIcon from './NotificationIcon';
import Link from 'next/link';

const Navbar = () => {
    return (    
        <div className="navbar">
            <div className="header">
                <nav>
                <ul>
                    <Link href="/" target="_blank"><li>Home</li></Link>
                    <Link href="/about" target="_blank"><li>About</li></Link>
                    <Link href="/team" target="_blank"><li>Team</li></Link>
                    <Link href="/services" target="_blank"><li>Services</li></Link>
                    <Link href="/portfolio" target="_blank"><li>Portfolio</li></Link>
                    <Link href="/blogs" target="_blank"><li>Blog</li></Link>
                    <Link href="/contact" target="_blank"><li>Contact</li></Link>
                </ul>
                </nav>
                <div className="navbar-left">
                    <Profile />
                    <NotificationIcon />
                </div>
            </div>
        </div>
    );
}

export default Navbar;