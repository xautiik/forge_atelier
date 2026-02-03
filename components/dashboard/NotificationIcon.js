import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import io from 'socket.io-client';

const NotificationIcon = () => {

    const [isNotifDropdownOpen, setIsNotifDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const [notifications, setNotifications] = useState([]); // State to store all blogs
    const [error, setError] = useState(null);
    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`);

    const toggleNotifDropdown = () => setIsNotifDropdownOpen(!isNotifDropdownOpen);

    useEffect(() => {
      const fetchNotifications = async () => {
          try {
              const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notifications`); // Adjust to match your API URL
              if (!response.ok) {
                  throw new Error("Failed to fetch notifications");
              }
               let allNotifications = await response.json();

                // Filter notifications from the last 48 hours
                const now = new Date();
                const filteredNotifications = allNotifications.filter(notification => {
                    const notificationDate = new Date(notification.createdAt);
                    return (now - notificationDate) <= 48 * 60 * 60 * 1000; // 48 hours in milliseconds
                });

                // Sort to ensure newest notifications first, then take the latest five
                setNotifications(filteredNotifications.reverse().slice(0, 5));
              //const allNotifications = await response.json();
              //setNotifications(allNotifications.reverse()); 
              {/*setNotifications(allNotifications); */}
          } catch (error) {
              console.error("Error fetching notifications:", error);
              setError(error.message);
          }
      };

      fetchNotifications();
  }, []);

       // Listen for real-time updates
    useEffect(() => {
      socket.on('new-notification', (newNotification) => {
          setNotifications((prevNotifications) => [newNotification, ...prevNotifications]);
      });

      return () => socket.off('new-notification');
  }, [socket]);

    // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsNotifDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

    return (
        <>
        <div ref={dropdownRef}>
            <div className="notification-icon" onClick={toggleNotifDropdown}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                    <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                </svg>
                <div className="notification-badge" id="notificationBadge">0</div>
            </div>

            {isNotifDropdownOpen && (
             
                <div className="notification-dropdown">
                  {notifications.length > 0 ? (
                    notifications.map((notification) => (
                  <div className="notification-dropdown-item" key={notification._id} id={notification._id}>{notification.message}</div>
                        ))
                ) : (
                <p>No notifications found.</p>
                )}
                <hr />
                <Link href="/admin/notification"><small>See all notifications</small></Link>
                </div>
            )}
            </div>
        </>
    )
}

export default NotificationIcon;