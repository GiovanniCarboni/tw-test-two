import { Link } from "react-router-dom";
import Card from "../../styles/Card";

import DetailsContainer from "../../styles/DetailsContainer";

export default function Store({ store }) {
  return (
    <Card className="store-card">
      <div>
        <img src={store.image} alt={store.name} height="120" />
      </div>
      <DetailsContainer>
        <h3>{store.name}</h3>
        <p>You can find this store at {store.address}</p>
        <Link to={store.name}>Browse products &rarr;</Link>
      </DetailsContainer>
    </Card>
  );
}