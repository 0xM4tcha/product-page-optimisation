import Image from 'next/image';

export default async function ProductDetailPage ({ params }: { params: { id: string } }) {
  const { id } = await params;
  const product = await fetch(`https://dummyjson.com/products/${id}`).then(res => res.json());

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

      <p>{product.description}</p>
      <p><strong>Price: ${product.price}</strong></p>
      <p>Category: {product.category}</p>
      <p>Availbility Status: {product.availabilityStatus}</p>
    </div>
  );
};
