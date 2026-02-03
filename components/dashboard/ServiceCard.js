import React from 'react';
import { useRouter } from 'next/router';
import { FaEdit, FaTrashAlt, FaEye } from 'react-icons/fa';

const ServiceCard = ({ id, title, onEdit, onDelete }) => {

    const router = useRouter();

    const handleViewBlog = () => {
        router.push(`/admin/services/${id}`); 
    };

    return (
      <div className="blog-item">
        <div>
          <h4>{title}</h4>
        </div>
        <div className="actions">
          <button className="icon-btn view" onClick={handleViewBlog}>
                    <FaEye size={20} />
          </button>
          <button className="icon-btn edit" onClick={onEdit}>
                    <FaEdit size={20} />
          </button>
          <button className="icon-btn delete" onClick={onDelete}>
                    <FaTrashAlt size={20} />
          </button>
        </div>
      </div>
    );
  };

  export default ServiceCard;