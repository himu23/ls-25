import React, { useState } from 'react';
import axios from '../axiosConfig';
import { useNavigate } from 'react-router-dom';

const Upload = () => {
  const [form, setForm] = useState({ title: '', description: '', category: '' });
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleFile = e => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('category', form.category);
    formData.append('video_file', file);

    try {
      await axios.post('videos/upload/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Token ${token}`
        }
      });
      alert('Uploaded!');
      navigate('/');
    } catch (err) {
      alert('Upload failed');
      console.error(err);
    }
  };

  return (
    <div>
      <h2>Upload Video</h2>
      <form onSubmit={handleSubmit}>
        <input name="title" placeholder="Title" onChange={handleChange} required /><br />
        <input name="description" placeholder="Description" onChange={handleChange} /><br />
        <input name="category" placeholder="Category" onChange={handleChange} /><br />
        <input type="file" onChange={handleFile} required /><br />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default Upload;
