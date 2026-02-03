import React, { useEffect, useState } from 'react'
import ServiceCard from './ServiceCard'
import { services as servicesData } from '@/assets/data/dummydata'


const ServiceList = () => {

    const [services, setServices] = useState([]); 
    const [error, setError] = useState(null);
    const [selectedService, setSelectedService] = useState(null);
    const [progress, setProgress] = useState(100);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);

    // Load dummy services on mount
    useEffect(() => {
      setServices(servicesData)
    }, [])

const handleDelete = (service) => {
setSelectedService(service);
setShowModal(true);
 };

 const confirmDelete = async () => {
    if (!selectedService) return;

    setServices(services.filter(service => service._id !== selectedService._id))
    setShowSuccessModal(true)
    setProgress(100)

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev <= 0) {
          clearInterval(interval)
          setShowSuccessModal(false)
          return 0
        }
        return prev - 1
      })
    }, 30)

    setShowModal(false);
    setSelectedService(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

return (
    <div className="blog-list">
        
        {error && <p className="error-message">{error}</p>}
        
        {/* Render each blog using BlogCard */}
        {services.length > 0 ? (
            services.map((service) => (
                <ServiceCard
                    key={service._id} 
                    id={service._id}
                    title={service.title}
                    category={service.category}
                    publishDate={new Date(service.createdAt).toLocaleDateString('en-US', {
                        month: 'short', // Short month name, e.g., "Oct"
                        day: 'numeric', // Day of the month, e.g., "7"
                        year: 'numeric' // Full year, e.g., "2024"
                    })}// Format the date
                    onEdit={() => alert('Edit functionality here')}
                    onDelete={() => handleDelete(service)}
                />
            ))
        ) : (
            <p>No services found.</p>
        )}

        {/* Modal for confirmation of delete */}
  {showModal && (
    <div className="modal">
      <div className="modal-content">
        <h4>Are you sure you want to delete this service?</h4>
        <div className="modal-actions">
          <button className="btn btn-yes" onClick={confirmDelete}>Yes, Delete</button>
          <button className="btn btn-cancel" onClick={cancelDelete}>Cancel</button>
        </div>
      </div>
    </div>
  )}

  {/* Success modal after deletion */}
  {showSuccessModal && (
    <div className="modal success-modal">
      <div className="modal-content">
        <h4>Service deleted successfully!</h4>
        <button className="btn btn-cancel" onClick={() => setShowSuccessModal(false)}>
          Close
        </button>
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
    </div>
  )}

    </div>    
)
}

export default ServiceList;