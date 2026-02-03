import React, { useEffect, useState } from 'react'
import PortfolioCard from './PortfolioCard'
import Loading from '@/components/dashboard/common/Loading'
import { caseStudies } from '@/assets/data/dummydata'

const PortfolioList = () => {

    const [cases, setCases] = useState([]); 
    const [error, setError] = useState(null);
    const [selectedCase, setSelectedCase] = useState(null);
    const [progress, setProgress] = useState(100);
    const [showModal, setShowModal] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [showNoCasesMessage, setShowNoCasesMessage] = useState(false);

    useEffect(() => {
      const allCases = [...caseStudies].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
      setCases(allCases)
      setIsLoading(false)

      setTimeout(() => {
        if (allCases.length === 0) {
          setShowNoCasesMessage(true)
        }
      }, 500)
    }, [])

  const handleDelete = (portfolio) => {
    setSelectedCase(portfolio);
    setShowModal(true);
  };

 const confirmDelete = async () => {
    if (!selectedCase) return;

    setCases(cases.filter(portfolio => portfolio._id !== selectedCase._id))
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
    setSelectedCase(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  const renderCases = () => {
    if (cases.length === 0) return null

    return cases.map((portfolio) => (
      <PortfolioCard
          key={portfolio._id} 
          id={portfolio._id}
          title={portfolio.title}
          category={portfolio.category}
          publishDate={new Date(portfolio.createdAt).toLocaleDateString('en-US', {
              month: 'short', 
              day: 'numeric', 
              year: 'numeric' 
          })}
          onEdit={() => alert('Edit functionality here')}
          onDelete={() => handleDelete(portfolio)}
      />
  ))
  }

return (
    <div className="blog-list">
        
      {error && <p className="error-message">{error}</p>}

      {isLoading ? <Loading /> : renderCases()}  

      {!isLoading && cases.length === 0 && showNoCasesMessage && (
        <p className="no-blogs-message">No portfolio found.</p>
      )}
 
  {showModal && (
    <div className="modal">
      <div className="modal-content">
        <h4>Are you sure you want to delete this portfolio?</h4>
        <div className="modal-actions">
          <button className="btn btn-yes" onClick={confirmDelete}>Yes, Delete</button>
          <button className="btn btn-cancel" onClick={cancelDelete}>Cancel</button>
        </div>
      </div>
    </div>
  )}

    {showSuccessModal && (
      <div className="modal success-modal">
        <div className="modal-content">
          <h4>Portfolio deleted successfully!</h4>
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

export default PortfolioList;