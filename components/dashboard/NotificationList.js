import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';


const NotificationList = () => {

    const [notifications, setNotifications] = useState([]); 
    const [error, setError] = useState(null);
    const socket = io(`${process.env.NEXT_PUBLIC_API_URL}`);

    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/notifications`); // Adjust to match your API URL
                if (!response.ok) {
                    throw new Error("Failed to fetch notifications");
                }
                const allNotifications = await response.json();
                setNotifications(allNotifications.reverse()); 
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

    return (
        <div className="blog-list">
            {error && <p className="error-message">{error}</p>}

            <ul>
                {notifications.length > 0 ? (
                    notifications.map((notification) => (
                        <>
                            <div className="notification-dropdown-item" key={notification._id} id={notification._id}>{notification.message}</div>
                            <small>{new Date(notification.createdAt).toLocaleString('en-US', {
                                    month: 'short',
                                    day: 'numeric',
                                    year: 'numeric',
                                    hour: '2-digit',
                                    minute: '2-digit',
                                    hour12: true 
                                    })}
                                    </small>
                    <hr className="mainContentHr" />
                    </>
                ))
                ) : (
                <p>No notifications found.</p>
                )}
            </ul>
        </div>    
    )
}

export default NotificationList;