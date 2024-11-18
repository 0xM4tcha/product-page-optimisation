'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

interface Product {
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

const ProductDetailPage = () => {
  const { id } = useParams()
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetchProductDetail(id as string);
    }
  }, [id]);

  const fetchProductDetail = async (id: string) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`);
    const data = await res.json();
    setProduct(data);
  };

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <h1>{product.title}</h1>
      <Image 
        src={product.thumbnail}
        alt={product.title}
        width={200}
        height={200}
        style={{
          width: '100%',
          height: 'auto',
        }}
        loading="lazy"
      />
      {/* <img src={product.thumbnail} alt={product.title} width={300} height={300} /> */}
      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <p>Category: {product.category}</p>
    </div>
  );
};

export default ProductDetailPage;

// const ProductDetailPage = () => {
//   return (<></>)
// }

// export default ProductDetailPage;