import { useEffect, useState } from "react";
import ProductCount from "./ProductCount";
import AddButton from "./AddButton";
import type { ProductType } from "../type/product/product";
import { useAtom } from "jotai";
import { cartAtom } from "../store/cartAtom";

interface ProductDetailProps {
  product: ProductType[];
  selected: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, selected }) => {
  const [count, setCount] = useState<number>(0);
  const [cartItems, setCartItems] = useAtom(cartAtom);

  const handlerCart = () => {
    if (count < 1) return false;
    const itemToAdd = { ...product[selected], count };

    const duplication = cartItems.find((e) => e.id === itemToAdd.id);
    if (duplication) return false;
    setCartItems([...cartItems, itemToAdd]);
  };

  useEffect(() => {
    console.log("cartItems ", cartItems);
  }, [cartItems]);
  return (
    <div className="flex w-full flex-col gap-4 p-8 text-left lg:w-[50%] lg:p-16">
      <div className="text-neutral-grayish-blue font-semibold">
        sneaker company
      </div>
      <div className="text-neutral-black mb-5 text-4xl font-bold">
        {product[selected].name}
      </div>
      <div className="text-neutral-dark-grayish-blue mb-4 line-clamp-4">
        {product[selected].description}
      </div>
      <div className="flex items-center gap-4">
        <span className="text-2xl font-bold">
          ${product[selected].price.toLocaleString("ko-KR")}
        </span>
        <span className="text-neutral-white rounded-md bg-black p-[5px] text-sm">
          {product[selected].discount * 100}%
        </span>
      </div>
      <div className="text-neutral-dark-grayish-blue font-semibold line-through">
        $
        {(
          product[selected].price -
          product[selected].price * product[selected].discount
        ).toLocaleString("ko-KR")}
      </div>

      <div className="mt-10 gap-4 lg:flex">
        <ProductCount count={count} updateCount={setCount}></ProductCount>
        <AddButton addCart={handlerCart}></AddButton>
      </div>
    </div>
  );
};
export default ProductDetail;
