import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const JobApplicationsList = () => {

    const [jobApps, setJobApplications] = useState([]); // State to store all blogs
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchJobApplications = async () => {
            try {
                const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/job-applications`); // Adjust to match your API URL
                if (!response.ok) {
                    throw new Error("Failed to fetch job applications");
                }
                const allApplications = await response.json();
                setJobApplications(allApplications);
            } catch (error) {
                console.error("Error fetching job applications:", error);
                setError(error.message);
            }
        };

        fetchJobApplications();
    }, []);

    return (
        <div className="blog-list">
             {error && <p className="error-message">{error}</p>}

            <ul>
                {jobApps.length > 0 ? (
                    jobApps.map((jobApp) => (
                        <>
                        <Link href={`/admin/job-application/${jobApp._id}`}>
                            <div className="notification-dropdown-item" key={jobApp._id} id={jobApp._id}>A job application for {jobApp.position} from {jobApp.name}.</div>
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

export default JobApplicationsList;