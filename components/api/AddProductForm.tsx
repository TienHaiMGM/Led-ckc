"use client"
import React from 'react';
import { useState } from 'react';

const AddProductForm = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const categories = [
    'Chữ nổi',
    'Bảng hiệu',
    'Bảng led',
    'Hộp đèn',
    'Led',
    'Bảng số nhà',
    'Bảng tên công ty',
    'Logo',
    'Sản phẩm gia công',
    'Sản phẩm thi công nội thất',
    'Sản phẩm thiết kế'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setSuccess('');

    const response = await fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name, category, description })
    });

    if (!response.ok) {
      const errorData = await response.json();
      setError(errorData.error);
    } else {
      const product = await response.json();
      setSuccess(`Product ${product.name} added successfully!`);
      setName('');
      setCategory('');
      setDescription('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </label>
      <label>
        Category:
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        >
          <option value="">Select a category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <label>
        Description:
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
      </label>
      <button type="submit">Add Product</button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
    </form>
  );
};

export default AddProductForm;