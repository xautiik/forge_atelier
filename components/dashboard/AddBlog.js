import React, { useState } from 'react';
import axios from 'axios';

const AddBlogCard = () => {
  const [title, setTitle] = useState('');
  const [content1, setContent1] = useState('');
  const [content2, setContent2] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const author = "671f8f4f0ed9fddb77a49cd5";

  const handleImageChange = (e, setImageFunc) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImageFunc(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content1) {
      setError('Title and Content 1 are required');
      return;
    }

    const blogData = {
      title,
      content1,
      content2,
      category,
      image,
      image2,
      author,
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/blogs/', blogData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      console.log('Blog added successfully:', response.data);
    } catch (err) {
      setLoading(false);
      setError('Error creating blog');
      console.error(err);
    }
  };

  const styles = {
    container: {
      maxWidth: '800px',
      margin: '0 auto',
      padding: '20px',
      backgroundColor: '#171e20',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '2rem 0 2rem 0',
    },
    heading: {
      textAlign: 'center',
      marginBottom: '20px',
      color: '#fff',
    },
    formContainer: {
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',
    },
    inputGroup: {
      marginBottom: '15px',
    },
    label: {
      fontWeight: '600',
      color: '#fff',
      marginBottom: '10px',
    },
    input: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '10px 0 10px 0',
      fontSize: '16px',
      transition: 'border-color 0.3s',
    },
    textarea: {
      width: '100%',
      padding: '10px',
      border: '1px solid #ddd',
      borderRadius: '10px 0 10px 0',
      fontSize: '16px',
      resize: 'vertical',
      minHeight: '100px',
      transition: 'border-color 0.3s',
    },
    error: {
      color: '#d9534f',
      fontSize: '14px',
      marginBottom: '20px',
      textAlign: 'center',
    },
    submitBtn: {
      padding: '10px 15px',
      backgroundColor: 'transparent',
      color: '#ccff00',
      fontSize: '16px',
      fontWeight: 'bold',
      border: '2px solid #ccff00',
      borderRadius: '10px 0 10px 0',
      cursor: 'pointer',
      transition: 'background-color 0.3s ease',
    },
    submitBtnDisabled: {
      backgroundColor: '#6c757d',
      cursor: 'not-allowed',
    },
    submitBtnHover: {
      backgroundColor: '#ccff00',
      color: '#000',
    },
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Add New Blog</h2>
      <form onSubmit={handleSubmit} style={styles.formContainer}>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Content 1</label>
          <textarea
            value={content1}
            onChange={(e) => setContent1(e.target.value)}
            required
            style={styles.textarea}
            rows="15"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Content 2 (Optional)</label>
          <textarea
            value={content2}
            onChange={(e) => setContent2(e.target.value)}
            style={styles.textarea}
            rows="15"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Category</label>
          <input
            type="text"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Image 1</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Image 2 (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage2)}
            style={styles.input}
          />
        </div>
        {error && <div style={styles.error}>{error}</div>}
        <button
          type="submit"
          style={{
            ...styles.submitBtn,
            ...(loading && styles.submitBtnDisabled),
            ...(loading || !error ? styles.submitBtnHover : {}),
          }}
          disabled={loading}
        >
          {loading ? 'Adding Blog...' : 'Add Blog'}
        </button>
      </form>
    </div>
  );
};

export default AddBlogCard;
