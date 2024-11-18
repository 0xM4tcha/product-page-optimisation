import Image from 'next/image';

const ProductCardLoading = () => {

  return (
    <div style={{ border: '1px solid #ccc', padding: '16px', borderRadius: '8px' }}>
      <Image 
        src=""
        alt="loading"
        width={200}
        height={200}
        style={{
          width: '100%',
          height: 'auto',
        }}
      />
      <p>loading</p>
    </div>
  );
}

export default ProductCardLoading;
