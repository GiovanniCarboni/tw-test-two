import { Link } from "react-router-dom";
import Card from "../../styles/Card";
import DetailsContainer from "../../styles/DetailsContainer";

export default function Product({ product }) {
  return (
    <Card className="product-card">
      <div className="image-container">
        <img src={product.image} alt={product.name} height="120" />
      </div>
      <DetailsContainer>
        <h3>{product.name}</h3>
        <p>{product.description}</p>
        <Link to={product.name}>View details &rarr;</Link>
      </DetailsContainer>
    </Card>
  );
}
