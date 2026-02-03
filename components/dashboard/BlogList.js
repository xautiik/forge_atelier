import React, { useEffect, useState } from 'react'
import BlogCard from './BlogCard'
import { FaPlus } from 'react-icons/fa'
import Link from 'next/link'
import Loading from '@/components/dashboard/common/Loading'
import { blogs as blogsData } from '@/assets/data/dummydata'

const BlogList = ({ onBlogChange }) => {
  // States for managing blogs and modals
  const [blogs, setBlogs] = useState([]);
  const [error, setError] = useState(null);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [progress, setProgress] = useState(100);
  const [showModal, setShowModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showNoBlogsMessage, setShowNoBlogsMessage] = useState(false);

  // Load dummy blogs on mount
  useEffect(() => {
    const recentBlogs = [...blogsData].sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt)).slice(0, 6)
    setBlogs(recentBlogs)
    setIsLoading(false)

    setTimeout(() => {
      if (recentBlogs.length === 0) {
        setShowNoBlogsMessage(true)
      }
    }, 500)
  }, [])

  // Handle blog deletion
  const handleDelete = (blog) => {
    setSelectedBlog(blog);
    setShowModal(true);
    onBlogChange();
  };

  const confirmDelete = async () => {
    if (!selectedBlog) return;

    setBlogs(blogs.filter(blog => blog._id !== selectedBlog._id))
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
    setSelectedBlog(null);
  };

  const cancelDelete = () => {
    setShowModal(false);
  };

  // Render list of blogs
  const renderBlogs = () => {
    if (blogs.length === 0) return <p>No recent blogs found.</p>;

    return blogs.map(blog => (
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
      {/* Blog header */}
      <div className="card-head">
        <h2>Recent Blogs</h2>
        <Link href="/admin/blog/add-blog">
          <button
            className="icon-btn add"
            title="Add new blog"
            style={{ margin: '0 20px 0 0' }}
          >
            <FaPlus size={24} />
          </button>
        </Link>
      </div>
      <hr style={{ margin: '10px 0 0 0' }} />

      {/* Error message */}
      {error && <p className="error-message">{error}</p>}

      {/* Show loading indicator */}
      {isLoading ? <Loading /> : renderBlogs()}

      {/* Show "No recent blogs" message after loading is finished */}
      {!isLoading && blogs.length === 0 && showNoBlogsMessage && (
        <p className="no-blogs-message">No blogs found.</p>
      )}

      {/* Modal for confirmation of delete */}
      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <h4>Are you sure you want to delete this blog?</h4>
            <div className="modal-actions">
              <button
                title="Confirm delete"
                className="btn btn-yes"
                onClick={confirmDelete}
              >
                Yes, Delete
              </button>
              <button
                title="Cancel"
                className="btn btn-cancel"
                onClick={cancelDelete}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success modal after deletion */}
      {showSuccessModal && (
        <div className="modal success-modal">
          <div className="modal-content">
            <h4>Blog deleted successfully!</h4>
            <button
              title="Close"
              className="btn btn-cancel"
              onClick={() => setShowSuccessModal(false)}
            >
              Close
            </button>
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BlogList;
