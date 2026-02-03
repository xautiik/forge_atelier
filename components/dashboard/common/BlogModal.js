import React, { useState } from 'react';
import { Modal, Button, TextField, Box, Typography, CircularProgress } from '@mui/material';
import axios from 'axios';

const BlogModal = ({ open, onClose, onBlogCreated }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content1, setContent1] = useState('');
    const [content2, setContent2] = useState('');
    const [image, setImage] = useState(null);
    const [image2, setImage2] = useState(null);
    const [category, setCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    // Handle blog creation form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('content1', content1);
        formData.append('content2', content2);
        formData.append('image', image);
        formData.append('image2', image2);
        formData.append('category', category);

        try {
            const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            if (response.status === 201) {
                onBlogCreated(response.data); // Notify parent component
                onClose(); // Close modal
                resetForm(); // Clear form fields
            }
        } catch (err) {
            console.error("Error creating blog:", err);
            setError('Failed to create blog. Please try again.');
        } finally {
            setLoading(false);
        }
    };

    // Reset form fields
    const resetForm = () => {
        setTitle('');
        setAuthor('');
        setContent1('');
        setContent2('');
        setImage(null);
        setImage2(null);
        setCategory('');
    };

    return (
        <Modal open={open} onClose={onClose} aria-labelledby="modal-title">
            <Box sx={{ 
                position: 'absolute', 
                top: '50%', 
                left: '50%', 
                transform: 'translate(-50%, -50%)', 
                width: 400, 
                bgcolor: 'background.paper', 
                borderRadius: 2, 
                p: 4, 
                boxShadow: 24 
            }}>
                <Typography id="modal-title" variant="h6" component="h2" mb={2}>
                    Create New Blog
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                        label="Title" 
                        fullWidth 
                        variant="outlined" 
                        value={title} 
                        onChange={(e) => setTitle(e.target.value)} 
                        required 
                        margin="normal"
                    />
                    <TextField 
                        label="Author" 
                        fullWidth 
                        variant="outlined" 
                        value={author} 
                        onChange={(e) => setAuthor(e.target.value)} 
                        required 
                        margin="normal"
                    />
                    <TextField 
                        label="Content 1" 
                        multiline 
                        rows={4} 
                        fullWidth 
                        variant="outlined" 
                        value={content1} 
                        onChange={(e) => setContent1(e.target.value)} 
                        required 
                        margin="normal"
                    />
                    <TextField 
                        label="Content 2" 
                        multiline 
                        rows={4} 
                        fullWidth 
                        variant="outlined" 
                        value={content2} 
                        onChange={(e) => setContent2(e.target.value)} 
                        margin="normal"
                    />
                    <TextField 
                        label="Category" 
                        fullWidth 
                        variant="outlined" 
                        value={category} 
                        onChange={(e) => setCategory(e.target.value)} 
                        required 
                        margin="normal"
                    />
                    <Button variant="contained" component="label" fullWidth margin="normal">
                        Upload Image 1
                        <input type="file" hidden onChange={(e) => setImage(e.target.files[0])} />
                    </Button>
                    <Button variant="contained" component="label" fullWidth margin="normal">
                        Upload Image 2
                        <input type="file" hidden onChange={(e) => setImage2(e.target.files[0])} />
                    </Button>

                    {error && <Typography color="error" variant="body2" mt={1}>{error}</Typography>}

                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth 
                        disabled={loading} 
                        sx={{ mt: 2 }}
                    >
                        {loading ? <CircularProgress size={24} /> : 'Create Blog'}
                    </Button>
                </form>
            </Box>
        </Modal>
    );
};

export default BlogModal;
