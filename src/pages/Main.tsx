import { useState } from "react";
import ProductImages from "../components/ProductImages";
import productData from "../../data.json";
import ProductDetail from "../components/ProductDetail";

const Main: React.FC = () => {
  const [selected, setSelected] = useState<number>(0);
  const data = productData;

  return (
    <div className="flex w-full flex-col lg:w-auto lg:flex-row">
      <ProductImages
        product={data}
        selected={selected}
        onSelect={setSelected}
      />
      <ProductDetail product={data} selected={selected} />
    </div>
  );
};

export default Main;
