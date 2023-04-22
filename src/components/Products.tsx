import React from 'react';

interface ProductProps {
  startIndex: number;
}

const Products: React.FC<ProductProps> = ({ startIndex }) => {
  const products = [
    {
      id: 1,
      name: 'Air Conditioner 1',
      description: 'Description of Air Conditioner 1',
      price: 300,
      imageUrl:
        'https://images.carriercms.com/image/upload/v1644353490/carrier/residential-hvac/products/air-conditioners/how-long-do-air-conditioners-last.jpg',
    },
    {
      id: 2,
      name: 'Air Conditioner 2',
      description: 'Description of Air Conditioner 2',
      price: 350,
      imageUrl:
        'https://nicholson-hvac.com/wp-content/uploads/2014/06/Air-Conditioning-System-Ice-Forming-Issues-Image.jpg',
    },
  ];

  const displayProduct = products[startIndex];

  return (
    <div className="products">
      <h1>Product Catalog</h1>
      <div className="product-list">
        <div className="product">
          <img src={displayProduct.imageUrl} alt={displayProduct.name} />
          <h3>{displayProduct.name}</h3>
          <p>{displayProduct.description}</p>
          <p>${displayProduct.price}</p>
        </div>
      </div>
    </div>
  );
};

export default Products;
