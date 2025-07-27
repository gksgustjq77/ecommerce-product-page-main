interface productType {
  id: number;
  name: string;
  description: string;
  price: number;
  discount: number;
}

interface ProductDetailProps {
  product: productType[];
  selected: number;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ product, selected }) => {
  return (
    <div className="flex w-full flex-col gap-2 p-8 text-left lg:w-[50%] lg:p-16">
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
    </div>
  );
};
export default ProductDetail;
