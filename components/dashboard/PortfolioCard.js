import React from 'react';
import { useRouter } from 'next/router';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';
import Link from 'next/link'

const PortfolioCard = ({ id, title, category, onDelete }) => {

    const router = useRouter();

    const handleViewBlog = () => {
        router.push(`/admin/portfolio/${id}`); 
    };

    return (
      <div className="blog-item">
        <div>
          <h4>{title}</h4>
          <small>Category: {category}</small>
        </div>
        <div className="actions">
          <button title="View" className="icon-btn view" onClick={handleViewBlog}><FaEye size={20} /></button>
          <Link href={`/admin/portfolio/edit/${id}`}>
            <button title="Edit" className="icon-btn edit"><FaEdit size={20} /></button>
          </Link>
          <button title="Delete" className="icon-btn delete" onClick={onDelete}><FaTrashAlt size={20} /></button>
        </div>
      </div>
    );
  };

  export default PortfolioCard;