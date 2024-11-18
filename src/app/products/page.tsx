'use client';

import { useState, useEffect } from 'react';
import { IProduct, ICategory } from '../interfaces/interface';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ProductCard = dynamic(() => import('./components/ProductCard'), {
  loading: () => <p>Loading...</p>,
});

const Filters = dynamic(() => import('./components/Filters'), {
  loading: () => <p>Loading filters...</p>,
});

const ProductsPage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  useEffect(() => {
    filteredByCategory();
  }, [selectedCategory]);

  useEffect(() => {
    sortOrderBy();
  }, [sortOrder]);

  const fetchProducts = async () => {
    const res = await fetch('https://dummyjson.com/products');
    const { products } = await res.json();
    setProducts(products);
    setFilteredProducts(products);
  };

  const fetchCategories = async () => {
    const res = await fetch('https://dummyjson.com/products/categories')
    const categories = await res.json();
    setCategories(categories);
  };

  const filteredByCategory = async () => {
    const res = await fetch(`https://dummyjson.com/products/category/${selectedCategory}`)
    const { products } = await res.json();
    setFilteredProducts(products);
  }

  const sortOrderBy = async () => {
    const res = await fetch(`https://dummyjson.com/products?sortBy=price&order=${sortOrder}`)
    const { products } = await res.json();
    setFilteredProducts(products);
  }

  return (
    <div>
      <h1>Products</h1>

      {/* Filter and Sort */}
      <Filters
        categories={categories}
        selectedCategory={selectedCategory}
        sortOrder={sortOrder}
        onCategoryChange={setSelectedCategory}
        onSortOrderChange={setSortOrder}
      />

      {/* Product List */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
        {filteredProducts.map((product) => (
          <Link key={product.id} href={`/products/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
