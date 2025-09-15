function ShoppingCard({ product }) {
  return (
    <div className="product-card">
      <h3>{product.name}</h3>
      <p className="price">{product.price}</p>
      <p className="description">{product.description}</p>
      <p className="rating">{product.rating}</p>
    </div>
  );
}

export default ShoppingCard;
