import React, { useState } from 'react';
import axios from 'axios';

const AddPortfolioCard = () => {
  const [title, setTitle] = useState('');
  const [title2, setTitle2] = useState('');
  const [title3, setTitle3] = useState('');
  const [title4, setTitle4] = useState('');
  const [description, setDescription] = useState('');
  const [description2, setDescription2] = useState('');
  const [description3, setDescription3] = useState('');
  const [description4, setDescription4] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null);
  const [image2, setImage2] = useState(null);
  const [image3, setImage3] = useState(null);
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

    if (!title || !description) {
      setError('Title, category, and description are required');
      return;
    }

    const portfolioData = {
      title,
      title2,
      title3,
      title4,
      description,
      description2,
      description3,
      description4,
      category,
      image,
      image2,
      image3,
      author,
    };

    try {
      setLoading(true);
      const response = await axios.post('http://localhost:5000/api/case-studies/', portfolioData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      setLoading(false);
      console.log('Case added successfully:', response.data);
    } catch (err) {
      setLoading(false);
      setError('Error creating case');
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
      <h2 style={styles.heading}>Add New Case</h2>
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
          <label style={styles.label}>Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            style={styles.textarea}
            rows="15"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Sub-title</label>
          <input
            type="text"
            value={title2}
            onChange={(e) => setTitle2(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Content (Optional)</label>
          <textarea
            value={description2}
            onChange={(e) => setDescription2(e.target.value)}
            style={styles.textarea}
            rows="15"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Sub-title</label>
          <input
            type="text"
            value={title3}
            onChange={(e) => setTitle3(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Content (Optional)</label>
          <textarea
            value={description3}
            onChange={(e) => setDescription3(e.target.value)}
            style={styles.textarea}
            rows="15"
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Sub-title</label>
          <input
            type="text"
            value={title4}
            onChange={(e) => setTitle4(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.inputGroup}>
          <label style={styles.label}>Content (Optional)</label>
          <textarea
            value={description4}
            onChange={(e) => setDescription4(e.target.value)}
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
        <div style={styles.inputGroup}>
          <label style={styles.label}>Image 3 (Optional)</label>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleImageChange(e, setImage3)}
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
          {loading ? 'Adding Case...' : 'Add Case'}
        </button>
      </form>
    </div>
  );
};

export default AddPortfolioCard;
