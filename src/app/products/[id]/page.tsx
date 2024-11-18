// /app/products/[id]/page.tsx
'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';

interface Product {
  title: string;
  description: string;
  price: number;
  category: string;
  thumbnail: string;
}

const ProductDetailPage = () => {
  const router = useRouter();
  console.log('router.query', router.query);
  const id = 1;
  // const { id } = router.query;
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      fetchProductDetail(id as number);
    }
  }, [id]);

  const fetchProductDetail = async (id: number) => {
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