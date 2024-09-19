import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";

const DataOfCard = () => {
  const [products, setProducts] = useState(null);
  useEffect(() => {
    axios("http://localhost:8000/cards")
    .then((res) => {
        setProducts(res.data);
    });
  }, []);

  return <div>
    {products && <Card data={products} />}
    </div>;
};

export default DataOfCard;
