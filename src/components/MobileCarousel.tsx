import type { Dispatch, SetStateAction } from "react";

const MobileCarousel: React.FC<{
  images: string[];
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
}> = ({ images, selected, setSelected }) => {
  return (
    <div className="relative w-full">
      <img
        src={images[selected]}
        alt="Product"
        className="w-full object-cover"
      />
      <button
        onClick={() => setSelected((prev) => (prev > 0 ? prev - 1 : prev))}
        className="absolute left-[5%] top-1/2 -translate-y-1/2 rounded-full bg-white pb-[1rem] pl-[1.2rem] pr-[1.2rem] pt-[1rem] md:hidden"
      >
        <img src="/images/icon-previous.svg"></img>
      </button>
      <button
        onClick={() =>
          setSelected((prev) => (prev < images.length - 1 ? prev + 1 : prev))
        }
        className="absolute right-[5%] top-1/2 -translate-y-1/2 rounded-full bg-white pb-[1rem] pl-[1.2rem] pr-[1.2rem] pt-[1rem] md:hidden"
      >
        <img src="/images/icon-next.svg"></img>
      </button>
    </div>
  );
};

export default MobileCarousel;
