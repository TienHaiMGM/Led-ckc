import { v4 as uuidv4 } from 'uuid';
import type { NextApiRequest, NextApiResponse } from 'next';

type Product = {
  id: string;
  name: string;
  category: string;
  description: string;
  createdAt: Date;
};

let products: Product[] = [];

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

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(products);
  } else if (req.method === 'POST') {
    const { name, category, description } = req.body;

    if (!name || !category || !description) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    if (!categories.includes(category)) {
      return res.status(400).json({ error: 'Invalid category' });
    }

    const newProduct: Product = {
      id: uuidv4(),
      name,
      category,
      description,
      createdAt: new Date()
    };

    products.push(newProduct);
    res.status(201).json(newProduct);
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}