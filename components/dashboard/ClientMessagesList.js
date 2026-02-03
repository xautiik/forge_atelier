import React, { useEffect, useState } from 'react';
import Link from 'next/link';


const ClientMessagesList = () => {

    const [contacts, setContacts] = useState([]); // State to store all blogs
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContacts = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/contacts`); // Adjust to match your API URL
                if (!response.ok) {
                    throw new Error("Failed to fetch contact messages");
                }
                const allContacts = await response.json();
                setContacts(allContacts);
            } catch (error) {
                console.error("Error fetching contact messages:", error);
                setError(error.message);
            }
        };

        fetchContacts();
    }, []);

    return (
        <div className="blog-list">
            {error && <p className="error-message">{error}</p>}

            <ul>
            {contacts.length > 0 ? (
                contacts.map((contact) => (
                    <>
                    <Link href={`/admin/client-messages/${contact._id}`}>
                         <div className="notification-dropdown-item" key={contact._id} id={contact._id}>{contact.message}</div>
                    </Link>
                <hr className="mainContentHr" />
                </>
            ))
        ) : (
            <p>No client messages found.</p>
        )}
            </ul>
        </div>    
    )
}

export default ClientMessagesList;