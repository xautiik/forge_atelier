import React from 'react';
import { useRouter } from 'next/router';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import Link from 'next/link'

const BlogCard = ({ id, title, publishDate, updateDate, onDelete }) => {

    const router = useRouter();

    const handleViewBlog = () => {
        router.push(`/admin/blog/${id}`); 
    };

    return (
      <div className="blog-item">
        <div>
          <h4>{title}</h4>
          <small>Published on: {publishDate}</small>
          <small>Updated on: {updateDate}</small>
        </div>
        <div className="actions">
          <button title="View" className="icon-btn view" onClick={handleViewBlog}>
                    <FaEye size={20} />
          </button>
          <Link  href={`/admin/blog/edit/${id}`}>
            <button title="Edit" className="icon-btn edit"><FaEdit size={20} /></button>
          </Link>
          <button title="Delete" className="icon-btn delete" onClick={onDelete}>
                    <FaTrashAlt size={20} />
          </button>
        </div>
      </div>
    );
  };

  export default BlogCard;