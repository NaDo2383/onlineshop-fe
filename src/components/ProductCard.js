import "./../style/ProductCard.css";

export default function ProductCard({ item }) {
  return (
    <div className="product-card">
      <a href={`product/${item.id}`}>
        <img src={item.thumbImage} alt="img" />
        <span className="product-card-category">{item.categoryId}</span>
        <h2 className="product-card-title">{item.productName}</h2>
      </a>
      <span className="product-card-text">{item.description}</span>
      <span className="product-card-price">${item.price}</span>
    </div>
  );
}
