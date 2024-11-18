import { IProduct } from "@/app/interfaces/interface";

interface ProductCardProps {
  product: IProduct;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const { id, title, description, price, thumbnail } = product;

  return (
    <div key={id} style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <img
        src={thumbnail}
        alt={title}
        style={{ width: '100%', height: '200px', objectFit: 'cover', marginBottom: '8px' }}
      />
      <h2 style={{ fontSize: '18px', margin: '8px 0' }}>{title}</h2>
      <p style={{ fontSize: '14px', color: '#666' }}>{description}</p>
      <p style={{ fontSize: '16px', fontWeight: 'bold' }}>${price.toFixed(2)}</p>
    </div>
  );
};

export default ProductCard;
