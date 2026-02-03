import Link from 'next/link';
import { Disclosure, disclosure } from '@headlessui/react';
import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { FiHome, FiFileText, FiUsers, FiPackage, FiMessageCircle, FiBriefcase, FiSettings } from 'react-icons/fi';
import { VscFileSubmodule } from "react-icons/vsc"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"

const Sidebar = () => {

  const [active, setActive] = useState("")
  


  const router = useRouter()
  useEffect(() => {
    setActive(router.pathname)
  }, [router.pathname])

  return (
    <div className="sidebar">
    <div className="logo">
      <img src="/SL-Logo.png" alt="logo" width="30px" height="30px"></img>
      <h1>Dashboard</h1>
    </div>
    <nav>
      <Link href="/dashboard">
        <div className={`nav-item ${active === '/dashboard' ? 'active' : ''}`}>
        <FiHome size={20} />
          Overview
        </div>
      </Link>
      <Link href="/admin/blog">
        <div className={`nav-item ${active === '/admin/blog' ? 'active' : ''}`}>
        <FiFileText size={20} />
          Blogs
        </div>
      </Link>
      <Link href="/admin/users">
        <div className={`nav-item ${active === '/admin/users' ? 'active' : ''}`}>
        <FiUsers size={20} />
          Users
        </div>
      </Link>
      <Link href="/admin/clients">
        <div className={`nav-item ${active === '/admin/clients' ? 'active' : ''}`}>
        <FiMessageCircle size={20} />
          Client Messages
        </div>
      </Link>
      <Link href="/admin/jobs">
        <div className={`nav-item ${active === '/admin/jobs' ? 'active' : ''}`}>
        <FiBriefcase size={20} />
          Job Applications
        </div>
      </Link>
      <Link href="/admin/portfolio">
        <div className={`nav-item ${active === '/admin/portfolio' ? 'active' : ''}`}>
        <VscFileSubmodule size={20} />
          Portfolio
        </div>
      </Link>
      <Link href="/admin/services">
        <div className={`nav-item ${active === '/admin/services' ? 'active' : ''}`}>
        <FiPackage size={20} />
          Services
        </div>
      </Link>
      <Link href="/admin/settings">
        <div className={`nav-item ${active === '/admin/settings' ? 'active' : ''}`}>
        <FiSettings size={20} />
          Website Settings
        </div>
      </Link>
    </nav>
      <p>© 2024 Forge Atelier</p>
  </div>
  );
};

export default Sidebar;
