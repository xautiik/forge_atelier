import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import Loading from '@/components/dashboard/common/Loading'
import { blogs as blogsData } from '@/assets/data/dummydata'

const BlogsList = ({ }) => {
  // State declarations
  const [blogs, setBlogs] = useState([]); // Stores all blogs
  const [error, setError] = useState(null); // Handles error messages
  const [selectedBlog, setSelectedBlog] = useState(null); // Stores selected blog for deletion
  const [progress, setProgress] = useState(100); // Progress for success modal
  const [showModal, setShowModal] = useState(false); // Controls the delete confirmation modal visibility
  const [showSuccessModal, setShowSuccessModal] = useState(false); // Controls the success modal visibility
  const [isLoading, setIsLoading] = useState(true);
  const [showNoBlogsMessage, setShowNoBlogsMessage] = useState(false);

  // Load dummy blogs on mount
  useEffect(() => {
    const allBlogs = [...blogsData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    setBlogs(allBlogs)
    setIsLoading(false)

    setTimeout(() => {
      if (allBlogs.length === 0) {
        setShowNoBlogsMessage(true)
      }
    }, 500)
  }, [])

  // Handle blog deletion
  const handleDelete = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
  };

  const confirmDelete = async () => {
    if (!selectedBlog) return;

    setBlogs(blogs.filter(blog => blog._id !== selectedBlog._id))
    setShowSuccessModal(true)
    setProgress(100)

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev <= 0) {
          clearInterval(interval)
          setShowSuccessModal(false)
          return 0
        }
        return prev - 1
      })
    }, 30)

    // Close delete modal and reset selection
    setShowModal(false);
    setSelectedBlog(null);
  };

  const cancelDelete = () => {
    setShowModal(false); // Close the delete confirmation modal
  };

  // Render blogs
  const renderBlogs = () => {
    if (blogs.length === 0) return null

    return blogs.map((blog) => (
      <BlogCard
        key={blog._id} 
        id={blog._id}
        title={blog.title}
        publishDate={new Date(blog.createdAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
        updateDate={new Date(blog.updatedAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        })}
        onEdit={() => alert('Edit functionality here')}
        onDelete={() => handleDelete(blog)}
      />
    ));
  };

  return (
    <div className="blog-list">
      {/* Error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Show loading indicator */}
      {isLoading ? <Loading /> : renderBlogs()}

      {/* Show "No recent blogs" message after loading is finished */}
      {!isLoading && blogs.length === 0 && showNoBlogsMessage && (
        <p className="no-blogs-message">No blogs found.</p>
      )}

      {/* Modal for confirming deletion */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Are you sure you want to delete this blog?</h4>
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
            <h4>Blog deleted successfully!</h4>
            <button className="btn btn-cancel" onClick={() => setShowSuccessModal(false)}>
              Close
            </button>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogsList;
