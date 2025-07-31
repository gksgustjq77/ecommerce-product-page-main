import type { Dispatch, SetStateAction } from "react";

interface ProductCount {
  count: number;
  updateCount: Dispatch<SetStateAction<number>>;
}

const ProductCount: React.FC<ProductCount> = ({ count, updateCount }) => {
  return (
    <div className="bg-neutral-light-grayish-blue flex min-w-0 select-none items-center justify-evenly gap-4 rounded-md p-4 lg:w-[30%]">
      <button
        onClick={() => updateCount((prev) => (prev > 0 ? prev - 1 : 0))}
        className="flex h-6 w-6 items-center justify-center"
      >
        <img
          src="/images/icon-minus.svg"
          alt="minus"
          className="h-auto w-[16px] max-w-full"
        />
      </button>
      <div className="w-8 text-center font-bold">{count}</div>
      <button
        onClick={() => updateCount((prev) => prev + 1)}
        className="flex h-6 w-6 items-center justify-center"
      >
        <img
          src="/images/icon-plus.svg"
          alt="plus"
          className="h-auto w-[16px] max-w-full"
        />
      </button>
    </div>
  );
};

export default ProductCount;
