import type { Dispatch, SetStateAction } from "react";
import LargeImage from "./LargeImage";
import MobileCarousel from "./MobileCarousel";
import ThumbnailList from "./ThumbnailList";

interface productType {
  id: number;
  name: string;
  description: string;
  price: number;
  images: Record<string, string>;
}

interface ProductImagesProps {
  product: productType[];
  selected: number;
  onSelect: (index: number) => void;
}

const ProductImages: React.FC<ProductImagesProps> = ({
  product,
  selected,
  onSelect,
}) => {
  return (
    <div className="flex w-full flex-col gap-4 sm:p-0 md:flex-row lg:w-[50%]">
      <div className="block md:hidden">
        <MobileCarousel
          images={product.map((e) => e.images.large)}
          selected={selected}
          setSelected={onSelect as Dispatch<SetStateAction<number>>}
        />
      </div>
      <div className="hidden md:block lg:flex lg:flex-col lg:gap-4">
        <LargeImage image={product[selected].images.large} />
        <ThumbnailList
          images={product.map((e) => e.images.thumbnail)}
          selected={selected}
          onSelect={onSelect}
        />
      </div>
    </div>
  );
};

export default ProductImages;
