import React, { useState, useEffect, useRef } from 'react';
import { FiUser, FiLogOut } from 'react-icons/fi';
import Link from 'next/link';
import { useRouter } from "next/router";
import axios from 'axios'; // To make API requests

const Profile = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null); // Store user data here
  const dropdownRef = useRef(null);
  const router = useRouter();

  const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

  // Fetch user data after component mounts
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    const fetchUserData = async () => {
      const token = localStorage.getItem("token");
      if (token) {
        try {
          // Assuming the username is encoded in the token or stored in localStorage
          const decodedToken = JSON.parse(atob(token.split('.')[1])); // Decode the JWT token
          const username = decodedToken.username; // Extract username from token

          // Fetch user data from the API
          const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/user/${username}`, {
            headers: {
              Authorization: `Bearer ${token}`, // Attach token in the headers
            },
          });
          setUserData(response.data); // Update state with user data
        } catch (error) {
          console.error("Error fetching user data:", error);
          router.push("/admin/login");// Redirect if error
        }
      } else {
        router.push("/admin/login"); // Redirect if no token
      }
    };

    fetchUserData();
  }, [router]);



  if (!userData) return <div>Loading...</div>; // Show loading state if data is not available yet
 
  const handleLogout = () => {
    localStorage.removeItem("token"); // Remove the token on logout
    router.push("/admin/login"); // Redirect to login page
  };
  return (
    <div ref={dropdownRef}>
      <div className="user-info" onClick={toggleDropdown}>
        <img src={userData.profilePhoto} alt="User Avatar" />
        <span>
          <p>{userData.firstName} {userData.lastName}</p> 
          <small>{userData.role}</small> 
        </span>
      </div>

      {isDropdownOpen && (
        <div className="dropdown-menu">
          <Link href="/admin/profile/[username]" as={`/admin/profile/${userData.username}`}>
            <div className="dropdown-item"><FiUser size={16} />&nbsp; &nbsp;Profile</div>
          </Link>
          <div className="dropdown-item" onClick={handleLogout}>
            <FiLogOut size={16} />&nbsp; &nbsp;Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
